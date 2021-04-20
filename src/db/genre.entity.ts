import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Genre extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;
}
