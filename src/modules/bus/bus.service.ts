import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/services';
import { CreateBusDto } from './dto/create-bus.dto';
import { UpdateBusDto } from './dto/update-bus.dto';

@Injectable()
export class BusService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createBusDto: CreateBusDto) {
    return await this.prismaService.bus.create({
      data: {
        ...createBusDto,
        busDriverId: +createBusDto.busDriverId,
        busConductorId: +createBusDto.busConductorId,
      },
      include: {
        busDriver: true,
        busConductor: true,
      },
    });
  }

  async findAll() {
    return await this.prismaService.bus.findMany({
      include: {
        busDriver: true,
        busConductor: true,
      },
    });
  }

  async findOne(id: number) {
    const result = await this.prismaService.bus.findUnique({
      where: { id },
    });

    if (!result) {
      throw new NotFoundException('_NOT_FOUND');
    }

    return result;
  }

  async update(id: number, updateBusDto: UpdateBusDto) {
    return await this.prismaService.bus.update({
      where: {
        id,
      },
      data: {
        ...updateBusDto,
      },
    });
  }

  async remove(id: number) {
    return await this.prismaService.bus.delete({ where: { id } });
  }
}
