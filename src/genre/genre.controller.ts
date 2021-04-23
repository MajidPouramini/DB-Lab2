import { Body, Controller, Get, Header, Post } from '@nestjs/common';
import GenreServices from './genre.services';
import CreateGenreDto from './dto/create-genre.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('genre')
export default class GenreController {
  constructor(private readonly genreServices: GenreServices) {}

  @ApiResponse({
    description: 'Create a new genre',
    status: 200,
  })
  @Header('Content-Type', 'application/json')
  @Post('post')
  postGenre(@Body() genre: CreateGenreDto) {
    return this.genreServices.insert(genre);
  }

  @ApiResponse({
    description: 'Get all genre',
    status: 200,
  })
  @Get()
  getAll() {
    return this.genreServices.getAllGenre();
  }
}
