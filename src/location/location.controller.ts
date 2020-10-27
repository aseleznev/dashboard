import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LocationService } from './location.service';
import { Location } from './location.entity';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiBearerAuth('JWT')
@UseGuards(JwtAuthGuard)
@Controller('location')
@ApiTags('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'Get all locations' })
  async findAll(): Promise<Location[]> {
    return this.locationService.findAll();
  }

  @Get('id')
  @ApiResponse({ status: 200, description: 'Get all locations' })
  async findOne(@Param('id') id: string): Promise<Location> {
    return this.locationService.findOne(+id);
  }
}
