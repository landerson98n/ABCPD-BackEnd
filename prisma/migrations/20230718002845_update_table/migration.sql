/*
  Warnings:

  - You are about to drop the column `cadastro` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `superusuario` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "cadastro",
DROP COLUMN "superusuario",
ALTER COLUMN "pessoa" SET DATA TYPE TEXT;
