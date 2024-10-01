/*
  Warnings:

  - You are about to drop the column `mesaId` on the `monstro` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "monstro" DROP CONSTRAINT "monstro_mesaId_fkey";

-- AlterTable
ALTER TABLE "monstro" DROP COLUMN "mesaId";

-- CreateTable
CREATE TABLE "_MesaTomonstro" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_MesaTomonstro_AB_unique" ON "_MesaTomonstro"("A", "B");

-- CreateIndex
CREATE INDEX "_MesaTomonstro_B_index" ON "_MesaTomonstro"("B");

-- AddForeignKey
ALTER TABLE "_MesaTomonstro" ADD CONSTRAINT "_MesaTomonstro_A_fkey" FOREIGN KEY ("A") REFERENCES "mesa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MesaTomonstro" ADD CONSTRAINT "_MesaTomonstro_B_fkey" FOREIGN KEY ("B") REFERENCES "monstro"("id") ON DELETE CASCADE ON UPDATE CASCADE;
