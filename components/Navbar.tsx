"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/10 backdrop-blur-sm text-white z-50 px-6">
      <div className="flex justify-between items-center py-4">
        <div className="text-lg font-semibold text-cyan-400">
          Дашдорж Гэлэгжамц
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-10 text-lg font-semibold">
          <li><a href="#home" className="hover:text-yellow-400">Нүүр</a></li>
          <li><a href="#about" className="hover:text-yellow-400">Тухай</a></li>
          <li><a href="#skill" className="hover:text-yellow-400">Ур чадвар</a></li>
          <li><a href="#contact" className="hover:text-yellow-400">Туршлага</a></li>
        </ul>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 pb-4 text-lg font-semibold">
          <li><a href="#home" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Нүүр</a></li>
          <li><a href="#about" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Тухай</a></li>
          <li><a href="#skill" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Ур чадвар</a></li>
          <li><a href="#contact" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Туршлага</a></li>
        </ul>
      )}
    </nav>
  );
}
