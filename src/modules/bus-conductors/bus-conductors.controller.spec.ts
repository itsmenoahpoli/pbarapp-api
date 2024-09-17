import { Test, TestingModule } from '@nestjs/testing';
import { BusConductorsController } from './bus-conductors.controller';
import { BusConductorsService } from './bus-conductors.service';

describe('BusConductorsController', () => {
  let controller: BusConductorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusConductorsController],
      providers: [BusConductorsService],
    }).compile();

    controller = module.get<BusConductorsController>(BusConductorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
