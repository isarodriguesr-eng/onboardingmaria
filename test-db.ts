import { PrismaClient } from '@prisma/client'

async function main() {
  const prisma = new PrismaClient()
  try {
    console.log('Testing connection...')
    await prisma.$connect()
    console.log('Connected successfully!')
    const usersCount = await prisma.user.count()
    console.log('Users count:', usersCount)
  } catch (e) {
    console.error('Connection error:', e)
  } finally {
    await prisma.$disconnect()
  }
}

main()
