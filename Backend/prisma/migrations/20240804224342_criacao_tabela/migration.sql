-- CreateEnum
CREATE TYPE "tipoHabilidade" AS ENUM ('mental', 'fisico');

-- CreateTable
CREATE TABLE "mestre" (
    "id" TEXT NOT NULL,
    "usuario" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "mestre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mesa" (
    "id" TEXT NOT NULL,
    "mestreId" TEXT,

    CONSTRAINT "mesa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jogador" (
    "id" TEXT NOT NULL,
    "mesaId" TEXT,
    "usaurio" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "jogador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "personagem" (
    "id" TEXT NOT NULL,
    "jogadorId" TEXT,
    "nome" TEXT NOT NULL,
    "nivelFisico" INTEGER NOT NULL,
    "nivelMental" INTEGER NOT NULL,
    "xp" INTEGER NOT NULL,
    "vida" INTEGER NOT NULL,
    "estresse" INTEGER NOT NULL,
    "historia" INTEGER NOT NULL,

    CONSTRAINT "personagem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "monstro" (
    "id" TEXT NOT NULL,
    "mesaId" TEXT,
    "nome" TEXT NOT NULL,
    "nivelFisico" INTEGER NOT NULL,
    "nivelMental" INTEGER NOT NULL,
    "xp" INTEGER NOT NULL,
    "vida" INTEGER NOT NULL,
    "estresse" INTEGER NOT NULL,
    "historia" INTEGER NOT NULL,

    CONSTRAINT "monstro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "habilidade" (
    "id" TEXT NOT NULL,
    "personagemId" TEXT,
    "monstroId" TEXT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "tipo" "tipoHabilidade" NOT NULL,

    CONSTRAINT "habilidade_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "mestre_id_key" ON "mestre"("id");

-- CreateIndex
CREATE UNIQUE INDEX "jogador_id_key" ON "jogador"("id");

-- CreateIndex
CREATE UNIQUE INDEX "personagem_id_key" ON "personagem"("id");

-- CreateIndex
CREATE UNIQUE INDEX "monstro_id_key" ON "monstro"("id");

-- CreateIndex
CREATE UNIQUE INDEX "habilidade_id_key" ON "habilidade"("id");

-- AddForeignKey
ALTER TABLE "mesa" ADD CONSTRAINT "mesa_mestreId_fkey" FOREIGN KEY ("mestreId") REFERENCES "mestre"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jogador" ADD CONSTRAINT "jogador_mesaId_fkey" FOREIGN KEY ("mesaId") REFERENCES "mesa"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "personagem" ADD CONSTRAINT "personagem_jogadorId_fkey" FOREIGN KEY ("jogadorId") REFERENCES "jogador"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "monstro" ADD CONSTRAINT "monstro_mesaId_fkey" FOREIGN KEY ("mesaId") REFERENCES "mesa"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "habilidade" ADD CONSTRAINT "habilidade_personagemId_fkey" FOREIGN KEY ("personagemId") REFERENCES "personagem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "habilidade" ADD CONSTRAINT "habilidade_monstroId_fkey" FOREIGN KEY ("monstroId") REFERENCES "monstro"("id") ON DELETE SET NULL ON UPDATE CASCADE;
