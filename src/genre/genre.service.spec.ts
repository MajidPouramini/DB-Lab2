import { Test, TestingModule } from '@nestjs/testing';
import GenreServices from './genre.services';

describe('GenreService', () => {
  let service: GenreServices;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenreServices],
    }).compile();

    service = module.get<GenreServices>(GenreServices);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
