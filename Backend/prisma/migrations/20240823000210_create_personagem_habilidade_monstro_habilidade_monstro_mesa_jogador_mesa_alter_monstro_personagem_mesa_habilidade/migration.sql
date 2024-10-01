/*
  Warnings:

  - You are about to drop the column `mesaId` on the `jogador` table. All the data in the column will be lost.
  - You are about to drop the `_MesaTomonstro` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_MesaTomonstro" DROP CONSTRAINT "_MesaTomonstro_A_fkey";

-- DropForeignKey
ALTER TABLE "_MesaTomonstro" DROP CONSTRAINT "_MesaTomonstro_B_fkey";

-- DropForeignKey
ALTER TABLE "habilidade" DROP CONSTRAINT "habilidade_monstroId_fkey";

-- DropForeignKey
ALTER TABLE "habilidade" DROP CONSTRAINT "habilidade_personagemId_fkey";

-- DropForeignKey
ALTER TABLE "jogador" DROP CONSTRAINT "jogador_mesaId_fkey";

-- AlterTable
ALTER TABLE "jogador" DROP COLUMN "mesaId";

-- DropTable
DROP TABLE "_MesaTomonstro";

-- CreateTable
CREATE TABLE "jogadores_mesa" (
    "jogadorId" TEXT NOT NULL,
    "MesaId" TEXT NOT NULL,

    CONSTRAINT "jogadores_mesa_pkey" PRIMARY KEY ("jogadorId","MesaId")
);

-- CreateTable
CREATE TABLE "monstro_mesa" (
    "monstroId" TEXT NOT NULL,
    "mesaId" TEXT NOT NULL,

    CONSTRAINT "monstro_mesa_pkey" PRIMARY KEY ("monstroId","mesaId")
);

-- CreateTable
CREATE TABLE "personagem_habilidade" (
    "personagem_id" TEXT NOT NULL,
    "habilidade_id" TEXT NOT NULL,

    CONSTRAINT "personagem_habilidade_pkey" PRIMARY KEY ("personagem_id","habilidade_id")
);

-- CreateTable
CREATE TABLE "monstro_habilidade" (
    "habilidade_id" TEXT NOT NULL,
    "monstro_id" TEXT NOT NULL,

    CONSTRAINT "monstro_habilidade_pkey" PRIMARY KEY ("habilidade_id","monstro_id")
);

-- AddForeignKey
ALTER TABLE "jogadores_mesa" ADD CONSTRAINT "jogadores_mesa_jogadorId_fkey" FOREIGN KEY ("jogadorId") REFERENCES "jogador"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jogadores_mesa" ADD CONSTRAINT "jogadores_mesa_MesaId_fkey" FOREIGN KEY ("MesaId") REFERENCES "mesa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "monstro_mesa" ADD CONSTRAINT "monstro_mesa_monstroId_fkey" FOREIGN KEY ("monstroId") REFERENCES "monstro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "monstro_mesa" ADD CONSTRAINT "monstro_mesa_mesaId_fkey" FOREIGN KEY ("mesaId") REFERENCES "mesa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "personagem_habilidade" ADD CONSTRAINT "personagem_habilidade_personagem_id_fkey" FOREIGN KEY ("personagem_id") REFERENCES "personagem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "personagem_habilidade" ADD CONSTRAINT "personagem_habilidade_habilidade_id_fkey" FOREIGN KEY ("habilidade_id") REFERENCES "habilidade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "monstro_habilidade" ADD CONSTRAINT "monstro_habilidade_monstro_id_fkey" FOREIGN KEY ("monstro_id") REFERENCES "monstro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "monstro_habilidade" ADD CONSTRAINT "monstro_habilidade_habilidade_id_fkey" FOREIGN KEY ("habilidade_id") REFERENCES "habilidade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
