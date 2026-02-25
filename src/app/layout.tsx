import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ranncoconstruction.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rannco Construction | #1 Construction Contractor in Harrisburg & Southern Illinois",
    template: "%s | Rannco Construction",
  },
  description:
    "Harrisburg IL's trusted construction contractor. Call (618) 594-1178 for FREE estimates! Residential & commercial construction, renovations, and design-build services serving Harrisburg, Marion, Carbondale, Benton & all Southern Illinois. 20+ years experience. Licensed & insured.",
  keywords: [
    // Primary keywords - Harrisburg focus
    "construction contractor Harrisburg IL",
    "general contractor Harrisburg Illinois",
    "home builder Harrisburg IL",
    "commercial construction Harrisburg",
    "construction company Harrisburg IL",
    // Regional keywords
    "construction contractor Southern Illinois",
    "general contractor Marion IL",
    "home builder Carbondale IL",
    "construction company Benton IL",
    // Service keywords
    "residential construction Southern Illinois",
    "commercial construction Harrisburg",
    "home renovation Harrisburg IL",
    "kitchen remodel Southern Illinois",
    "new home construction Southern Illinois",
    "bathroom remodel Harrisburg",
    "design build Southern Illinois",
    "concrete foundation IL",
    // Location keywords
    "contractor Marion Illinois",
    "construction Carbondale Illinois",
    "general contractor Benton IL",
    "Herrin IL construction",
    "Murphysboro home builder",
    "West Frankfort construction contractor",
    "Du Quoin home renovation",
    "Carterville IL contractor",
    "Johnston City construction",
    "Anna IL home builder",
    "Vienna Illinois construction",
    "Saline County contractor",
    // Trust keywords
    "licensed construction contractor Harrisburg IL",
    "insured general contractor Southern Illinois",
    "best contractor Benton IL",
  ],
  authors: [{ name: "Rannco Construction" }],
  creator: "Rannco Construction",
  publisher: "Rannco Construction",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Rannco Construction | #1 Construction Contractor in Harrisburg & Southern Illinois",
    description:
      "Harrisburg IL's trusted construction contractor. Call (618) 594-1178! Residential & commercial construction, renovations & design-build. 20+ years experience. Free estimates. Serving all of Southern Illinois.",
    url: siteUrl,
    siteName: "Rannco Construction",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Rannco Construction - Southern Illinois Construction Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rannco Construction | #1 Construction Contractor in Southern Illinois",
    description:
      "Southern Illinois' most trusted construction contractor. Residential & commercial construction, renovations & design-build. 20+ years experience. Free estimates.",
    images: ["/og-image.svg"],
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
  alternates: {
    canonical: siteUrl,
  },
  category: "Construction Services",
  classification: "General Contractor",
};

// JSON-LD Structured Data for Local Business
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Rannco Construction",
  image: `${siteUrl}/og-image.svg`,
  "@id": siteUrl,
  url: siteUrl,
  telephone: "+1-618-594-1178",
  email: "chood@rannco.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "505 E Walnut St",
    addressLocality: "Harrisburg",
    addressRegion: "IL",
    postalCode: "62946",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.7384,
    longitude: -88.5406,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-618-594-1178",
    contactType: "customer service",
    email: "chood@rannco.com",
    areaServed: "US",
    availableLanguage: "English",
  },
  areaServed: [
    { "@type": "City", name: "Harrisburg", addressRegion: "IL" },
    { "@type": "City", name: "Marion", addressRegion: "IL" },
    { "@type": "City", name: "Carbondale", addressRegion: "IL" },
    { "@type": "City", name: "Benton", addressRegion: "IL" },
    { "@type": "City", name: "Herrin", addressRegion: "IL" },
    { "@type": "City", name: "Murphysboro", addressRegion: "IL" },
    { "@type": "City", name: "Carterville", addressRegion: "IL" },
    { "@type": "City", name: "Johnston City", addressRegion: "IL" },
    { "@type": "City", name: "West Frankfort", addressRegion: "IL" },
    { "@type": "City", name: "Du Quoin", addressRegion: "IL" },
    { "@type": "City", name: "Anna", addressRegion: "IL" },
    { "@type": "City", name: "Vienna", addressRegion: "IL" },
    { "@type": "City", name: "Thompsonville", addressRegion: "IL" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/ranncoconstruction",
    "https://www.instagram.com/ranncoconstruction",
  ],
  priceRange: "$$",
  paymentAccepted: ["Cash", "Credit Card", "Check", "Financing Available"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Construction Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Residential Construction",
          description: "Custom home building, additions, and residential construction projects",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Construction",
          description: "Office buildings, retail spaces, and commercial construction projects",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Renovations & Remodeling",
          description: "Kitchen, bathroom, and whole-house renovation services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Design-Build Services",
          description: "End-to-end design and construction solutions",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "150",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
