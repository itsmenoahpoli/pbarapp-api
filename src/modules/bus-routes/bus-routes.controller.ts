import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { BusRoutesService } from './bus-routes.service';
import { CreateBusRouteDto } from './dto/create-bus-routes.dto';
import { UpdateBusRouteDto } from './dto/update-bus-routes.dto';

@ApiTags('Bus Routes API')
@Controller({
  path: 'bus-routes',
  version: '1',
})
export class BusRoutesController {
  constructor(private readonly busRoutesService: BusRoutesService) {}

  @ApiResponse({
    status: 201,
    description: 'Created BusRoute',
  })
  @Post('/')
  create(@Body() createBusRouteDto: CreateBusRouteDto) {
    return this.busRoutesService.create(createBusRouteDto);
  }

  @ApiResponse({
    status: 200,
    description: 'Get all BusRoute',
  })
  @Get('/')
  findAll() {
    return this.busRoutesService.findAll();
  }

  @ApiResponse({
    status: 200,
    description: 'Get BusRoute',
  })
  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.busRoutesService.findOne(+id);
  }

  @ApiResponse({
    status: 200,
    description: 'Get Bus by route number',
  })
  @Get('/route-no/:routeNo')
  findOneByRouteNo(@Param('routeNo') routeNo: string) {
    return this.busRoutesService.findOneByRouteNo(routeNo);
  }

  @ApiResponse({
    status: 200,
    description: 'Update BusRoute',
  })
  @Patch('/:id')
  update(
    @Param('id') id: string,
    @Body() updateBusRouteDto: UpdateBusRouteDto,
  ) {
    return this.busRoutesService.update(+id, updateBusRouteDto);
  }

  @ApiResponse({
    status: 204,
    description: 'Delete BusRoute',
  })
  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.busRoutesService.remove(+id);
  }
}
