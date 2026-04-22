import { motion } from "motion/react";
import { CalendarCheck2, Mail, MessageCircle } from "lucide-react";
import { coffeeData, getWhatsAppUrl } from "../data/coffeeData";
import Container from "../components/ui/Container";
import SectionBadge from "../components/ui/SectionBadge";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Contact() {
  const whatsappUrl = getWhatsAppUrl(
    coffeeData.business.whatsappNumber,
    coffeeData.business.whatsappMessage
  );

  return (
    <section id="contacto" className="py-20">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          className="overflow-hidden rounded-[2.2rem] border border-[color:rgba(232,179,106,0.12)] bg-gradient-to-br from-[#4a2f23] via-[#8b5a3c] to-[#d7a26a] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:p-8"
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <SectionBadge>
                <CalendarCheck2 className="h-4 w-4 text-[var(--accent)]" />
                Reserva o pide información
              </SectionBadge>

              <h2 className="mt-5 max-w-2xl text-3xl font-black leading-tight tracking-[-0.05em] text-white sm:text-4xl">
                Haz que tu cafetería se vea tan bien como la experiencia que ofrece.
              </h2>

              <p className="mt-4 max-w-xl text-[#fff1e5]">
                Este cierre está pensado para convertir. En un cliente real, puedes usar esta sección para reservas, consultas, promociones o pedidos por WhatsApp.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={whatsappUrl} target="_blank" rel="noreferrer" variant="secondary">
                  <MessageCircle className="h-4 w-4" />
                  Escribir por WhatsApp
                </Button>

                <Button href={`mailto:${coffeeData.business.email}`} variant="secondary">
                  <Mail className="h-4 w-4" />
                  Enviar correo
                </Button>
              </div>
            </div>

            <Card className="border-white/10 bg-[#2a1e18]/40 p-6">
              <h3 className="text-xl font-bold text-white">Información del local</h3>

              <div className="mt-6 space-y-4">
                {coffeeData.contactItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex gap-4 border-b border-white/10 pb-4 last:border-none last:pb-0"
                    >
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/10 text-[var(--accent)]">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <div className="font-semibold text-white">{item.title}</div>

                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                            className="mt-1 block text-sm text-[#fff1e5] transition hover:text-white"
                          >
                            {item.text}
                          </a>
                        ) : (
                          <div className="mt-1 text-sm text-[#fff1e5]">{item.text}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Contact;