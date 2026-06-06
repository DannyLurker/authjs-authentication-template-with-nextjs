"use client";
import { useEffect } from "react";
import { registerApiListeners } from "@/shared/lib/api-client";
import { useGlobalLoading } from "@/shared/lib/context/LoadingContext";
import { toast } from "sonner";

export function InterceptorConfig() {
  const { setIsLoading } = useGlobalLoading();

  useEffect(() => {
    registerApiListeners(setIsLoading, (msg: string) => {
      toast.error(msg);
    });
  }, [setIsLoading]);

  return null;
}
