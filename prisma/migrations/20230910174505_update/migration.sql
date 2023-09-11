/*
  Warnings:

  - A unique constraint covering the columns `[serie]` on the table `rebanhos` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "rebanhos_serie_key" ON "rebanhos"("serie");
