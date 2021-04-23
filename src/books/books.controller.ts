import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';
import { BooksServices } from './books.services';
import CreateBookDto from './dto/create-book.dto';
import UpdateBookDto from './dto/update-book.dto';

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

  @ApiResponse({
    description: 'Delete book',
    status: 200,
  })
  @ApiQuery({
    name: 'book_id',
    required: true,
    type: 'number',
  })
  @Delete()
  deleteBook(@Query('book_id') bookId) {
    return this.bookServices.delete(bookId);
  }

  @ApiResponse({
    description: 'Update book',
    status: 200,
  })
  @Put()
  updateBook(@Body() updateDetails: UpdateBookDto) {
    return this.bookServices.update(updateDetails);
  }
}
