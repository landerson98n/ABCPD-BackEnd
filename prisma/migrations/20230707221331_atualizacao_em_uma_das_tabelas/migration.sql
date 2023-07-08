/*
  Warnings:

  - Added the required column `flag` to the `animais` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "animais" ADD COLUMN "flag" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "tranferir_animais" ADD CONSTRAINT "tranferir_animais_animal_fkey" FOREIGN KEY ("animal") REFERENCES "animais"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
