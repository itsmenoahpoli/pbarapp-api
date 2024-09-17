import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '@/services';
import { CreateBusConductorDto } from './dto/create-bus-conductor.dto';
import { UpdateBusConductorDto } from './dto/update-bus-conductor.dto';

@Injectable()
export class BusConductorsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createBusConductorDto: CreateBusConductorDto) {
    if (
      (await this.prismaService.busConductor.count({
        where: { fullname: createBusConductorDto.fullname },
      })) > 0
    ) {
      throw new BadRequestException('Conductor_ALREADY_EXIST');
    }

    return await this.prismaService.busConductor.create({
      data: {
        ...createBusConductorDto,
      },
    });
  }

  async findAll() {
    return await this.prismaService.busConductor.findMany();
  }

  async findOne(id: number) {
    const result = await this.prismaService.busConductor.findUnique({
      where: { id },
    });

    if (!result) {
      throw new NotFoundException('Conductor_NOT_FOUND');
    }

    return result;
  }

  async update(id: number, updateBusConductorDto: UpdateBusConductorDto) {
    return await this.prismaService.busConductor.update({
      where: {
        id,
      },
      data: {
        ...updateBusConductorDto,
      },
    });
  }

  async remove(id: number) {
    return await this.prismaService.busConductor.delete({ where: { id } });
  }
}
