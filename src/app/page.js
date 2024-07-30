import { HomePage } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ServiceSection } from "./components/Service";
import Latest_work from "./components/Latest_work";
import Testimonial_section from "./components/Testimonial_section";
import { Footer } from "./components/Footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />

      <HomePage />
      <ServiceSection />

      <Latest_work />
      <Testimonial_section />
      <Footer />
    </div>
  );
}
