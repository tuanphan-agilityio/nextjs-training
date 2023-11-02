import { Product } from '@/types/product';

const MOCK_PRODUCT: Product = {
  id: 1,
  name: 'Smart T-shirt',
  price: 120,
  status: 'Best quality',
  thumbnail: '/images/product-2.jpg',
  imgHrefs: ['/images/product-1.jpg', '/images/product-3.jpg'],
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.',
  stock: 1305,
};

const MOCK_PRODUCTS: Product[] = Array(3)
  .fill(MOCK_PRODUCT)
  .map((product, index) => ({ ...product, id: index + 1 }));

const MOCK_DEFAULT_PARAMS = {
  _page: 1,
  _limit: 3,
};

export { MOCK_PRODUCT, MOCK_PRODUCTS, MOCK_DEFAULT_PARAMS };
