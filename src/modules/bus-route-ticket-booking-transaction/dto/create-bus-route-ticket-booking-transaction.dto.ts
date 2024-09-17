import { IsNumber, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { BusRouteTicketBookingTransaction } from '@prisma/client';

// prettier-ignore
export class CreateBusRouteTicketBookingTransactionDto implements Partial<BusRouteTicketBookingTransaction> {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  busRouteId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  busRouteTicketId: number;


  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  ticketQuantity: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  userId?: number;
}
