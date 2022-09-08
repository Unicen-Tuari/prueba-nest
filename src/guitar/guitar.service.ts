import { Injectable } from '@nestjs/common';
import { Guitar } from './guitar.interface';

@Injectable()
export class GuitarService {

  private guitars: Guitar[] = [{
    año_fabricacion: 1970,
    id: 1,
    marca: 1,
    modelo: "Special II",
    precio: 100
  }]; 

  create(guitar:Guitar){
    this.guitars.push(guitar);
    return guitar;
  }

  findAll() : Guitar[] {
    console.log(this.guitars)
    return this.guitars;
  }

}
