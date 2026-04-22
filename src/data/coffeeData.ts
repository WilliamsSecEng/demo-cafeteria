import {
  CalendarCheck2,
  Clock3,
  Coffee,
  Croissant,
  HeartHandshake,
  Mail,
  MapPin,
  MessageCircle,
  Smartphone,
  Sparkles,
  Store,
} from "lucide-react";
import type { CoffeeData } from "../types";

export const coffeeData: CoffeeData = {
  business: {
    name: "Brisa Café",
    tagline: "Demo creada por Azura Web",
    whatsappNumber: "59170000000",
    whatsappMessage: "Hola, quiero hacer una reserva en Brisa Café",
    email: "hola@brisacafe.demo",
    location: "Av. Aroma 120, Zona Centro",
    hours: "Lunes a sábado · 08:00 a 21:00",
    instagram: "@brisacafe.demo",
  },

  navItems: [
    { label: "Inicio", href: "#inicio" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Menú", href: "#servicios" },
    { label: "Combos", href: "#planes" },
    { label: "Galería", href: "#galeria" },
    { label: "Contacto", href: "#contacto" },
  ],

  highlights: [
    {
      icon: Coffee,
      title: "Café con identidad",
      text: "Una presentación cálida y visual que transmite sabor, marca y experiencia.",
    },
    {
      icon: Smartphone,
      title: "Reserva o pide fácil",
      text: "Botones visibles y estructura clara para escribir por WhatsApp en segundos.",
    },
    {
      icon: HeartHandshake,
      title: "Ambiente acogedor",
      text: "Una web pensada para reflejar cercanía, calma y una experiencia agradable.",
    },
  ],

  services: [
    {
      icon: Coffee,
      title: "Café de especialidad",
      text: "Bebidas calientes y frías presentadas de forma limpia y atractiva.",
    },
    {
      icon: Croissant,
      title: "Brunch y repostería",
      text: "Ideal para destacar desayunos, postres, panadería o productos estrella.",
    },
    {
      icon: Store,
      title: "Espacio para compartir",
      text: "Transmite un ambiente cómodo para reuniones, trabajo o momentos tranquilos.",
    },
    {
      icon: Sparkles,
      title: "Marca memorable",
      text: "Diseño visual más cálido, cercano y atractivo para negocios gastronómicos.",
    },
  ],
  plans: [
    {
      name: "Desayuno clásico",
      price: "Bs 28",
      description:
        "Una opción simple y visual para destacar promociones o combos del local.",
      features: ["Café filtrado", "Croissant artesanal", "Jugo natural"],
      featured: false,
    },
    {
      name: "Brunch Brisa",
      price: "Bs 42",
      description:
        "El combo más atractivo para mostrar valor, variedad y aumentar el ticket promedio.",
      features: ["Latte de la casa", "Tostadas o sándwich", "Postre pequeño"],
      featured: true,
    },
    {
      name: "Merienda dulce",
      price: "Bs 24",
      description:
        "Ideal para promociones de tarde o combos para compartir en un formato claro.",
      features: ["Capuccino", "Tarta o brownie", "Presentación especial"],
      featured: false,
    },
  ],

  testimonials: [
    {
      initials: "MR",
      name: "María R.",
      role: "Cliente frecuente",
      text: "La web transmite exactamente lo que uno espera de una cafetería bonita: calidez, orden y una experiencia agradable.",
    },
    {
      initials: "JP",
      name: "Juan P.",
      role: "Visitante",
      text: "Se entiende rápido el menú, los combos y cómo reservar. Se siente mucho más profesional que solo tener redes.",
    },
    {
      initials: "AC",
      name: "Ana C.",
      role: "Emprendedora local",
      text: "Esta demo funciona muy bien para cafeterías, reposterías y negocios que viven mucho de lo visual.",
    },
  ],

  gallery: [
    {
      title: "Espacios cálidos para quedarse más tiempo",
      className: "from-[#4a2f23] via-[#8b5a3c] to-[#d7a26a]",
    },
    {
      title: "Detalles que despiertan apetito",
      className: "from-[#2f1d15] via-[#6f4a35] to-[#c98546]",
    },
    {
      title: "Una marca cercana, limpia y memorable",
      className: "from-[#3a2419] via-[#7b4d33] to-[#e0b177]",
    },
    {
      title: "Presentación ideal para menús y promociones",
      className: "from-[#2a1b14] via-[#5d3a29] to-[#bf7b44]",
    },
  ],

  contactItems: [
    {
      icon: MapPin,
      title: "Ubicación",
      text: "Av. Aroma 120, Zona Centro",
    },
    {
      icon: Clock3,
      title: "Horario",
      text: "Lunes a sábado · 08:00 a 21:00",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      text: "+591 70000000",
      href: "https://wa.me/59170000000",
    },
    {
      icon: Mail,
      title: "Correo",
      text: "hola@brisacafe.demo",
      href: "mailto:hola@brisacafe.demo",
    },
    {
      icon: CalendarCheck2,
      title: "Reservas",
      text: "Consultas y reservas por mensaje directo",
    },
  ],
};

export function getWhatsAppUrl(number: string, message: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}