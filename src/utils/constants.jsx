import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import figmaland from '../assets/figmaland.png';
import cozymart from '../assets/cozymart.png';
import hekto from '../assets/hekto.png';
import mixpro from '../assets/mixpro.png';
import mockingjay from '../assets/mockingjay.png';
import hrme from '../assets/hrme.png';
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: 'about',
  },
  {
    id: 3,
    text: 'projects',
    url: 'projects',
  },
];

export const socialLinks = [
  {
    id: 1,
    icon: <FaLinkedin />,
    url: 'https://www.linkedin.com/in/olabode-sodimu/',
  },
  {
    id: 2,
    icon: <FaInstagram />,
    url: '',
  },
  {
    id: 3,
    icon: <FaGithub />,
    url: 'https://github.com/Bhiekeys',
  },
];

export const projects = [
  {
    id: 1,
    name: 'cozy-mart',
    url: 'https://cozy-mart.netlify.app/',
    image: cozymart,
  },
  {
    id: 2,
    name: 'hekto',
    url: 'https://e-com-neon.vercel.app/',
    image: hekto,
  },
  {
    id: 3,
    name: 'mocking-jay',
    url: 'https://mocking-react.vercel.app/',
    image: mockingjay,
  },
  {
    id: 4,
    name: 'mix-pro',
    url: 'https://mix-pro.netlify.app/',
    image: mixpro,
  },
  {
    id: 5,
    name: 'hrme',
    url: 'https://h-rme.vercel.app/',
    image: hrme,
  },
  {
    id: 6,
    name: 'figmaLand',
    url: 'https://figma-land-challenge2.vercel.app/',
    image: figmaland,
  },
];
