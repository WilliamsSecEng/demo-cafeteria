import { useState } from "react";
import { Coffee, Menu, MessageCircle, X } from "lucide-react";
import { coffeeData, getWhatsAppUrl } from "../../data/coffeeData";
import Button from "../ui/Button";
import Container from "../ui/Container";

function Navbar() {
  const [open, setOpen] = useState(false);

  const whatsappUrl = getWhatsAppUrl(
    coffeeData.business.whatsappNumber,
    coffeeData.business.whatsappMessage
  );
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#1a120e]/70 backdrop-blur-xl">
      <Container className="flex min-h-[78px] items-center justify-between gap-4">
        <a href="#inicio" className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[linear-gradient(135deg,var(--primary),var(--secondary))] text-white shadow-[0_16px_40px_rgba(122,75,47,0.3)]">
            <Coffee className="h-5 w-5" />
          </div>

          <div>
            <div className="text-base font-extrabold tracking-tight text-white sm:text-lg">
              {coffeeData.business.name}
            </div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
              {coffeeData.business.tagline}
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {coffeeData.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--muted)] transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle className="h-4 w-4" />
            Reservar mesa
          </Button>
        </div>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white lg:hidden"
          aria-label="Abrir menú"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-white/10 bg-[#1a120e]/95 px-4 py-4 lg:hidden">
          <div className="container-app flex flex-col gap-3">
            {coffeeData.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-[var(--cream)]"
              >
                {item.label}
              </a>
            ))}

            <Button href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle className="h-4 w-4" />
              Reservar mesa
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
            