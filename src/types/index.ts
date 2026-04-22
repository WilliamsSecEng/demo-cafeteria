import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type HighlightItem = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export type ServiceItem = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export type PlanItem = {
  name: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
};

export type TestimonialItem = {
  initials: string;
  name: string;
  role: string;
  text: string;
};

export type GalleryItem = {
  title: string;
  className: string;
};

export type ContactItem = {
  icon: LucideIcon;
  title: string;
  text: string;
  href?: string;
};

export type BusinessInfo = {
  name: string;
  tagline: string;
  whatsappNumber: string;
  whatsappMessage: string;
  email: string;
  location: string;
  hours: string;
  instagram: string;
};

export type CoffeeData = {
  business: BusinessInfo;
  navItems: NavItem[];
  highlights: HighlightItem[];
  services: ServiceItem[];
  plans: PlanItem[];
  testimonials: TestimonialItem[];
  gallery: GalleryItem[];
  contactItems: ContactItem[];
};