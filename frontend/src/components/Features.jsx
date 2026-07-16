import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import FeatureCard from "../ui/FeatureCard";

import {
  FaUsers,
  FaChartLine,
  FaTasks,
  FaEnvelope,
  FaDatabase,
  FaRobot,
} from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaUsers />,
      title: "Lead Management",
      description:
        "Capture, organize, and nurture leads from a single dashboard.",
    },
    {
      icon: <FaChartLine />,
      title: "Sales Pipeline",
      description:
        "Track opportunities and monitor every stage of your sales process.",
    },
    {
      icon: <FaTasks />,
      title: "Task Automation",
      description:
        "Automate repetitive tasks to help your team work smarter.",
    },
    {
      icon: <FaEnvelope />,
      title: "Email Integration",
      description:
        "Connect Gmail and Outlook to communicate without leaving the CRM.",
    },
    {
      icon: <FaDatabase />,
      title: "Customer Database",
      description:
        "Store customer information securely with instant access.",
    },
    {
      icon: <FaRobot />,
      title: "AI Insights",
      description:
        "Receive intelligent recommendations to improve sales performance.",
    },
  ];

  return (
    <section
      id="features"
      className="py-24 bg-slate-50"
    >
      <Container>

        <SectionTitle
          subtitle="Features"
          title="Everything Your Sales Team Needs"
          description="CRMFlow helps your team capture leads, automate workflows, manage customers, and close deals faster."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}