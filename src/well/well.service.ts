import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Well } from './well.entity';

@Injectable()
export class WellService {
  constructor(
    @InjectRepository(Well)
    private wellRepository: Repository<Well>
  ) {}

  findAll(): Promise<Well[]> {
    return this.wellRepository.find();
  }

  findOne(id: string): Promise<Well> {
    return this.wellRepository.findOne(id);
  }
}
