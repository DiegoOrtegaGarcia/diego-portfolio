import { useRef } from "react";
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export const useProyectContainer=()=>{
    const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const projectsRef = useRef<any[]>([]);

  useGSAP(() => {
    gsap.fromTo(titleRef.current,
      {
        y: 80,
        opacity: 0,
        scale: 0.9
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none none"
        }
      }
    );

    gsap.fromTo(subtitleRef.current,
      {
        y: 60,
        opacity: 0,
        scale: 0.95
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none none"
        }
      }
    );

    projectsRef.current.forEach((project, index) => {
      if (!project) return;

      const projectTl = gsap.timeline({
        scrollTrigger: {
          trigger: project,
          start: "top 97%",
          end: "bottom 20%",
          toggleActions: "play none none none"
        }
      });

      projectTl.fromTo(project,
        {
          scale: 0.3,
          rotation: 180,
          opacity: 0,
          borderRadius: "50% 50% 0% 0%",
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          transformOrigin: "center bottom"
        },
        {
          scale: 0.8,
          rotation: 0,
          opacity: 0.7,
          borderRadius: "30% 30% 10% 10%",
          clipPath: "polygon(0% 0%, 100% 0%, 100% 70%, 0% 70%)",
          duration: 0.6,
          ease: "power2.out"
        }
      )
      .to(project, {
        scale: 1,
        opacity: 1,
        borderRadius: "16px 16px 8px 8px",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 0% 85%)",
        duration: 0.5,
        ease: "back.out(1.4)"
      })

      .to(project, {
        borderRadius: "1rem",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.4,
        ease: "power2.out"
      });

      projectTl.delay(index * 0.15);
    });

  }, []);

  const addToProjectsRef = (el: unknown) => {
    if (el && !projectsRef.current.includes(el)) {
      projectsRef.current.push(el);
    }
  };
  return{sectionRef,subtitleRef,titleRef,addToProjectsRef}
}