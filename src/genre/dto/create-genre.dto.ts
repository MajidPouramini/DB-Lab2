import { ApiProperty } from '@nestjs/swagger';

export default class CreateGenreDto {
  @ApiProperty({
    description: 'Title of the genre',
    type: 'string',
  })
  readonly type: string;
}
