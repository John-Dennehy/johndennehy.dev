import React from "react";
import { cn } from "@/lib/utils";

type DividerProps = {
  height?: "full" | "1rem" | "2rem";
};

export function DividerVertical({ height = "full" }: DividerProps) {
  return (
    <div
      className={cn(
        " min-h-1 mt-10 inline-block w-[2px] bg-blue-100",
        height === "full" ? "h-full" : height === "1rem" ? "h-1" : "h-2"
      )}
    />
  );
}
