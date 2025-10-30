import { Controller, Get } from '@nestjs/common';

@Controller('projets')
export class ProjetsController {
  @Get()
  obtenirTous() {
    const timestamp = new Date().toJSON();
    const projets = [
      {
        id: 1,
        nom: 'LAN Party (NestJS API)',
        description: 'Organiser le LAN Party',
        image_url: 'https://i.imgur.com/Y5nZ4Qe.jpg',
        date_creation: timestamp,
        date_modification: timestamp,
      },
      {
        id: 2,
        nom: 'Discreddit (NestJS API)',
        description: 'Projet de session',
        image_url: 'https://i.imgur.com/Y5nZ4Qe.jpg',
        date_creation: timestamp,
        date_modification: timestamp,
      },
    ];
    return projets;
  }
}
