import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import cozymart from '../assets/cozymart.png';
import hrme from '../assets/hrme.png';
import tmr from '../assets/tmrProject.png';
import ods from '../assets/ods.png';
import katajere from '../assets/katajere.png';
import taskmaster from '../assets/taskmaster.png';
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
    name: 'tmr project',
    url: 'https://trackmedrec.com/',
    image: tmr,
  },
  {
    id: 11,
    name: 'ODS',
    url: 'https://www.ogundigitalsummit.com/',
    image: ods,
  },
  {
    id: 111,
    name: 'katajere',
    url: 'https://www.waitlist.katajere.com/',
    image: katajere,
  },
  {
    id: 1111,
    name: 'cozy-mart',
    url: 'https://cozy-mart.netlify.app/',
    image: cozymart,
  },
  {
    id: 4,
    name: 'taskmaster',
    url: 'https://task-master-web-app.vercel.app/',
    image: taskmaster,
  },
  {
    id: 5,
    name: 'hrme',
    url: 'https://h-rme.vercel.app/',
    image: hrme,
  },
];
