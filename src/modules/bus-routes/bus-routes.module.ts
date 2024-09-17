import { Module } from '@nestjs/common';
import { PrismaService } from '@/services';
import { BusRoutesService } from './bus-routes.service';
import { BusRoutesController } from './bus-routes.controller';

@Module({
  controllers: [BusRoutesController],
  providers: [BusRoutesService, PrismaService],
})
export class BusRoutesModule {}
