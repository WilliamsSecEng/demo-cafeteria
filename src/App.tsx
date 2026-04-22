import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppFloat from "./components/layout/WhatsAppFloat";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Plans from "./sections/Plans";
import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="min-h-screen text-[var(--text)]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Plans />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;