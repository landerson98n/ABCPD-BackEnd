import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from 'src/modules/user/user.service';
import { UserDTO } from 'src/modules/user/dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('cadastrarUser')
  cadastrarUser(@Body() dto: UserDTO) {
    return this.userService.cadastrarUser(dto);
  }
}
