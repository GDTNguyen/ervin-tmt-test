-- CreateTable
CREATE TABLE "Channel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "youtubeId" TEXT NOT NULL,
    "subscribers" INTEGER NOT NULL,
    "views" INTEGER NOT NULL,
    "videos" INTEGER NOT NULL,
    "tracking" BOOLEAN NOT NULL DEFAULT false
);

-- CreateIndex
CREATE UNIQUE INDEX "Channel_youtubeId_key" ON "Channel"("youtubeId");
