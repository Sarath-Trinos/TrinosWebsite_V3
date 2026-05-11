import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { Providers } from "./providers";
import { CustomCursor } from "@/components/site/CustomCursor";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://trinos.ai"),
  title: "Trinos — Power Enterprise decisions with AI that works",
  description:
    "Deploy AI agents that deliver human experiences at AI scale. Voice AI, contact center copilots, and healthcare agents trusted by the world's largest enterprises.",
  openGraph: {
    title: "Trinos — Power Enterprise decisions with AI that works",
    description:
      "Deploy AI agents that deliver human experiences at AI scale across customer service, contact center, and healthcare.",
    type: "website",
    url: "https://trinos.ai",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body>
        <CustomCursor />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
