-- DropForeignKey
ALTER TABLE "animais" DROP CONSTRAINT "animais_criador_animal_fkey";

-- DropForeignKey
ALTER TABLE "animais" DROP CONSTRAINT "animais_fazenda_fkey";

-- DropForeignKey
ALTER TABLE "animais" DROP CONSTRAINT "animais_mae_fkey";

-- DropForeignKey
ALTER TABLE "animais" DROP CONSTRAINT "animais_pai_fkey";

-- DropForeignKey
ALTER TABLE "animais" DROP CONSTRAINT "animais_rebanho_fkey";

-- AlterTable
ALTER TABLE "animais" ALTER COLUMN "criador_animal" DROP NOT NULL,
ALTER COLUMN "fazenda" DROP NOT NULL,
ALTER COLUMN "mae" DROP NOT NULL,
ALTER COLUMN "pai" DROP NOT NULL,
ALTER COLUMN "rebanho" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "animais" ADD CONSTRAINT "animais_rebanho_fkey" FOREIGN KEY ("rebanho") REFERENCES "rebanhos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "animais" ADD CONSTRAINT "animais_pai_fkey" FOREIGN KEY ("pai") REFERENCES "animais"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "animais" ADD CONSTRAINT "animais_mae_fkey" FOREIGN KEY ("mae") REFERENCES "animais"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "animais" ADD CONSTRAINT "animais_fazenda_fkey" FOREIGN KEY ("fazenda") REFERENCES "fazendas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "animais" ADD CONSTRAINT "animais_criador_animal_fkey" FOREIGN KEY ("criador_animal") REFERENCES "criadores"("id") ON DELETE SET NULL ON UPDATE CASCADE;
