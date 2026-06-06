"use client";

import { SessionProvider } from "next-auth/react";
import { LoadingProvider } from "@/shared/lib/context/LoadingContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <LoadingProvider>{children}</LoadingProvider>
    </SessionProvider>
  );
}
