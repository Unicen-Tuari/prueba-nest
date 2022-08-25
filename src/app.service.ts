import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  constructor(){
      this.direccion = "Argentina";
  }

  getHello(): string {
    return 'Hello World from ' + this.direccion;
  }

  private direccion : String = "Brazil";
}
