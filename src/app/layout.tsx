import type { Metadata } from 'next';
import { IBM_Plex_Sans_KR } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: '불로구',
  description: "snakechickensoup's blog"
};

const IBMPSK = IBM_Plex_Sans_KR({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700']
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' className={IBMPSK.className} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
