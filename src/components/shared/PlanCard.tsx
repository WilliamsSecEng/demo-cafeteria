import { ShieldCheck } from "lucide-react";
import type { PlanItem } from "../../types";
import { cn } from "../../lib/utils";
import Card from "../ui/Card";

type PlanCardProps = {
  plan: PlanItem;
};

function PlanCard({ plan }: PlanCardProps) {
  return (
    <Card
      className={cn(
        "p-6",
        plan.featured &&
          "border-[color:rgba(232,179,106,0.18)] bg-[linear-gradient(180deg,rgba(193,122,61,0.12),rgba(255,255,255,0.04))]"
      )}
    >
      <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[var(--cream)]">
        {plan.featured ? "Más pedido" : plan.name}
      </div>

      <h3 className="mt-5 text-2xl font-black tracking-tight text-white">{plan.name}</h3>
      <div className="mt-2 text-4xl font-black tracking-[-0.06em] text-[var(--accent)]">
        {plan.price}
      </div>

      <p className="mt-3 text-sm text-[var(--muted)]">{plan.description}</p>

      <div className="mt-6 space-y-3">
        {plan.features.map((feature) => (
          <div key={feature} className="flex items-start gap-3">
            <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-white/8 text-[var(--accent)]">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <span className="text-sm text-[var(--cream)]">{feature}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default PlanCard;