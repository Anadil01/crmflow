import { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

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
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <Container className="flex items-center justify-between py-4">
        <h1 className="text-2xl font-bold text-blue-600">
          CRMFlow
        </h1>

        <ul className="hidden gap-8 font-medium md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
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
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <ul className="flex flex-col gap-4 font-medium">
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
