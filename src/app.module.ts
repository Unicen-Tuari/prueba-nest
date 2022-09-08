import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GuitarService } from './guitar/guitar.service';
import { GuitarController } from './guitar/guitar.controller';

@Module({
  imports: [],
  controllers: [AppController, GuitarController],
  providers: [AppService, GuitarService],
})
export class AppModule {}
