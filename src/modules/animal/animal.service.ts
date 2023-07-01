import { Injectable } from '@nestjs/common';
import { AnimalDTO, UpdateAnimalDTO } from './dto/animal.dto';
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

  async getAnimais(){
    const animais = await this.prisma.animal.findMany()

    return animais
  }

  async getAnimalBydId(id: string){
    const animal = await this.prisma.animal.findUnique({
      where:{
         id
      }
    })

    return animal
  }

  async updateAnimal(dto: UpdateAnimalDTO, id: string){
    const updateAnimal = await this.prisma.animal.update({
      where:{
        id
      },
      data:{
        ...dto
      }
    })

    return updateAnimal
  }

  async deleteAnimal(id: string){
    const deleteAnimal = await this.prisma.animal.delete({
      where:{
        id
      }
    })

    return deleteAnimal
  }
}
