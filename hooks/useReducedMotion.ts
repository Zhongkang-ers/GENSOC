'use client';

import { useEffect, useState } from 'react';

/**
 * Custom hook to detect user's motion preference from their operating system settings.
 * Queries the 'prefers-reduced-motion' media query and listens for changes.
 * 
 * Validates: Requirements 11.1, 11.2
 * 
 * @returns {boolean} true if user prefers reduced motion, false otherwise
 * 
 * @example
 * ```tsx
 * function AnimatedComponent() {
 *   const prefersReducedMotion = useReducedMotion();
 *   
 *   return (
 *     <div className={prefersReducedMotion ? '' : 'animate-fade-in'}>
 *       Content
 *     </div>
 *   );
 * }
 * ```
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if window is available (client-side only)
    if (typeof window === 'undefined') {
      return;
    }

    // Query the media query
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    // Set initial value
    setPrefersReducedMotion(mediaQuery.matches);

    // Create event listener for changes
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    // Add event listener for preference changes
    // Using addEventListener for better browser compatibility
    mediaQuery.addEventListener('change', handleChange);

    // Cleanup listener on unmount
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return prefersReducedMotion;
}
