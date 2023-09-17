-- AlterTable
ALTER TABLE "animais" ALTER COLUMN "composicao_genetica" DROP NOT NULL,
ALTER COLUMN "data_RGD_animal_Super" DROP NOT NULL,
ALTER COLUMN "data_RGD_animal_Tecnico" DROP NOT NULL,
ALTER COLUMN "decisao_animal_Super_RGD" DROP NOT NULL,
ALTER COLUMN "decisao_animal_Tecnico_RGD" DROP NOT NULL,
ALTER COLUMN "observacao_Super" DROP NOT NULL,
ALTER COLUMN "registro_geral" DROP NOT NULL;
