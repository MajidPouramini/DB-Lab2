import { Injectable } from '@nestjs/common';
import UserEntity from '../db/entity/user.entity';
import CreateUserDto from './dto/create-user.dto';
import BookEntity from '../db/entity/book.entity';
import { getConnection } from 'typeorm';
import UpdateUserDto from './dto/update-user.dto';

@Injectable()
export class UserServices {
  async insert(userDetails: CreateUserDto): Promise<UserEntity> {
    const userEntity: UserEntity = UserEntity.create();
    const { name } = userDetails;
    userEntity.name = name;
    await UserEntity.save(userEntity);
    return userEntity;
  }
  async getAllUsers(): Promise<UserEntity[]> {
    return await UserEntity.find();
  }
  async getBooksOfUser(userID: number): Promise<BookEntity[]> {
    console.log(typeof userID);
    const user: UserEntity = await UserEntity.findOne({
      where: { id: userID },
      relations: ['books'],
    });
    return user.books;
  }

  async delete(userId: number) {
    const userEntity = await UserEntity.findOne(userId);
    await userEntity.remove();
    return userEntity;
  }

  async update(updateDetails: UpdateUserDto): Promise<UserEntity> {
    const { id, name, books } = updateDetails;
    const user = await UserEntity.findOne(id);
    if (user != undefined) {
      user.name = name;
      user.books = [];
      for (const id of books) user.books.push(await BookEntity.findOne(id));
      await user.save();
    }
    return user;
  }
}
