import type { ServiceItem } from "../../types";
import Card from "../ui/Card";

type ServiceCardProps = {
  service: ServiceItem;
};

function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <Card className="p-6">
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/8 text-[var(--accent)]">
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="mt-5 text-lg font-bold text-white">{service.title}</h3>
      <p className="mt-2 text-sm text-[var(--muted)]">{service.text}</p>
    </Card>
  );
}

export default ServiceCard;