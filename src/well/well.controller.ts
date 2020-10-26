import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { WellService } from './well.service';
import { Well } from './well.entity';

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
