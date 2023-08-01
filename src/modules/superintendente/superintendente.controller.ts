import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Param,
  ConflictException,
  ParseUUIDPipe,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { SuperintendenteService } from './superintendente.service';
import { UserService } from '../user/user.service';
import { UserDTO } from '../user/dto';
import { hash } from 'bcrypt';

@Controller('superintendente')
export class SuperintendenteController {
  constructor(
    private readonly superintendenteService: SuperintendenteService,
    private readonly userService: UserService,
  ) {}

  @Post('cadastrar-superintendente')
  async cadastrarSuperintendente(
    @Body()
    userDTO: UserDTO,
  ) {
    const { nomePrimeiro, nomeUltimo, email, cpf, username, senha, telefone, dateJoined, ultimaConexao } = userDTO;

    if (
      nomePrimeiro === '' ||
      nomeUltimo === '' ||
      email === '' ||
      cpf === '' ||
      username === '' ||
      senha === '' ||
      telefone === '' ||
      dateJoined === '' ||
      ultimaConexao === ''
    ) {
      throw new UnauthorizedException('Existe um campo vazio.');
    }

    const emailTaken = await this.userService.getUserEmail(email);

    if (emailTaken) {
      throw new ConflictException('This email is already in use');
    }

    const haskedSenha = await hash(senha, 12);

    const validarCPF = this.validarCPF(cpf);

    if (!validarCPF) {
      throw new NotFoundException('CPF inválido!');
    }

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
      pessoa: 'Superintendente',
      ultimaConexao,
    });

    const { id } = createdUser;

    await this.superintendenteService.cadastrarSuperintendente({
      userId: id,
    });

    return null;
  }

  @Get('getSuperintendentes')
  getSuperintendentees() {
    return this.superintendenteService.getSuperintendentes();
  }

  @Get('getSuperintendenteById/:id')
  async getSuperintendenteById(
    @Param('id', ParseUUIDPipe)
    id: string,
  ) {
    const user = await this.superintendenteService.getSuperintendenteById(id);

    if (!user) {
      throw new NotFoundException('Usuário não existe!');
    }

    return user;
  }

  @Delete('deleteSuperintendente/:id')
  async deleteSuperintendente(
    @Param('id', ParseUUIDPipe)
    id: string,
  ) {
    const { userId } = await this.superintendenteService.getSuperintendenteById(id);

    if (!userId) {
      throw new NotFoundException('Usuário não existe!');
    }

    this.superintendenteService.deleteSuperintendente(id);
    this.userService.deleteUser(userId);

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
