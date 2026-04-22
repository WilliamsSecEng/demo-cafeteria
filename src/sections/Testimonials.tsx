import { motion } from "motion/react";
import { HeartHandshake } from "lucide-react";
import { coffeeData } from "../data/coffeeData";
import Container from "../components/ui/Container";
import SectionBadge from "../components/ui/SectionBadge";
import SectionTitle from "../components/ui/SectionTitle";
import TestimonialCard from "../components/shared/TestimonialCard";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Testimonials() {
  return (
    <section className="py-20">
      <Container>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={reveal}>
          <SectionTitle
            badge={
              <SectionBadge>
                <HeartHandshake className="h-4 w-4 text-[var(--accent)]" />
                Opiniones de clientes
              </SectionBadge>
            }
            title="Las reseñas ayudan a que la experiencia se sienta real."
            description="Puedes reemplazar estos testimonios por comentarios de redes, mensajes de clientes o reseñas reales cuando el proyecto sea final."
          />
        </motion.div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {coffeeData.testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;