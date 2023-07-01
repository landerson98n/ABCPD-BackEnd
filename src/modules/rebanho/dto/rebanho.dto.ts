import { IsString, IsUUID, IsISO8601, IsBoolean, IsInt, IsNotEmpty } from "class-validator";

export class RebanhoDTO{

    @IsNotEmpty()
    @IsUUID()
    fazendaId : string 

    @IsString()
    @IsNotEmpty()
    serie     : string
}