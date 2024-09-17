import { IsString, IsNumber, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Bus } from '@prisma/client';

export class CreateBusDto implements Partial<Bus> {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  busDriverId: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  busConductorId: number;

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
