import { motion } from "motion/react";
import { Croissant } from "lucide-react";
import { coffeeData } from "../data/coffeeData";
import Container from "../components/ui/Container";
import SectionBadge from "../components/ui/SectionBadge";
import SectionTitle from "../components/ui/SectionTitle";
import PlanCard from "../components/shared/PlanCard";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Plans() {
  return (
    <section id="planes" className="py-20">
      <Container>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={reveal}>
          <SectionTitle
            badge={
              <SectionBadge>
                <Croissant className="h-4 w-4 text-[var(--accent)]" />
                Combos del local
              </SectionBadge>
            }
            title="Tarjetas claras para mostrar promociones o paquetes especiales."
            description="Los combos ayudan a que el cliente compare rápido y entienda el valor de la propuesta sin necesidad de preguntar demasiado."
          />
        </motion.div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {coffeeData.plans.map((plan) => (
            <motion.div
              key={plan.name}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
            >
              <PlanCard plan={plan} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Plans;