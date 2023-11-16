/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PROSPECT', 'ACTIVE', 'UNQUALIFIED');

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Lead" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "status" "Status" NOT NULL,
    "estSaleAmount" DOUBLE PRECISION NOT NULL,
    "estCommission" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Lead_email_key" ON "Lead"("email");
