import type { Metadata } from "next";
import { Beau_Rivage, Cormorant_Garamond, EB_Garamond } from "next/font/google";
import "@/styles.css";

const beauRivage = Beau_Rivage({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ["400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const ebGaramond = EB_Garamond({
  weight: ["400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Praveen & Kajal — 25th Anniversary Celebration | December 10, 2026",
  description:
    "Together for 25 years... and forever to go. You are cordially invited to celebrate the 25th Anniversary of Praveen & Kajal on December 10, 2026 at Tree of Life Hotel, Bahadarabad.",
  authors: [{ name: "Praveen & Kajal" }],
  openGraph: {
    title: "Praveen & Kajal — 25th Anniversary Celebration | December 10, 2026",
    description:
      "Together for 25 years... and forever to go. You are cordially invited to celebrate the 25th Anniversary of Praveen & Kajal on December 10, 2026 at Tree of Life Hotel, Bahadarabad.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Praveen & Kajal — 25th Anniversary Celebration | December 10, 2026",
    description:
      "Together for 25 years... and forever to go. You are cordially invited to celebrate the 25th Anniversary of Praveen & Kajal on December 10, 2026 at Tree of Life Hotel, Bahadarabad.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${beauRivage.variable} ${cormorantGaramond.variable} ${ebGaramond.variable}`}
    >
      <body className="antialiased font-body bg-background text-foreground selection:bg-primary/20">
        {children}
      </body>
    </html>
  );
}
