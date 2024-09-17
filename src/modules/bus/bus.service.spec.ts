import { Test, TestingModule } from '@nestjs/testing';
import { BusConductorService } from './bus.service';

describe('BusConductorService', () => {
  let service: BusConductorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BusConductorService],
    }).compile();

    service = module.get<BusConductorService>(BusConductorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
