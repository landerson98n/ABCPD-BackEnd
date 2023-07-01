import { IsNotEmpty, IsString, IsUUID, IsISO8601, IsBoolean, IsInt } from "class-validator";

export class UserDTO{
    @IsBoolean()
    cadastro      : boolean

    @IsISO8601()
    dateJoined    : Date

    @IsString()
    nomePrimeiro  : string     

    @IsString()
    nomeUltimo    : string    

    @IsString()
    email         : string    
    
    @IsString()
    cpf           : string    

    @IsString()
    username      : string  

    @IsString()
    senha         : string  

    @IsString()
    telefone      : string  

    @IsBoolean()
    ativo         : boolean

    @IsBoolean()
    pessoa        : boolean

    @IsBoolean()
    superusuario  : boolean

    @IsISO8601()
    ultimaConexao : Date
}