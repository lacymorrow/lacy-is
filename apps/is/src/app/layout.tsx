import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider, ThemeToggle } from "@/components/ui/theme";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata, Viewport } from "next";

import "~/app/globals.css";

import { cn } from "@/lib/utils";
import { env } from "~/env";

export const metadata: Metadata = {
  metadataBase: new URL(
    env.VERCEL_ENV === "production"
      ? (env.VERCEL_URL || "https://lacy.is")
      : "http://localhost:3000",
  ),
  title: "lacy.is",
  description: "be a better person.",
  openGraph: {
    title: "lacy.is",
    description: "be a better person.",
    url: "https://lacy.is",
    siteName: "lacy.is",
  },
  twitter: {
    card: "summary_large_image",
    site: "@lacy_is",
    creator: "@lacy_is",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased",
          GeistSans.variable,
          GeistMono.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {props.children}
          <div className="absolute bottom-4 right-4">
            <ThemeToggle />
          </div>

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
