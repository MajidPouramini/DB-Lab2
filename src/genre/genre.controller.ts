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
import GenreServices from './genre.services';
import CreateGenreDto from './dto/create-genre.dto';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';
import UpdateGenreDto from './dto/update-genre.dto';

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

  @ApiResponse({
    description: 'Delete genre',
    status: 200,
  })
  @ApiQuery({
    name: 'genre_id',
    required: true,
    type: 'number',
  })
  @Delete()
  deleteGenre(@Query('genre_id') genreId) {
    return this.genreServices.delete(genreId);
  }

  @ApiResponse({
    description: 'Update genre',
    status: 200,
  })
  @Put()
  updateGenre(@Body() updateDetails: UpdateGenreDto) {
    return this.genreServices.update(updateDetails);
  }
}
