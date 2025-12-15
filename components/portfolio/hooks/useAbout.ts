'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export function useAbout() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const infoCardRef = useRef<HTMLDivElement | null>(null);
  const featureCardsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(
    () => {
      gsap.fromTo(
        titleRef.current,
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            end: 'bottom 20%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        subtitleRef.current,
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: 'top 85%',
            end: 'bottom 20%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        contentRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        infoCardRef.current,
        { x: 50, opacity: 0, scale: 0.9 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: infoCardRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none',
          },
        }
      );

      featureCardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { y: 60, opacity: 0, scale: 0.8 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'back.out(1.4)',
            delay: index * 0.2,
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              end: 'bottom 20%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    },
    { dependencies: [] }
  );

  const addToFeatureCardsRef = (el: HTMLDivElement | null) => {
    if (el && !featureCardsRef.current.includes(el)) {
      featureCardsRef.current.push(el);
    }
  };

  return {
    sectionRef,
    titleRef,
    subtitleRef,
    contentRef,
    infoCardRef,
    addToFeatureCardsRef,
  };
}
