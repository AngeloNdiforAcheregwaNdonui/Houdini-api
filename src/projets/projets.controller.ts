import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { ProjetsService } from './projets.service';
import { CreateProjetDto } from './dto/create-projet.dto';

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

  @Post()
  create(@Body() createProjetDto: CreateProjetDto) {
    return this.projetsService.creer(createProjetDto);
  }
}
