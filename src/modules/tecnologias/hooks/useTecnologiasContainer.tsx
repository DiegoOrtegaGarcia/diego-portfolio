/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/all';
import { technologies } from "../../../core/const/constants";

gsap.registerPlugin(ScrollTrigger);
export const useTecnologiasContainer=()=>{
    const sectionRef = useRef(null);
      const titleRef = useRef(null);
      const subtitleRef = useRef(null);
      const categoryCardsRef = useRef<any[]>([]);
      const techItemsRef = useRef<any[]>([]);
    
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
              trigger: sectionRef.current,
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
    
        categoryCardsRef.current.forEach((card, index) => {
          if (!card) return;
    
          gsap.fromTo(card,
            {
              y: 100,
              opacity: 0,
              scale: 0.8,
              rotationY: 45
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              rotationY: 0,
              duration: 0.8,
              ease: "back.out(1.4)",
              delay: index * 0.2,
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: "play none none none"
              }
            }
          );
        });
        techItemsRef.current.forEach((item, index) => {
          if (!item) return;
    
          gsap.fromTo(item,
            {
              scale: 0,
              rotation: -180,
              opacity: 0
            },
            {
              scale: 1,
              rotation: 0,
              opacity: 1,
              duration: 0.6,
              ease: "back.out(1.7)",
              delay: index * 0.1,
              scrollTrigger: {
                trigger: item,
                start: "top 95%",
                end: "bottom 20%",
                toggleActions: "play none none none"
              }
            }
          );
        });
    
      }, []);
      const addToCategoryCardsRef = (el:any) => {
        if (el && !categoryCardsRef.current.includes(el)) {
          categoryCardsRef.current.push(el);
        }
      };
    
      const addToTechItemsRef = (el:any) => {
        if (el && !techItemsRef.current.includes(el)) {
          techItemsRef.current.push(el);
        }
      };
    
      const categories = [...new Set(technologies.map(tech => tech.category))];
    
      const getCategoryGradient = (category:string) => {
        switch(category) {
          case 'Frontend': return 'from-blue-500 to-cyan-600';
          case 'Backend': return 'from-green-500 to-emerald-600';
          case 'Database': return 'from-purple-500 to-violet-600';
          case 'Herramientas': return 'from-orange-500 to-red-600';
          default: return 'from-gray-500 to-gray-600';
        }
      };
    return {sectionRef,titleRef,subtitleRef,categories,addToCategoryCardsRef,getCategoryGradient,technologies,addToTechItemsRef}
}