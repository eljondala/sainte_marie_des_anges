import Link from "next/link";

const fraternities = [
  "Fraternité Sainte Élisabeth de Hongrie",
  "Fraternité Saint François d’Assise (Lukelenge)",
  "Fraternité Rivo Torto / Bena Cibwabwa",
  "Fraternité Saint Bonaventure (Cibuyi)",
  "Fraternité Fonte Colombo / Muya",
  "Fraternité Sainte Claire / Ngandajika",
  "Fraternité agro-pastorale / Muanzangudia",
  "Fraternité / Paroisse Christ Roi (Kasansa)",
  "Fraternité / Paroisse Saint André (Lukangu)",
  "Fraternité / Paroisse Saint Thomas (Kabinda)",
  "Fraternité Saint Antoine de Padoue (Mwene-Ditu)",
  "Fraternité / Paroisse Saint Charles Lwanga (Mwene-Ditu)",
  "Fraternité Sainte Marie des Anges (Kajangayi)",
  "Fraternité Saint Damien (Kananga)",
  "Fraternité interprovinciale Saint Maximilien Kolbe (Lemba)",
  "Fraternité / Paroisse Saint Grégoire le Grand (Maison filiale de Maluku)",
  "Fraternité / Paroisse Sainte Marie porte du Ciel (Maison filiale de Badara)",
  "Fraternité Jacopone (Quartier Congo) – Procure",
  "Fraternité interprovinciale Saint Jean XXIII (Kolwezi)",
  "Fraternité Notre Dame de l’Espérance (Limal / Belgique)",
  "Fraternité Santa Maria degli Angeli (Marano di Napoli / Italie)",
];

const parishes = [
  "Paroisse Christ Roi",
  "Paroisse Saint André",
  "Paroisse Saint Thomas",
  "Paroisse Saint Charles Lwanga",
  "Paroisse Saint Grégoire le Grand",
  "Paroisse Sainte Marie porte du Ciel",
  "Paroisse Saint Robert de Kansele",
  "Paroisse Saint Victor",
  "Paroisse Sainte Famille",
  "Paroisse Sainte Albertine",
  "Paroisse Saint Rémy",
  "Paroisse Saint François d’Assise",
  "Paroisse Saint Georges",
];

export default function PresencePage() {
  return (
    <div className="bg-[#fbf8f1] text-ink">
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue">
            Présence franciscaine
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-burgundy sm:text-5xl lg:text-6xl">
            Nos fraternités, nos paroisses et nos frères
          </h1>
          <p className="mt-5 text-base leading-7 text-ink/75 sm:text-lg">
            La Province Sainte Marie des Anges s’étend au service du peuple de
            Dieu, dans la prière, la vie fraternelle et l’annonce de l’Évangile.
            La présence de la Province se nourrit de la mission, de la formation
            et du témoignage de vie franciscain.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-sm border border-burgundy/10 bg-paper p-6 shadow-[0_8px_30px_rgba(36,38,33,0.04)]">
            <p className="font-serif text-5xl text-burgundy">22</p>
            <p className="mt-3 text-sm uppercase tracking-[0.14em] text-ink/65">
              Fraternités
            </p>
            <p className="mt-3 text-sm leading-6 text-ink/70">
              Des communautés vivantes, présentes dans des diocèses et des
              contextes missionnaires variés.
            </p>
          </div>

          <div className="rounded-sm border border-burgundy/10 bg-paper p-6 shadow-[0_8px_30px_rgba(36,38,33,0.04)]">
            <p className="font-serif text-5xl text-burgundy">13</p>
            <p className="mt-3 text-sm uppercase tracking-[0.14em] text-ink/65">
              Paroisses
            </p>
            <p className="mt-3 text-sm leading-6 text-ink/70">
              Des lieux de célébration, de pastorale et de proximité avec les
              communautés chrétiennes.
            </p>
          </div>

          <div className="rounded-sm border border-burgundy/10 bg-paper p-6 shadow-[0_8px_30px_rgba(36,38,33,0.04)]">
            <p className="font-serif text-5xl text-burgundy">135+</p>
            <p className="mt-3 text-sm uppercase tracking-[0.14em] text-ink/65">
              Frères
            </p>
            <p className="mt-3 text-sm leading-6 text-ink/70">
              Un ensemble de frères engagés dans la vie fraternelle, la
              formation, la prière et le service.
            </p>
          </div>
        </div>
      </section>

      <section id="fraternites" className="bg-paper px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue">
              Présence de la vie fraternelle
            </p>
            <h2 className="mt-4 font-serif text-3xl text-burgundy sm:text-4xl">
              Les 22 fraternités
            </h2>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {fraternities.map((fraternity) => (
              <li
                key={fraternity}
                className="border-l-2 border-[#b58a58] bg-white p-4 text-sm leading-6 text-ink/80"
              >
                {fraternity}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="paroisses" className="bg-[#f4efe6] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue">
              Mission pastorale
            </p>
            <h2 className="mt-4 font-serif text-3xl text-burgundy sm:text-4xl">
              Les 13 paroisses confiées
            </h2>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {parishes.map((parish) => (
              <li
                key={parish}
                className="border-l-2 border-blue bg-white p-4 text-sm leading-6 text-ink/80"
              >
                {parish}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="freres" className="bg-paper px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue">
              Vocation et mission
            </p>
            <h2 className="mt-4 font-serif text-3xl text-burgundy sm:text-4xl">
              Une Province animée par la fraternité
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-ink/75">
            <p>
              Les frères de la Province Sainte Marie des Anges vivent leur
              vocation selon la spiritualité franciscaine : simplicité,
              conversion, service, écoute, joie et fraternité.
            </p>
            <p>
              Ils sont engagés dans les paroisses, les communautés, les écoles,
              les œuvres sociales, les centres de formation et les missions de la
              Province, en répondant aux besoins du peuple de Dieu.
            </p>
            <p>
              La présence vivante de la Province se concrétise dans le courage de
              la prière, l’engagement pastoral et le témoignage d’une vie
              entièrement consacrée à l’Évangile.
            </p>
            <div className="pt-3">
              <Link
                href="/#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-sm bg-burgundy px-6 font-semibold text-white transition-colors hover:bg-[#602724]"
              >
                Contacter la Curie
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
