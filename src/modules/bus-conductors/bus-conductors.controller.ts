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
import { BusConductorsService } from './bus-conductors.service';
import { CreateBusConductorDto } from './dto/create-bus-conductor.dto';
import { UpdateBusConductorDto } from './dto/update-bus-conductor.dto';

@ApiTags('Bus Conductors API')
@Controller({
  path: 'bus-conductors',
  version: '1',
})
export class BusConductorsController {
  constructor(private readonly busConductorsService: BusConductorsService) {}

  @ApiResponse({
    status: 201,
    description: 'Created BusConductor',
  })
  @Post('/')
  create(@Body() createBusConductorDto: CreateBusConductorDto) {
    return this.busConductorsService.create(createBusConductorDto);
  }

  @ApiResponse({
    status: 200,
    description: 'Get all BusConductor',
  })
  @Get('/')
  findAll() {
    return this.busConductorsService.findAll();
  }

  @ApiResponse({
    status: 200,
    description: 'Get BusConductor',
  })
  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.busConductorsService.findOne(+id);
  }

  @ApiResponse({
    status: 200,
    description: 'Update BusConductor',
  })
  @Patch('/:id')
  update(
    @Param('id') id: string,
    @Body() updateBusConductorDto: UpdateBusConductorDto,
  ) {
    return this.busConductorsService.update(+id, updateBusConductorDto);
  }

  @ApiResponse({
    status: 204,
    description: 'Delete BusConductor',
  })
  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.busConductorsService.remove(+id);
  }
}
