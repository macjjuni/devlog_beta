import { memo } from 'react';
import './category.scss';
import Link from 'next/link';

function Category() {
  return (
    <ul className="category__card">
      <li className="category__card__item">
        <Link href="/archive">All</Link>
      </li>
      <li className="category__card__item">
        <Link href="/archive">Daily</Link>
      </li>
      <li className="category__card__item">
        <Link href="/archive">Dev</Link>
      </li>
      <li className="category__card__item">
        <Link href="/archive">JavaScript</Link>
      </li>
      <li className="category__card__item">
        <Link href="/archive">TypeScript</Link>
      </li>
      <li className="category__card__item">
        <Link href="/archive">React</Link>
      </li>
      <li className="category__card__item">
        <Link href="/archive">Vue</Link>
      </li>
      <li className="category__card__item">
        <Link href="/archive">Bitcoin</Link>
      </li>
      <li className="category__card__item">
        <Link href="/archive">Git</Link>
      </li>
      <li className="category__card__item">
        <Link href="/archive">CS</Link>
      </li>
      <li className="category__card__item">
        <Link href="/archive">Programmers</Link>
      </li>
    </ul>
  );
}

export default memo(Category);
