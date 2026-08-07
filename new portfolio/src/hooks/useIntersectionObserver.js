import { useEffect, useRef, useState } from 'react';

/**
 * useIntersectionObserver
 * Fires a callback once when the target element enters the viewport.
 * Used for: SVG draw-in animation (Effect #1), count-up (Effect #2).
 *
 * @param {object} options - IntersectionObserver options
 * @param {boolean} once   - if true, unobserves after first intersection (default: true)
 * @returns {{ ref, isIntersecting }}
 */
export function useIntersectionObserver(options = {}, once = true) {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        if (once) observer.unobserve(el);
      }
    }, { threshold: 0.2, ...options });

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, options]);

  return { ref, isIntersecting };
}
