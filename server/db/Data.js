const { PrismaClient, prisma } = require('@prisma/client')

module.exports = {
  prisma: new PrismaClient(),
}
