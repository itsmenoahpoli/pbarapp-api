import { Test, TestingModule } from '@nestjs/testing';
import { BusRoutesService } from './bus-routes.service';

describe('BusConductorService', () => {
  let service: BusRoutesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BusRoutesService],
    }).compile();

    service = module.get<BusRoutesService>(BusRoutesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
