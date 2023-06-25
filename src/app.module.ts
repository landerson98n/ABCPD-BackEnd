import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalService } from './animal/animal.service';
import { PrismaModule } from './prisma/prisma.module';
import { AnimalModule } from './animal/animal.module';
import { PrismaService } from './prisma/prisma.service';
import { AnimalController } from './animal/animal.controller';


@Module({
  imports: [PrismaModule, AnimalModule, AnimalModule],
  controllers: [AppController, AnimalController],
  providers: [AppService, AnimalService, PrismaService],
})
export class AppModule {}
