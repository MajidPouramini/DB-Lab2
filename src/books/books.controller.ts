import { Body, Controller, Get, Header, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { BooksServices } from './books.services';
import CreateBookDto from './dto/create-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly bookServices: BooksServices) {}

  @ApiResponse({
    description: 'Create a new book',
    status: 200,
  })
  @Header('Content-Type', 'application/json')
  @Post('post')
  PostUser(@Body() book: CreateBookDto) {
    return this.bookServices.insert(book);
  }

  @ApiResponse({
    description: 'Get all books',
    status: 200,
  })
  @Get()
  GetAll() {
    return this.bookServices.getAllBooks();
  }
}
