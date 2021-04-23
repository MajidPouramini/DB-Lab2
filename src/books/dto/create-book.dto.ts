import { ApiProperty } from '@nestjs/swagger';

export default class CreateBookDto {
  @ApiProperty({
    description: 'Books of the user',
    type: 'string',
  })
  readonly name: string;

  @ApiProperty({
    description: 'Books of the user',
    type: 'number',
  })
  readonly userID: number;

  @ApiProperty({
    description: 'Books of the user',
    type: 'array',
    items: { type: 'number' },
  })
  readonly genreIDs: number[];
}
