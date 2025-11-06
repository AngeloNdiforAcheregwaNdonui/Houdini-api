import { CreateProjetDto } from './create-projet.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateProjetDto extends PartialType(CreateProjetDto) {

}