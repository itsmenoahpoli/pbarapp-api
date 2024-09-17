import { Module } from '@nestjs/common';
import { PrismaService } from '@/services';
import { BusRouteTicketsService } from './bus-route-tickets.service';
import { BusRouteTicketsController } from './bus-route-tickets.controller';

@Module({
  controllers: [BusRouteTicketsController],
  providers: [BusRouteTicketsService, PrismaService],
})
export class BusRouteTicketsModule {}
