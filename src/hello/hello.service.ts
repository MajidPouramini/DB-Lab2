import { Injectable } from '@nestjs/common';
import { PersonDto } from './dto/person.dto';

@Injectable()
export class HelloService {
  async welcome(person: PersonDto): Promise<string> {
    let msg: string;
    if (person.year) {
      const current_year = new Date().getFullYear();
      console.log(`Welcome ${person.name} - your birthday is ${person.year}`);
      msg = `Welcom ${person.name} - you are ${
        current_year - person.year
      } years old`;
    } else {
      console.log(`Welcome ${person.name} - your birthday is undefined!`);
      msg = `Welcome ${person.name} - your birthday is undefined!`;
    }
    return msg;
  }
}
