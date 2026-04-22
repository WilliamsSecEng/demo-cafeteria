import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
};

function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_16px_40px_rgba(0,0,0,0.18)] backdrop-blur",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Card;