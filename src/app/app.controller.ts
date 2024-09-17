import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  systemHealthcheckHandler(): string {
    return this.appService.healthcheckHandler();
  }

  @Get('dashboard-stats')
  dashboardStatisticsHandler() {
    return this.appService.getDashboardStatistics();
  }
}
