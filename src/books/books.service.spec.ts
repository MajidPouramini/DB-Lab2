import { Test, TestingModule } from '@nestjs/testing';
import { BooksServices } from './books.services';

describe('BooksService', () => {
  let service: BooksServices;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BooksServices],
    }).compile();

    service = module.get<BooksServices>(BooksServices);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
