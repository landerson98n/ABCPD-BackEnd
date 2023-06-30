import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDTO } from './dto';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService){}

    async cadastrarUser(dto: UserDTO){

        const user = await this.prisma.user.create({
          data:{
            ...dto
          }
        })
        return user
    }
}
