import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import TestimonialCard from "../ui/TestimonialCard";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechNova",
    review:
      "CRMFlow helped us increase our sales conversions by 40% within three months.",
  },
  {
    name: "David Miller",
    company: "BrightSales",
    review:
      "The automation tools saved our team several hours every week.",
  },
  {
    name: "Emma Wilson",
    company: "GrowthHub",
    review:
      "A clean interface, powerful analytics, and excellent support.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-slate-50 py-24 dark:bg-slate-950"
    >
      <Container>
        <SectionTitle
          subtitle="Testimonials"
          title="Loved by Growing Businesses"
          description="See why companies trust CRMFlow to manage their customer relationships."
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <TestimonialCard key={item.name} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
