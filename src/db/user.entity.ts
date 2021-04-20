import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Book from './book.entity';

@Entity()
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @OneToMany((type) => Book, (book) => book.user)
  books: Book[];
}
