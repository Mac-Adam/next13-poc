import { Session } from '@auth0/nextjs-auth0';
import { PrismaClient } from '@prisma/client';
export const validateUser = async (session: Session | null | undefined, prisma: PrismaClient) => {
  if (!session) {
    return undefined;
  }
  var user = await prisma.user.findUnique({
    where: {
      id: session.user.sub,
    },
  });
  if (user) {
    return user;
  }
  user = await prisma.user.create({ data: { id: session.user.sub, email: session.user.email } });
  return user;
};
