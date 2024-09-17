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
import { BusRouteTicketsService } from './bus-route-tickets.service';
import { CreateBusRouteTicketDto } from './dto/create-bus-route-ticket.dto';
import { UpdateBusRouteTicketDto } from './dto/update-bus-route-ticket.dto';

@ApiTags('Bus Route Tickets API')
@Controller({
  path: 'bus-route-tickets',
  version: '1',
})
export class BusRouteTicketsController {
  constructor(
    private readonly busRouteTicketsService: BusRouteTicketsService,
  ) {}

  @ApiResponse({
    status: 201,
    description: 'Created BusRouteTicket',
  })
  @Post('/')
  create(@Body() createBusRouteTicketDto: CreateBusRouteTicketDto) {
    return this.busRouteTicketsService.create(createBusRouteTicketDto);
  }

  @ApiResponse({
    status: 200,
    description: 'Get all BusRouteTicket',
  })
  @Get('/')
  findAll() {
    return this.busRouteTicketsService.findAll();
  }

  @ApiResponse({
    status: 200,
    description: 'Get BusRouteTicket',
  })
  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.busRouteTicketsService.findOne(+id);
  }

  @ApiResponse({
    status: 200,
    description: 'Update BusRouteTicket',
  })
  @Patch('/:id')
  update(
    @Param('id') id: string,
    @Body() updateBusRouteTicketDto: UpdateBusRouteTicketDto,
  ) {
    return this.busRouteTicketsService.update(+id, updateBusRouteTicketDto);
  }

  @ApiResponse({
    status: 204,
    description: 'Delete BusRouteTicket',
  })
  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.busRouteTicketsService.remove(+id);
  }
}
