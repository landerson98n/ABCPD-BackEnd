import { Injectable } from '@nestjs/common';
import { UserDTO } from './dto';
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
}
