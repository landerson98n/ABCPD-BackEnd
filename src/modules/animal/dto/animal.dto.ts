import { IsUUID, IsNotEmpty, IsString, IsBoolean, IsOptional, IsInt, IsDateString } from 'class-validator';

export class AnimalDTO {
  @IsUUID()
  @IsNotEmpty()
  criadorAnimal: string;

  @IsUUID()
  @IsNotEmpty()
  fazenda: string;

  @IsOptional()
  @IsUUID()
  mae?: string;

  @IsOptional()
  @IsUUID()
  pai?: string;

  @IsUUID()
  @IsNotEmpty()
  rebanho: string;

  @IsDateString()
  dataAvalicacao: string;

  @IsString()
  composicaoGenetica: string;

  @IsDateString()
  dataRGDAnimalSuper: string;

  @IsDateString()
  dataRGDAnimalTecnico: string;

  @IsDateString()
  dataRGNAnimalSuper: string;

  @IsDateString()
  dataRGNAnimalTecnico: string;

  @IsDateString()
  dataNascimentoAnimal: string;

  @IsString()
  decisaoAnimalSuperRGD: string;

  @IsString()
  decisaoAnimalSuperRGN: string;

  @IsString()
  decisaoAnimalTecnicoRGD: string;

  @IsString()
  decisaoAnimalTecnicoRGN: string;

  @IsNotEmpty()
  image01: string;

  @IsNotEmpty()
  image02: string;

  @IsString()
  image03: string;

  @IsString()
  image04: string;

  @IsString()
  nomeAnimal: string;

  @IsString()
  observacaoSuper: string;

  @IsString()
  observacaoTecnico: string;

  @IsString()
  pelagemAnimal: string;

  @IsString()
  racaAnimalMatriz: string;

  @IsBoolean()
  registradoRGDSuper: boolean;

  @IsBoolean()
  registradoRGDTecnico: boolean;

  @IsBoolean()
  registradoRGNSuper: boolean;

  @IsBoolean()
  registradoRGNTecnico: boolean;

  @IsString()
  registro: string;

  @IsString()
  registroGeral: string;

  @IsString()
  sexoAnimal: string;

  @IsInt()
  flag: number;
}

export class UpdateAnimalDTO {
  @IsOptional()
  @IsDateString()
  dataAvalicacao: string;

  @IsOptional()
  @IsString()
  composicaoGenetica: string;

  @IsOptional()
  @IsDateString()
  dataRGDAnimalSuper: string;

  @IsOptional()
  @IsDateString()
  dataRGDAnimalTecnico: string;

  @IsOptional()
  @IsDateString()
  dataRGNAnimalSuper: string;

  @IsOptional()
  @IsDateString()
  dataRGNAnimalTecnico: string;

  @IsOptional()
  @IsDateString()
  dataNascimentoAnimal: string;

  @IsOptional()
  @IsString()
  decisaoAnimalSuperRGD: string;

  @IsOptional()
  @IsString()
  decisaoAnimalSuperRGN: string;

  @IsOptional()
  @IsString()
  decisaoAnimalTecnicoRGD: string;

  @IsOptional()
  @IsString()
  decisaoAnimalTecnicoRGN: string;

  @IsOptional()
  @IsNotEmpty()
  image01: string;

  @IsOptional()
  @IsNotEmpty()
  image02: string;

  @IsOptional()
  @IsString()
  image03: string;

  @IsOptional()
  @IsString()
  image04: string;

  @IsOptional()
  @IsString()
  nomeAnimal: string;

  @IsOptional()
  @IsString()
  observacaoSuper: string;

  @IsOptional()
  @IsString()
  observacaoTecnico: string;

  @IsOptional()
  @IsString()
  pelagemAnimal: string;

  @IsOptional()
  @IsString()
  racaAnimalMatriz: string;

  @IsOptional()
  @IsBoolean()
  registradoRGDSuper: boolean;

  @IsOptional()
  @IsBoolean()
  registradoRGDTecnico: boolean;

  @IsOptional()
  @IsBoolean()
  registradoRGNSuper: boolean;

  @IsOptional()
  @IsBoolean()
  registradoRGNTecnico: boolean;

  @IsOptional()
  @IsString()
  registro: string;

  @IsOptional()
  @IsString()
  registroGeral: string;

  @IsOptional()
  @IsString()
  sexoAnimal: string;

  @IsOptional()
  @IsInt()
  flag: number;
}
