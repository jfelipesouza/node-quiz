-- CreateEnum
CREATE TYPE "QuestionTypes" AS ENUM ('Normal', 'Inline');

-- CreateTable
CREATE TABLE "Question" (
    "id" TEXT NOT NULL,
    "choices" TEXT[],
    "right_choice" TEXT,
    "title" TEXT NOT NULL,
    "type" "QuestionTypes" NOT NULL DEFAULT 'Normal',
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);
