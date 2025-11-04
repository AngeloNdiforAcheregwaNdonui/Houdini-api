import { Injectable } from '@nestjs/common';
import { Projet } from './entities/projet.entity';

@Injectable()
export class ProjetsService {
  obtenirTous() {
    return this.projets;
  }

  obtenir(id: number) {
    const projet = this.projets.find((projet) => {
      return projet.id === id;
    });

    return projet;
  }

  private timestamp = new Date().toJSON();
  private projets: Projet[] = [
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