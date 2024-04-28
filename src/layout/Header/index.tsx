import React from 'react';
import routes from '@/route';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <h1>KKUSAENG</h1>
      <nav>
        {routes.map((route) => (
          <Link key={route.id} href={route.path}>
            {route.title}
          </Link>
        ))}
      </nav>
    </header>
  );
}
