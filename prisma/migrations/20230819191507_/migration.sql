/*
  Warnings:

  - You are about to drop the `registros_animais_base` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `quantidade_animais` to the `solicitacoes_registros_animais_base` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "registros_animais_base" DROP CONSTRAINT "registros_animais_base_solicitacao_fkey";

-- AlterTable
ALTER TABLE "solicitacoes_registros_animais_base" ADD COLUMN     "quantidade_animais" INTEGER NOT NULL;

-- DropTable
DROP TABLE "registros_animais_base";
