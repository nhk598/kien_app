/*
  Warnings:

  - A unique constraint covering the columns `[userId,videoId]` on the table `VideoLike` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "VideoLike.userId_videoId_unique" ON "VideoLike"("userId", "videoId");
