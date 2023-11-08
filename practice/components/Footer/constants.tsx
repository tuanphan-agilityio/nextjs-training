import FacebookIcon from '../../public/icons/facebook.svg';
import InstagramIcon from '../../public/icons/instagram.svg';
import TwitterIcon from '../../public/icons/twitter.svg';
import LinkedinIcon from '../../public/icons/linkedin.svg';

const ICONS = {
  Facebook: <FacebookIcon />,
  Instagram: <InstagramIcon />,
  Twitter: <TwitterIcon />,
  Linkedin: <LinkedinIcon />,
};

const FOOTER_CATEGORIES = [
  {
    title: 'Home',
    items: ['Product', 'Categories', 'Shop', 'Login'],
  },
  {
    title: 'Shop',
    items: ['T-Shirt', 'Jacket', 'Shirt', 'Jens'],
  },
  {
    title: 'Categories',
    items: ['Men', 'Children', 'Women'],
  },
  {
    isContact: true,
    title: 'Contact',
    items: [ICONS.Facebook, ICONS.Twitter, ICONS.Instagram, ICONS.Linkedin],
    email: 'mangcoding@gmail.com',
  },
];

export { FOOTER_CATEGORIES };
