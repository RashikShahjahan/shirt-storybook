/*
  Warnings:

  - You are about to drop the column `name` on the `Shirt` table. All the data in the column will be lost.
  - Added the required column `brand` to the `Shirt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `material` to the `Shirt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `Shirt` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Shirt" DROP COLUMN "name",
ADD COLUMN     "brand" TEXT NOT NULL,
ADD COLUMN     "material" TEXT NOT NULL,
ADD COLUMN     "size" TEXT NOT NULL;
