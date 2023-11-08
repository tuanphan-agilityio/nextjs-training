import Image from 'next/image';
import { FC, memo, useState, useCallback } from 'react';

interface PreviewImagesProps {
  imageHrefs: string[];
}

const PreviewImages: FC<PreviewImagesProps> = ({ imageHrefs }) => {
  const [currentSlideIdx, setCurrentSlideIdx] = useState(0);

  const handleImageClick = useCallback((index: number) => {
    setCurrentSlideIdx(index);
  }, []);

  const handleImageClickWithIndex = useCallback(
    (index: number) => () => {
      handleImageClick(index);
    },
    [handleImageClick],
  );

  const renderImage = (imageHref: string, index: number) => (
    <Image
      key={index}
      src={imageHref}
      width={180}
      height={180}
      alt='Product'
      onClick={handleImageClickWithIndex(index)}
      objectFit='cover'
      className='hover:cursor-pointer'
      data-testid={`image-${index}`}
    />
  );

  return (
    <div className='flex flex-col gap-6'>
      <Image
        src={imageHrefs[currentSlideIdx]}
        layout='responsive'
        width={588}
        height={400}
        alt='Product'
        objectFit='cover'
        data-testid={`main-image-${currentSlideIdx}`}
        priority
      />

      <div className='flex gap-6 w-full overflow-auto'>
        {imageHrefs.map(renderImage)}
      </div>
    </div>
  );
};

export type { PreviewImagesProps };

export default memo(PreviewImages);
