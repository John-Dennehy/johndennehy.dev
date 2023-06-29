import { ReactNode } from "react";
import { cn } from "@/src/lib/utils";

interface BadgeProps {
  showcase?: boolean;
  children: ReactNode;
}

const Badge = ({ showcase = false, children }: BadgeProps) => {
  return (
    <div
      className={cn(
        " m-0 flex items-center justify-center gap-1 rounded-2xl",
        " px-2 py-[2px] text-xs font-bold outline outline-1 outline-neutral-300",
        showcase ? "text-blue-700 " : "text-blue-600 "
      )}
    >
      {children}
    </div>
  );
};

export default Badge;
