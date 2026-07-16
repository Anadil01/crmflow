import Container from "../ui/Container";
import PricingCard from "../ui/PricingCard";
import SectionTitle from "../ui/SectionTitle";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-[linear-gradient(180deg,transparent,rgba(148,163,184,0.08))] py-24 dark:bg-[linear-gradient(180deg,rgba(15,23,42,0),rgba(15,23,42,0.75))]"
    >
      <Container>

        <SectionTitle
          subtitle="Pricing"
          title="Simple Pricing for Every Business"
          description="Choose a plan that fits your business size."
        />

        <div className="grid gap-8 lg:grid-cols-3">

          <PricingCard
            title="Starter"
            price="Free"
            features={[
              "1 User",
              "100 Leads",
              "Basic Reports",
            ]}
          />

          <PricingCard
            title="Professional"
            price="$29/mo"
            popular
            features={[
              "Unlimited Leads",
              "Automation",
              "Analytics",
              "Priority Support",
            ]}
          />

          <PricingCard
            title="Enterprise"
            price="Custom"
            features={[
              "Unlimited Users",
              "Dedicated Manager",
              "Custom Integrations",
            ]}
          />

        </div>

      </Container>
    </section>
  );
}
