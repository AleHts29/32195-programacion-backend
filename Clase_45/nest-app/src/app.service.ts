import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getSaludo(): string {
    return 'Hola Coders!!!';
  }
}
