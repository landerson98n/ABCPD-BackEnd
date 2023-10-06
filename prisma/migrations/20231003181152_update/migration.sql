/*
  Warnings:

  - Added the required column `criador_id` to the `rebanhos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "rebanhos" ADD COLUMN     "criador_id" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "rebanhos" ADD CONSTRAINT "rebanhos_criador_id_fkey" FOREIGN KEY ("criador_id") REFERENCES "criadores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
