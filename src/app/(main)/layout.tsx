import '../globals.css';
import type { Metadata } from 'next';
import { Navbar } from '@/components/Header';
import RootStyleRegistry from '../providers';

export const metadata: Metadata = {
  title: 'Car Go Rentals',
  description: 'Rent Cars anywhere. Hop in, Ride On',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      <body>
        <RootStyleRegistry>
          <Navbar />
          {children}
        </RootStyleRegistry>
      </body>
    </html>
  );
}
