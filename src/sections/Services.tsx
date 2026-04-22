import { motion } from "motion/react";
import { Coffee } from "lucide-react";
import { coffeeData } from "../data/coffeeData";
import Container from "../components/ui/Container";
import SectionBadge from "../components/ui/SectionBadge";
import SectionTitle from "../components/ui/SectionTitle";
import ServiceCard from "../components/shared/ServiceCard";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Services() {
  return (
    <section id="servicios" className="py-20">
      <Container>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={reveal}>
          <SectionTitle
            badge={
              <SectionBadge>
                <Coffee className="h-4 w-4 text-[var(--accent)]" />
                Menú destacado
              </SectionBadge>
            }
            title="Una forma más visual y cercana de presentar lo que ofreces."
            description="Esta sección sirve para listar bebidas, productos, especialidades o ventajas del local. Luego puedes reemplazar el contenido por el menú real del cliente."
          />
        </motion.div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {coffeeData.services.map((service) => (
            <motion.div
              key={service.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Services;