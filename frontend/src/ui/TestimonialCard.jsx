import { FaStar } from "react-icons/fa";

export default function TestimonialCard({
  name,
  company,
  review,
}) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md border">
      <div className="flex text-yellow-500 mb-4">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>

      <p className="text-gray-600 leading-7 italic">
        "{review}"
      </p>

      <div className="mt-6">
        <h4 className="font-bold">{name}</h4>
        <p className="text-gray-500">{company}</p>
      </div>
    </div>
  );
}