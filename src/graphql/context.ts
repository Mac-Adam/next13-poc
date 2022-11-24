import { PrismaClient } from '@prisma/client';
import prisma from '../../prisma/pisma';
export type Context = {
  prisma: PrismaClient;
};
export async function createContext({ req, res }: { req: any; res: any }): Promise<Context> {
  return {
    prisma: prisma,
  };
}
