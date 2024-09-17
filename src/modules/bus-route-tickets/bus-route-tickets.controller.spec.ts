import { Test, TestingModule } from '@nestjs/testing';
import { BusDriverController } from './bus-route-tickets.controller';
import { BusDriverService } from './bus-route-tickets.service';

describe('BusDriverController', () => {
  let controller: BusDriverController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusDriverController],
      providers: [BusDriverService],
    }).compile();

    controller = module.get<BusDriverController>(BusDriverController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
