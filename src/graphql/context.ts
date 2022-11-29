import { getSession, Session } from '@auth0/nextjs-auth0';
import { PrismaClient } from '@prisma/client';
import { validateUser } from './auth/validateUser';
const prisma = new PrismaClient();
export type User = {
  id: string;
  email: string;
};
export type Context = {
  prisma: PrismaClient;
  user: User | undefined;
};
export async function createContext({ req, res }: { req: any; res: any }): Promise<Context> {
  const session = getSession(req, res);
  const user = await validateUser(session, prisma);
  console.log(user);
  console.log(session);
  console.log('Connection Made');
  return {
    prisma: prisma,
    user: user,
  };
}
