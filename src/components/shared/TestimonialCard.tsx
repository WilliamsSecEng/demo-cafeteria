import { Star } from "lucide-react";
import type { TestimonialItem } from "../../types";
import Card from "../ui/Card";

type TestimonialCardProps = {
  testimonial: TestimonialItem;
};

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="p-6">
      <div className="mb-5 flex gap-1 text-[var(--accent)]">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" />
        ))}
      </div>

      <p className="text-[var(--cream)]">{testimonial.text}</p>

      <div className="mt-6 flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-full bg-[linear-gradient(135deg,var(--primary),var(--secondary))] font-bold text-white shadow-[0_16px_32px_rgba(122,75,47,0.28)]">
          {testimonial.initials}
        </div>

        <div>
          <div className="font-bold text-white">{testimonial.name}</div>
          <div className="text-sm text-[var(--muted)]">{testimonial.role}</div>
        </div>
      </div>
    </Card>
  );
}

export default TestimonialCard;