import { Module } from '@nestjs/common';
import { ProjetsController } from './projets.controller';

@Module({
  controllers: [ProjetsController]
})
export class ProjetsModule {}
