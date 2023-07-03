import { Body, Controller, Post, Get, Delete, Param } from '@nestjs/common';
import { UserService } from 'src/modules/user/user.service';
import { UpdateUserDTO, UserDTO } from 'src/modules/user/dto';

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

  @Get('getUsers')
  getUseres() {
    return this.userService.getUsers();
  }

  @Get('getUserById/:id')
  getUserById(
    @Param('id')
    id: string,
  ) {
    return this.userService.getUserBydId(id);
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
