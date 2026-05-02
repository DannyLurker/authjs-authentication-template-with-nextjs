import { PrismaClient } from "@/prisma/src/generated/prisma/client";
import { PrismaPostgresAdapter } from "@prisma/adapter-ppg";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
     adapter: new PrismaPostgresAdapter({
    connectionString: process.env.DATABASE_URL!,
  }),
});

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
