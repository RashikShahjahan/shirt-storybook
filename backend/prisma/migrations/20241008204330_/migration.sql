-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ShirtToTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ShirtToTag_AB_unique" ON "_ShirtToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_ShirtToTag_B_index" ON "_ShirtToTag"("B");

-- AddForeignKey
ALTER TABLE "_ShirtToTag" ADD CONSTRAINT "_ShirtToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Shirt"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ShirtToTag" ADD CONSTRAINT "_ShirtToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
