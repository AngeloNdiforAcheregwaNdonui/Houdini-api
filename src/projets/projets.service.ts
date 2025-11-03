import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjetsService {
  obtenirTous() {
    return this.projets;
  }

  private timestamp = new Date().toJSON();
  private projets = [
    {
      id: 1,
      nom: 'LAN Party (NestJS API)',
      description: 'Organiser le LAN Party',
      image_url: 'https://i.imgur.com/Y5nZ4Qe.jpg',
      date_creation: this.timestamp,
      date_modification: this.timestamp,
    },
    {
      id: 2,
      nom: 'Discreddit (NestJS API)',
      description: 'Projet de session',
      image_url: 'https://i.imgur.com/Y5nZ4Qe.jpg',
      date_creation: this.timestamp,
      date_modification: this.timestamp,
    },
  ];
}