import { Module } from '@nestjs/common';
import { UserServices } from './user.services';
import { UserController } from './user.controller';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserServices],
})
export class UserModule {}
