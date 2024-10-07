/*
  Warnings:

  - You are about to drop the `monstro_habilidade` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `monstro_mesa` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `personagem_habilidade` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "monstro_habilidade" DROP CONSTRAINT "monstro_habilidade_habilidade_id_fkey";

-- DropForeignKey
ALTER TABLE "monstro_habilidade" DROP CONSTRAINT "monstro_habilidade_monstro_id_fkey";

-- DropForeignKey
ALTER TABLE "monstro_mesa" DROP CONSTRAINT "monstro_mesa_mesaId_fkey";

-- DropForeignKey
ALTER TABLE "monstro_mesa" DROP CONSTRAINT "monstro_mesa_monstroId_fkey";

-- DropForeignKey
ALTER TABLE "personagem_habilidade" DROP CONSTRAINT "personagem_habilidade_habilidade_id_fkey";

-- DropForeignKey
ALTER TABLE "personagem_habilidade" DROP CONSTRAINT "personagem_habilidade_personagem_id_fkey";

-- AlterTable
ALTER TABLE "monstro" ADD COLUMN     "habilidadesID" TEXT[];

-- DropTable
DROP TABLE "monstro_habilidade";

-- DropTable
DROP TABLE "monstro_mesa";

-- DropTable
DROP TABLE "personagem_habilidade";
