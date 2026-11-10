"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  ["Accueil", "#accueil"],
  ["Province", "#a-propos"],
  ["Présence", "#presence"],
  ["Curie", "#offices"],
  ["Formation", "#formation"],
  ["Documents", "#documents"],
  ["Actualités", "#actualites"],
  ["Vocations", "#vocations"],
  ["Dons", "#don"],
] as const;

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#b58a58]/30 bg-paper/95 backdrop-blur">
      <div className="hidden border-b border-[#b58a58]/20 bg-[#f4eddf] md:block">
        <div className="mx-auto flex max-w-7xl justify-end px-5 py-2 sm:px-8 lg:px-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-burgundy/75">
            Province des Frères Mineurs · RDC
          </p>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-3 sm:px-8 lg:px-10">
        <Link
          href="#accueil"
          aria-label="Province Sainte Marie des Anges, accueil"
          className="flex min-w-0 items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/logo-smardc-couleur.png"
            alt="Logo couleur de la Province Sainte Marie des Anges"
            width={58}
            height={58}
            priority
            className="h-12 w-12 shrink-0 rounded-full bg-white object-contain sm:h-14 sm:w-14"
          />
          <span className="max-w-44 font-serif text-sm leading-tight text-burgundy sm:max-w-none sm:text-base">
            Province Sainte Marie
            <span className="block text-xs text-ink/70 sm:text-sm">des Anges · OFM RDC</span>
          </span>
        </Link>

        <div className="hidden items-center gap-5 xl:flex">
          <nav aria-label="Navigation principale" className="flex items-center gap-4">
            {navigation.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="text-[13px] text-ink/80 transition-colors hover:text-blue"
              >
                {label}
              </Link>
            ))}
          </nav>
          <Link
            href="#contact"
            className="rounded-sm bg-blue px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-deep"
          >
            Contacts
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 rounded-sm border border-ink/15 text-blue xl:hidden"
        >
          <span className={`h-0.5 w-5 bg-current transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-5 bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-5 bg-current transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-navigation" className="border-t border-ink/10 bg-paper px-5 pb-5 pt-3 xl:hidden">
          <nav aria-label="Navigation mobile" className="grid grid-cols-2 gap-x-5">
            {navigation.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-ink/10 py-3 text-sm text-ink/85"
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex justify-end">
            <Link href="#contact" onClick={() => setMenuOpen(false)} className="rounded-sm bg-blue px-4 py-2 text-xs font-semibold text-white">
              Contacts
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
