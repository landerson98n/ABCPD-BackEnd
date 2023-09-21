/*
  Warnings:

  - Added the required column `fazenda_id` to the `solicitacoes_registros_animais_base` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rebanho_id` to the `solicitacoes_registros_animais_base` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "solicitacoes_registros_animais_base" ADD COLUMN     "fazenda_id" UUID NOT NULL,
ADD COLUMN     "rebanho_id" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "solicitacoes_registros_animais_base" ADD CONSTRAINT "solicitacoes_registros_animais_base_rebanho_id_fkey" FOREIGN KEY ("rebanho_id") REFERENCES "rebanhos"("id") ON DELETE SET DEFAULT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solicitacoes_registros_animais_base" ADD CONSTRAINT "solicitacoes_registros_animais_base_fazenda_id_fkey" FOREIGN KEY ("fazenda_id") REFERENCES "fazendas"("id") ON DELETE SET DEFAULT ON UPDATE CASCADE;
