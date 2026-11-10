import type { Metadata } from "next";
import SiteHeader from "./components/site-header";
import SiteFooter from "./components/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Province Sainte Marie des Anges | OFM RDC",
  description:
    "Site officiel de la Province Sainte Marie des Anges des Frères Mineurs en République Démocratique du Congo.",
  metadataBase: new URL("https://www.smardc.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Province Sainte Marie des Anges | OFM RDC",
    description:
      "Fraternité, simplicité et service, à la suite de saint François d’Assise.",
    url: "https://www.smardc.org",
    siteName: "Province Sainte Marie des Anges",
    locale: "fr_CD",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
