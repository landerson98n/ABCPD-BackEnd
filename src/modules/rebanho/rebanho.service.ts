import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RebanhoDTO } from './dto';

@Injectable()
export class RebanhoService {
    constructor(private prisma: PrismaService){}

    async cadastrarRebanho(dto: RebanhoDTO){
        const rebanho = await this.prisma.rebanho.create({
            data:{
                ...dto
            }
        })

        return rebanho
    }
}
