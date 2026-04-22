//import { Instagram } from "lucide-react";
import { coffeeData } from "../../data/coffeeData";
import Container from "../ui/Container";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-8">
      <Container className="flex flex-col gap-4 text-sm text-[var(--muted)] lg:flex-row lg:items-center lg:justify-between">
        <div>
          <span className="font-semibold text-white">{coffeeData.business.name}</span> · {coffeeData.business.tagline} · {year}
        </div>

        <div className="flex flex-wrap gap-4">
          <a href="#inicio" className="transition hover:text-white">Inicio</a>
          <a href="#servicios" className="transition hover:text-white">Menú</a>
          <a href="#planes" className="transition hover:text-white">Combos</a>
          <a href="#contacto" className="transition hover:text-white">Contacto</a>
          <a href="#" className="inline-flex items-center gap-2 transition hover:text-white">
            {/*<Instagram className="h-4 w-4" />*/}
            {coffeeData.business.instagram}
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;