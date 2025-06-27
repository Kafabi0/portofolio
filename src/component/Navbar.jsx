'use client';
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "/#beranda", label: "Beranda" },
    { href: "/About", label: "Tentang" },
    { href: "/#projects", label: "Proyek" },
    { href: "/#contact", label: "Kontak" },
    { href: "/Profile", label: "Profil" },
    { href: "/Galerry", label: "Galeri" },

  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo (opsional) */}
        <h1 className="text-xl font-bold text-blue-500">Portofolio Zerxy </h1>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-6 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-blue-500 transition duration-200">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)} // close menu after click
                  className="hover:text-blue-500 transition duration-200 block"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
