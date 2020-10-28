import { Module } from '@nestjs/common';
import { WellService } from './well.service';
import { WellController } from './well.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Well } from './well.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Well]), AuthModule],
  providers: [WellService],
  controllers: [WellController]
})
export class WellModule {}
