import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '@/services';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAdminByEmail(email: string) {
    return await this.prismaService.user.findUnique({
      where: {
        email,
        userRole: {
          name: 'admin',
        },
      },
    });
  }

  async findByEmail(email: string) {
    return await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });
  }

  async create(data: any) {
    if (await this.findByEmail(data.email)) {
      throw new BadRequestException('USER_ALREADY_EXIST');
    }

    const user = await this.prismaService.user.create({
      data,
    });

    delete user.password;

    return user;
  }
}
