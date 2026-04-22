import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

type SectionTitleProps = {
  badge?: ReactNode;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

function SectionTitle({
  badge,
  title,
  description,
  align = "left",
  className,
}: SectionTitleProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {badge && <div>{badge}</div>}
      <h2 className="mt-5 text-3xl font-black leading-tight tracking-[-0.05em] text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">{description}</p>
      )}
    </div>
  );
}

export default SectionTitle;