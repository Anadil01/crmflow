import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import FAQItem from "../ui/FAQItem";

const faqs = [
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes. You can upgrade, downgrade, or cancel your subscription whenever you want.",
  },
  {
    question: "Do you offer customer support?",
    answer:
      "Yes. Our support team is available 24/7 for all paid plans.",
  },
  {
    question: "Is my data secure?",
    answer:
      "We use industry-standard encryption and secure cloud infrastructure.",
  },
  {
    question: "Can I import existing customer data?",
    answer:
      "Yes. CSV import and API integrations are supported.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24">
      <Container>
        <SectionTitle
          subtitle="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know before getting started."
        />

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </Container>
    </section>
  );
}