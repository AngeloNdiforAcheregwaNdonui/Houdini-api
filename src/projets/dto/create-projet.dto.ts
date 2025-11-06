import { ApiProperty } from '@nestjs/swagger';

export class CreateProjetDto {
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
}