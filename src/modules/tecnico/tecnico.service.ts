import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TecnicoDTO } from './dto/tecnico.dto';

@Injectable()
export class TecnicoService {
    constructor(private prisma: PrismaService){}

    async cadastrarTecnico (dto: TecnicoDTO){
        const tecnico = this.prisma.tecnico.create({
            data:{
                ...dto
            }
        })

        return tecnico
    }
}
