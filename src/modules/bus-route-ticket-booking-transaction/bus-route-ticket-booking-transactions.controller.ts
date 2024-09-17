import { Controller, Post, Body, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { BusRouteTicketBookingTransactionsService } from './bus-route-ticket-booking-transactions.service';
import { CreateBusRouteTicketBookingTransactionDto } from './dto/create-bus-route-ticket-booking-transaction.dto';

@ApiTags('Bus Route Ticket Booking Transactions API')
@Controller({
  path: 'bus-route-ticket-booking-transactions',
  version: '1',
})
export class BusRouteTicketBookingTransactionController {
  constructor(
    private readonly busRouteTicketBookingTransactionsService: BusRouteTicketBookingTransactionsService,
  ) {}

  @ApiResponse({
    status: 200,
    description: 'Get list of BusRouteTicketBookingTransaction for user',
  })
  @Post('/by-user/:userId')
  getForUser(@Param('userId') userId: number) {
    return this.busRouteTicketBookingTransactionsService.getForUser(userId);
  }

  @ApiResponse({
    status: 201,
    description: 'Created BusRouteTicketBookingTransaction',
  })
  @Post('/')
  create(
    @Body()
    createBusRouteTicketBookingTransactionDto: CreateBusRouteTicketBookingTransactionDto,
  ) {
    return this.busRouteTicketBookingTransactionsService.create(
      createBusRouteTicketBookingTransactionDto,
    );
  }
}
