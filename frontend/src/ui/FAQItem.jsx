import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="font-semibold">{question}</span>

        <FaChevronDown
          className={`transition ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <p className="mt-4 text-gray-600 leading-7 dark:text-slate-300">
          {answer}
        </p>
      )}
    </div>
  );
}
