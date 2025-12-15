export type IconName = 'home' | 'user' | 'folder' | 'code' | 'sun' | 'moon';

export type MenuItem = {
  id: string;
  icon: IconName;
  label: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string; // public path
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
};

export type Technology = {
  name: string;
  logo: string; // remote url
  category: string;
  color: string; // tailwind gradient
};

export type ContactButton = {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  url: string;
  description: string;
  neonColor: string;
  hoverShadow: string;
};

export const menuItems: MenuItem[] = [
  { id: 'home', icon: 'home', label: 'Home' },
  { id: 'about', icon: 'user', label: 'About' },
  { id: 'projects', icon: 'folder', label: 'Projects' },
  { id: 'technologies', icon: 'code', label: 'Tecnologias' },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Gestion de ventas',
    description: 'Aplicacion empresarial que permite la gestion de ventas de un negocio',
    image: '/images/proyect_1.png',
    technologies: ['React', 'Laravel', 'MySQl', 'Typescript'],
    githubUrl: 'https://github.com/DiegoOrtegaGarcia/management-of-a-company-s-internal-sales',
    category: 'Full Stack',
  },
  {
    id: '2',
    title: 'Consultoria y Blogs Cristianos',
    description: 'Blog de consultoria cristina,que ofrece secciones y blogs',
    image: '/images/proyect_2.png',
    technologies: ['React', 'Laravel', 'MySQl', 'Typescript'],
    githubUrl: 'https://github.com/tuusuario/task-app',
    category: 'Full Stack',
  },
  {
    id: '3',
    title: 'Sistema Solar Interactivo',
    description: 'Muestra la informacion del Sistema Solar y sus planetas de una forma muy visual con 3D',
    image: '/images/proyect_3.png',
    technologies: ['Typescript', 'Vue', 'Veutify', 'Three.js'],
    githubUrl: 'https://github.com/DiegoOrtegaGarcia/Sistema-Solar-3D-Experience',
    category: 'Frontend',
  },
  {
    id: '4',
    title: 'ChatBot Cubano',
    description: 'ChatBot especializado para que hable como cubano',
    image: '/images/proyect_4.png',
    technologies: ['React', 'Laravel', 'Typescript', 'Taildwind'],
    githubUrl: 'https://github.com/DiegoOrtegaGarcia/ChatBot-Cubano',
    category: 'Full Stack',
  },
];

export const technologies: Technology[] = [
  {
    name: 'Vue',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    category: 'Frontend',
    color: 'from-green-500 to-emerald-600',
  },
  {
    name: 'React',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    category: 'Frontend',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    name: 'Next.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    category: 'Frontend',
    color: 'from-gray-700 to-gray-950',
  },
  {
    name: 'TypeScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    category: 'Frontend',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    name: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    category: 'Frontend',
    color: 'from-yellow-500 to-amber-600',
  },
  {
    name: 'Tailwind CSS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    category: 'Frontend',
    color: 'from-cyan-400 to-teal-500',
  },
  {
    name: 'CSS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    category: 'Frontend',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    name: 'HTML',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    category: 'Frontend',
    color: 'from-orange-500 to-red-600',
  },
  {
    name: 'Three.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg',
    category: 'Frontend',
    color: 'from-gray-700 to-gray-900',
  },
  {
    name: 'PHP',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    category: 'Backend',
    color: 'from-purple-400 to-indigo-600',
  },
  {
    name: 'C#',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
    category: 'Backend',
    color: 'from-violet-600 to-purple-700',
  },
  {
    name: 'ASP.NET',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
    category: 'Backend',
    color: 'from-purple-500 to-pink-600',
  },
  {
    name: 'Laravel',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
    category: 'Backend',
    color: 'from-red-500 to-pink-600',
  },
  {
    name: 'Node.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    category: 'Backend',
    color: 'from-green-500 to-lime-600',
  },
  {
    name: 'MySQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    category: 'Database',
    color: 'from-blue-600 to-cyan-600',
  },
  {
    name: 'MongoDB',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    category: 'Database',
    color: 'from-green-600 to-emerald-700',
  },
  {
    name: 'Git',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    category: 'Herramientas',
    color: 'from-orange-600 to-red-600',
  },
  {
    name: 'Docker',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    category: 'Herramientas',
    color: 'from-blue-500 to-cyan-500',
  },
];

// Icons (lucide) se importan aquí para mantener la data en un único punto.
import { Mail, Github, Linkedin } from 'lucide-react';

export const contactButtons: ContactButton[] = [
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:diegoortegawork@gmail.com',
    description: 'Envíame un correo',
    neonColor: 'red',
    hoverShadow: 'hover:shadow-[0_0_30px_rgba(239,68,68,0.9)]',
  },
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/DiegoOrtegaGarcia',
    description: 'Mira mi código',
    neonColor: 'gray',
    hoverShadow: 'hover:shadow-[0_0_30px_rgba(156,163,175,0.9)]',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com/in/diego-ortega-98726b374',
    description: 'Conectemos',
    neonColor: 'blue',
    hoverShadow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.9)]',
  },
];
