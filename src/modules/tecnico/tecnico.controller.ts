import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Param,
  ConflictException,
  UnauthorizedException,
  NotFoundException,
  ParseUUIDPipe,
  Put,
} from '@nestjs/common';
import { TecnicoService } from './tecnico.service';
import { TecnicoDTO, UpdateTecnicoDTO } from './dto/tecnico.dto';
import { UserService } from '../user/user.service';
import { hash } from 'bcrypt';
import { UpdateUserDTO, UserDTO } from '../user/dto';
import { ActiveUserId } from 'src/shared/decorators/ActiverUserId';

@Controller('tecnico')
export class TecnicoController {
  constructor(private tecnicoService: TecnicoService, private readonly userService: UserService) {}

  @Post('cadastrar-tecnico')
  async cadastrarTecnico(
    @Body()
    tecnicoDTO: TecnicoDTO,
    @Body()
    userDTO: UserDTO,
    @ActiveUserId() userId: string,
  ) {
    const { nomePrimeiro, nomeUltimo, email, cpf, username, senha, telefone, dateJoined, ultimaConexao } = userDTO;
    const { nomeBairro, nomeCidade, nomeEstado, nomeRua, nomeCompleto, rg } = tecnicoDTO;

    if (
      nomePrimeiro === '' ||
      nomeUltimo === '' ||
      email === '' ||
      cpf === '' ||
      username === '' ||
      senha === '' ||
      telefone === '' ||
      dateJoined === '' ||
      ultimaConexao === '' ||
      nomeBairro === '' ||
      nomeCidade === '' ||
      nomeEstado === '' ||
      nomeRua === '' ||
      nomeCompleto === '' ||
      rg === ''
    ) {
      throw new UnauthorizedException('Existe um campo vazio.');
    }

    const user = await this.userService.getUserBydId(userId);

    if (!(user.pessoa === 'Superintendente')) {
      throw new UnauthorizedException();
    }

    const emailTaken = await this.userService.getUserEmail(email);

    if (emailTaken) {
      throw new ConflictException('This email is already in use');
    }

    const validarCPF = this.validarCPF(cpf);

    if (!validarCPF) {
      throw new NotFoundException('CPF inválido!');
    }

    const haskedSenha = await hash(senha, 12);

    const createdUser = await this.userService.cadastrarUser({
      dateJoined,
      nomePrimeiro,
      nomeUltimo,
      email,
      cpf,
      username,
      senha: haskedSenha,
      telefone,
      ativo: true,
      pessoa: 'Tecnico',
      ultimaConexao,
    });

    const { id } = createdUser;

    return this.tecnicoService.cadastrarTecnico({
      userId: id,
      nomeBairro,
      nomeCidade,
      nomeEstado,
      nomeRua,
      nomeCompleto,
      rg,
    });
  }

  @Get('get-tecnicos')
  async getTecnicoes(@ActiveUserId() userId: string) {
    const user = await this.userService.getUserBydId(userId);

    if (!user) {
      throw new NotFoundException();
    }

    return this.tecnicoService.getTecnicos();
  }

  @Get('get-tecnico-by-id/:id')
  async getTecnicoById(
    @Param('id', ParseUUIDPipe)
    id: string,
    @ActiveUserId() userId: string,
  ) {
    const user = await this.userService.getUserBydId(userId);

    if (!(user.pessoa === 'Superintendente')) {
      throw new UnauthorizedException();
    }

    const userSuperintendenteService = await this.tecnicoService.getTecnicoBydId(id);

    if (!userSuperintendenteService) {
      throw new NotFoundException('Usuário não existe!');
    }

    return userSuperintendenteService;
  }

  @Put('update-tecnico/:id')
  async updateTecnico(
    @Body() updateTecnicoDTO: UpdateTecnicoDTO,
    @Body() updateUserDTO: UpdateUserDTO,
    @Param('id', ParseUUIDPipe) useParamId: string,
  ) {
    const { nomePrimeiro, nomeUltimo, username, senha, telefone, dateJoined, ultimaConexao } = updateUserDTO;
    const { nomeBairro, nomeCidade, nomeEstado, nomeRua, nomeCompleto, rg } = updateTecnicoDTO;

    if (
      nomePrimeiro === '' ||
      nomeUltimo === '' ||
      username === '' ||
      senha === '' ||
      telefone === '' ||
      dateJoined === '' ||
      ultimaConexao === '' ||
      nomeBairro === '' ||
      nomeCidade === '' ||
      nomeEstado === '' ||
      nomeRua === '' ||
      nomeCompleto === '' ||
      rg === ''
    ) {
      throw new UnauthorizedException('Existe um campo vazio.');
    }

    const haskedSenha = await hash(senha, 12);

    const tecnico = await this.tecnicoService.getTecnicoBydId(useParamId);

    if (!tecnico) {
      throw new NotFoundException('Usuário não existe!');
    }

    const user = await this.userService.getUserBydId(tecnico.userId);

    if (user.pessoa !== 'Superintendente') {
      throw new UnauthorizedException();
    }

    await this.userService.updateUser(
      {
        dateJoined,
        nomePrimeiro,
        nomeUltimo,
        username,
        senha: haskedSenha,
        telefone,
        ativo: true,
        pessoa: 'Tecnico',
        ultimaConexao,
      },
      user.id,
    );

    return this.tecnicoService.updateTecnico(
      {
        nomeBairro,
        nomeCidade,
        nomeEstado,
        nomeRua,
        nomeCompleto,
        rg,
      },
      useParamId,
    );
  }

  @Delete('delete-tecnico/:id')
  async deleteTecnico(@Param('id', ParseUUIDPipe) useParamId: string, @ActiveUserId() userId: string) {
    const userAutentication = await this.userService.getUserBydId(userId);

    if (!(userAutentication.pessoa === 'Superintendente')) {
      throw new UnauthorizedException();
    }

    const tecnico = await this.tecnicoService.getTecnicoBydId(useParamId);

    if (!tecnico) {
      throw new NotFoundException('Usuário não existe!');
    }

    const user = await this.userService.getUserBydId(tecnico.userId);

    this.tecnicoService.deleteTecnico(useParamId);
    this.userService.deleteUser(user.id);

    return null;
  }

  private validarCPF(cpf: string): boolean {
    // Removendo pontos e traços para obter apenas os dígitos
    const cpfLimpo = cpf.replace(/[.-]/g, '');

    // Verificando o formato do CPF (11 dígitos)
    const regexCPF = /^[0-9]{11}$/;
    if (!regexCPF.test(cpfLimpo)) {
      return false;
    }

    // Verificando dígitos repetidos (uma característica de CPF inválido)
    const digitosRepetidos = /^(.)\1+$/;
    if (digitosRepetidos.test(cpfLimpo)) {
      return false;
    }

    // Aplicando a fórmula de verificação do dígito
    const digitos = cpfLimpo.split('').map(Number);

    let soma = 0;
    let peso = 10;

    for (let i = 0; i < 9; i++) {
      soma += digitos[i] * peso;
      peso--;
    }

    let resto = soma % 11;
    const digitoVerificador1 = resto < 2 ? 0 : 11 - resto;

    if (digitoVerificador1 !== digitos[9]) {
      return false;
    }

    soma = 0;
    peso = 11;

    for (let i = 0; i < 10; i++) {
      soma += digitos[i] * peso;
      peso--;
    }

    resto = soma % 11;
    const digitoVerificador2 = resto < 2 ? 0 : 11 - resto;

    return digitoVerificador2 === digitos[10];
  }
}
