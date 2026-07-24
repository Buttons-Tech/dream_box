// app/layout.tsx
import './globals.css';
import { Fredoka } from 'next/font/google';

const fredoka = Fredoka({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-fredoka'
});

export const metadata = {
  title: 'Dreambox Education',
  description: 'Clubs & Academies for Kids',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fredoka.className}>{children}</body>
    </html>
  );
}