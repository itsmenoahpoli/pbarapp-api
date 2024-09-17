import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '@/modules/auth/auth.module';
import { BusDriversModule } from '@/modules/bus-drivers/bus-drivers.module';
import { BusConductorsModule } from '@/modules/bus-conductors/bus-conductors.module';
import { BusModule } from '@/modules/bus/bus.module';
import { BusRoutesModule } from '@/modules/bus-routes/bus-routes.module';
import { BusRouteTicketsModule } from '@/modules/bus-route-tickets/bus-route-tickets.module';
import { BusRouteTicketBookingTransactionsModule } from '@/modules/bus-route-ticket-booking-transaction/bus-route-ticket-booking-transactions.module';

const configService: ConfigService = new ConfigService();

const configModuleOpts = {
  envFilePath: '.env',
  isGlobal: true,
};

const mailerModuleOpts = {
  transport: {
    host: configService.get<string>('APP_MAIL_HOST'),
    port: configService.get<number>('APP_MAIL_PORT'),
    auth: {
      user: configService.get<string>('APP_MAIL_USER'),
      pass: configService.get<string>('APP_MAIL_PASSWORD'),
    },
  },
};

@Module({
  imports: [
    ConfigModule.forRoot(configModuleOpts),
    MailerModule.forRoot(mailerModuleOpts),
    AuthModule,
    BusDriversModule,
    BusConductorsModule,
    BusModule,
    BusRoutesModule,
    BusRouteTicketsModule,
    BusRouteTicketBookingTransactionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
