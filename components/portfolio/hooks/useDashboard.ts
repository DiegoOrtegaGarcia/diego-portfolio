'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';
import type { RefObject } from 'react';

gsap.registerPlugin(ScrollTrigger);

type UseDashboardResult = {
  navRef: RefObject<HTMLElement | null>;
  addToButtonsRef: (el: HTMLDivElement | null) => void;
  separatorRef: RefObject<HTMLDivElement | null>;
  themeButtonRef: RefObject<HTMLButtonElement | null>;
};

export function useDashboard(): UseDashboardResult {
  const navRef = useRef<HTMLElement | null>(null);
  const buttonsRef = useRef<HTMLDivElement[]>([]);
  const themeButtonRef = useRef<HTMLButtonElement | null>(null);
  const separatorRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const navElement = navRef.current;
      if (!navElement) return;

      const entranceAnimation = gsap.timeline();

      entranceAnimation.fromTo(
        buttonsRef.current,
        {
          y: -100,
          scale: 1.5,
          opacity: 0,
          rotationX: 90,
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          rotationX: 0,
          duration: 0.4,
          ease: 'back.out(1.7)',
          stagger: 0.1,
        }
      );

      entranceAnimation.fromTo(
        separatorRef.current,
        {
          scaleY: 0,
          opacity: 0,
        },
        {
          scaleY: 1,
          opacity: 1,
          duration: 0.4,
          ease: 'power2.out',
        },
        '-=0.3'
      );

      entranceAnimation.fromTo(
        themeButtonRef.current,
        {
          y: -80,
          scale: 1.3,
          opacity: 0,
          rotation: -180,
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.5,
          ease: 'back.out(1.5)',
        },
        '-=0.2'
      );

      const scrollAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: '#home',
          start: '50% top',
          end: '+=100',
          toggleActions: 'play none reverse none',
        },
      });

      scrollAnimation.to(navElement, {
        y: -10,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.inOut',
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { dependencies: [] }
  );

  const addToButtonsRef = (el: HTMLDivElement | null) => {
    if (el && !buttonsRef.current.includes(el)) {
      buttonsRef.current.push(el);
    }
  };

  return { navRef, addToButtonsRef, separatorRef, themeButtonRef };
}
