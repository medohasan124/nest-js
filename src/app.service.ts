import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World from NEST JS!';
  }
  gettest(): string {
    return 'this is route test';
  }

}
