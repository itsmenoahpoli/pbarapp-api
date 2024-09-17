import { IsString, IsNumber, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Bus } from '@prisma/client';

export class UpdateBusDto implements Partial<Bus> {
  @ApiProperty()
  @IsNumber()
  @IsOptional()
  busDriverId?: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  busConductorId?: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  busNo: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  plateNo: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  type: 'premium' | 'ordinary';
}
