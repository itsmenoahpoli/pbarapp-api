import { Module } from '@nestjs/common';
import { PrismaService } from '@/services';
import { BusConductorsService } from './bus-conductors.service';
import { BusConductorsController } from './bus-conductors.controller';

@Module({
  controllers: [BusConductorsController],
  providers: [BusConductorsService, PrismaService],
})
export class BusConductorsModule {}
