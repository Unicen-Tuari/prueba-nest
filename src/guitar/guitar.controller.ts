import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Guitar } from './guitar.interface';
import { GuitarService } from './guitar.service';

@Controller('guitar')
export class GuitarController {

  constructor(
    private readonly guitarService:GuitarService
  ){

  }

  @Post('')
  create(@Body() guitar: Guitar ): Guitar {
    const newGuitar = this.guitarService.create(guitar);
    return newGuitar;
  }

  @Get()
  getAll(): Guitar[]{
    return this.guitarService.findAll();
  }

}
