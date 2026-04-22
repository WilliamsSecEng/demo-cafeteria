import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

type SectionBadgeProps = {
  children: ReactNode;
  className?: string;
};

function SectionBadge({ children, className }: SectionBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-[var(--cream)] backdrop-blur",
        className
      )}
    >
      {children}
    </div>
  );
}

export default SectionBadge;