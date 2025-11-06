import { CreateProjetDto } from './create-projet.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateProjetDto extends PartialType(CreateProjetDto) {

}