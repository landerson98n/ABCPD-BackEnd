import { IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator"

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

export class UpdateTecnicoDTO{
    @IsOptional() @IsString()
    nomeBairro   : string 
    @IsOptional() @IsString()
    nomeCidade   : string 
    @IsOptional() @IsString()
    nomeEstado   : string 
    @IsOptional() @IsString()
    nomeRua      : string 
    @IsOptional() @IsString()
    nomeCompleto : string 
    @IsOptional() @IsString()
    rg           : string
}

