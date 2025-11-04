import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ProjetsService } from './projets.service';

@Controller('projets')
export class ProjetsController {
  constructor(private projetsService: ProjetsService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    const projet = this.projetsService.obtenir(+id);

    if (!projet) throw new NotFoundException();

    return projet;
  }
  @Get()
  findAll() {
    return this.projetsService.obtenirTous();
  }
}
