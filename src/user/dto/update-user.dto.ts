import { ApiProperty } from '@nestjs/swagger';
import { Length } from 'class-validator';

export default class UpdateUserDto {
  @ApiProperty({
    description: 'Id of the user',
    type: 'number',
  })
  readonly id: number;

  @ApiProperty({
    description: 'Name of the user',
    type: 'string',
    maxLength: 500,
  })
  @Length(0, 500)
  readonly name: string;

  @ApiProperty({
    description: 'Books of the user',
    type: 'array',
    items: { type: 'number' },
  })
  readonly books: number[];
}
