import { Test, TestingModule } from '@nestjs/testing';
import { BusConductorsService } from './bus-conductors.service';

describe('BusConductorService', () => {
  let service: BusConductorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BusConductorsService],
    }).compile();

    service = module.get<BusConductorsService>(BusConductorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
