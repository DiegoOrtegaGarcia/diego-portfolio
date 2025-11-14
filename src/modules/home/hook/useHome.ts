import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { useRef } from 'react';

export const useHome=()=>{
    
    const imageRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const descriptionRef = useRef(null);
    const buttonsRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({ delay: 0.2 });
        
        tl.fromTo(imageRef.current, 
            {
                scale: 0,
                rotation: -180,
                opacity: 0
            },
            {
                scale: 1,
                rotation: 0,
                opacity: 1,
                duration: 1,
                ease: "back.out(1.7)"
            }
        ).fromTo(titleRef.current,
            {
                y: 100,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out"
            },
            "-=0.5"
        ).fromTo(subtitleRef.current,
            {
                y: 80,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.7,
                ease: "power3.out"
            },
            "-=0.4"
        ).fromTo(descriptionRef.current,
            {
                y: 60,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power3.out"
            },
            "-=0.3"
        ).fromTo(buttonsRef.current,
            {
                y: 40,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power3.out"
            },
            "-=0.2"
        );
    }, []);
    return {imageRef,titleRef,subtitleRef,descriptionRef,buttonsRef}
}