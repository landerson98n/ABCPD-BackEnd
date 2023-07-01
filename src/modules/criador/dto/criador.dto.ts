import { IsUUID, IsISO8601 , IsNotEmpty, IsString, IsBoolean } from "class-validator"


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

