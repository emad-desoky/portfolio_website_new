import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import * as Sentry from "@sentry/nextjs";

// Initialize Sentry
Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
});

// Optionally, create an Error Boundary component if you want to catch errors
import { SentryErrorBoundary } from "@sentry/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emad's Portfolio",
  description: "Modern & Minimalist Js Mastery Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SentryErrorBoundary
          fallback={<h1>An error has occurred</h1>}
          onError={(error) => {
            Sentry.captureException(error);
          }}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </SentryErrorBoundary>
      </body>
    </html>
  );
}
