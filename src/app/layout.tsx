import type { Metadata } from "next";
import { Montserrat, EB_Garamond } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});
const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fondation Dominique Renaud | Home",
  description:
    "Une fondation pour préserver l'héritage de Dominique Renaud. Créée en mars 2025 à Neuchâtel, la Fondation Dominique Renaud a pour mission de conserver, partager et faire rayonner les 40 ans de carrière de ce maître horloger visionnaire. Véritable trait d'union entre tradition et innovation, la Fondation se présente comme un fonds d'archives vivant, rassemblant dessins, maquettes, prototypes, montres et créations originales.",
};

export async function generateStaticParams() {
  const locales = ["en", "fr"];
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerList = await headers();
  const pathname = headerList.get("x-current-path");
  const locale = pathname?.split("/")[1];

  const locales = ["en", "fr"];
  if (!pathname || !locales.includes(locale || "")) {
    redirect("/en");
  }

  return (
    <html lang={locale}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body
        className={`${montserrat.variable} ${garamond.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
