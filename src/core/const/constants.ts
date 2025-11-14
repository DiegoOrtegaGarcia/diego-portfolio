import type { IconName } from "../types/type";
import foto from '../../assets/fondo.jpg';
import { Mail, Github, Linkedin } from 'lucide-react';

export const menuItems: { id: string, icon: IconName, label: string }[] = [
  { id: 'home', icon: "home", label: 'Home' },
  { id: 'about', icon: "user", label: 'About' },
  { id: 'projects', icon: "folder", label: 'Projects' },
  { id: 'technologies', icon: "code", label: 'Tecnologias' },
];

export const projectsData = [
  {
    id: '1',
    title: 'Gestion de ventas',
    description: 'Aplicacion empresarial que permite la gestion de ventas de un negocio',
    image: foto,
    technologies: ['React', 'Laravel', 'MySQl', 'Typescript'],
    githubUrl: 'https://github.com/tuusuario/ecommerce',
    category: 'Full Stack'
  },
  {
    id: '2',
    title: 'App de Tareas',
    description: 'Aplicación de gestión de tareas con drag & drop',
    image: foto,
    technologies: ['React', 'TypeScript', 'Tailwind', 'Firebase'],
    githubUrl: 'https://github.com/tuusuario/task-app',
    category: 'Frontend'
  },
  {
    id: '3',
    title: 'Dashboard Analytics',
    description: 'Panel de control con gráficos y métricas en tiempo real',
    image: foto,
    technologies: ['React', 'D3.js', 'Socket.io', 'Python', 'PostgreSQL'],
    githubUrl: 'https://github.com/tuusuario/dashboard',
    category: 'Full Stack'
  },
  {
    id: '4',
    title: 'Portfolio Personal',
    description: 'Sitio web personal responsive y moderno',
    image: foto,
    technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Vite'],
    githubUrl: 'https://github.com/tuusuario/portfolio',
    category: 'Frontend'
  }
];

export const technologies = [
  { 
    name: "Vue", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    category: "Frontend",
    color: "from-green-500 to-emerald-600"
  },
  { 
    name: "React", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: "Frontend",
    color: "from-cyan-500 to-blue-600"
  },
  { 
    name: "TypeScript", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    category: "Frontend",
    color: "from-blue-500 to-indigo-600"
  },
  { 
    name: "JavaScript", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    category: "Frontend",
    color: "from-yellow-500 to-amber-600"
  },
  { 
    name: "Tailwind CSS", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    category: "Frontend",
    color: "from-cyan-400 to-teal-500"
  },
  { 
    name: "CSS", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    category: "Frontend",
    color: "from-blue-400 to-indigo-500"
  },
  { 
    name: "HTML", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    category: "Frontend",
    color: "from-orange-500 to-red-600"
  },
  { 
    name: "Three.js", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
    category: "Frontend",
    color: "from-gray-700 to-gray-900"
  },
  { 
    name: "PHP", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    category: "Backend",
    color: "from-purple-400 to-indigo-600"
  },
  { 
    name: "C#", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    category: "Backend",
    color: "from-violet-600 to-purple-700"
  },
  { 
    name: "ASP.NET", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
    category: "Backend",
    color: "from-purple-500 to-pink-600"
  },
  { 
    name: "Laravel", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
    category: "Backend",
    color: "from-red-500 to-pink-600"
  },
  { 
    name: "MySQL", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    category: "Database",
    color: "from-blue-600 to-cyan-600"
  },
  { 
    name: "MongoDB", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    category: "Database",
    color: "from-green-600 to-emerald-700"
  },
  { 
    name: "Git", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    category: "Herramientas",
    color: "from-orange-600 to-red-600"
  },
  { 
    name: "Docker", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    category: "Herramientas",
    color: "from-blue-500 to-cyan-500"
  },
];

export const contactButtons = [
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:tu.email@ejemplo.com',
      description: 'Envíame un correo',
      neonColor: 'red',
      hoverShadow: 'hover:shadow-[0_0_30px_rgba(239,68,68,0.9)]'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/tuusuario',
      description: 'Mira mi código',
      neonColor: 'gray',
      hoverShadow: 'hover:shadow-[0_0_30px_rgba(156,163,175,0.9)]'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/tuusuario',
      description: 'Conectemos',
      neonColor: 'blue', 
      hoverShadow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.9)]'
    }
  ];