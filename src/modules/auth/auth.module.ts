import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from '@/services';
import { UsersService } from '@/modules/users/users.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: AuthService.JWT_SECRET_KEY,
      signOptions: {
        expiresIn: '24h', // expires in 2 days
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, UsersService],
})
export class AuthModule {}
