import { motion } from "motion/react";
import { HeartHandshake, Sparkles, Store } from "lucide-react";
import Container from "../components/ui/Container";
import SectionBadge from "../components/ui/SectionBadge";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const aboutPoints = [
  {
    title: "Presencia más acogedora",
    text: "Una paleta más cálida ayuda a reflejar mejor negocios gastronómicos y espacios de encuentro.",
  },
  {
    title: "Ideal para vender visualmente",
    text: "Menús, combos, postres y promociones se muestran con una estructura más apetecible.",
  },
  {
    title: "Lista para reutilizar",
    text: "Puedes adaptarla para cafeterías, reposterías, brunch spots o restaurantes pequeños.",
  },
];

const sideCards = [
  {
    title: "Responsive real",
    text: "El sitio sigue viéndose ordenado y agradable en celular, que es donde más lo verán.",
  },
  {
    title: "Cambio rápido de contenido",
    text: "Solo reemplazas textos, imágenes y productos para crear una nueva demo del mismo rubro.",
  },
];

function About() {
  return (
    <section id="nosotros" className="py-20">
      <Container className="grid gap-6 lg:grid-cols-2">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={reveal}>
          <Card className="p-6 sm:p-8">
            <SectionTitle
              badge={
                <SectionBadge>
                  <Store className="h-4 w-4 text-[var(--accent)]" />
                  Sobre esta demo
                </SectionBadge>
              }
              title="Diseño pensado para cafeterías y negocios que venden experiencia."
              description="Brisa Café es una cafetería ficticia creada como demo para Azura Web. Su objetivo es mostrar cómo una web cálida, ordenada y visual puede elevar la percepción del negocio y facilitar reservas o pedidos."
            />

            <p className="mt-4 text-[var(--muted)]">
              Esta propuesta no está hecha solo para verse bonita. Está estructurada para vender: portada fuerte, menú claro, combos visibles, galería sugestiva y un cierre directo hacia WhatsApp.
            </p>

            <div className="mt-6 grid gap-4">
              {aboutPoints.map((point) => (
                <div
                  key={point.title}
                  className="flex gap-4 rounded-[1.75rem] border border-white/10 bg-[#1d1511]/40 p-4"
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/8 text-[var(--accent)]">
                    <HeartHandshake className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-bold text-white">{point.title}</div>
                    <p className="mt-1 text-sm text-[var(--muted)]">{point.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#4a2f23] via-[#8b5a3c] to-[#d7a26a] p-6 sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.16),transparent_24%),linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.24))]" />
            <div className="relative flex h-full min-h-[420px] flex-col justify-between">
              <SectionBadge>
                <Sparkles className="h-4 w-4 text-[var(--accent)]" />
                Identidad visual cálida
              </SectionBadge>
              <h3 className="max-w-xs text-3xl font-black leading-tight tracking-[-0.05em] text-white">
                Un local pequeño también puede verse como una marca memorable.
              </h3>
              <div className="max-w-xs rounded-[1.75rem] border border-white/10 bg-white/10 p-4 backdrop-blur">
                <div className="font-bold text-white">Lo que comunica esta web</div>
                <p className="mt-2 text-sm text-[#fff4ea]">
                  Calidez, sabor, cercanía, orden visual y facilidad para reservar o pedir información.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {sideCards.map((item) => (
              <Card key={item.title} className="p-6">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/8 text-[var(--accent)]">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h4 className="mt-4 text-lg font-bold text-white">{item.title}</h4>
                <p className="mt-2 text-sm text-[var(--muted)]">{item.text}</p>
              </Card>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default About;