import { PrismaClient } from '@prisma/client';
import * as argon2 from 'argon2';

const prisma = new PrismaClient();

async function populateDatabase() {
  const password = await argon2.hash('password');
  const roles = ['admin', 'customer'];

  Promise.all(
    roles.map((role) =>
      prisma.userRole.create({
        data: {
          name: role,
        },
      }),
    ),
  );

  Promise.all(
    roles.map((role) =>
      prisma.user.create({
        data: {
          firstName: role,
          lastName: 'account',
          email: `${role}@pbarapp.com`,
          password,
        },
      }),
    ),
  );
}

async function seed() {
  await populateDatabase();
}

seed()
  .then(() => console.log('Prisma seeder ran succesfully'))
  .finally(() => prisma.$disconnect());
