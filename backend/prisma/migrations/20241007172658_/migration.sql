/*
  Warnings:

  - You are about to drop the column `isFavorite` on the `Shirt` table. All the data in the column will be lost.
  - Added the required column `favorite` to the `Shirt` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Shirt" DROP COLUMN "isFavorite",
ADD COLUMN     "favorite" BOOLEAN NOT NULL;
