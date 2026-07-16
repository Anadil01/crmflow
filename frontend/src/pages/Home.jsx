import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustedCompanies from "../components/TrustedCompanies";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Navbar />
      <Hero />
      <TrustedCompanies />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
