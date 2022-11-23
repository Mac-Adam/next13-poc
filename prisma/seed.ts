import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.thing.createMany({
    data: [
      {
        name: 'bike',
        amount: 5,
      },
      {
        name: 'ball',
        amount: 6,
      },
      {
        name: 'car',
        amount: 25,
      },
      {
        name: 'book',
        amount: 1,
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
