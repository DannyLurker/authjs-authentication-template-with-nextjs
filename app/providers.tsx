"use client";

import { SessionProvider } from "next-auth/react";
import { LoadingProvider } from "@/shared/lib/context/LoadingContext";
import { InterceptorConfig } from "@/shared/components/providers/InterceptorConfig";
import { Toaster } from "sonner";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <LoadingProvider>
        <InterceptorConfig />
        <LoadingProvider>{children}</LoadingProvider>
        <Toaster position="bottom-right" richColors className="font-sans" />
      </LoadingProvider>
    </SessionProvider>
  );
}
