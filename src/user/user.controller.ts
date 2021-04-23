import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { UserServices } from './user.services';
import CreateUserDto from './dto/create-user.dto';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';
import UpdateUserDto from './dto/update-user.dto';

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

  @ApiResponse({
    description: 'Delete user',
    status: 200,
  })
  @ApiQuery({
    name: 'user_id',
    required: true,
    type: 'number',
  })
  @Delete()
  deleteBook(@Query('user_id') userId) {
    return this.usersServices.delete(userId);
  }

  @ApiResponse({
    description: 'Update user',
    status: 200,
  })
  @Put()
  updateUser(@Body() updateDetails: UpdateUserDto) {
    return this.usersServices.update(updateDetails);
  }
}
