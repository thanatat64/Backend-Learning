import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello world !';
  }

  getCar(): String {
    return 'Honda civic';
  }
  

}
