import { Injectable } from '@nestjs/common';
import { AnimalDTO } from './dto/animal.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AnimalService {
  constructor(private prisma: PrismaService) {}

  async cadastrarAnimal(dto: AnimalDTO) {
    const animal = await this.prisma.animal.create({
      data: {
        ...dto,
      },
    });

    return animal;
  }
}
