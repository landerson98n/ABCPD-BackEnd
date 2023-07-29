import {
  Controller,
  Body,
  Post,
  Get,
  Delete,
  Param,
  UnauthorizedException,
  ConflictException,
  NotFoundException,
  ParseUUIDPipe,
  Put,
  SetMetadata,
} from '@nestjs/common';
import { CriadorService } from './criador.service';
import { CriadorDTO, UpdateCriadorDTO } from './dto/criador.dto';
import { ActiveUserId } from 'src/shared/decorators/ActiverUserId';
import { UpdateUserDTO, UserDTO } from '../user/dto';
import { UserService } from '../user/user.service';
import { hash } from 'bcrypt';

@Controller('criador')
export class CriadorController {
  constructor(private criadorService: CriadorService, private readonly userService: UserService) {}

  @Post('cadastrar-criador')
  @SetMetadata('IS_PUBLIC', true)
  async cadastrarCriador(
    @Body()
    criadorDTO: CriadorDTO,
    @Body()
    userDTO: UserDTO,
  ) {
    const { nomePrimeiro, nomeUltimo, email, cpf, username, senha, telefone, dateJoined, ultimaConexao } = userDTO;

    const { nomeBairro, nomeCidade, nomeEstado, nomeRua, nomeCompleto, rg, cep } = criadorDTO;

    if (
      !nomePrimeiro ||
      !nomeUltimo ||
      !email ||
      !cpf ||
      !username ||
      !senha ||
      !telefone ||
      !dateJoined ||
      !ultimaConexao ||
      !nomeBairro ||
      !nomeCidade ||
      !nomeEstado ||
      !nomeRua ||
      !nomeCompleto ||
      !rg ||
      !cep
    ) {
      throw new UnauthorizedException('Existe um campo vazio.');
    }

    const emailTaken = await this.userService.getUserEmail(email);

    if (emailTaken) {
      throw new ConflictException('Email já cadastrado!');
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
      pessoa: 'Criador',
      ultimaConexao,
    });

    const { id } = createdUser;

    return this.criadorService.cadastrarCriador({
      userId: id,
      nomeBairro,
      nomeCidade,
      nomeEstado,
      nomeRua,
      nomeCompleto,
      rg,
      cep,
    });
  }

  @Get('get-criadores')
  async getCriadores(@ActiveUserId() userId: string) {
    const user = await this.userService.getUserBydId(userId);

    if (!(user.pessoa === 'Tecnico')) {
      throw new UnauthorizedException();
    }

    return this.criadorService.getCriadores();
  }

  @Get('get-criador/:id')
  async getCriadorById(
    @Param('id', ParseUUIDPipe)
    id: string,
    @ActiveUserId() userId: string,
  ) {
    const user = await this.userService.getUserBydId(userId);

    if (!(user.pessoa === 'Tecnico')) {
      throw new UnauthorizedException();
    }

    const userCriadorService = await this.criadorService.getCriadorBydId(id);

    if (!userCriadorService) {
      throw new NotFoundException('Criador não existe!');
    }

    return userCriadorService;
  }

  @Put('update-criador/:id')
  async updateCriador(
    @Body()
    updateCriadorDTO: UpdateCriadorDTO,
    @Body() updateUserDTO: UpdateUserDTO,
    @Param('id', ParseUUIDPipe) useParamId: string,
    @ActiveUserId() userId: string,
  ) {
    const { nomePrimeiro, nomeUltimo, username, senha, telefone, dateJoined, ultimaConexao } = updateUserDTO;

    const { nomeBairro, nomeCidade, nomeEstado, nomeRua, nomeCompleto, rg, cep } = updateCriadorDTO;

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
      rg === '' ||
      cep === ''
    ) {
      throw new UnauthorizedException('Existe um campo vazio.');
    }

    const criador = await this.criadorService.getCriadorBydId(useParamId);

    if (!criador) {
      throw new NotFoundException('Criador não existe!');
    }

    const user = await this.userService.getUserBydId(userId);

    if (!(user.pessoa === 'Tecnico')) {
      throw new UnauthorizedException();
    }

    const haskedSenha = await hash(senha, 12);

    await this.userService.updateUser(
      {
        dateJoined,
        nomePrimeiro,
        nomeUltimo,
        username,
        senha: haskedSenha,
        telefone,
        ativo: true,
        pessoa: 'Criador',
        ultimaConexao,
      },
      criador.userId,
    );

    return await this.criadorService.updateCriador(
      {
        nomeBairro,
        nomeCidade,
        nomeEstado,
        nomeRua,
        nomeCompleto,
        rg,
        cep,
      },
      useParamId,
    );
  }

  @Delete('delete-criador/:id')
  async deleteCriador(
    @Param('id', ParseUUIDPipe)
    useParamId: string,
    @ActiveUserId() userId: string,
  ) {
    const userAutentication = await this.userService.getUserBydId(userId);

    if (userAutentication.pessoa !== 'Tecnico') {
      throw new UnauthorizedException();
    }

    const criador = await this.criadorService.getCriadorBydId(useParamId);

    if (!criador) {
      throw new NotFoundException('Usuário não existe!');
    }

    const user = await this.userService.getUserBydId(criador.userId);

    this.criadorService.deleteCriador(useParamId);
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
