import Link from 'next/link';
import React from 'react';
import s from './Breadcrumbs.module.scss';

interface IBreadcrumbs {
  crumbs: string[];
  links: string[];
}

const Breadcrumbs = ({ crumbs, links }: IBreadcrumbs) => {
  return (
    <div className={s.container}>
      <Link href="/">Главная |</Link>
      {crumbs !== undefined &&
        crumbs.map((c: string, i: number) => {
          return i === crumbs.length - 1 ? (
            <Link href={links[i]} passHref>
              <a>&nbsp;{c}</a>
            </Link>
          ) : (
            <Link href={links[i]}>
              <a>&nbsp;{c} |</a>
            </Link>
          );
        })}
    </div>
  );
};

export default Breadcrumbs;
