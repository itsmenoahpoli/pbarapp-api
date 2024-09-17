import { IsString, IsNumber, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { BusRoute } from '@prisma/client';

export class UpdateBusRouteDto implements Partial<BusRoute> {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  busId: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  routeFrom: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  routeFromPin: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  routeTo: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  routeToPin: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  departureDate: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  departureTime: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  arrivalDate: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  arrivalTime: string;
}
