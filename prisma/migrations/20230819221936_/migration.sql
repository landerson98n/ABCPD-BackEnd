/*
  Warnings:

  - You are about to drop the column `asaas_id` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "criadores" ADD COLUMN     "asaas_id" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "users" DROP COLUMN "asaas_id";
