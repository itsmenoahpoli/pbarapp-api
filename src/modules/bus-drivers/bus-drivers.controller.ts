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
import { BusDriversService } from './bus-drivers.service';
import { CreateBusDriverDto } from './dto/create-bus-driver.dto';
import { UpdateBusDriverDto } from './dto/update-bus-driver.dto';

@ApiTags('Bus Drivers API')
@Controller({
  path: 'bus-drivers',
  version: '1',
})
export class BusDriversController {
  constructor(private readonly busDriversService: BusDriversService) {}

  @ApiResponse({
    status: 201,
    description: 'Created BusDriver',
  })
  @Post('/')
  create(@Body() createBusDriverDto: CreateBusDriverDto) {
    return this.busDriversService.create(createBusDriverDto);
  }

  @ApiResponse({
    status: 200,
    description: 'Get all BusDriver',
  })
  @Get('/')
  findAll() {
    return this.busDriversService.findAll();
  }

  @ApiResponse({
    status: 200,
    description: 'Get BusDriver',
  })
  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.busDriversService.findOne(+id);
  }

  @ApiResponse({
    status: 200,
    description: 'Update BusDriver',
  })
  @Patch('/:id')
  update(
    @Param('id') id: string,
    @Body() updateBusDriverDto: UpdateBusDriverDto,
  ) {
    return this.busDriversService.update(+id, updateBusDriverDto);
  }

  @ApiResponse({
    status: 204,
    description: 'Delete BusDriver',
  })
  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.busDriversService.remove(+id);
  }
}
