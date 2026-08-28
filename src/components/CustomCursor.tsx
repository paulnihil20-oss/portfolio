import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState<string>('');
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Check if device has pointer/mouse
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let targetX = mouseX;
    let targetY = mouseY;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Check for data-cursor attributes
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('[data-cursor]') as HTMLElement | null;
        if (interactive) {
          const text = interactive.getAttribute('data-cursor') || '';
          setCursorText(text);
          setIsHovered(true);
        } else {
          const clickable = target.closest('button, a, input, textarea, [role="button"]');
          if (clickable) {
            setCursorText('');
            setIsHovered(true);
          } else {
            setCursorText('');
            setIsHovered(false);
          }
        }
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    const animate = () => {
      // Smooth lerp physics
      mouseX += (targetX - mouseX) * 0.18;
      mouseY += (targetY - mouseY) * 0.18;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Outer physics ring */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ willChange: 'transform' }}
      >
        <div
          className={`flex items-center justify-center rounded-full transition-all duration-200 ${
            cursorText
              ? 'px-3 py-1.5 bg-ink text-canvas border border-ink shadow-lg'
              : isHovered
              ? 'w-10 h-10 bg-cobalt/15 border border-cobalt scale-125'
              : 'w-7 h-7 border border-ink/40 bg-transparent'
          }`}
        >
          {cursorText && (
            <span className="font-mono text-[9px] uppercase tracking-widest text-canvas font-bold whitespace-nowrap">
              {cursorText}
            </span>
          )}
        </div>
      </div>

      {/* Center point dot */}
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 pointer-events-none z-[10000] transition-opacity duration-200 ${
          isVisible && !cursorText ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ willChange: 'transform' }}
      >
        <div
          className={`w-1.5 h-1.5 rounded-full transition-colors duration-150 ${
            isHovered ? 'bg-cobalt scale-150' : 'bg-ink'
          }`}
        />
      </div>
    </>
  );
};
