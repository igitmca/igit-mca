import { inter } from "@/fonts";
import { cn } from "@/lib/utils";
import { RootPage } from "@/metadata";
import RootProvider from "@/services/provider";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";
import "./globals.css";


export const metadata: Metadata = RootPage;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleTagManager gtmId="GTM-XYZ" />
      <GoogleAnalytics gaId="G-XYZ" />
      <body className={cn("min-h-screen bg-background antialiased", inter.className)}>
        <SessionProvider>
          <RootProvider  >
            {children}
            <Toaster richColors position='top-center' />
          </RootProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
