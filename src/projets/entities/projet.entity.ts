import { ApiProperty } from '@nestjs/swagger';

export class Projet {
  @ApiProperty({
    description: "L'identifiant du projet",
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Le nom du projet',
    example: 'LAN Party',
  })
  nom: string;

  @ApiProperty({
    description: 'la description du projet',
    example: "Tout ce qui à trait à l'organisation du LAN Party",
  })
  description: string;

  @ApiProperty({
    description: "L'URL de l'image du projet",
    example: 'https://i.imgur.com/Y5nZ4Qe.jpg',
  })
  image_url?: string;

  @ApiProperty()
  date_creation: string;

  @ApiProperty()
  date_modification: string;
}