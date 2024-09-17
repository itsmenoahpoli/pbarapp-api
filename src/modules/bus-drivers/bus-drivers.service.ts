import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '@/services';
import { CreateBusDriverDto } from './dto/create-bus-driver.dto';
import { UpdateBusDriverDto } from './dto/update-bus-driver.dto';

@Injectable()
export class BusDriversService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createBusDriverDto: CreateBusDriverDto) {
    if (
      (await this.prismaService.busDriver.count({
        where: { fullname: createBusDriverDto.fullname },
      })) > 0
    ) {
      throw new BadRequestException('DRIVER_ALREADY_EXIST');
    }

    return await this.prismaService.busDriver.create({
      data: {
        ...createBusDriverDto,
      },
    });
  }

  async findAll() {
    return await this.prismaService.busDriver.findMany();
  }

  async findOne(id: number) {
    const result = await this.prismaService.busDriver.findUnique({
      where: { id },
    });

    if (!result) {
      throw new NotFoundException('DRIVER_NOT_FOUND');
    }

    return result;
  }

  async update(id: number, updateBusDriverDto: UpdateBusDriverDto) {
    return await this.prismaService.busDriver.update({
      where: {
        id,
      },
      data: {
        ...updateBusDriverDto,
      },
    });
  }

  async remove(id: number) {
    return await this.prismaService.busDriver.delete({ where: { id } });
  }
}
