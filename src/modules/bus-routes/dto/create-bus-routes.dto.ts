import { IsString, IsNumber, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { BusRoute } from '@prisma/client';

export class CreateBusRouteDto implements Partial<BusRoute> {
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
  @IsOptional()
  routeFromPin?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  routeTo: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  routeToPin?: string;

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
