/*
  Warnings:

  - You are about to drop the `Choices` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Choices" DROP CONSTRAINT "Choices_questionId_fkey";

-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "choices" TEXT[],
ALTER COLUMN "right_choice" DROP NOT NULL;

-- DropTable
DROP TABLE "Choices";
