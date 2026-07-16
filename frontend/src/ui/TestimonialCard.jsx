import { FaStar } from "react-icons/fa";

export default function TestimonialCard({
  name,
  company,
  review,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-md dark:border-slate-800 dark:bg-slate-900 dark:shadow-slate-950/40">
      <div className="flex text-yellow-500 mb-4">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>

      <p className="text-gray-600 leading-7 italic dark:text-slate-300">
        "{review}"
      </p>

      <div className="mt-6">
        <h4 className="font-bold">{name}</h4>
        <p className="text-gray-500 dark:text-slate-400">{company}</p>
      </div>
    </div>
  );
}
