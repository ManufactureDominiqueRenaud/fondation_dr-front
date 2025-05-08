import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";

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

  //DATA FOOTER
  let footerData;
  try {
    const footerRes = await fetch(
      `${process.env
        .STRAPI_API_URL!}/api/footer-single?populate[blocContact][populate][0]=links&populate[blocContact][populate][1]=buttons&populate[blocTeam][populate][0]=members&status=published&locale=${locale}`,
      {
        next: { revalidate: 604800, tags: ["footer-data"] }, // Revalidate every 7 days (604800 seconds)
      }
    );
    footerData = await footerRes.json();
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données du footer:",
      error
    );
    footerData = null;
  }

  return (
    <main>
      <Header />
      {children}
      <Footer data={footerData?.data} />
    </main>
  );
}
