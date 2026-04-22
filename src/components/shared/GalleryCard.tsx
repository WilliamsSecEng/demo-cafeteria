import type { GalleryItem } from "../../types";
import { cn } from "../../lib/utils";

type GalleryCardProps = {
  item: GalleryItem;
};

function GalleryCard({ item }: GalleryCardProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-[280px] items-end overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br p-5",
        item.className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/50" />
      <h3 className="relative z-10 max-w-[220px] text-lg font-bold text-white">{item.title}</h3>
    </div>
  );
}

export default GalleryCard;