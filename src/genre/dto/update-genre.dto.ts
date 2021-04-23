import { ApiProperty } from '@nestjs/swagger';

export default class UpdateGenreDto {
  @ApiProperty({
    description: 'Id of the genre',
    type: 'number',
  })
  readonly id: number;

  @ApiProperty({
    description: 'Title of the genre',
    type: 'string',
  })
  readonly type: string;
}
