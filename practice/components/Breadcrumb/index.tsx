import { FC, memo } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumb: FC<BreadcrumbProps> = ({ items, className }) => {
  const isLastItem = (index: number) => index === items.length - 1;

  return (
    <nav aria-label='breadcrumb'>
      <ol className={clsx('flex w-fit text-sm text-primary', className)}>
        {items.map((item, index) => (
          <li
            key={index}
            className={clsx({
              'font-primary-bold': isLastItem(index),
            })}
          >
            {isLastItem(index) ? (
              item.label
            ) : (
              <>
                <Link href={item?.href ?? ''}>
                  <a className='hover:underline'>{item.label}</a>
                </Link>
                <span className='mx-6'>/</span>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export type { BreadcrumbProps, BreadcrumbItem };

export default memo(Breadcrumb);
