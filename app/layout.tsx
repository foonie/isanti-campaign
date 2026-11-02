import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const akrobat = localFont({
  src: [
    { path: "../public/fonts/akrobat-regular.woff", weight: "400", style: "normal" },
    { path: "../public/fonts/akrobat-bold.woff", weight: "700", style: "normal" },
  ],
  variable: "--font-akrobat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Isanti Glass | Wine Bottle Range",
  description:
    "Explore Isanti Glass's locally manufactured wine bottle range, supporting quality, consistency and stronger partnerships with South Africa's winemakers.",
  applicationName: "Isanti Glass",
  openGraph: {
    title: "Isanti Glass | Wine Bottle Range",
    description:
      "Great wine deserves exceptional partnerships. Explore Isanti Glass's locally manufactured wine bottle range.",
    type: "website",
    // TODO: Add your absolute production URL and social-sharing image.
  },
  // TODO: Replace with your canonical production URL when known.
  // alternates: { canonical: "https://www.example.com/campaigns/wine" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#92c145",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={akrobat.variable}>
      <body id="top">{children}</body>
    </html>
  );
}
