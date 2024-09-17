import * as argon2 from 'argon2';
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '@/services';
import { UsersService } from '@/modules/users/users.service';
import { LoginCredentials, SignupAccountDTO } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  public static get JWT_SECRET_KEY() {
    return new ConfigService().get<string>('APP_JWT_SECRET');
  }

  private async hashPassword(password: string) {
    return await argon2.hash(password);
  }

  private async verifyPassword(raw: string, hashed: string) {
    return await argon2.verify(hashed, raw);
  }

  private async validateUser(user: User, loginData: LoginCredentials) {
    if (!user) {
      return false;
    }

    if (!(await this.verifyPassword(loginData.password, user.password))) {
      return false;
    }

    return true;
  }

  async login(credentials: LoginCredentials) {
    const user = await this.usersService.findByEmail(credentials.email);

    if (!(await this.validateUser(user, credentials))) {
      throw new UnauthorizedException('USER_NOT_FOUND');
    }

    const updateUser = await this.prismaService.user.update({
      where: { email: credentials.email },
      data: { lastSigninAt: new Date().toISOString() },
    });

    const accessToken = await this.jwtService.signAsync({
      sub: user.id,
      data: user,
    });

    delete updateUser.password;

    return {
      user: updateUser,
      lastSigninAt: updateUser.lastSigninAt,
      accessToken,
    };
  }

  async requestOtp(email: string) {
    if (!(await this.usersService.findByEmail(email))) {
      throw new BadRequestException('USER_NOT_FOUND');
    }

    await this.prismaService.userOtp.create({
      data: {
        code: Math.floor(100000 + Math.random() * 900000).toString(),
        expiresAt: new Date(new Date().getTime() + 2 * 60 * 60 * 1000),
      },
    });

    return 'SENT';
  }

  async verifyOtp(code: string) {
    const otp = await this.prismaService.userOtp.findFirst({
      where: {
        code,
      },
    });

    if (!otp || otp.isUsed || new Date(otp.expiresAt) < new Date()) {
      throw new BadRequestException('OTP_INVALID');
    }

    return 'OTP_VALID';
  }

  async signupAccount(accountData: SignupAccountDTO) {
    accountData.password = await this.hashPassword(accountData.password);

    return await this.usersService.create(accountData);
  }
}
