import './globals.css';
import { Inter } from 'next/font/google';

// import type { Metadata } from "next";
import ClientNavigation from "@/app/Components/ClientNavigation";

// Define the fonts and load them.
// We are using `variable` to assign a CSS variable name for each font,
// which makes them easy to use with Tailwind CSS in your components.
// const outfit = Outfit({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-outfit'
// });

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata = {
  title: 'Dreambox Creative Tech Academy',
  description: 'Next-gen learning for future innovators. Join Dreambox Academy to unlock your child’s potential. Enroll now for a brighter tomorrow!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // We add the "light" class to force the light theme,
    // which fixes the dark mode issue you experienced on mobile.
    // The font variables are applied to the entire body here.
    <html lang="en" className="light">
      <body className={`${inter.variable} font-inter`}>
        <ClientNavigation />
        <main className="pt-20"> {/* Padding so content doesn't hide under Nav */}
          {children}
        </main>
      </body>
    </html>
  );
}
