import { IsNotEmpty, IsString, IsUUID, IsISO8601, IsBoolean, IsInt, IsOptional } from "class-validator";

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

export class UpdateUserDTO{
    @IsOptional() @IsBoolean()
    cadastro      : boolean

    @IsOptional() @IsISO8601()
    dateJoined    : Date

    @IsOptional() @IsString()
    nomePrimeiro  : string     

    @IsOptional() @IsString()
    nomeUltimo    : string    

    @IsOptional() @IsString()
    email         : string    
    
    @IsOptional() @IsString()
    cpf           : string    

    @IsOptional() @IsString()
    username      : string  

    @IsOptional() @IsString()
    senha         : string  

    @IsOptional() @IsString()
    telefone      : string  

    @IsOptional() @IsBoolean()
    ativo         : boolean

    @IsOptional() @IsBoolean()
    pessoa        : boolean

    @IsOptional() @IsBoolean()
    superusuario  : boolean

    @IsOptional() @IsISO8601()
    ultimaConexao : Date
}