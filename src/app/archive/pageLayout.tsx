import { ReactNode } from 'react';
import './pageLayout.tsx.scss';

export default function ArchiveLayout({ children }: { children: ReactNode }) {
  return <section className="archive__layout">{children}</section>;
}
