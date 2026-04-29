import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { GlobalSearch } from "@/components/layout/global-search";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://snapjsx.com"),
  title: {
    default: "SnapJSX - Barebone JSX for Modern Apps",
    template: "%s | SnapJSX",
  },
  description:
    "High-performance, zero-dependency JSX components for React and Next.js. Copy, paste, and take full control of your UI.",
  keywords: [
    "React",
    "Next.js",
    "JSX",
    "Tailwind CSS",
    "UI Components",
    "Component Registry",
    "Web Development",
  ],
  authors: [{ name: "SnapJSX Team" }],
  creator: "SnapJSX",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://snapjsx.com",
    title: "SnapJSX - Barebone JSX for Modern Apps",
    description:
      "High-performance, zero-dependency JSX components for React and Next.js. Copy, paste, and take full control of your UI.",
    siteName: "SnapJSX",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SnapJSX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SnapJSX - Barebone JSX for Modern Apps",
    description:
      "High-performance, zero-dependency JSX components for React and Next.js. Copy, paste, and take full control of your UI.",
    images: ["/og-image.png"],
    creator: "@snapjsx",
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} min-h-screen bg-background text-foreground font-sans antialiased relative`}
        suppressHydrationWarning
      >
        <Analytics />
        <div className="absolute inset-0 -z-10 grid-background" />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
          <GlobalSearch />
        </ThemeProvider>
      </body>
    </html>
  );
}
