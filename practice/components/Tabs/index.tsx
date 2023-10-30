import clsx from 'clsx';
import { FC, ReactNode, memo, useState } from 'react';

interface Tab {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  items: Tab[];
  onChange?: (id: string) => void;
  defaultActiveId?: string;
}

const Tabs: FC<TabsProps> = ({
  items,
  onChange = () => {},
  defaultActiveId = '',
}: TabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(
    defaultActiveId || items[0]?.id,
  );

  const handleTabChange = (tabId: string) => {
    onChange(tabId);
    setActiveTab(tabId);
  };

  const handleTabClick = (tabId: string) => () => handleTabChange(tabId);

  return (
    <div>
      <ul className='flex justify-center gap-10'>
        {items.map(({ id, label }) => (
          <li
            key={id}
            className={clsx([
              'pb-2 font-primary-bold text-xl leading-9 hover:cursor-pointer',
              id === activeTab
                ? 'text-quaternary border-b-4 border-quaternary'
                : 'text-tertiary',
            ])}
            onClick={handleTabClick(id)}
          >
            {label}
          </li>
        ))}
      </ul>
      <div className='mt-4'>
        {items.find(({ id }) => id === activeTab)?.content}
      </div>
    </div>
  );
};

export type { TabsProps };

export default memo(Tabs);
