import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateProjetDto {
  @ApiProperty({
    description: 'Le nom du projet',
    example: 'LAN Party',
  })
  @IsString()
  @IsNotEmpty()
  nom: string;

  @ApiProperty({
    description: 'la description du projet',
    example: "Tout ce qui à trait à l'organisation du LAN Party",
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  description: string;

  @ApiProperty({
    description: "L'URL de l'image du projet",
    example: 'https://i.imgur.com/Y5nZ4Qe.jpg',
  })
  @IsString()
  @IsOptional()
  imageUrl?: string;
}