import { Injectable } from '@nestjs/common';

export interface Message {
  message: string;
}

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
