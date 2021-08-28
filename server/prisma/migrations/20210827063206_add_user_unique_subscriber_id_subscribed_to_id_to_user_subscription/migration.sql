/*
  Warnings:

  - A unique constraint covering the columns `[subscriberId,subscribedToId]` on the table `UserSubscription` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserSubscription.subscriberId_subscribedToId_unique" ON "UserSubscription"("subscriberId", "subscribedToId");
