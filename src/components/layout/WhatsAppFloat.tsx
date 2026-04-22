import { MessageCircle } from "lucide-react";
import { coffeeData, getWhatsAppUrl } from "../../data/coffeeData";

function WhatsAppFloat() {
  const whatsappUrl = getWhatsAppUrl(
    coffeeData.business.whatsappNumber,
    coffeeData.business.whatsappMessage
  );

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[linear-gradient(135deg,var(--primary),var(--secondary))] text-white shadow-[0_20px_50px_rgba(0,0,0,0.32)] transition hover:-translate-y-1"
      aria-label="Escribir por WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

export default WhatsAppFloat;