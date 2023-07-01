import { IsString, IsUUID, IsISO8601, IsBoolean, IsInt, IsNotEmpty, IsOptional } from "class-validator";

export class RebanhoDTO{

    @IsNotEmpty()
    @IsUUID()
    fazendaId : string 

    @IsString()
    @IsNotEmpty()
    serie     : string
}

export class UpdateRebanhoDTO{ 

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    serie     : string
}