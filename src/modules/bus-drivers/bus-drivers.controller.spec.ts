import { Test, TestingModule } from '@nestjs/testing';
import { BusDriverController } from './bus-drivers.controller';
import { BusDriverService } from './bus-drivers.service';

describe('BusDriversController', () => {
  let controller: BusDriversController;

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
