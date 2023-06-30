import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SuperintendenteDTO } from './dto/superintendente.dto';

@Injectable()
export class SuperintendenteService {
    constructor(private prisma: PrismaService){}

    cadastrarSuperintendente(dto: SuperintendenteDTO){
        const Superintendente = this.prisma.superintendete.create({
            data:{
                ...dto
            }
        })

        return Superintendente
    }
}
