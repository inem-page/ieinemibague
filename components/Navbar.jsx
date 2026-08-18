"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { navLinks } from "@/data/modalidades";

function Dropdown({ label, items, pathname }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);

  const handleEnter = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };

  const isActive = items.some((item) => item.href === pathname);

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100 ${
          isActive ? "text-inem-blue" : "text-slate-700"
        }`}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        {label}
        <ChevronDown
          size={15}
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-full z-40 mt-1 w-60 overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 shadow-hover"
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-xl px-4 py-2.5 text-sm transition-colors hover:bg-slate-50 hover:pl-5 ${
                  pathname === item.href
                    ? "font-semibold text-inem-blue"
                    : "text-slate-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cierra el menú móvil al cambiar de página
  useEffect(() => {
    setMobileOpen(false);
    setMobileSection(null);
  }, [pathname]);

  const navItem = (href, label) => (
    <Link
      href={href}
      className={`rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100 ${
        pathname === href ? "text-inem-blue" : "text-slate-700"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-soft backdrop-blur-md"
          : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo-inem.png"
            alt="Logo INEM Ibagué"
            width={44}
            height={44}
            className="h-11 w-11 object-contain"
            priority
          />
          <span className="font-display text-sm font-bold leading-tight text-inem-navy sm:text-base">
            INEM
            <br className="sm:hidden" /> Manuel Murillo Toro
          </span>
        </Link>

        {/* Navegación escritorio */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItem("/", "Inicio")}
          <Dropdown
            label="Institución"
            items={navLinks.institucion}
            pathname={pathname}
          />
          <Dropdown
            label="Modalidades"
            items={navLinks.modalidades}
            pathname={pathname}
          />
          {navItem("/mapa", "Mapa")}
          <Link
            href="/contactenos"
            className="ml-2 rounded-full bg-inem-navy px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-inem-blue hover:shadow-hover"
          >
            Contáctenos
          </Link>
        </nav>

        {/* Botón hamburguesa */}
        <button
          className="grid h-11 w-11 place-items-center rounded-full text-inem-navy hover:bg-slate-100 lg:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              <Link
                href="/"
                className="rounded-xl px-4 py-3 text-slate-700 hover:bg-slate-50"
              >
                Inicio
              </Link>

              {[
                { key: "institucion", label: "Institución", items: navLinks.institucion },
                { key: "modalidades", label: "Modalidades", items: navLinks.modalidades },
              ].map((section) => (
                <div key={section.key}>
                  <button
                    className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-slate-700 hover:bg-slate-50"
                    onClick={() =>
                      setMobileSection((s) =>
                        s === section.key ? null : section.key
                      )
                    }
                  >
                    {section.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        mobileSection === section.key ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileSection === section.key && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4"
                      >
                        {section.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block rounded-xl px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <Link
                href="/mapa"
                className="rounded-xl px-4 py-3 text-slate-700 hover:bg-slate-50"
              >
                Mapa
              </Link>
              <Link
                href="/contactenos"
                className="mt-2 rounded-xl bg-inem-navy px-4 py-3 text-center font-semibold text-white"
              >
                Contáctenos
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
