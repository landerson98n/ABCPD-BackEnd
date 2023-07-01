import { Injectable } from '@nestjs/common';
import { UpdateUserDTO, UserDTO } from './dto';
import { UserRepository } from 'src/shared/database/repositories/user.repositories';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async cadastrarUser(dto: UserDTO) {
    const user = await this.userRepository.create({
      data: {
        ...dto,
      },
    });
    return user;
  }

  async getUsers(){
    const Users = await this.userRepository.findMany()

    return Users
  }

  async getUserBydId(id: string){
    const User = await this.userRepository.findUnique({
      where:{
         id
      }
    })

    return User
  }

  async updateUser(dto: UpdateUserDTO, id: string){
    const updateUser = await this.userRepository.update({
      where:{
        id
      },
      data:{
        ...dto
      }
    })

    return updateUser
  }

  async deleteUser(id: string){
    const deleteUser = await this.userRepository.delete({
      where:{
        id
      }
    })

    return deleteUser
  }
}
