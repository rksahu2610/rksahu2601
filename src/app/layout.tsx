import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Roboto } from 'next/font/google';
import { Suspense } from "react";
import { TooltipProvider } from "~/components/ui/tooltip";
import { cn } from "~/lib/utils";
import { ThemeProvider } from "~/providers/theme-provider";
import "./globals.css";
import { Loader2 } from "lucide-react";
const Navbar = dynamic(() => import("~/components/navbar"))
const Particles = dynamic(() => import("~/components/particles").then((mod) => mod.Particles))

const roboto = Roboto({})

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
          "min-h-screen bg-background antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          roboto.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <TooltipProvider delayDuration={0}>
            {children}
            <Suspense fallback={<Loader2 className="animate-spin" />}>
              <Navbar />
              <Particles />
            </Suspense>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
