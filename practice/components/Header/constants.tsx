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
  <WishlistIcon />,
  <UserIcon />,
  <Input
    className='max-w-[250px] h-12 rounded-lg border border-1 border-solid border-tertiary'
    placeholder='Search'
    endDecorator={<SearchIcon />}
  />,
];

export { getNavItems, getControlItems };
