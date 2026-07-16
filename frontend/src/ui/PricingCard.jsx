import Button from "./Button";

export default function PricingCard({
  title,
  price,
  features,
  popular,
}) {
  return (
    <div
      className={`
        rounded-3xl
        bg-white
        p-8
        shadow-lg
        border
        ${
          popular
            ? "border-blue-600 scale-105"
            : ""
        }
      `}
    >
      {popular && (
        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
          Most Popular
        </span>
      )}

      <h3 className="text-3xl font-bold mt-5">
        {title}
      </h3>

      <h2 className="text-5xl font-bold mt-4">
        {price}
      </h2>

      <ul className="space-y-4 mt-8">
        {features.map((item) => (
          <li key={item}>✔ {item}</li>
        ))}
      </ul>

      <Button className="w-full mt-10">
        Get Started
      </Button>
    </div>
  );
}