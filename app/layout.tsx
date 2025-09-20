import './globals.css';
import { Outfit, Inter } from 'next/font/google';

// Define the fonts and load them.
// We are using `variable` to assign a CSS variable name for each font,
// which makes them easy to use with Tailwind CSS in your components.
const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit'
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata = {
  title: 'Dreambox Creative Tech Academy',
  description: 'Coding, Robotics, and Design classes for children in Lagos, Nigeria.',
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
      <body className={`${outfit.variable} ${inter.variable} font-inter`}>
        {children}
      </body>
    </html>
  );
}
