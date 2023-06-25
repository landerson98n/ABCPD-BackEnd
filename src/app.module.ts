import { Module } from '@nestjs/common';
import { AnimalModule } from './modules/animal/animal.module';
import { DatabaseModule } from './shared/database/database.module';

@Module({
  imports: [AnimalModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
