/*
  Warnings:

  - You are about to drop the column `cobertura_registrada` on the `comunicaoes_nascimentos` table. All the data in the column will be lost.
  - You are about to drop the column `criador_nascimento` on the `comunicaoes_nascimentos` table. All the data in the column will be lost.
  - You are about to drop the column `fazenda_nascimento` on the `comunicaoes_nascimentos` table. All the data in the column will be lost.
  - You are about to drop the column `matriz_animal` on the `comunicaoes_nascimentos` table. All the data in the column will be lost.
  - You are about to drop the column `reprodutor_animal` on the `comunicaoes_nascimentos` table. All the data in the column will be lost.
  - You are about to drop the column `tecnico_nascimento` on the `comunicaoes_nascimentos` table. All the data in the column will be lost.
  - You are about to drop the column `id_usuario` on the `criadores` table. All the data in the column will be lost.
  - You are about to drop the column `fazenda` on the `rebanhos` table. All the data in the column will be lost.
  - You are about to drop the column `criador` on the `solicitacoes_registros_animais_base` table. All the data in the column will be lost.
  - You are about to drop the column `tecnico` on the `solicitacoes_registros_animais_base` table. All the data in the column will be lost.
  - You are about to drop the column `bio_id` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `Matrix` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SolicitacaoCadastroFazenda` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `nome_animal` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `criador_animal` on the `animais` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `fazenda` on the `animais` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `mae` on the `animais` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `pai` on the `animais` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `rebanho` on the `animais` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `cobertura_registrada_id` to the `comunicaoes_nascimentos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `criador_nascimento_id` to the `comunicaoes_nascimentos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fazenda_nascimento_id` to the `comunicaoes_nascimentos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `matriz_animal_id` to the `comunicaoes_nascimentos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reprodutor_animal_id` to the `comunicaoes_nascimentos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tecnico_nascimento_id` to the `comunicaoes_nascimentos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `criadores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fazenda_id` to the `rebanhos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `criador_id` to the `solicitacoes_registros_animais_base` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tecnico_id` to the `solicitacoes_registros_animais_base` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "comunicacoes_coberturas_criador_cobertura_key";

-- DropIndex
DROP INDEX "comunicacoes_coberturas_fazenda_cobertura_key";

-- DropIndex
DROP INDEX "comunicacoes_coberturas_id_key";

-- DropIndex
DROP INDEX "comunicaoes_nascimentos_id_key";

-- DropIndex
DROP INDEX "criadores_id_key";

-- DropIndex
DROP INDEX "criadores_id_usuario_key";

-- AlterTable
ALTER TABLE "animais" DROP COLUMN "criador_animal",
ADD COLUMN     "criador_animal" UUID NOT NULL,
DROP COLUMN "fazenda",
ADD COLUMN     "fazenda" UUID NOT NULL,
DROP COLUMN "mae",
ADD COLUMN     "mae" UUID NOT NULL,
DROP COLUMN "pai",
ADD COLUMN     "pai" UUID NOT NULL,
DROP COLUMN "rebanho",
ADD COLUMN     "rebanho" UUID NOT NULL;

-- AlterTable
ALTER TABLE "comunicaoes_nascimentos" DROP COLUMN "cobertura_registrada",
DROP COLUMN "criador_nascimento",
DROP COLUMN "fazenda_nascimento",
DROP COLUMN "matriz_animal",
DROP COLUMN "reprodutor_animal",
DROP COLUMN "tecnico_nascimento",
ADD COLUMN     "cobertura_registrada_id" UUID NOT NULL,
ADD COLUMN     "criador_nascimento_id" UUID NOT NULL,
ADD COLUMN     "fazenda_nascimento_id" UUID NOT NULL,
ADD COLUMN     "matriz_animal_id" UUID NOT NULL,
ADD COLUMN     "reprodutor_animal_id" UUID NOT NULL,
ADD COLUMN     "tecnico_nascimento_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "criadores" DROP COLUMN "id_usuario",
ADD COLUMN     "user_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "rebanhos" DROP COLUMN "fazenda",
ADD COLUMN     "fazenda_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "solicitacoes_registros_animais_base" DROP COLUMN "criador",
DROP COLUMN "tecnico",
ADD COLUMN     "criador_id" UUID NOT NULL,
ADD COLUMN     "tecnico_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "bio_id";

-- DropTable
DROP TABLE "Matrix";

-- DropTable
DROP TABLE "SolicitacaoCadastroFazenda";

-- DropTable
DROP TABLE "nome_animal";

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
CREATE TABLE "matrix" (
    "id" UUID NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "matrix_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "comunicacao_Obitos_animal_id_key" ON "comunicacao_Obitos"("animal_id");

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

-- AddForeignKey
ALTER TABLE "animais" ADD CONSTRAINT "animais_rebanho_fkey" FOREIGN KEY ("rebanho") REFERENCES "rebanhos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "animais" ADD CONSTRAINT "animais_pai_fkey" FOREIGN KEY ("pai") REFERENCES "animais"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "animais" ADD CONSTRAINT "animais_mae_fkey" FOREIGN KEY ("mae") REFERENCES "animais"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "animais" ADD CONSTRAINT "animais_fazenda_fkey" FOREIGN KEY ("fazenda") REFERENCES "fazendas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "animais" ADD CONSTRAINT "animais_criador_animal_fkey" FOREIGN KEY ("criador_animal") REFERENCES "criadores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fazendas" ADD CONSTRAINT "fazendas_criador_cobertura_fkey" FOREIGN KEY ("criador_cobertura") REFERENCES "criadores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

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
ALTER TABLE "solicitacoes_registros_animais_base" ADD CONSTRAINT "solicitacoes_registros_animais_base_criador_id_fkey" FOREIGN KEY ("criador_id") REFERENCES "criadores"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solicitacoes_registros_animais_base" ADD CONSTRAINT "solicitacoes_registros_animais_base_tecnico_id_fkey" FOREIGN KEY ("tecnico_id") REFERENCES "tecnicos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registros_animais_base" ADD CONSTRAINT "registros_animais_base_solicitacao_fkey" FOREIGN KEY ("solicitacao") REFERENCES "solicitacoes_registros_animais_base"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rebanhos" ADD CONSTRAINT "rebanhos_fazenda_id_fkey" FOREIGN KEY ("fazenda_id") REFERENCES "fazendas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solicitacao_cadastro_criado" ADD CONSTRAINT "solicitacao_cadastro_criado_criado_id_fkey" FOREIGN KEY ("criado_id") REFERENCES "criadores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solicitacao_cadastro_fazenda" ADD CONSTRAINT "solicitacao_cadastro_fazenda_fazenda_id_fkey" FOREIGN KEY ("fazenda_id") REFERENCES "fazendas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solicitacao_cadastro_fazenda" ADD CONSTRAINT "solicitacao_cadastro_fazenda_solicitacao_cadastro_criador__fkey" FOREIGN KEY ("solicitacao_cadastro_criador_id") REFERENCES "solicitacao_cadastro_criado"("id") ON DELETE CASCADE ON UPDATE CASCADE;
