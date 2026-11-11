import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Faire un don | Province Sainte Marie des Anges",
  description:
    "Soutenez la mission de la Province Sainte Marie des Anges et consultez les informations bancaires pour les dons.",
  alternates: {
    canonical: "/dons",
  },
};

export default function DonationsPage() {
  return (
    <>
      <section className="bg-cream px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue">
            Ensemble, servir
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-burgundy sm:text-6xl">
            Soutenir la mission de la Province
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/75">
            Votre soutien contribue à la formation des jeunes frères, à
            l’éducation, aux soins de santé et aux initiatives au service des
            communautés.
          </p>
        </div>
      </section>

      <section className="bg-paper px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue">
                Soutien aux projets
              </p>
              <h2 className="mt-3 font-serif text-3xl text-burgundy">
                Informations pour les dons
              </h2>
              <p className="mt-5 leading-7 text-ink/75">
                Numéro de projet : <strong>GSFM 28-26</strong>
              </p>
              <p className="mt-4 leading-7 text-ink/75">
                Pour ce projet, veuillez remplir le formulaire au format Word
                et l’envoyer par courriel à{" "}
                <Link
                  href="mailto:projects@franciscanmissions.org"
                  className="font-semibold text-blue underline underline-offset-4"
                >
                  projects@franciscanmissions.org
                </Link>
                .
              </p>
              <p className="mt-4 text-sm leading-6 text-ink/70">
                Personne de contact : Fr. Nicodème Muambata, OFM
              </p>
              <p className="mt-6 border-l-2 border-[#b58a58] pl-4 text-sm leading-6 text-ink/70">
                Aucun paiement en ligne n’est configuré sur ce site. Pour toute
                question concernant un don, veuillez contacter la Curie.
              </p>
              <Link
                href="mailto:ofmsmasepro@gmail.com?subject=Soutenir%20la%20mission%20de%20la%20Province"
                className="mt-6 inline-flex min-h-12 items-center justify-center rounded-sm bg-blue px-6 font-semibold text-white transition-colors hover:bg-blue-deep"
              >
                Contacter la Curie
              </Link>
            </div>

            <div className="rounded-sm border border-burgundy/10 bg-cream p-6 sm:p-8">
              <h2 className="font-serif text-2xl text-burgundy">
                Coordonnées bancaires
              </h2>
              <dl className="mt-6 grid content-start gap-x-6 gap-y-5 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-ink/55">
                    Banque
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-ink">
                    RAWBANK (Agence de Mbujimayi)
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-ink/55">
                    Titulaire du compte
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-ink">
                    FRÈRES MINEURS SAINTE MARIE DES ANGES
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-ink/55">
                    Numéro de compte
                  </dt>
                  <dd className="mt-1 break-all font-mono text-sm leading-6 text-ink">
                    05100-05160-01041120802-24
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-ink/55">
                    Code SWIFT
                  </dt>
                  <dd className="mt-1 font-mono text-sm leading-6 text-ink">
                    RAWBCDKI
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-ink/55">
                    IBAN
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-ink">
                    Non communiqué
                  </dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-ink/55">
                    Adresse de la banque
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-ink">
                    RAWBANK, agence de Mbujimayi
                    <br />
                    47, boulevard L.-D. Kabila, quartier Masanka, commune de
                    Diulu
                    <br />
                    Tél. :{" "}
                    <Link
                      href="tel:+243817084602"
                      className="text-blue underline underline-offset-4"
                    >
                      +243 817 084 602
                    </Link>
                    <br />
                    Fax : 33489240204/05
                  </dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-ink/55">
                    Adresse du titulaire
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-ink">
                    Nicodème Muambata, OFM
                    <br />
                    1, avenue de l’Évêque, Lukelenge
                    <br />
                    Mbujimayi, province du Kasaï-Oriental, République
                    Démocratique du Congo
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
