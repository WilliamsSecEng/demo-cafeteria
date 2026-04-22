import { motion } from "motion/react";
import { CalendarCheck2, ChevronRight, Coffee, HeartHandshake, MessageCircle } from "lucide-react";
import { coffeeData, getWhatsAppUrl } from "../data/coffeeData";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import SectionBadge from "../components/ui/SectionBadge";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Hero() {
  const whatsappUrl = getWhatsAppUrl(
    coffeeData.business.whatsappNumber,
    coffeeData.business.whatsappMessage
  );

  return (
    <section id="inicio" className="relative overflow-hidden">
      <Container className="grid items-center gap-10 py-16 md:py-20 lg:grid-cols-2 lg:py-24">
        <motion.div initial="hidden" animate="show" variants={reveal}>
          <SectionBadge>
            <Coffee className="h-4 w-4 text-[var(--accent)]" />
            Café de especialidad, ambiente acogedor
          </SectionBadge>

          <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            El rincón perfecto para tu próxima <span className="text-[var(--accent)]">pausa favorita</span>.
          </h1>

          <p className="mt-5 max-w-2xl text-base text-[var(--muted)] sm:text-lg">
            Esta demo fue pensada para cafeterías, brunch spots y negocios gastronómicos que quieren una web más cálida, visual y profesional para mostrar su menú, promociones y canal de reservas.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle className="h-4 w-4" />
              Reservar mesa
            </Button>

            <Button href="#planes" variant="secondary">
              <ChevronRight className="h-4 w-4" />
              Ver combos
            </Button>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {coffeeData.highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur"
                >
                  <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-white/8 text-[var(--accent)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white sm:text-base">{item.title}</h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">{item.text}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div initial="hidden" animate="show" variants={reveal} className="relative">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.3)] backdrop-blur-xl">
            <div className="mb-4 flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#f1d0a8]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#d9a26a]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#7a4b2f]" />
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-[var(--cream)]">
                React + Tailwind + Lucide
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-[#4a2f23] via-[#8b5a3c] to-[#d7a26a] p-5 sm:p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_24%),linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.22))]" />

              <div className="relative rounded-[1.4rem] border border-white/10 bg-[#2a1b15]/60 p-5 backdrop-blur md:p-6">
                <SectionBadge>
                  <HeartHandshake className="h-4 w-4 text-[var(--accent)]" />
                  Diseño cálido y cercano
                </SectionBadge>

                <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.05em] text-white sm:text-4xl">
                  Una web que hace que el local se vea <span className="text-[var(--accent)]">más apetecible y memorable</span>.
                </h2>

                <p className="mt-4 text-sm text-[#f2e4d7] sm:text-base">
                  Ideal para mostrar bebidas, brunch, postres, promociones y una experiencia agradable desde el primer vistazo.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    ["Recomendado", "Latte de la casa", "Cremoso, cálido y muy visual."],
                    ["Especialidad", "Brunch Brisa", "Una propuesta completa para compartir."],
                    ["Favorito", "Postres artesanales", "Texturas y sabores que invitan a volver."],
                    ["Ventaja", "Reserva por WhatsApp", "Sin fricción y lista para celular."],
                  ].map(([tag, title, text]) => (
                    <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent)]">
                        {tag}
                      </div>
                      <div className="mt-2 text-sm font-bold text-white sm:text-base">{title}</div>
                      <div className="mt-1 text-sm text-[#e4d3c5]">{text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 w-full max-w-xs rounded-[1.75rem] border border-white/10 bg-[var(--cream)] p-5 text-[#4a2f23] shadow-[0_20px_60px_rgba(0,0,0,0.25)] xl:absolute xl:bottom-8 xl:right-8 xl:mt-0">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#ead6c4] text-[var(--primary)]">
              <CalendarCheck2 className="h-5 w-5" />
            </div>
            <div className="mt-4 text-base font-bold text-[var(--primary)]">Convertir visitas en reservas</div>
            <p className="mt-2 text-sm text-[#6b4a38]">
              La composición visual prioriza calidez, claridad y una llamada a la acción visible.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Hero;