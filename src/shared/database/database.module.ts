import { Global, Module } from '@nestjs/common';
import { AnimalRepository } from './repositories/animal.repositories';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  controllers: [],
  providers: [AnimalRepository, PrismaService],
  exports: [AnimalRepository],
})
export class DatabaseModule {}
