import { IsUUID, IsISO8601 , IsNotEmpty, IsString, IsBoolean, IsOptional } from "class-validator"

export class AnimalDTO{
  @IsUUID()
  @IsNotEmpty()
  criadorAnimal           : string   

  @IsUUID()
  @IsNotEmpty()
  fazenda                 : string   

  @IsOptional()
  @IsUUID()
  mae?                     : string   

  @IsOptional()
  @IsUUID()
  pai?                     : string   

  @IsUUID()
  @IsNotEmpty()
  rebanho                 : string 
  
  @IsISO8601()
  dataAvalicacao          : Date 
  
  @IsString()
  composicaoGenetica      : string   

  @IsISO8601()
  dataRGDAnimalSuper      : Date 

  @IsISO8601()
  dataRGDAnimalTecnico    : Date 

  @IsISO8601()
  dataRGNAnimalSuper      : Date 

  @IsISO8601()
  dataRGNAnimalTecnico    : Date 

  @IsISO8601()
  dataNascimentoAnimal    : Date 

  @IsString()
  decisaoAnimalSuperRGD   : string 
  
  @IsString()
  decisaoAnimalSuperRGN   : string 

  @IsString()  
  decisaoAnimalTecnicoRGD : string  
  
  @IsString()
  decisaoAnimalTecnicoRGN : string  
   
  @IsNotEmpty()
  image01                 : string  

  @IsNotEmpty()
  image02                 : string 
  
  @IsString()
  image03                 : string   

  @IsString()
  image04                 : string  
  
  @IsString()
  nomeAnimal              : string
  
  @IsString()
  observacaoSuper         : string  
  @IsString() 
  observacaoTecnico       : string 
  @IsString()  
  pelagemAnimal           : string 
  @IsString()  
  racaAnimalMatriz        : string  
  @IsBoolean() 
  registradoRGDSuper      : boolean 
  @IsBoolean()  
  registradoRGDTecnico    : boolean  
  @IsBoolean() 
  registradoRGNSuper      : boolean  
  @IsBoolean() 
  registradoRGNTecnico    : boolean  
  @IsString()
  registro                : string
  @IsString()
  registroGeral           : string 
  @IsString()  
  sexoAnimal              : string   

}

export class UpdateAnimalDTO{
  @IsOptional()
  @IsISO8601()
  dataAvalicacao          : Date 
  
  @IsOptional()
  @IsString()
  composicaoGenetica      : string   

  @IsOptional()
  @IsISO8601()
  dataRGDAnimalSuper      : Date 

  @IsOptional()
  @IsISO8601()
  dataRGDAnimalTecnico    : Date 

  @IsOptional()
  @IsISO8601()
  dataRGNAnimalSuper      : Date 

  @IsOptional()
  @IsISO8601()
  dataRGNAnimalTecnico    : Date 

  @IsOptional()
  @IsISO8601()
  dataNascimentoAnimal    : Date 

  @IsOptional()
  @IsString()
  decisaoAnimalSuperRGD   : string 
  
  @IsOptional()
  @IsString()
  decisaoAnimalSuperRGN   : string 

  @IsOptional()
  @IsString()  
  decisaoAnimalTecnicoRGD : string  
  
  @IsOptional()
  @IsString()
  decisaoAnimalTecnicoRGN : string  
   
  @IsOptional()
  @IsNotEmpty()
  image01                 : string  

  @IsOptional()
  @IsNotEmpty()
  image02                 : string 
  
  @IsOptional()
  @IsString()
  image03                 : string   

  @IsOptional()
  @IsString()
  image04                 : string  
  
  @IsOptional()
  @IsString()
  nomeAnimal              : string
  
  @IsOptional()
  @IsString()
  observacaoSuper         : string  

  @IsOptional()
  @IsString() 
  observacaoTecnico       : string 

  @IsOptional()
  @IsString()  
  pelagemAnimal           : string 

  @IsOptional()
  @IsString()  
  racaAnimalMatriz        : string  

  @IsOptional()
  @IsBoolean() 
  registradoRGDSuper      : boolean 

  @IsOptional()
  @IsBoolean()  
  registradoRGDTecnico    : boolean  

  @IsOptional()
  @IsBoolean() 
  registradoRGNSuper      : boolean  

  @IsOptional()
  @IsBoolean() 
  registradoRGNTecnico    : boolean  

  @IsOptional()
  @IsString()
  registro                : string

  @IsOptional()
  @IsString()
  registroGeral           : string 

  @IsOptional()
  @IsString()  
  sexoAnimal              : string   
}

