import { ReactNode } from 'react';
import type { Metadata } from 'next';
import '../style/globals.css';
import 'kku-ui/lib/styles/index.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
