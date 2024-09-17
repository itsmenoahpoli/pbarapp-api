import { Module } from '@nestjs/common';
import { PrismaService } from '@/services';
import { BusDriversService } from './bus-drivers.service';
import { BusDriversController } from './bus-drivers.controller';

@Module({
  controllers: [BusDriversController],
  providers: [BusDriversService, PrismaService],
})
export class BusDriversModule {}
