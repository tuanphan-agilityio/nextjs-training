import { FC } from 'react';

const Loading: FC = () => {
  return (
    <div className='fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-tertiary z-50'>
      <span
        className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
        role='status'
      />
    </div>
  );
};

export default Loading;
