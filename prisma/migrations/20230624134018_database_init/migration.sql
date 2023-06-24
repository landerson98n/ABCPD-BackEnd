-- CreateTable
CREATE TABLE "animais" (
    "id" UUID NOT NULL,
    "criador_animal" TEXT NOT NULL,
    "fazenda" TEXT NOT NULL,
    "mae" TEXT NOT NULL,
    "pai" TEXT NOT NULL,
    "rebanho" TEXT NOT NULL,
    "ano_avalicacao" TIMESTAMP(3) NOT NULL,
    "composicao_genetica" TEXT NOT NULL,
    "data_RGD_animal_Super" TIMESTAMP(3) NOT NULL,
    "data_RGD_animal_Tecnico" TIMESTAMP(3) NOT NULL,
    "data_RGN_animal_Super" TIMESTAMP(3) NOT NULL,
    "data_RGN_animal_Tecnico" TIMESTAMP(3) NOT NULL,
    "data_nascimento_animal" TIMESTAMP(3) NOT NULL,
    "decisao_animal_Super_RGD" TEXT NOT NULL,
    "decisao_animal_Super_RGN" TEXT NOT NULL,
    "decisao_animal_Tecnico_RGD" TEXT NOT NULL,
    "decisao_animal_Tecnico_RGN" TEXT NOT NULL,
    "image_01" TEXT NOT NULL,
    "image_02" TEXT NOT NULL,
    "image_03" TEXT NOT NULL,
    "image_04" TEXT NOT NULL,
    "mes_avaliacao" TEXT NOT NULL,
    "nome_animal" TEXT NOT NULL,
    "observacao_Super" TEXT NOT NULL,
    "observacao_Tecnico" TEXT NOT NULL,
    "pelagem_animal" TEXT NOT NULL,
    "raca_animal_matriz" TEXT NOT NULL,
    "registrado_RGD_Super" BOOLEAN NOT NULL,
    "registrado_RGD_Tecnico" BOOLEAN NOT NULL,
    "registrado_RGN_Super" BOOLEAN NOT NULL,
    "registrado_RGN_Tecnico" BOOLEAN NOT NULL,
    "registro" TEXT NOT NULL,
    "registro_geral" TEXT NOT NULL,
    "sexo_animal" TEXT NOT NULL,

    CONSTRAINT "animais_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fazendas" (
    "id" UUID NOT NULL,
    "criador_cobertura" UUID NOT NULL,
    "area_fazenda" TEXT NOT NULL,
    "atualizacoes" TEXT NOT NULL,
    "como_chegar" TEXT NOT NULL,
    "data_documentacao" TIMESTAMP(3) NOT NULL,
    "fazenda_Cadastrada" BOOLEAN NOT NULL,
    "femeas_0_4_fazenda" INTEGER NOT NULL,
    "femeas_12_24_fazenda" INTEGER NOT NULL,
    "femeas_24_36_fazenda" INTEGER NOT NULL,
    "femeas_36_fazenda" INTEGER NOT NULL,
    "femeas_4_12_fazenda" INTEGER NOT NULL,
    "macho_0_4_fazenda" INTEGER NOT NULL,
    "macho_12_24_fazenda" INTEGER NOT NULL,
    "macho_24_36_fazenda" INTEGER NOT NULL,
    "macho_36_fazenda" INTEGER NOT NULL,
    "macho_4_12_fazenda" INTEGER NOT NULL,
    "municipio_fazenda" INTEGER NOT NULL,
    "nome_fazenda" TEXT NOT NULL,
    "observacoes" TEXT NOT NULL,
    "outrasEspecies" TEXT NOT NULL,
    "proponente_1" TEXT NOT NULL,
    "proponente_2" TEXT NOT NULL,
    "proponente_3" TEXT NOT NULL,
    "telefone_fazenda" TEXT NOT NULL,

    CONSTRAINT "fazendas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "bio_id" UUID NOT NULL,
    "cadastro" BOOLEAN NOT NULL,
    "dateJoined" TIMESTAMP(3) NOT NULL,
    "nome_primeiro" TEXT NOT NULL,
    "nome_ultimo" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL,
    "pessoa" BOOLEAN NOT NULL,
    "superusuario" BOOLEAN NOT NULL,
    "ultima_conexao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "superintendetes" (
    "id" UUID NOT NULL,
    "usuario_id" UUID NOT NULL,

    CONSTRAINT "superintendetes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tecnicos" (
    "id" UUID NOT NULL,
    "usuario_id" UUID NOT NULL,
    "nome_bairro" TEXT NOT NULL,
    "nome_cidade" TEXT NOT NULL,
    "nome_estado" TEXT NOT NULL,
    "nome_rua" TEXT NOT NULL,
    "nome_completo" TEXT NOT NULL,
    "rg" TEXT NOT NULL,

    CONSTRAINT "tecnicos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "criadores" (
    "id" UUID NOT NULL,
    "id_usuario" UUID NOT NULL,
    "cep" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL,
    "nome_bairro" TEXT NOT NULL,
    "nome_cidade" TEXT NOT NULL,
    "nome_completo" TEXT NOT NULL,
    "nome_estado" TEXT NOT NULL,
    "nome_rua" TEXT NOT NULL,
    "rg" TEXT NOT NULL,

    CONSTRAINT "criadores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comunicaoes_nascimentos" (
    "id" UUID NOT NULL,
    "cobertura_registrada" UUID NOT NULL,
    "criador_nascimento" UUID NOT NULL,
    "fazenda_nascimento" UUID NOT NULL,
    "matriz_animal" UUID NOT NULL,
    "reprodutor_animal" UUID NOT NULL,
    "tecnico_nascimento" UUID NOT NULL,
    "animal_bezerro" TEXT NOT NULL,
    "data_comunicacao" TIMESTAMP(3) NOT NULL,
    "data_nascimento" TIMESTAMP(3) NOT NULL,
    "finalizado_nascimento" BOOLEAN NOT NULL,
    "observacoes" TEXT NOT NULL,
    "status_nascimento" TEXT NOT NULL,

    CONSTRAINT "comunicaoes_nascimentos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comunicacoes_coberturas" (
    "id" UUID NOT NULL,
    "criador_cobertura" UUID NOT NULL,
    "fazenda_cobertura" UUID NOT NULL,
    "comprovante_pagamento" TEXT NOT NULL,
    "data_cobertura" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finalizado_cobertura" BOOLEAN NOT NULL,
    "nome_cobertura" TEXT NOT NULL,
    "observacoes" TEXT NOT NULL,
    "status_cobertura" TEXT NOT NULL,
    "tipo_cobertura" TEXT NOT NULL,

    CONSTRAINT "comunicacoes_coberturas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nome_animal" (
    "id" UUID NOT NULL,
    "animal_id" UUID NOT NULL,
    "causa" TEXT NOT NULL,
    "data_obito" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nomeAnimal" TEXT NOT NULL,

    CONSTRAINT "nome_animal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tranferir_animais" (
    "id" UUID NOT NULL,
    "adquirente" UUID NOT NULL,
    "animal" UUID NOT NULL,
    "fazenda_adquirente" UUID NOT NULL,
    "fazenda_transmitente" UUID NOT NULL,
    "transmitente" UUID NOT NULL,
    "data_transferencia" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nome_animal" TEXT NOT NULL,

    CONSTRAINT "tranferir_animais_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "solicitacoes_registros_animais_base" (
    "id" UUID NOT NULL,
    "criador" UUID NOT NULL,
    "tecnico" UUID NOT NULL,
    "estado_solicitacao" TEXT NOT NULL,

    CONSTRAINT "solicitacoes_registros_animais_base_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "registros_animais_base" (
    "id" UUID NOT NULL,
    "solicitacao" UUID NOT NULL,
    "quantidade_animais" INTEGER NOT NULL,

    CONSTRAINT "registros_animais_base_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rebanhos" (
    "id" UUID NOT NULL,
    "fazenda" UUID NOT NULL,
    "serie" TEXT NOT NULL,

    CONSTRAINT "rebanhos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SolicitacaoCadastroFazenda" (
    "id" UUID NOT NULL,
    "solicitacao_cadastro_criador_id" UUID NOT NULL,
    "area" TEXT NOT NULL,
    "como_chegar" TEXT NOT NULL,
    "data_documentacao" TEXT NOT NULL,
    "fazenda_cadastrada" TEXT NOT NULL,

    CONSTRAINT "SolicitacaoCadastroFazenda_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "certificados" (
    "id" UUID NOT NULL,
    "codigo" TEXT NOT NULL,

    CONSTRAINT "certificados_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Matrix" (
    "id" UUID NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Matrix_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "animais_id_key" ON "animais"("id");

-- CreateIndex
CREATE UNIQUE INDEX "animais_criador_animal_key" ON "animais"("criador_animal");

-- CreateIndex
CREATE UNIQUE INDEX "animais_fazenda_key" ON "animais"("fazenda");

-- CreateIndex
CREATE UNIQUE INDEX "animais_mae_key" ON "animais"("mae");

-- CreateIndex
CREATE UNIQUE INDEX "animais_pai_key" ON "animais"("pai");

-- CreateIndex
CREATE UNIQUE INDEX "animais_rebanho_key" ON "animais"("rebanho");

-- CreateIndex
CREATE UNIQUE INDEX "fazendas_id_key" ON "fazendas"("id");

-- CreateIndex
CREATE UNIQUE INDEX "fazendas_criador_cobertura_key" ON "fazendas"("criador_cobertura");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_cpf_key" ON "users"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "criadores_id_key" ON "criadores"("id");

-- CreateIndex
CREATE UNIQUE INDEX "criadores_id_usuario_key" ON "criadores"("id_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "comunicaoes_nascimentos_id_key" ON "comunicaoes_nascimentos"("id");

-- CreateIndex
CREATE UNIQUE INDEX "comunicacoes_coberturas_id_key" ON "comunicacoes_coberturas"("id");

-- CreateIndex
CREATE UNIQUE INDEX "comunicacoes_coberturas_criador_cobertura_key" ON "comunicacoes_coberturas"("criador_cobertura");

-- CreateIndex
CREATE UNIQUE INDEX "comunicacoes_coberturas_fazenda_cobertura_key" ON "comunicacoes_coberturas"("fazenda_cobertura");
