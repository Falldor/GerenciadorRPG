/*
  Warnings:

  - You are about to drop the `jogadores_mesa` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "jogadores_mesa" DROP CONSTRAINT "jogadores_mesa_MesaId_fkey";

-- DropForeignKey
ALTER TABLE "jogadores_mesa" DROP CONSTRAINT "jogadores_mesa_jogadorId_fkey";

-- AlterTable
ALTER TABLE "mesa" ADD COLUMN     "MonstrosId" TEXT[],
ADD COLUMN     "PersonagensId" TEXT[];

-- DropTable
DROP TABLE "jogadores_mesa";
