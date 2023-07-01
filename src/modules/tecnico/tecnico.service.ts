import { Injectable } from '@nestjs/common';
import { TecnicoDTO } from './dto/tecnico.dto';
import { TecnicoRepository } from 'src/shared/database/repositories/tecnico.repositories';

@Injectable()
export class TecnicoService {
  constructor(private tecnicoRepository: TecnicoRepository) {}

  async cadastrarTecnico(dto: TecnicoDTO) {
    const tecnico = this.tecnicoRepository.create({
      data: {
        ...dto,
      },
    });

    return tecnico;
  }
}
