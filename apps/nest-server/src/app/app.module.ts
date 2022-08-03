import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';

import { AppController } from './app.controller';

@Module({
  imports: [],
  controllers: [AppController, AccountController],
  providers: [],
})
export class AppModule {}
