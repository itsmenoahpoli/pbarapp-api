import { Test, TestingModule } from '@nestjs/testing';
import { BusDriverService } from './bus-route-tickets.service';

describe('BusDriverService', () => {
  let service: BusDriverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BusDriverService],
    }).compile();

    service = module.get<BusDriverService>(BusDriverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
