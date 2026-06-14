import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Projects />
      <About />
      <ContactForm />
      <Footer />
      <CookieBanner />
    </main>
  );
}
