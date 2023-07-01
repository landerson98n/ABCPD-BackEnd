import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.UserCreateArgs) {
    return this.prismaService.user.create(createDto);
  }

  findMany(){
    return this.prismaService.user.findMany()
  }

  findUnique(findUniqueUser: Prisma.UserFindUniqueArgs){
      return this.prismaService.user.findUnique({...findUniqueUser})
  }

  update(updateUser: Prisma.UserUpdateArgs){
    return this.prismaService.user.update({...updateUser})
  }

  delete(deleteUser: Prisma.UserDeleteArgs){
    return this.prismaService.user.delete({...deleteUser})
  }
  
}
