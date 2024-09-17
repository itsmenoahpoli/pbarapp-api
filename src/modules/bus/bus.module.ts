import { Module } from '@nestjs/common';
import { PrismaService } from '@/services';
import { BusService } from './bus.service';
import { BusController } from './bus.controller';

@Module({
  controllers: [BusController],
  providers: [BusService, PrismaService],
})
export class BusModule {}
