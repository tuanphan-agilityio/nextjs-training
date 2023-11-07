import { ROUTES } from '@/constants/routes';

import CartIcon from '../../public/icons/cart.svg';
import WishlistIcon from '../../public/icons/wishlist.svg';
import UserIcon from '../../public/icons/user.svg';
import SearchIcon from '../../public/icons/search.svg';

import Input from '../Input';

const getNavItems = () => [
  {
    title: 'Home',
    href: ROUTES.HOME,
  },
  {
    title: 'Shop',
    href: ROUTES.SHOP,
  },
  {
    title: 'About Us',
    href: ROUTES.ABOUT,
  },
];

const getControlItems = () => [
  <CartIcon />,
  <WishlistIcon className='sm:hidden' />,
  <UserIcon className='sm:hidden' />,
  <Input
    className='max-w-[250px] h-12 rounded-lg border border-1 border-solid border-tertiary sm:w-[160px] sm:h-10'
    placeholder='Search'
    endDecorator={<SearchIcon />}
    aria-label='search'
  />,
];

export { getNavItems, getControlItems };
