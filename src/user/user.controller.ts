import {
  Body,
  Controller,
  Get,
  Header,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UserServices } from './user.services';
import CreateUserDto from './dto/create-user.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('users')
export class UserController {
  constructor(private readonly usersServices: UserServices) {}

  //'postUser()' will handle the creating of new User
  @ApiResponse({
    description: 'Add new user',
    status: 200,
  })
  @Header('Content-Type', 'application/json')
  @Post('post')
  postUser(@Body() user: CreateUserDto) {
    return this.usersServices.insert(user);
  }
  // 'getAll()' returns the list of all the existing users in the database
  @ApiResponse({
    description: 'Get all users',
    status: 200,
  })
  @Get()
  getAll() {
    return this.usersServices.getAllUsers();
  }

  //'getBooks()' return all the books which are associated with the user
  // provided through 'userID' by the request
  @ApiResponse({
    description: 'Get all books of user',
    status: 200,
  })
  @Get('books')
  getBooks(@Body('userID', ParseIntPipe) userID: number) {
    return this.usersServices.getBooksOfUser(userID);
  }
}
