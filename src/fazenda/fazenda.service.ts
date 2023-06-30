import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FazendaDTO } from './dto/fazenda.dto';

@Injectable()
export class FazendaService {
    constructor(private prisma: PrismaService){}

    async cadastrarFazenda(dto: FazendaDTO){
        const fazenda = await  this.prisma.fazenda.create({
            data:{
                ...dto
            }
        })

        return fazenda
    }
}
