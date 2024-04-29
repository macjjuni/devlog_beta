import React from 'react';
import routes from '@/route';
import Link from 'next/link';
import './header.scss';

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__logo">
        <Link href="/" className="header__logo__link">
          KKUSAENG
        </Link>
      </h1>

      <nav className="header__navigation">
        <ul className="header__navigation__list">
          {routes.map((route) => (
            <li key={route.id} className="header__navigation__list__item">
              <Link href={route.path} className="header__navigation__list__item__link">
                {route.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
