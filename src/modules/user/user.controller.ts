import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { UserDTO } from 'src/user/dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Post('cadastrarUser')
    cadastrarUser(@Body() dto: UserDTO){
        return this.userService.cadastrarUser(dto)
    }
}
