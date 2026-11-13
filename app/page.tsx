import Image from "next/image";
import Link from "next/link";
import ContactForm from "./components/contact-form";

const offices = [
  {
    number: "01",
    title: "Secrétariat provincial",
    description: "Coordination et accompagnement de la vie de la Province.",
  },
  {
    number: "02",
    title: "Secrétariat pour la formation et les études",
    description: "Accompagnement de la formation initiale et permanente des frères.",
  },
  {
    number: "03",
    title: "Secrétariat pour la mission et l’évangélisation",
    description: "Animation de la mission pastorale et de l’annonce de l’Évangile.",
  },
  {
    number: "04",
    title: "Commission Justice, Paix et Intégrité de la Création (JPIC)",
    description: "Engagement pour la paix, la justice et le respect de la création.",
  },
  {
    number: "05",
    title: "Commission de la protection des mineurs et des personnes vulnérables",
    description: "Engagement provincial pour la protection des mineurs et des personnes vulnérables.",
  },
  {
    number: "06",
    title: "Économat provincial",
    description: "Gestion et accompagnement des ressources de la Province.",
  },
  {
    number: "07",
    title: "Bureau provincial de développement",
    description: "Coordination des initiatives de développement de la Province.",
  },
  {
    number: "08",
    title: "Ferme agro-pastorale de Muanzangudia",
    description: "Œuvre agro-pastorale de la Province à Muanzangudia.",
  },
  {
    number: "09",
    title: "Conseillerie des écoles franciscaines",
    description: "Coordination des engagements éducatifs franciscains.",
  },
  {
    number: "10",
    title: "Centre hospitalier Rieti",
    description: "Œuvre de santé de la Province.",
  },
  {
    number: "11",
    title: "Commission de la FaFra",
    description: "Commission provinciale de la FaFra.",
  },
  {
    number: "12",
    title: "Commission de la communication",
    description: "Communication et diffusion des informations provinciales.",
  },
  {
    number: "13",
    title: "Commission Pro Monialibus",
    description: "Accompagnement des moniales et de la vie contemplative.",
  },
];

const fraternities = [
  "Fraternité Sainte Élisabeth de Hongrie",
  "Fraternité Saint François d’Assise (Lukelenge)",
  "Fraternité Rivo Torto / Bena Cibwabwa",
  "Fraternité Saint Bonaventure (Cibuyi)",
  "Fraternité Fonte Colombo / Muya",
  "Fraternité Sainte Claire / Ngandajika",
  "Fraternité agro-pastorale / Mwanzangudia",
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

const documents = [
  "Livres des Frères et statuts particuliers",
  "Lettres circulaires et décrets",
  "Publications franciscaines, dont Ngumu Yetu et les publications d’anniversaire",
];

const cardClass =
  "rounded-sm border border-burgundy/10 bg-paper p-6 shadow-[0_8px_30px_rgba(36,38,33,0.04)]";

function SectionHeading({
  eyebrow,
  title,
  description,
  inverted = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  inverted?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p
        className={`text-xs font-semibold uppercase tracking-[0.18em] ${
          inverted ? "text-white/70" : "text-blue"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-serif text-3xl leading-tight sm:text-4xl ${
          inverted ? "text-white" : "text-burgundy"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 leading-7 ${
            inverted ? "text-white/75" : "text-ink/70"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section
        id="accueil"
        className="relative isolate overflow-hidden bg-[#fbf8f1] text-ink"
      >
        <div
          aria-hidden="true"
          className="absolute right-[-8rem] top-[-10rem] -z-10 h-[32rem] w-[32rem] rounded-full border border-[#b58a58]/15 sm:h-[42rem] sm:w-[42rem]"
        />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.25fr_0.75fr] lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7548] sm:text-sm">
              Frères Mineurs · République Démocratique du Congo
            </p>
            <h1 className="mt-5 font-serif text-4xl leading-[1.08] text-burgundy sm:text-6xl lg:text-7xl">
              Province Sainte Marie des Anges
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-ink/75 sm:text-lg sm:leading-8">
              Paix et Joie ! Bienvenue sur le site officiel de la Province
              Sainte Marie des Anges des Frères Mineurs en République
              Démocratique du Congo. Nous vivons et témoignons de l’Évangile
              dans la fraternité, la simplicité et le service, à la suite de
              saint François d’Assise.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#a-propos"
                className="inline-flex min-h-12 items-center justify-center rounded-sm bg-burgundy px-6 font-semibold text-white transition-colors hover:bg-[#602724]"
              >
                Découvrir la Province
              </Link>
              <Link
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-sm border border-burgundy/30 px-6 font-semibold text-burgundy transition-colors hover:bg-white"
              >
                Contacter la Curie
              </Link>
            </div>
          </div>
          <div className="mx-auto flex h-52 w-52 items-center justify-center rounded-full border border-[#b58a58]/35 bg-white p-8 shadow-[0_18px_50px_rgba(114,47,43,0.12)] sm:h-64 sm:w-64 sm:p-10">
            <Image
              src="/logo-smardc-couleur.png"
              alt="Logo couleur de la Province Sainte Marie des Anges"
              width={600}
              height={600}
              priority
              className="h-full w-full rounded-full object-contain"
            />
          </div>
        </div>
        <div className="border-y border-[#b58a58]/25 bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-[#b58a58]/20 px-5 py-5 text-center sm:px-8 lg:px-10">
            <Link
              href="/presence#fraternites"
              aria-label="Afficher la liste des fraternités"
              className="rounded-sm transition-colors hover:bg-cream focus-visible:outline-blue"
            >
              <p className="font-serif text-2xl text-burgundy sm:text-3xl">22</p>
              <p className="mt-1 text-[11px] text-ink/60 sm:text-sm">fraternités</p>
            </Link>
            <Link
              href="/presence#paroisses"
              aria-label="Afficher la liste des paroisses"
              className="rounded-sm transition-colors hover:bg-cream focus-visible:outline-blue"
            >
              <p className="font-serif text-2xl text-burgundy sm:text-3xl">13</p>
              <p className="mt-1 text-[11px] text-ink/60 sm:text-sm">paroisses</p>
            </Link>
            <Link
              href="/presence#freres"
              aria-label="Afficher les informations sur les frères"
              className="rounded-sm transition-colors hover:bg-cream focus-visible:outline-blue"
            >
              <p className="font-serif text-2xl text-burgundy sm:text-3xl">135+</p>
              <p className="mt-1 text-[11px] text-ink/60 sm:text-sm">frères</p>
            </Link>
          </div>
        </div>
      </section>

      <section id="a-propos" className="bg-paper px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue">
              Qui sommes-nous ?
            </p>
            <h2 className="mt-4 max-w-sm font-serif text-4xl leading-tight text-burgundy sm:text-5xl">
              Une présence fraternelle, au cœur du Congo
            </h2>
          </div>
          <div className="self-center">
            <p className="text-lg leading-8 text-ink/85 sm:text-xl sm:leading-9">
              La Province Sainte Marie des Anges est issue de la restructuration
              de la Province Saint Benoît l’Africain. Elle a été érigée
              canoniquement le 16 février 2015 par le Ministre général Michael
              Antony Perry. Elle poursuit sa mission franciscaine et pastorale,
              portée par des frères engagés dans la vie fraternelle et le
              service du peuple de Dieu.
            </p>
            <p className="mt-5 leading-7 text-ink/70">
              La spiritualité franciscaine invite à vivre l’Évangile dans la
              simplicité, la fraternité, la paix et le respect de toute la
              création.
            </p>
          </div>
        </div>
      </section>

      <section
        id="presence"
        className="border-y border-burgundy/10 bg-cream px-5 py-16 sm:px-8 sm:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Où nous sommes"
            title="Des fraternités au service des communautés"
            description="La Province compte 22 fraternités réparties dans divers diocèses en République Démocratique du Congo et à l’étranger, ainsi que 13 paroisses confiées aux Frères Mineurs."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article className={cardClass}>
              <Link
                href="#liste-fraternites"
                aria-label="Afficher la liste des fraternités"
                className="inline-block rounded-sm transition-colors hover:text-blue focus-visible:outline-blue"
              >
                <p className="font-serif text-5xl text-burgundy sm:text-6xl">22</p>
                <h3 className="mt-3 font-serif text-2xl text-ink">Fraternités</h3>
              </Link>
              <p className="mt-3 leading-7 text-ink/70">
                Chaque fraternité est un lieu de prière, de vie communautaire et
                de mission. Cliquez sur le nombre pour consulter les noms
                communiqués.
              </p>
            </article>
            <article className={cardClass}>
              <Link
                href="#liste-paroisses"
                aria-label="Afficher la liste des paroisses"
                className="inline-block rounded-sm transition-colors hover:text-burgundy focus-visible:outline-blue"
              >
                <p className="font-serif text-5xl text-blue sm:text-6xl">13</p>
                <h3 className="mt-3 font-serif text-2xl text-ink">Paroisses</h3>
              </Link>
              <p className="mt-3 leading-7 text-ink/70">
                Ces lieux de célébration, d’évangélisation et de proximité
                accompagnent le peuple de Dieu. Cliquez sur le nombre pour
                consulter les paroisses déjà communiquées.
              </p>
            </article>
          </div>
          <div id="liste-fraternites" className="mt-12 scroll-mt-32">
            <h3 className="font-serif text-3xl text-burgundy">
              Liste des fraternités
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-ink/70">
              Voici les 21 noms transmis. Le 22e nom annoncé reste à confirmer
              auprès de la Curie provinciale.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {fraternities.map((fraternity) => (
                <li
                  key={fraternity}
                  className="border-l-2 border-[#b58a58] bg-paper p-4 text-sm leading-6 text-ink/80"
                >
                  {fraternity}
                </li>
              ))}
            </ul>
          </div>
          <div id="liste-paroisses" className="mt-12 scroll-mt-32">
            <h3 className="font-serif text-3xl text-burgundy">
              Paroisses confiées aux Frères Mineurs
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-ink/70">
              Voici les 13 paroisses dont les noms ont été communiqués.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {parishes.map((parish) => (
                <li
                  key={parish}
                  className="border-l-2 border-blue bg-paper p-4 text-sm leading-6 text-ink/80"
                >
                  {parish}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-paper px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-sm bg-blue-deep p-7 text-white sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/65">
              Message du Ministre provincial
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
              Message à venir
            </h2>
            <p className="mt-5 leading-7 text-white/80">
              Le message officiel du Ministre provincial n’est pas encore
              disponible. Il sera publié ici dès qu’il aura été transmis par la
              Curie provinciale.
            </p>
          </article>
          <article
            id="vocations"
            className="flex flex-col justify-center rounded-sm border border-burgundy/10 bg-cream p-7 sm:p-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue">
              Cheminer dans la vocation
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-burgundy sm:text-4xl">
              Vocations franciscaines
            </h2>
            <p className="mt-4 leading-7 text-ink/70">
              Les jeunes en discernement sont invités à prendre contact avec la
              Province pour s’informer sur la vie fraternelle et le parcours de
              formation.
            </p>
            <Link
              href="mailto:ofmsmasepro@gmail.com?subject=Information%20sur%20les%20vocations"
              className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-blue hover:text-blue-deep"
            >
              Écrire au secrétariat <span aria-hidden="true">→</span>
            </Link>
          </article>
        </div>
      </section>

      <section id="formation" className="bg-cream px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Formation"
            title="Grandir dans la vie franciscaine"
            description="Le parcours de formation franciscaine comprend l’aspirandat, le postulat, le noviciat et le scolasticat."
          />
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["Aspirandat", "Postulat", "Noviciat", "Scolasticat"].map((step, index) => (
              <li
                key={step}
                className="flex min-h-36 flex-col justify-between border-t-2 border-blue bg-paper p-6"
              >
                <span className="text-xs font-semibold text-blue">
                  {index === 0 ? "ÉTAPE PRÉPARATOIRE" : `ÉTAPE 0${index}`}
                </span>
                <span className="font-serif text-2xl text-burgundy">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="offices" className="bg-paper px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Curie et organisation"
            title="Définitoire provincial"
            description="Les offices provinciaux accompagnent les frères et les œuvres dans leurs missions respectives."
          />
          <h3 className="mt-10 font-serif text-2xl text-burgundy">
            Offices et secrétariats
          </h3>
          <div className="mt-4 grid gap-x-8 md:grid-cols-2 lg:grid-cols-3">
            {offices.map((office) => (
              <article
                key={office.number}
                className="border-t border-burgundy/20 py-6"
              >
                <p className="text-xs font-semibold tracking-[0.14em] text-blue">
                  {office.number}
                </p>
                <h3 className="mt-3 font-serif text-xl leading-snug text-burgundy">
                  {office.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-ink/70">
                  {office.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projets"
        className="border-y border-burgundy/10 bg-cream px-5 py-16 sm:px-8 sm:py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <SectionHeading
            eyebrow="Projets"
            title="Agir au service des communautés"
            description="La Province porte des initiatives pour répondre aux besoins pastoraux et sociaux."
          />
          <div className="grid gap-4 sm:grid-cols-3 md:pt-1">
            {["Construction", "Formation", "Initiatives pastorales et sociales"].map(
              (project) => (
                <div key={project} className="border-l-2 border-[#b58a58] bg-paper p-5">
                  <h3 className="font-serif text-xl leading-snug text-burgundy">
                    {project}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-ink/70">
                    Informations détaillées à publier après validation par la
                    Curie provinciale.
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section id="documents" className="bg-blue-deep px-5 py-16 text-white sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Ressources"
            title="Documents officiels"
            description="Les documents officiels seront mis à disposition après validation et transmission des fichiers par la Curie provinciale."
            inverted
          />
          <div className="space-y-3">
            {documents.map((document) => (
              <div
                key={document}
                className="flex items-start gap-4 border-b border-white/20 py-4"
              >
                <span aria-hidden="true" className="font-serif text-xl text-[#ead7bd]">
                  ↗
                </span>
                <p className="leading-7 text-white/85">{document}</p>
              </div>
            ))}
            <Link
              href="mailto:ofmsmasepro@gmail.com?subject=Demande%20de%20document%20officiel"
              className="mt-4 inline-flex items-center gap-3 text-sm font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
            >
              Demander un document au secrétariat
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="actualites" className="bg-paper px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Nouvelles de la Province"
            title="Actualités"
            description="Communiqués officiels, messages du Ministre provincial et du Définitoire, ordinations, retraites, assemblées et événements franciscains."
          />
          <div className="mt-8 border-l-2 border-[#b58a58] bg-cream p-6 sm:p-8">
            <h3 className="font-serif text-2xl text-burgundy">
              Les nouvelles seront publiées ici
            </h3>
            <p className="mt-3 max-w-2xl leading-7 text-ink/70">
              Aucun communiqué daté n’a été transmis pour publication. Pour
              éviter de diffuser des informations non vérifiées, cette rubrique
              sera alimentée à réception des nouvelles officielles de la Curie.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue">
              Ensemble, servir
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-burgundy sm:text-4xl">
              Soutenir la mission de la Province
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-ink/70">
              Votre soutien contribue à la formation des jeunes frères, à
              l’éducation, aux soins de santé et aux initiatives au service des
              communautés.
            </p>
          </div>
          <Link
            href="/dons"
            className="inline-flex min-h-12 items-center justify-center rounded-sm bg-blue px-6 font-semibold text-white transition-colors hover:bg-blue-deep"
          >
            Découvrir comment soutenir la Province
          </Link>
        </div>
      </section>

      <section id="contact" className="bg-paper px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue">
              Nous écrire
            </p>
            <h2 className="mt-3 font-serif text-4xl text-burgundy">
              Curie provinciale
            </h2>
            <address className="mt-6 text-sm not-italic leading-7 text-ink/75">
              48 Avenue Dilunga, Quartier Kansele
              <br />
              Commune de la Muya
              <br />
              Mbujimayi, République Démocratique du Congo
            </address>
            <div className="mt-5 flex flex-col items-start gap-2 text-sm">
              <Link
                href="mailto:ofmsmasepro@gmail.com"
                className="text-blue underline underline-offset-4"
              >
                ofmsmasepro@gmail.com
              </Link>
              <Link
                href="tel:+243895777619"
                className="text-blue underline underline-offset-4"
              >
                +243 895 777 619
              </Link>
            </div>
            <div className="mt-8 border-t border-burgundy/15 pt-6">
              <h3 className="font-serif text-xl text-burgundy">
                Services numériques
              </h3>
              <p className="mt-3 text-sm leading-6 text-ink/70">
                L’annuaire des frères et des maisons, les formulaires en ligne
                et les téléchargements seront activés lorsque leurs contenus
                officiels seront disponibles.
              </p>
            </div>
          </div>
          <div className="rounded-sm border border-burgundy/10 bg-cream p-5 sm:p-8">
            <h3 className="font-serif text-2xl text-burgundy">
              Formulaire de contact
            </h3>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
