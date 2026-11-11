"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type MenuLink = { label: string; href: string };
type MenuGroup = { title: string; links: MenuLink[] };
type NavItem = { label: string; columns: [MenuGroup[], MenuGroup[]] };

const navigation: NavItem[] = [
  {
    label: "Province",
    columns: [
      [
        {
          title: "LA PROVINCE",
          links: [
            { label: "Présentation", href: "#a-propos" },
            { label: "Notre histoire et notre mission", href: "#a-propos" },
          ],
        },
        {
          title: "VIE FRANCISCAINE",
          links: [{ label: "Fraternités", href: "#presence" }],
        },
      ],
      [
        {
          title: "NOTRE CHARISME",
          links: [
            { label: "La spiritualité franciscaine", href: "#vocations" },
            { label: "Mission et évangélisation", href: "#projets" },
          ],
        },
      ],
    ],
  },
  {
    label: "Présence",
    columns: [
      [
        {
          title: "OÙ NOUS SOMMES",
          links: [
            { label: "Nos fraternités", href: "#presence" },
            { label: "Paroisses et diocèses", href: "#presence" },
          ],
        },
      ],
      [
        {
          title: "NOS ENGAGEMENTS",
          links: [
            { label: "Projets de la Province", href: "#projets" },
            { label: "Œuvres et services", href: "#offices" },
          ],
        },
      ],
    ],
  },
  {
    label: "Curie",
    columns: [
      [
        {
          title: "GOUVERNEMENT PROVINCIAL",
          links: [{ label: "Le gouvernement de la Province", href: "#offices" }],
        },
        {
          title: "OFFICES ET SECRÉTARIATS",
          links: [
            { label: "Offices provinciaux", href: "#offices" },
            { label: "Contacter la Curie", href: "#contact" },
          ],
        },
      ],
      [
        {
          title: "FORMATION",
          links: [
            { label: "Formation initiale et études", href: "#formation" },
            { label: "Formation permanente", href: "#formation" },
          ],
        },
      ],
    ],
  },
  {
    label: "Documents",
    columns: [
      [
        {
          title: "DOCUMENTS DE LA PROVINCE",
          links: [
            { label: "Livres des Frères et statuts", href: "#documents" },
            { label: "Lettres circulaires et décrets", href: "#documents" },
          ],
        },
        {
          title: "PUBLICATIONS",
          links: [
            { label: "Ngumu Yetu", href: "#documents" },
            { label: "Publications d’anniversaire", href: "#documents" },
          ],
        },
      ],
      [
        {
          title: "RESSOURCES FRANCISCAINES",
          links: [{ label: "Publications franciscaines", href: "#documents" }],
        },
      ],
    ],
  },
  {
    label: "Actualités",
    columns: [
      [
        {
          title: "ACTUALITÉS DE LA PROVINCE",
          links: [{ label: "Nouvelles et événements", href: "#actualites" }],
        },
        {
          title: "COMMUNIQUÉS",
          links: [{ label: "Communiqués provinciaux", href: "#actualites" }],
        },
      ],
      [
        {
          title: "VIE DE LA PROVINCE",
          links: [
            { label: "Projets en cours", href: "#projets" },
            { label: "Présence franciscaine", href: "#presence" },
          ],
        },
      ],
    ],
  },
  {
    label: "Vocations",
    columns: [
      [
        {
          title: "DISCERNER SA VOCATION",
          links: [
            { label: "Le charisme franciscain", href: "#vocations" },
            { label: "Le parcours vocationnel", href: "#vocations" },
          ],
        },
      ],
      [
        {
          title: "PRENDRE CONTACT",
          links: [
            { label: "Contacter la Province", href: "#contact" },
            { label: "Formation franciscaine", href: "#formation" },
          ],
        },
      ],
    ],
  },
  {
    label: "Dons",
    columns: [
      [
        {
          title: "SOUTENIR LA MISSION",
          links: [
            { label: "Soutenir la Province", href: "#don" },
            { label: "Faire un don", href: "#don" },
          ],
        },
      ],
      [
        {
          title: "EN SAVOIR PLUS",
          links: [
            { label: "Nos projets", href: "#projets" },
            { label: "Contacter la Curie", href: "#contact" },
          ],
        },
      ],
    ],
  },
];

export default function SiteHeader() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function closeMenus() {
    setActiveMenu(null);
    setMobileMenuOpen(false);
  }

  return (
    <header
      className="sticky top-0 z-50 border-b border-[#b58a58]/30 bg-paper/95 backdrop-blur"
      onKeyDown={(event) => {
        if (event.key === "Escape") closeMenus();
      }}
    >
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
          onClick={closeMenus}
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

        <nav aria-label="Navigation principale" className="hidden items-center gap-1 xl:flex">
          {navigation.map((item) => (
            <button
              key={item.label}
              type="button"
              aria-expanded={activeMenu === item.label}
              aria-controls="desktop-mega-menu"
              onClick={() =>
                setActiveMenu((current) => (current === item.label ? null : item.label))
              }
              className={`px-2 py-2 text-[13px] font-medium uppercase tracking-[0.1em] transition-colors hover:text-[#b7833e] ${
                activeMenu === item.label ? "text-[#b7833e]" : "text-ink/80"
              }`}
            >
              {item.label}
            </button>
          ))}
          <Link
            href="#contact"
            onClick={closeMenus}
            className="ml-2 rounded-sm bg-blue px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-blue-deep"
          >
            Contacts
          </Link>
        </nav>

        <button
          type="button"
          aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 rounded-sm border border-ink/15 text-blue xl:hidden"
        >
          <span
            className={`h-0.5 w-5 bg-current transition-transform ${
              mobileMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-current transition-opacity ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-current transition-transform ${
              mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {activeMenu && (
        <section
          id="desktop-mega-menu"
          aria-label={`Menu ${activeMenu}`}
          className="absolute left-0 right-0 top-full hidden bg-[#f1eeeb] shadow-[0_14px_28px_rgba(36,38,33,0.08)] xl:block"
        >
          <div className="mx-auto max-w-7xl px-5 pb-8 pt-5 sm:px-8 lg:px-10">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setActiveMenu(null)}
                className="text-sm text-ink/80 transition-colors hover:text-burgundy"
              >
                Fermer
              </button>
            </div>
            <div className="mt-4 grid grid-cols-2 divide-x divide-ink/35">
              {navigation
                .find((item) => item.label === activeMenu)
                ?.columns.map((groups, index) => (
                  <div
                    key={index}
                    className={index === 0 ? "pr-6 lg:pr-8" : "pl-6 lg:pl-8"}
                  >
                    {groups.map((group) => (
                      <div key={group.title} className="mb-6 last:mb-0">
                        <h2 className="border-b border-[#b58a58]/40 pb-3 font-serif text-xl uppercase leading-snug text-burgundy sm:text-2xl">
                          {group.title}
                        </h2>
                        <ul>
                          {group.links.map((link) => (
                            <li
                              key={link.label}
                              className="border-b border-[#b58a58]/30 last:border-b-0"
                            >
                              <Link
                                href={link.href}
                                onClick={closeMenus}
                                className="block py-4 font-serif text-lg uppercase leading-relaxed text-burgundy transition-colors hover:text-[#b7833e] sm:text-xl"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ))}
            </div>
          </div>
        </section>
      )}

      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-ink/10 bg-[#f1eeeb] px-5 pb-5 pt-3 xl:hidden"
        >
          <nav aria-label="Navigation mobile" className="space-y-1">
            {navigation.map((item) => (
              <div key={item.label} className="border-b border-[#b58a58]/30">
                <button
                  type="button"
                  aria-expanded={activeMenu === item.label}
                  onClick={() =>
                    setActiveMenu((current) => (current === item.label ? null : item.label))
                  }
                  className="flex w-full items-center justify-between py-3 text-left text-sm font-medium uppercase tracking-[0.1em] text-burgundy"
                >
                  {item.label}
                  <span aria-hidden="true">{activeMenu === item.label ? "−" : "+"}</span>
                </button>
                {activeMenu === item.label && (
                  <div className="grid gap-1 pb-3 pl-3">
                    {item.columns
                      .flatMap((column) => column.flatMap((group) => group.links))
                      .map((link) => (
                        <Link
                          key={`${item.label}-${link.label}`}
                          href={link.href}
                          onClick={closeMenus}
                          className="py-2 text-sm text-ink/80"
                        >
                          {link.label}
                        </Link>
                      ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="mt-4 flex justify-end">
            <Link
              href="#contact"
              onClick={closeMenus}
              className="rounded-sm bg-blue px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white"
            >
              Contacts
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
