import { ApiProperty } from '@nestjs/swagger';

export default class UpdateBookDto {
  @ApiProperty({
    description: 'Id of the book',
    type: 'number',
  })
  readonly id: number;

  @ApiProperty({
    description: 'Name of the book',
    type: 'string',
  })
  readonly name: string;

  @ApiProperty({
    description: 'Id of the user',
    type: 'number',
  })
  readonly userId: number;

  @ApiProperty({
    description: 'Id of the genre',
    type: 'array',
    items: { type: 'number' },
  })
  readonly genreIds: number[];
}
