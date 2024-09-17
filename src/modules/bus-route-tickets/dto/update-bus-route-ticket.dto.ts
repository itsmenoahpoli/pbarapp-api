import { IsNumber, IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { BusRouteTicket } from '@prisma/client';

export class UpdateBusRouteTicketDto implements Partial<BusRouteTicket> {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  busRouteId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  type: 'premium' | 'ordinary';
}
