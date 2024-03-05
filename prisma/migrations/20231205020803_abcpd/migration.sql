-- CreateTable
CREATE TABLE "animais" (
    "id" UUID NOT NULL,
    "criador_animal" UUID NOT NULL,
    "fazenda" UUID NOT NULL,
    "mae" UUID,
    "pai" UUID,
    "rebanho" UUID NOT NULL,
    "data_avalicacao" TEXT NOT NULL,
    "composicao_genetica" TEXT,
    "data_RGD_animal_Super" TEXT,
    "data_RGD_animal_Tecnico" TEXT,
    "data_RGN_animal_Super" TEXT,
    "data_RGN_animal_Tecnico" TEXT NOT NULL,
    "data_nascimento_animal" TEXT NOT NULL,
    "decisao_animal_Super_RGD" TEXT,
    "decisao_animal_Super_RGN" TEXT,
    "decisao_animal_Tecnico_RGD" TEXT,
    "decisao_animal_Tecnico_RGN" TEXT NOT NULL,
    "image_01" TEXT NOT NULL,
    "image_02" TEXT NOT NULL,
    "image_03" TEXT NOT NULL,
    "image_04" TEXT NOT NULL,
    "nome_animal" TEXT NOT NULL,
    "observacao_Super" TEXT,
    "observacao_Tecnico" TEXT NOT NULL,
    "pelagem_animal" TEXT NOT NULL,
    "raca_animal_matriz" TEXT NOT NULL,
    "registrado_RGD_Super" BOOLEAN NOT NULL,
    "registrado_RGD_Tecnico" BOOLEAN NOT NULL,
    "registrado_RGN_Super" BOOLEAN NOT NULL,
    "registrado_RGN_Tecnico" BOOLEAN NOT NULL,
    "registro" TEXT NOT NULL,
    "registro_geral" TEXT,
    "sexo_animal" TEXT NOT NULL,
    "formaCabeca" INTEGER NOT NULL DEFAULT 0,
    "orelhasCabeca" INTEGER NOT NULL DEFAULT 0,
    "chifresCabeca" INTEGER NOT NULL DEFAULT 0,
    "formaPescoco" INTEGER NOT NULL DEFAULT 0,
    "barbelaPescoco" INTEGER NOT NULL DEFAULT 0,
    "morrilhoPescoco" INTEGER NOT NULL DEFAULT 0,
    "insercaoPescoco" INTEGER NOT NULL DEFAULT 0,
    "aparenciaGeral" INTEGER NOT NULL DEFAULT 0,
    "peso" INTEGER NOT NULL DEFAULT 0,
    "membrosAnterioresZoot" INTEGER NOT NULL DEFAULT 0,
    "membrosAnterioresRacial" INTEGER NOT NULL DEFAULT 0,
    "profundidadeTorax" INTEGER NOT NULL DEFAULT 0,
    "dorsoTorax" INTEGER NOT NULL DEFAULT 0,
    "lomboFlancoTorax" INTEGER NOT NULL DEFAULT 0,
    "traseira" INTEGER NOT NULL DEFAULT 0,
    "umbigo" INTEGER NOT NULL DEFAULT 0,
    "testiculoZoot" INTEGER NOT NULL DEFAULT 0,
    "testiculoUbere" INTEGER NOT NULL DEFAULT 0,
    "membrosPosteriores" INTEGER NOT NULL DEFAULT 0,
    "mucosa" INTEGER NOT NULL DEFAULT 0,
    "flag" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "animais_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fazendas" (
    "id" UUID NOT NULL,
    "criador_fazenda" UUID NOT NULL,
    "area_fazenda" TEXT NOT NULL,
    "atualizacoes" TEXT NOT NULL,
    "como_chegar" TEXT NOT NULL,
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
    "municipio_fazenda" TEXT NOT NULL,
    "nome_fazenda" TEXT NOT NULL,
    "observacoes" TEXT NOT NULL,
    "outrasEspecies" TEXT NOT NULL,
    "telefone_fazenda" TEXT NOT NULL,

    CONSTRAINT "fazendas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "dateJoined" TEXT NOT NULL,
    "nome_primeiro" TEXT NOT NULL,
    "nome_ultimo" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL,
    "pessoa" TEXT NOT NULL,
    "ultima_conexao" TEXT NOT NULL,

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
    "user_id" UUID NOT NULL,
    "cep" TEXT NOT NULL,
    "nome_bairro" TEXT NOT NULL,
    "nome_cidade" TEXT NOT NULL,
    "nome_completo" TEXT NOT NULL,
    "nome_estado" TEXT NOT NULL,
    "nome_rua" TEXT NOT NULL,
    "numero_casa" TEXT NOT NULL DEFAULT '',
    "asaas_id" TEXT NOT NULL DEFAULT '',
    "rg" TEXT NOT NULL,

    CONSTRAINT "criadores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comunicaoes_nascimentos" (
    "id" UUID NOT NULL,
    "cobertura_registrada_id" UUID NOT NULL,
    "criador_nascimento_id" UUID NOT NULL,
    "fazenda_nascimento_id" UUID NOT NULL,
    "matriz_animal_id" UUID NOT NULL,
    "reprodutor_animal_id" UUID NOT NULL,
    "tecnico_nascimento_id" UUID NOT NULL,
    "animal_bezerro" TEXT NOT NULL,
    "data_comunicacao" TEXT NOT NULL,
    "data_nascimento" TEXT NOT NULL,
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
    "comprovante_pagamento" BOOLEAN NOT NULL,
    "data_cobertura" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finalizado_cobertura" BOOLEAN NOT NULL,
    "nome_cobertura" TEXT NOT NULL,
    "observacoes" TEXT NOT NULL,
    "status_cobertura" TEXT NOT NULL,
    "tipo_cobertura" TEXT NOT NULL,

    CONSTRAINT "comunicacoes_coberturas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comunicacao_Obitos" (
    "id" UUID NOT NULL,
    "animal_id" UUID NOT NULL,
    "causa" TEXT NOT NULL,
    "data_obito" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nomeAnimal" TEXT NOT NULL,

    CONSTRAINT "comunicacao_Obitos_pkey" PRIMARY KEY ("id")
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
    "criador_id" UUID NOT NULL,
    "rebanho_id" UUID NOT NULL,
    "fazenda_id" UUID NOT NULL,
    "tecnico_id" UUID NOT NULL,
    "estado_solicitacao" TEXT NOT NULL,
    "quantidade_animais" INTEGER NOT NULL,

    CONSTRAINT "solicitacoes_registros_animais_base_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rebanhos" (
    "id" UUID NOT NULL,
    "fazenda_id" UUID NOT NULL,
    "criador_id" UUID NOT NULL,
    "serie" TEXT NOT NULL,

    CONSTRAINT "rebanhos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "solicitacao_cadastro_criado" (
    "id" UUID NOT NULL,
    "criado_id" UUID NOT NULL,
    "comprovante_pagamento" TEXT NOT NULL,

    CONSTRAINT "solicitacao_cadastro_criado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "solicitacao_cadastro_fazenda" (
    "id" UUID NOT NULL,
    "fazenda_id" UUID NOT NULL,
    "solicitacao_cadastro_criador_id" UUID NOT NULL,

    CONSTRAINT "solicitacao_cadastro_fazenda_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "certificados" (
    "id" UUID NOT NULL,
    "codigo" TEXT NOT NULL,

    CONSTRAINT "certificados_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "matrix" (
    "id" UUID NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "matrix_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AnimalToComunicacaoCobertura" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "animais_id_key" ON "animais"("id");

-- CreateIndex
CREATE UNIQUE INDEX "fazendas_id_key" ON "fazendas"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_cpf_key" ON "users"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "comunicacao_Obitos_animal_id_key" ON "comunicacao_Obitos"("animal_id");

-- CreateIndex
CREATE UNIQUE INDEX "rebanhos_serie_key" ON "rebanhos"("serie");

-- CreateIndex
CREATE UNIQUE INDEX "_AnimalToComunicacaoCobertura_AB_unique" ON "_AnimalToComunicacaoCobertura"("A", "B");

-- CreateIndex
CREATE INDEX "_AnimalToComunicacaoCobertura_B_index" ON "_AnimalToComunicacaoCobertura"("B");

-- AddForeignKey
ALTER TABLE "animais" ADD CONSTRAINT "animais_rebanho_fkey" FOREIGN KEY ("rebanho") REFERENCES "rebanhos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "animais" ADD CONSTRAINT "animais_pai_fkey" FOREIGN KEY ("pai") REFERENCES "animais"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "animais" ADD CONSTRAINT "animais_mae_fkey" FOREIGN KEY ("mae") REFERENCES "animais"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "animais" ADD CONSTRAINT "animais_fazenda_fkey" FOREIGN KEY ("fazenda") REFERENCES "fazendas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "animais" ADD CONSTRAINT "animais_criador_animal_fkey" FOREIGN KEY ("criador_animal") REFERENCES "criadores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fazendas" ADD CONSTRAINT "fazendas_criador_fazenda_fkey" FOREIGN KEY ("criador_fazenda") REFERENCES "criadores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "superintendetes" ADD CONSTRAINT "superintendetes_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tecnicos" ADD CONSTRAINT "tecnicos_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "criadores" ADD CONSTRAINT "criadores_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comunicaoes_nascimentos" ADD CONSTRAINT "comunicaoes_nascimentos_cobertura_registrada_id_fkey" FOREIGN KEY ("cobertura_registrada_id") REFERENCES "comunicacoes_coberturas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comunicaoes_nascimentos" ADD CONSTRAINT "comunicaoes_nascimentos_criador_nascimento_id_fkey" FOREIGN KEY ("criador_nascimento_id") REFERENCES "criadores"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comunicaoes_nascimentos" ADD CONSTRAINT "comunicaoes_nascimentos_fazenda_nascimento_id_fkey" FOREIGN KEY ("fazenda_nascimento_id") REFERENCES "fazendas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comunicaoes_nascimentos" ADD CONSTRAINT "comunicaoes_nascimentos_matriz_animal_id_fkey" FOREIGN KEY ("matriz_animal_id") REFERENCES "animais"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comunicaoes_nascimentos" ADD CONSTRAINT "comunicaoes_nascimentos_reprodutor_animal_id_fkey" FOREIGN KEY ("reprodutor_animal_id") REFERENCES "animais"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comunicaoes_nascimentos" ADD CONSTRAINT "comunicaoes_nascimentos_tecnico_nascimento_id_fkey" FOREIGN KEY ("tecnico_nascimento_id") REFERENCES "tecnicos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comunicacoes_coberturas" ADD CONSTRAINT "comunicacoes_coberturas_criador_cobertura_fkey" FOREIGN KEY ("criador_cobertura") REFERENCES "criadores"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comunicacoes_coberturas" ADD CONSTRAINT "comunicacoes_coberturas_fazenda_cobertura_fkey" FOREIGN KEY ("fazenda_cobertura") REFERENCES "fazendas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comunicacao_Obitos" ADD CONSTRAINT "comunicacao_Obitos_animal_id_fkey" FOREIGN KEY ("animal_id") REFERENCES "animais"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tranferir_animais" ADD CONSTRAINT "tranferir_animais_adquirente_fkey" FOREIGN KEY ("adquirente") REFERENCES "criadores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tranferir_animais" ADD CONSTRAINT "tranferir_animais_transmitente_fkey" FOREIGN KEY ("transmitente") REFERENCES "criadores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tranferir_animais" ADD CONSTRAINT "tranferir_animais_fazenda_adquirente_fkey" FOREIGN KEY ("fazenda_adquirente") REFERENCES "fazendas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tranferir_animais" ADD CONSTRAINT "tranferir_animais_fazenda_transmitente_fkey" FOREIGN KEY ("fazenda_transmitente") REFERENCES "fazendas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tranferir_animais" ADD CONSTRAINT "tranferir_animais_animal_fkey" FOREIGN KEY ("animal") REFERENCES "animais"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solicitacoes_registros_animais_base" ADD CONSTRAINT "solicitacoes_registros_animais_base_criador_id_fkey" FOREIGN KEY ("criador_id") REFERENCES "criadores"("id") ON DELETE SET DEFAULT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solicitacoes_registros_animais_base" ADD CONSTRAINT "solicitacoes_registros_animais_base_rebanho_id_fkey" FOREIGN KEY ("rebanho_id") REFERENCES "rebanhos"("id") ON DELETE SET DEFAULT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solicitacoes_registros_animais_base" ADD CONSTRAINT "solicitacoes_registros_animais_base_fazenda_id_fkey" FOREIGN KEY ("fazenda_id") REFERENCES "fazendas"("id") ON DELETE SET DEFAULT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solicitacoes_registros_animais_base" ADD CONSTRAINT "solicitacoes_registros_animais_base_tecnico_id_fkey" FOREIGN KEY ("tecnico_id") REFERENCES "tecnicos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rebanhos" ADD CONSTRAINT "rebanhos_fazenda_id_fkey" FOREIGN KEY ("fazenda_id") REFERENCES "fazendas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rebanhos" ADD CONSTRAINT "rebanhos_criador_id_fkey" FOREIGN KEY ("criador_id") REFERENCES "criadores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solicitacao_cadastro_criado" ADD CONSTRAINT "solicitacao_cadastro_criado_criado_id_fkey" FOREIGN KEY ("criado_id") REFERENCES "criadores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solicitacao_cadastro_fazenda" ADD CONSTRAINT "solicitacao_cadastro_fazenda_fazenda_id_fkey" FOREIGN KEY ("fazenda_id") REFERENCES "fazendas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solicitacao_cadastro_fazenda" ADD CONSTRAINT "solicitacao_cadastro_fazenda_solicitacao_cadastro_criador__fkey" FOREIGN KEY ("solicitacao_cadastro_criador_id") REFERENCES "solicitacao_cadastro_criado"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AnimalToComunicacaoCobertura" ADD CONSTRAINT "_AnimalToComunicacaoCobertura_A_fkey" FOREIGN KEY ("A") REFERENCES "animais"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AnimalToComunicacaoCobertura" ADD CONSTRAINT "_AnimalToComunicacaoCobertura_B_fkey" FOREIGN KEY ("B") REFERENCES "comunicacoes_coberturas"("id") ON DELETE CASCADE ON UPDATE CASCADE;
