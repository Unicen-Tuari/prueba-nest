import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {
    this.direccion = 'Tandil, Buenos Aires!';
  }

  decirHola(): string {
    return 'Hello World from ' + this.direccion;
  }

  private direccion: String = 'Brazil';
}
