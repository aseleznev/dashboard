import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { WellService } from './well.service';
import { Well } from './well.entity';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { RolesGuard } from '../auth/guards/roles.guard';

@ApiBearerAuth('JWT')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('readWells')
@ApiTags('well')
@Controller('well')
export class WellController {
  constructor(private readonly wellService: WellService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'Get all wells' })
  async findAll(): Promise<Well[]> {
    return this.wellService.findAll();
  }
}
