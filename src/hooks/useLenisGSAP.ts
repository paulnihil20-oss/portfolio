import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

let lenisInstance: Lenis | null = null;

export const getLenis = () => lenisInstance;

export const useLenisGSAP = () => {
  useEffect(() => {
    // Create a single global Lenis instance
    const lenis = new Lenis({
      lerp: 0.08,           // Smoothing factor — lower = smoother but slower
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false,
      autoRaf: false,       // We control RAF via GSAP ticker
    });

    lenisInstance = lenis;

    // ─── Critical: sync Lenis scroll position into ScrollTrigger ───
    lenis.on('scroll', () => {
      ScrollTrigger.update();
    });

    // ─── Connect Lenis RAF to GSAP ticker ──────────────────────────
    // This is the correct pattern from the Shoaib 3D Portfolio reference
    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);

    // Disable GSAP's default lag smoothing so Lenis controls timing
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      lenisInstance = null;
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
};
