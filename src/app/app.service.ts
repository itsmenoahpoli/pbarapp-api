import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  healthcheckHandler() {
    return 'SYSTEM ONLINE';
  }

  getDashboardStatistics() {
    return {
      totalDrivers: 0,
      totalConductors: 0,
      totalBusVehicles: 0,
      totalBusRoutes: 0,
    };
  }
}
