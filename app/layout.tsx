import type { Metadata } from "next";
import "./globals.css";
import UtilityBar from "@/components/UtilityBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactBar from "@/components/FloatingContactBar";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Local Home Healthcare Desk | Islamabad & Rawalpindi`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "First Health Care coordinates professional home nursing, elderly care, physiotherapy, psychology, stroke recovery, and post-operative care across Islamabad, Rawalpindi, DHA, and Bahria Town.",
  keywords: [
    "home nursing care islamabad",
    "elderly care caretaker rawalpindi",
    "home physiotherapy islamabad",
    "stroke rehabilitation home care",
    "post operative nursing care",
    "iv therapy at home islamabad",
    "dha rawalpindi home nurse",
    "bahria town elderly care",
    "first health care"
  ],
  authors: [{ name: "First Health Care (Pvt) Ltd" }],
  creator: "First Health Care",
  publisher: "First Health Care",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: `${siteConfig.name} — Human Care. Clearly Coordinated.`,
    description:
      "Local home healthcare lead-generation and coordination platform for Islamabad & Rawalpindi. Verified nurses, caretakers, and physical therapists.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Home Healthcare Islamabad & Rawalpindi`,
    description:
      "Home nursing, elderly care, and physical therapy in Islamabad & Rawalpindi. Scope and charges confirmed before service.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": siteConfig.name,
    "legalName": siteConfig.legalName,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/logo.png`,
    "description": siteConfig.tagline,
    "telephone": siteConfig.phoneRaw,
    "email": siteConfig.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.registeredOffice.address,
      "addressLocality": "Islamabad",
      "addressRegion": "Federal Capital",
      "addressCountry": "PK"
    },
    "areaServed": siteConfig.coverage.map((area) => ({
      "@type": "AdministrativeArea",
      "name": area
    })),
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": siteConfig.phoneRaw,
      "contactType": "customer service",
      "areaServed": "PK",
      "availableLanguage": ["English", "Urdu"]
    }
  };

  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="flex min-h-full flex-col font-sans bg-white text-slate-900 selection:bg-brand-100 selection:text-brand-900">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-900 focus:text-white focus:rounded-md"
        >
          Skip to main content
        </a>
        <UtilityBar />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingContactBar />
      </body>
    </html>
  );
}
