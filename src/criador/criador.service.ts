import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CriadorDTO } from './dto/criador.dto';

@Injectable()
export class CriadorService {
    constructor(private prisma: PrismaService){}

    async cadastrarCriador(dto: CriadorDTO){
        const criador = await this.prisma.criador.create({
            data:{
                ...dto
            }
        })
        return criador
    }
}
