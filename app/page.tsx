import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <ContactForm />
      <Footer />
    </main>
  );
}
