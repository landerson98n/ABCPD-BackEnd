import { Body, Controller, Post, Get, Delete, Param, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/modules/user/user.service';
import { EmailDTO, UpdateUserDTO, UserDTO } from 'src/modules/user/dto';
import { SetMetadata } from '@nestjs/common/decorators';
import { ActiveUserId } from 'src/shared/decorators/ActiverUserId';
import * as nodemailer from "nodemailer";
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('cadastrarUser')
  cadastrarUser(
    @Body()
    dto: UserDTO,
  ) {
    return this.userService.cadastrarUser(dto);
  }

  @Post('sendEmail')
  sendEmail(
    @Body()
    dto: EmailDTO,
  ) {
    const {subject, to} = dto
    const mailOptions = {
      from: "portalband@band.com.br",
      to,
      subject,
      html: `<p>${subject}<p>`
  }; 
    const transporter = nodemailer.createTransport({
      host:'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
          user: 'landerson98n@gmail.com',
          pass: 'vhyt zqzm pude sdee',
          method: 'PLAIN'
      },
      tls: { rejectUnauthorized: false }
});

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        
          return JSON.stringify(error);
      } else {
          return JSON.stringify("E-mail enviado com sucesso!");
      }
    });
    
  }

  @Get('getUsers')
  async getUsers(@ActiveUserId() userId: string,) {

    const user = await this.userService.getUserBydId(userId);
    
    if (!(user.pessoa === 'Superintendente')) {
      throw new UnauthorizedException();
    }
    return this.userService.getUsers();
  }

  @Get('getUserById/:id')
  async getUserById(
    @Param('id')
    id: string,
  ) {
    return await this.userService.getUserBydId(id);
  }

  @SetMetadata('IS_PUBLIC', true)
  @Get('getUserByEmailCpf/:data')
  getUserByEmail(
    @Param('data')
    data: string,
  ) {
    return this.userService.getUserByEmailCpf(data);
  }

  @Post('updateUser/:id')
  updateUser(
    @Body()
    dto: UpdateUserDTO,
    @Param('id')
    id: string,
  ) {
    return this.userService.updateUser(dto, id);
  }

  @Delete('deleteUser/:id')
  deleteUser(
    @Param('id')
    id: string,
  ) {
    return this.userService.deleteUser(id);
  }
}
