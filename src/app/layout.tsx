import type { Metadata } from "next";
// import { Lexend } from 'next/font/google'
import localFont from "next/font/local";
import Navar from "~/components/navbar";
import { TooltipProvider } from "~/components/ui/tooltip";
import { cn } from "~/lib/utils";
import { ThemeProvider } from "~/providers/theme-provider";
import "./globals.css";
import { Particles } from "~/components/particles";

// const lexend = Lexend({
//   subsets: ['latin'],
//   variable: '--font-sans',
//   display: 'swap',
// })

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Rahul Kumar Sahu",
  description: "Rahul Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          geistSans.variable,
          geistMono.variable,
          // lexend.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider delayDuration={0}>
            {children}
            <Navar />
            <Particles />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
