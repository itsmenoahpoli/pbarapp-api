import { Injectable } from '@nestjs/common';
import { PrismaService, PaymentsService } from '@/services';
import { CreateBusRouteTicketBookingTransactionDto } from './dto/create-bus-route-ticket-booking-transaction.dto';

@Injectable()
export class BusRouteTicketBookingTransactionsService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly paymentsServce: PaymentsService,
  ) {}

  async getForUser(userId: number) {
    return await this.prismaService.busRouteTicketBookingTransaction.findMany({
      where: {
        userId,
      },
      include: {
        user: true,
        busRouteTicket: true,
        busRoute: true,
      },
    });
  }

  async create(
    createBusRouteTicketBookingTransaction: CreateBusRouteTicketBookingTransactionDto,
  ) {
    try {
      const ticket = await this.prismaService.busRouteTicket.findUnique({
        where: { id: createBusRouteTicketBookingTransaction.busRouteTicketId },
      });

      // prettier-ignore
      const subtotal = +createBusRouteTicketBookingTransaction.ticketQuantity * ticket.price;
      const updatedTicket = await this.prismaService.busRouteTicket.update({
        where: { id: createBusRouteTicketBookingTransaction.busRouteTicketId },
        data: {
          quantity:
            +ticket.quantity -
            +createBusRouteTicketBookingTransaction.ticketQuantity,
        },
      });
      const paymentData = await this.paymentsServce.createPaymentLink({
        amount: Number(`${subtotal}00`),
        description: `[BUS E-TICKET BOOKING PAYMENT]`,
      });

      // prettier-ignore
      const bookingTransaction = await this.prismaService.busRouteTicketBookingTransaction.create({
          // @ts-ignore
          data: {
            busRouteId: +createBusRouteTicketBookingTransaction.busRouteId,
            busRouteTicketId: +createBusRouteTicketBookingTransaction.busRouteTicketId,
            ticketQuantity: createBusRouteTicketBookingTransaction.ticketQuantity,
            userId: createBusRouteTicketBookingTransaction.userId,
            paymongoPaymentData: JSON.stringify(paymentData)
          },
        });

      return {
        bookingTransaction,
        updatedTicket,
        checkout_url: paymentData.checkout_url,
      };
    } catch (error: unknown) {
      console.log(error);
    }
  }
}
