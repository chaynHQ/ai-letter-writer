-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "redacted_situation_explained" TEXT NOT NULL,
    "qa" TEXT NOT NULL,
    "letter_generated" TEXT NOT NULL,
    "response_timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContentChecklist" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,

    CONSTRAINT "ContentChecklist_pkey" PRIMARY KEY ("id")
);
