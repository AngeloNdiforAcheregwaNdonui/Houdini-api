import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(nom?: string): string {
    if (nom) {
      return `Hello ${nom}!`;
    }
    return `Hello World!`;
  }
}
