import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-xl p-5 bg-white">
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
        <p className="mt-4 text-gray-600 leading-7">
          {answer}
        </p>
      )}
    </div>
  );
}