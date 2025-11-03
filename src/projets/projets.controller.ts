import { Controller, Get } from '@nestjs/common';
import { ProjetsService } from './projets.service';

@Controller('projets')
export class ProjetsController {
  constructor(private projetsService: ProjetsService) {}
  @Get()
  findAll() {
    return this.projetsService.obtenirTous();
  }
}
