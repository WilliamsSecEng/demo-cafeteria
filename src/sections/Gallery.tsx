import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { coffeeData } from "../data/coffeeData";
import Container from "../components/ui/Container";
import SectionBadge from "../components/ui/SectionBadge";
import SectionTitle from "../components/ui/SectionTitle";
import GalleryCard from "../components/shared/GalleryCard";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Gallery() {
  return (
    <section id="galeria" className="py-20">
      <Container>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={reveal}>
          <SectionTitle
            badge={
              <SectionBadge>
                <Sparkles className="h-4 w-4 text-[var(--accent)]" />
                Galería visual
              </SectionBadge>
            }
            title="La atmósfera también vende."
            description="Aquí puedes reemplazar los paneles por fotos reales del local, bebidas o postres. La estructura ya está pensada para que la parte visual tenga protagonismo."
          />
        </motion.div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {coffeeData.gallery.map((item) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
            >
              <GalleryCard item={item} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Gallery;