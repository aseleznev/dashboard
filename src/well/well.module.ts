import { Module } from '@nestjs/common';
import { WellService } from './well.service';
import { WellController } from './well.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Well } from './well.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Well])],
  providers: [WellService],
  controllers: [WellController]
})
export class WellModule {}
