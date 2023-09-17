/*
  Warnings:

  - You are about to drop the `AnimaisComunicacaoCobertura` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AnimaisComunicacaoCobertura" DROP CONSTRAINT "AnimaisComunicacaoCobertura_cobertura_id_fkey";

-- DropForeignKey
ALTER TABLE "AnimaisComunicacaoCobertura" DROP CONSTRAINT "AnimaisComunicacaoCobertura_reprodutor_id_fkey";

-- DropTable
DROP TABLE "AnimaisComunicacaoCobertura";

-- CreateTable
CREATE TABLE "_AnimalToComunicacaoCobertura" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AnimalToComunicacaoCobertura_AB_unique" ON "_AnimalToComunicacaoCobertura"("A", "B");

-- CreateIndex
CREATE INDEX "_AnimalToComunicacaoCobertura_B_index" ON "_AnimalToComunicacaoCobertura"("B");

-- AddForeignKey
ALTER TABLE "_AnimalToComunicacaoCobertura" ADD CONSTRAINT "_AnimalToComunicacaoCobertura_A_fkey" FOREIGN KEY ("A") REFERENCES "animais"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AnimalToComunicacaoCobertura" ADD CONSTRAINT "_AnimalToComunicacaoCobertura_B_fkey" FOREIGN KEY ("B") REFERENCES "comunicacoes_coberturas"("id") ON DELETE CASCADE ON UPDATE CASCADE;
