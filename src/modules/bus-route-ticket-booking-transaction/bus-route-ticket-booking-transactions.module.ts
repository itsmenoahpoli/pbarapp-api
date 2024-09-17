import { Module } from '@nestjs/common';
import { PrismaService, PaymentsService } from '@/services';
import { BusRouteTicketBookingTransactionsService } from './bus-route-ticket-booking-transactions.service';
import { BusRouteTicketBookingTransactionController } from './bus-route-ticket-booking-transactions.controller';

@Module({
  controllers: [BusRouteTicketBookingTransactionController],
  providers: [
    BusRouteTicketBookingTransactionsService,
    PrismaService,
    PaymentsService,
  ],
})
export class BusRouteTicketBookingTransactionsModule {}
