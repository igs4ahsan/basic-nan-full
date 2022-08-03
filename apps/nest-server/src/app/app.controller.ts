import { Controller, Get, Post } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getData() {
    return 'welcome to nest server';
  }
}
