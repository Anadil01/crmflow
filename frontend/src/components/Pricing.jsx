import Container from "../ui/Container";
import PricingCard from "../ui/PricingCard";
import SectionTitle from "../ui/SectionTitle";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <Container>

        <SectionTitle
          subtitle="Pricing"
          title="Simple Pricing for Every Business"
          description="Choose a plan that fits your business size."
        />

        <div className="grid lg:grid-cols-3 gap-8">

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