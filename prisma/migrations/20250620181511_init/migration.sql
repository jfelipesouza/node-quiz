-- CreateEnum
CREATE TYPE "QuestionTypes" AS ENUM ('Normal', 'Inline');

-- CreateTable
CREATE TABLE "Question" (
    "id" TEXT NOT NULL,
    "right_choice" TEXT NOT NULL,
    "type" "QuestionTypes" NOT NULL DEFAULT 'Normal',
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Choices" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "questionId" TEXT,

    CONSTRAINT "Choices_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Question_id_key" ON "Question"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Choices_id_key" ON "Choices"("id");

-- AddForeignKey
ALTER TABLE "Choices" ADD CONSTRAINT "Choices_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE SET NULL ON UPDATE CASCADE;
