import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/services';
import { CreateBusRouteTicketDto } from './dto/create-bus-route-ticket.dto';
import { UpdateBusRouteTicketDto } from './dto/update-bus-route-ticket.dto';

@Injectable()
export class BusRouteTicketsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createBusDriverDto: CreateBusRouteTicketDto) {
    return await this.prismaService.busRouteTicket.create({
      data: {
        ...createBusDriverDto,
      },
    });
  }

  async findAll() {
    return await this.prismaService.busRouteTicket.findMany({
      orderBy: {
        busRouteId: 'desc',
      },
    });
  }

  async findOne(id: number) {
    const result = await this.prismaService.busRouteTicket.findUnique({
      where: { id },
    });

    if (!result) {
      throw new NotFoundException('DRIVER_NOT_FOUND');
    }

    return result;
  }

  async update(id: number, updateBusDriverDto: UpdateBusRouteTicketDto) {
    return await this.prismaService.busRouteTicket.update({
      where: {
        id,
      },
      data: {
        ...updateBusDriverDto,
      },
    });
  }

  async remove(id: number) {
    return await this.prismaService.busRouteTicket.delete({ where: { id } });
  }
}
