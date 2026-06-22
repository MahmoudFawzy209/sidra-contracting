import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "مؤسسة سدرة المعاني للمقاولات والتشطيبات والصيانة ورفع الكفاءة",
  description:
    "سباكه - عزل - شلالات مياه - نوافير - نقاشه - لياسه - صيانه عامه للمنازل | اتصل بنا: 0542693935",
  keywords: [
    "سدرة المعاني",
    "سدره المعاني",
    "سدرة المعانى",
    "سدره المعانى",
    "مؤسسة سدرة المعاني",
    "مؤسسه سدره المعانى للمقاولات",
    "سباك بالدمام",
    "معلم سباكه",
    "فنى سباكه",
    "تأسيس سباكه وتشطيب بالدمام",
    "عزل بالدمام",
    "عوازل بالدمام",
    "معلم عوازل حمامات بالدمام",
    "معلم نوافير و شلالات بالدمام",
    "لياس بالدمام",
    "نقاش بالدمام",
    "مقاول سباكه",
    "مقاول عوازل بالدمام",
    "مقاول لياسه بالدمام",
    "مقاول نقاشه بالدمام",
    "مقاول نوافير وشلالات بالدمام",
    "سباك صيانه بالدمام",
    "صيانه منازل بالدمام",
    "مؤسسه سباكه وتشطيبات بالدمام",
    "مؤسسه عوازل بالدمام",
    "مؤسسه تشطيبات بالدمام",
    "مقاولات الدمام",
    "مقاولات الخبر",
    "تشطيبات الدمام",
    "سباكة الخبر",
    "كهرباء الدمام",
    "عزل مائي وحراري الشرقية",
    "لياسة ودهانات الدمام",
    "شلالات مياه الدمام",
    "نوافير الخبر",
    "ترميم مباني الشرقية",
    "رفع كفاءة المباني",
  ],
  authors: [{ name: "مؤسسة سدرة المعاني" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://sedra-almaani.com",
  },
  openGraph: {
    title: "مؤسسة سدرة المعاني للمقاولات والتشطيبات والصيانة ورفع الكفاءة",
    description:
      "سباكه - عزل - شلالات مياه - نوافير - نقاشه - لياسه - صيانه عامه للمنازل | اتصل بنا: 0542693935",
    url: "https://sedra-almaani.com",
    siteName: "مؤسسة سدرة المعاني",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "https://sedra-almaani.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "مؤسسة سدرة المعاني للمقاولات والتشطيبات",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "مؤسسة سدرة المعاني للمقاولات والتشطيبات والصيانة ورفع الكفاءة",
    description:
      "سباكه - عزل - شلالات مياه - نوافير - نقاشه - لياسه - صيانه عامه للمنازل | اتصل بنا: 0542693935",
    images: ["https://sedra-almaani.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema Markup for Local Construction Business - Eastern Province (Dammam/Khobar)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ConstructionBusiness",
    "name": "مؤسسة سدرة المعاني للمقاولات والتشطيبات والصيانة ورفع الكفاءة",
    "alternateName": [
      "سدرة المعاني",
      "سدره المعاني",
      "سدرة المعانى",
      "سدره المعانى",
      "مؤسسة سدرة المعاني للمقاولات",
      "مؤسسه سدره المعانى للمقاولات"
    ],
    "image": "https://sedra-almaani.com/logo.png",
    "@id": "https://sedra-almaani.com",
    "url": "https://sedra-almaani.com",
    "telephone": "+966542693935",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "حي طيبة، حي الفيصلية، حي 91، حي الشاطئ، الحزام الذهبي",
      "addressLocality": "الدمام والخبر",
      "addressRegion": "المنطقة الشرقية",
      "postalCode": "31411",
      "addressCountry": "SA",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.4207,
      "longitude": 50.0888,
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
      ],
      "opens": "08:00",
      "closes": "18:00",
    },
    "sameAs": [],
  };

  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
