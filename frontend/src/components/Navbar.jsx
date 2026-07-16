import { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 shadow-sm backdrop-blur dark:bg-slate-950/90 dark:shadow-slate-900/40">
      <Container className="flex items-center justify-between py-4">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          CRMFlow
        </Link>

        <ul className="hidden gap-8 font-medium text-slate-700 dark:text-slate-200 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/dashboard"
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700 dark:border-slate-700 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-300"
          >
            Dashboard
          </Link>

          <Button onClick={() => (window.location.hash = "#contact")}>
            Book Demo
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <HiX size={30} /> : <HiOutlineMenuAlt3 size={30} />}
        </button>
      </Container>

      {isOpen && (
        <Container className="pb-4 md:hidden">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <ul className="flex flex-col gap-4 font-medium text-slate-700 dark:text-slate-200">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <Link
              to="/dashboard"
              className="mt-4 block rounded-xl border border-slate-300 px-4 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700 dark:border-slate-700 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-300"
              onClick={() => setIsOpen(false)}
            >
              Open Dashboard
            </Link>

            <Button
              className="mt-4 w-full"
              onClick={() => {
                setIsOpen(false);
                window.location.hash = "#contact";
              }}
            >
              Book Demo
            </Button>
          </div>
        </Container>
      )}
    </nav>
  );
}
