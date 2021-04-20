import { type } from 'node:os';
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import User from './user.entity';
import Genre from './genre.entity';

@Entity()
export default class Book extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne((type) => User, (user) => user.books)
  user: User[];

  @ManyToMany((type) => Genre)
  @JoinTable()
  genres: Genre[];
}
