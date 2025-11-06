import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { i18nValidationMessage } from 'nestjs-i18n';

export class CreateProjetDto {
  @ApiProperty({
    description: 'Le nom du projet',
    example: 'LAN Party',
  })
  @IsString()
  @IsNotEmpty({ message: i18nValidationMessage('validation.NOT_EMPTY') })
  nom: string;

  @ApiProperty({
    description: 'la description du projet',
    example: "Tout ce qui à trait à l'organisation du LAN Party",
  })
  @IsString()
  @IsNotEmpty({ message: i18nValidationMessage('validation.NOT_EMPTY') })
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