import { Test, TestingModule } from '@nestjs/testing';
import { BusDriversService } from './bus-drivers.service';

describe('BusDriversService', () => {
  let service: BusDriversService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BusDriversService],
    }).compile();

    service = module.get<BusDriversService>(BusDriversService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
