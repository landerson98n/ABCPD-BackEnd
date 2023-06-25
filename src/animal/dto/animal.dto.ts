import { IsUUID, IsISO8601 , IsNotEmpty, IsString, IsBoolean } from "class-validator"

export class AnimalDTO{
  @IsUUID()
  @IsNotEmpty()
  criadorAnimal           : string   

  @IsUUID()
  @IsNotEmpty()
  fazenda                 : string   

  @IsUUID()
  mae                     : string   

  @IsUUID()
  pai                     : string   

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