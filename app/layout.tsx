import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import ThemeClassProvider from '@/components/providers/ThemeClassProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Diego Ortega | Portfolio',
    template: '%s | Diego Ortega',
  },
  description: 'Portafolio personal - desarrollo web full stack, proyectos y contacto.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeClassProvider>{children}</ThemeClassProvider>
      </body>
    </html>
  );
}
