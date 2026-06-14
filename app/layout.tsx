import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Svea Bygg Partner AB – Bygg & Renovering i Eskilstuna",
  description:
    "Svea Bygg Partner AB utför bygg, renovering, takarbeten, golvläggning, målning och tillbyggnader i Eskilstuna och hela Sverige. Över 7 års erfarenhet. Kontakta oss för offert.",
  keywords: [
    "byggföretag Eskilstuna",
    "renovering Eskilstuna",
    "takbyte Eskilstuna",
    "golvläggning Eskilstuna",
    "målning Eskilstuna",
    "tillbyggnad Eskilstuna",
    "hantverkare Eskilstuna",
    "Svea Bygg Partner",
  ],
  authors: [{ name: "Svea Bygg Partner AB" }],
  openGraph: {
    title: "Svea Bygg Partner AB – Bygg & Renovering i Eskilstuna",
    description:
      "Professionella bygg- och hantverkstjänster i Eskilstuna och hela Sverige. Tak, golv, målning, tillbyggnader och mer.",
    type: "website",
    locale: "sv_SE",
    siteName: "Svea Bygg Partner AB",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Svea Bygg Partner AB",
  description: "Bygg- och hantverksföretag med bas i Eskilstuna. Renovering, tak, golv, målning och tillbyggnader.",
  telephone: "+46735550495",
  email: "sveabyggpartner@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Eskilstuna",
    addressCountry: "SE",
  },
  areaServed: "Sverige",
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${oswald.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
