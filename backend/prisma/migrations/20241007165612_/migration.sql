-- CreateTable
CREATE TABLE "Shirt" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "isFavorite" BOOLEAN NOT NULL,

    CONSTRAINT "Shirt_pkey" PRIMARY KEY ("id")
);
