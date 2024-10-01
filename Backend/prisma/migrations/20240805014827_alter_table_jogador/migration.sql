/*
  Warnings:

  - You are about to drop the column `usaurio` on the `jogador` table. All the data in the column will be lost.
  - Added the required column `usuario` to the `jogador` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "jogador" DROP COLUMN "usaurio",
ADD COLUMN     "usuario" TEXT NOT NULL;
