import { ReactNode } from 'react';
import { Footer, Header, Main } from '@/layout';

export default function LayoutContainer({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
