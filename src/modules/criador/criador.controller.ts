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
  BadRequestException,
} from '@nestjs/common';
import { CriadorService } from './criador.service';
import { CriadorDTO, UpdateCriadorDTO } from './dto/criador.dto';
import { ActiveUserId } from 'src/shared/decorators/ActiverUserId';
import { UpdateUserDTO, UserDTO } from '../user/dto';
import { UserService } from '../user/user.service';
import { hash } from 'bcrypt';
import fetch from 'node-fetch';
import { PaymentDTO } from './dto/payment.dto';

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

    const { nomeBairro, nomeCidade, nomeEstado, nomeRua, nomeCompleto, rg, cep, numeroCasa } = criadorDTO;

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
      !cep ||
      !numeroCasa
    ) {
      throw new UnauthorizedException('Existe um campo vazio.');
    }

    const emailTaken = await this.userService.getUserEmail(email);

    if (emailTaken) {
      throw new ConflictException('Email já cadastrado!');
    }

    const cpfTaken = await this.userService.getUserCpf(cpf);

    if (cpfTaken) {
      throw new ConflictException('CPF já cadastrado!');
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

    const url = `${process.env.BASE_URL_ASAAS}/customers`;
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        access_token: process.env.TOKEN_ASAAS,
      },
      body: JSON.stringify({
        name: `${nomePrimeiro} ${nomeUltimo} `,
        email,
        cpfCnpj: cpf,
      }),
    };

    const { id } = createdUser;

    const criador = this.criadorService.cadastrarCriador({
      userId: id,
      nomeBairro,
      nomeCidade,
      nomeEstado,
      nomeRua,
      nomeCompleto,
      rg,
      cep,
      numeroCasa,
    });

    fetch(url, options)
      .then((res) => res.json())
      .then(async (json) => {
        await this.criadorService.updateCriador(
          {
            nomeBairro,
            nomeCidade,
            nomeEstado,
            nomeRua,
            nomeCompleto,
            rg,
            cep,
            asaasId: json.id,
          },
          (
            await criador
          ).id,
        );
      })
      .catch((err) => console.error('error:' + err));

    return criador;
  }

  @Get('get-criadores')
  async getCriadores(@ActiveUserId() userId: string) {
    const user = await this.userService.getUserBydId(userId);

    if ((user.pessoa === 'Criadores')) {
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

  @Get('get-criador-user/:id')
  async getCriadorByUserId(
    @Param('id', ParseUUIDPipe)
    id: string,
    @ActiveUserId() userId: string,
  ) {
    const user = await this.userService.getUserBydId(userId);

    if (!(user.pessoa === 'Criador')) {
      throw new UnauthorizedException();
    }

    const userCriadorService = await this.criadorService.getCriadorByUserId(id);

    if (!userCriadorService) {
      throw new NotFoundException('Criador não existe!');
    }


    
    return userCriadorService;
  }


  @SetMetadata('IS_PUBLIC', true)
  @Post('payment/:id')
  async payment(
    @Body()
    paymentDTO: PaymentDTO,
    @Param('id', ParseUUIDPipe)
    id: string,
  ) {
    const { billingType, value, holderName, number, expiryMonth, expiryYear, ccv, remoteIp } = paymentDTO;
    const criador = await this.criadorService.getCriadorBydId(id);

    if (!criador) {
      throw new NotFoundException('Criador não existe!');
    }
    const user = await this.userService.getUserBydId(criador.userId);
    const dataAtual = new Date();
    const diaAtual = dataAtual.getDate();
    let dataAlvo = new Date(dataAtual);
    dataAlvo.setDate(diaAtual + 3);
    if (dataAlvo.getMonth() !== dataAtual.getMonth()) {
      dataAlvo = new Date(dataAtual.getFullYear(), dataAtual.getMonth() + 1, 0);
    }

    const dueDate = dataAlvo;

    if (billingType == 'BOLETO') {
      const url = `${process.env.BASE_URL_ASAAS}/payments`;
      const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          access_token: process.env.TOKEN_ASAAS,
        },
        body: JSON.stringify({
          billingType: 'BOLETO',
          customer: criador.asaasId,
          dueDate,
          value,
          postalService: false,
        }),
      };

      try {
        const response = await fetch(url, options);
        const jsonData = await response.json();
        return jsonData;
      } catch (error) {
        return { error: 'Erro ao fazer a requisição' };
      }
    }

    if (billingType == 'CREDIT_CARD') {
      const url = `${process.env.BASE_URL_ASAAS}/payments`;
      const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          access_token: process.env.TOKEN_ASAAS,
        },
        body: JSON.stringify({
          billingType: 'CREDIT_CARD',
          customer: criador.asaasId,
          dueDate,
          value,
          postalService: false,
          creditCard: {
            holderName,
            number,
            expiryMonth,
            expiryYear,
            ccv,
          },
          creditCardHolderInfo: {
            name: criador.nomeCompleto,
            email: user.email,
            cpfCnpj: user.cpf,
            postalCode: criador.cep,
            addressNumber: criador.numeroCasa,
            phone: user.telefone,
            remoteIp,
          },
        }),
      };

      try {
        const response = await fetch(url, options);
        const jsonData = await response.json();
        return jsonData;
      } catch (error) {
        return { error: 'Erro ao fazer a requisição' };
      }
    }

    if (billingType == 'PIX') {
      const url = `${process.env.BASE_URL_ASAAS}/payments`;
      const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          access_token: process.env.TOKEN_ASAAS,
        },
        body: JSON.stringify({
          billingType: 'UNDEFINED',
          customer: criador.asaasId,
          dueDate,
          value,
          postalService: false,
        }),
      };

      const pagamento = await fetch(url, options)
        .then((res) => res.json())
        .then((json) => {
          return json;
        });

      const urlPix = `${process.env.BASE_URL_ASAAS}/payments/${pagamento.id}/pixQrCode`;
      const optionsPix = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          access_token: process.env.TOKEN_ASAAS,
        },
      };

      try {
        const response = await fetch(urlPix, optionsPix);
        const jsonData = await response.json();
        return jsonData;
      } catch (error) {
        return { error: 'Erro ao fazer a requisição' };
      }
    }
  }

  @Post('webhook/:id')
  async webhooks(
    @Body()
    paymentDTO: PaymentDTO,
    @Param('id', ParseUUIDPipe)
    id: string,
  ) {}

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
        asaasId: criador.asaasId,
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

    const url = `${process.env.BASE_URL_ASAAS}/customers/${criador.asaasId}`;
    const options = {
      method: 'DELETE',
      headers: {
        accept: 'application/json',
        access_token: process.env.TOKEN_ASAAS,
      },
    };

    fetch(url, options);

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
