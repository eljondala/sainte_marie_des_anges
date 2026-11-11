import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaTiktok, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

export default function SiteFooter() {
  return (
    <footer className="bg-blue-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr] lg:px-10">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/logo-smardc-couleur.png"
              alt=""
              width={48}
              height={48}
              className="h-12 w-12 rounded-full bg-paper object-contain"
            />
            <p className="font-serif text-lg leading-tight">Province Sainte Marie<br />des Anges · OFM RDC</p>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/70">
            Fraternité, simplicité et service, à la suite de saint François d’Assise.
          </p>
        </div>
        <div>
          <h2 className="font-serif text-lg text-[#ead7bd]">Curie provinciale</h2>
          <address className="mt-4 text-sm not-italic leading-6 text-white/75">
            48 Avenue Dilunga<br />
            Quartier Kansele, Commune de la Muya<br />
            Mbujimayi, République Démocratique du Congo
          </address>
        </div>
        <div>
          <h2 className="font-serif text-lg text-[#ead7bd]">Nous joindre</h2>
          <div className="mt-4 flex flex-col items-start gap-3 text-sm text-white/75">
            <Link href="mailto:ofmsmasepro@gmail.com" className="transition-colors hover:text-white">ofmsmasepro@gmail.com</Link>
            <Link href="tel:+243895777619" className="transition-colors hover:text-white">+243 895 777 619</Link>
          </div>
          <div aria-label="Réseaux sociaux" className="mt-5 flex items-center gap-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white transition-opacity hover:opacity-75"
            >
              <FaFacebookF size={20} aria-hidden="true" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white transition-opacity hover:opacity-75"
            >
              <FaInstagram size={22} aria-hidden="true" />
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-white transition-opacity hover:opacity-75"
            >
              <FaYoutube size={22} aria-hidden="true" />
            </Link>
            <Link
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-white transition-opacity hover:opacity-75"
            >
              <FaTiktok size={20} aria-hidden="true" />
            </Link>
            <Link
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="text-white transition-opacity hover:opacity-75"
            >
              <FaXTwitter size={20} aria-hidden="true" />
            </Link>
            <Link
              href="https://wa.me/243895777619"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-white transition-opacity hover:opacity-75"
            >
              <FaWhatsapp size={22} aria-hidden="true" />
            </Link>
          </div>
          <Link
            href="https://www.smardc.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block text-sm text-white/75 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
          >
            Site officiel smardc.org
          </Link>
        </div>
      </div>
      <div className="border-t border-white/15 px-5 py-4 text-center text-xs text-white/55">
        Province Sainte Marie des Anges · Frères Mineurs en RDC
      </div>
    </footer>
  );
}
