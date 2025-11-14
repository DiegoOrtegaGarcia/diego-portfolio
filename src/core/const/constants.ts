import type { IconName } from "../types/type";
import foto from '../../assets/fondo.jpg';

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