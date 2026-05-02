import { Prisma } from "@/prisma/src/generated/prisma/client";
import { prisma } from "@/shared/db/prisma";

export const createUserWhere = <T extends Prisma.UserWhereInput>(where: T): T =>
  where;

export const createUserWhereUnique = <T extends Prisma.UserWhereUniqueInput>(
  where: T,
): T => where;

export const createUserSelect = <T extends Prisma.UserSelect>(select: T): T =>
  select;

export const userRepository = () => {
  return {
    findUserByEmail: (email: string, select: Prisma.UserSelect) => {
      return prisma.user.findUnique({
        where: {
          email,
        },
        select,
      });
    },
  };
};
