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
import { BusService } from './bus.service';
import { CreateBusDto } from './dto/create-bus.dto';
import { UpdateBusDto } from './dto/update-bus.dto';

@ApiTags('Busses API')
@Controller({
  path: 'bus',
  version: '1',
})
export class BusController {
  constructor(private readonly busService: BusService) {}

  @ApiResponse({
    status: 201,
    description: 'Created Bus',
  })
  @Post('/')
  create(@Body() createBusDto: CreateBusDto) {
    return this.busService.create(createBusDto);
  }

  @ApiResponse({
    status: 200,
    description: 'Get all Bus',
  })
  @Get('/')
  findAll() {
    return this.busService.findAll();
  }

  @ApiResponse({
    status: 200,
    description: 'Get Bus',
  })
  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.busService.findOne(+id);
  }

  @ApiResponse({
    status: 200,
    description: 'Update Bus',
  })
  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateBusDto: UpdateBusDto) {
    return this.busService.update(+id, updateBusDto);
  }

  @ApiResponse({
    status: 204,
    description: 'Delete Bus',
  })
  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.busService.remove(+id);
  }
}
