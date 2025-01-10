import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '불로구',
  description: "snakechickensoup's blog"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
