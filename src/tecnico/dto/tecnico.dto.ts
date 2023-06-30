import { IsNotEmpty, IsString, IsUUID } from "class-validator"

export class TecnicoDTO{

    @IsUUID()
    @IsNotEmpty()
    userId       : string 
    @IsString()
    nomeBairro   : string 
    @IsString()
    nomeCidade   : string 
    @IsString()
    nomeEstado   : string 
    @IsString()
    nomeRua      : string 
    @IsString()
    nomeCompleto : string 
    @IsString()
    rg           : string
}

