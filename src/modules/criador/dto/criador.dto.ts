import { IsUUID, IsISO8601 , IsNotEmpty, IsString, IsBoolean, IsOptional } from "class-validator"


export class CriadorDTO{

    @IsNotEmpty()
    @IsUUID()
    userId       : string  
    @IsString() 
    cep          : string  
    @IsBoolean()
    ativo        : boolean
    @IsString() 
    nomeBairro   : string  
    @IsString() 
    nomeCidade   : string  
    @IsString() 
    nomeCompleto : string  
    @IsString() 
    nomeEstado   : string  
    @IsString() 
    nomeRua      : string  
    @IsString() 
    rg           : string  
}

export class UpdateCriadorDTO{ 
    @IsString() @IsOptional() 
    cep          : string  
    @IsBoolean() @IsOptional()
    ativo        : boolean
    @IsString() @IsOptional()
    nomeBairro   : string  
    @IsString() @IsOptional()
    nomeCidade   : string  
    @IsString() @IsOptional()
    nomeCompleto : string  
    @IsString() @IsOptional()
    nomeEstado   : string  
    @IsString() @IsOptional()
    nomeRua      : string  
    @IsString() @IsOptional()
    rg           : string  
}

