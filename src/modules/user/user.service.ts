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

  async getUsers() {
    const users = await this.userRepository.findMany();

    return users;
  }

  async getUserBydId(id: string) {
    const user = await this.userRepository.findUnique({
      where: {
        id,
      },
    });

    return user;
  }

  async getUserByEmailCpf(data: string) {
    let user = await this.userRepository.findFirst({
      where: {
        cpf : data,
      },
    });
    
    if(user){
      return true;
    }

    user = await this.userRepository.findFirst({
      where: {
        email : data,
      },
    });
    
    if(user){
      return true;
    }
    
    return false
  }

  async getUserEmail(email: string) {
    const user = await this.userRepository.findUnique({
      where: { email },
      select: { id: true },
    });

    return user;
  }

  async getUserCpf(cpf: string) {
    const user = await this.userRepository.findUnique({
      where: { cpf },
      select: { id: true },
    });

    return user;
  }

  async updateUser(dto: UpdateUserDTO, id: string) {
    const updateUser = await this.userRepository.update({
      where: {
        id,
      },
      data: {
        ...dto,
      },
    });

    return updateUser;
  }

  async deleteUser(id: string) {
    const deleteUser = await this.userRepository.delete({
      where: {
        id,
      },
    });

    return deleteUser;
  }
}
