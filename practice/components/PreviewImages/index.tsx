import Image from 'next/image';
import { FC, memo, useState } from 'react';

interface PreviewImagesProps {
  imageHrefs: string[];
}

const PreviewImages: FC<PreviewImagesProps> = ({ imageHrefs }) => {
  const [currentSlideIdx, setCurrentSlideIdx] = useState(0);

  const handleImageClick = (index: number) => {
    setCurrentSlideIdx(index);
  };

  const renderImage = (imageHref: string, index: number) => (
    <Image
      key={index}
      src={imageHref}
      width={180}
      height={180}
      alt='Product'
      onClick={() => handleImageClick(index)}
      objectFit='cover'
      data-testid={`image-${index}`}
    />
  );

  return (
    <div className='flex flex-col gap-6'>
      <Image
        src={imageHrefs[currentSlideIdx]}
        width={588}
        height={400}
        alt='Product'
        layout='fixed'
        objectFit='cover'
        data-testid={`main-image-${currentSlideIdx}`}
      />

      <div className='flex gap-6 w-full overflow-auto'>
        {imageHrefs.map(renderImage)}
      </div>
    </div>
  );
};

export type { PreviewImagesProps };

export default memo(PreviewImages);
