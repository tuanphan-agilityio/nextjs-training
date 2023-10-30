import { FC, memo } from 'react';
import Breadcrumb, { BreadcrumbItem } from '@/components/Breadcrumb';

interface SubHeaderProps {
  breadcrumbItems: BreadcrumbItem[];
  title: string;
  description?: string;
}

const SubHeader: FC<SubHeaderProps> = ({
  breadcrumbItems,
  title,
  description = '',
}) => {
  return (
    <section className='pt-10 pb-20 bg-gradient-to-b from-primary-gradient-start to-primary-gradient-end text-primary'>
      <div className='container'>
        <Breadcrumb items={breadcrumbItems} />
        <h1 className='mt-10 text-3xl font-secondary-bold leading-4'>
          {title}
        </h1>
        {description && (
          <p className='mt-6 w-[508px] font-md leading-2'>{description}</p>
        )}
      </div>
    </section>
  );
};

export type { SubHeaderProps };

export default memo(SubHeader);
