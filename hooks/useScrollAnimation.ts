'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

/**
 * Options for configuring scroll-based animations
 */
export interface ScrollAnimationOptions {
  /** Percentage of element visible to trigger animation (0-1) */
  threshold?: number;
  /** Only animate once when first visible */
  triggerOnce?: boolean;
  /** Delay before animation starts (ms) */
  delay?: number;
  /** Disable animation regardless of visibility */
  disabled?: boolean;
}

/**
 * Return value from useScrollAnimation hook
 */
export interface ScrollAnimationReturn {
  /** Ref to attach to the element to observe */
  ref: React.RefObject<any>;
  /** Whether the element is currently visible in viewport */
  isVisible: boolean;
  /** Whether the element has been animated already */
  hasAnimated: boolean;
}

/**
 * Custom hook to detect when an element enters the viewport and trigger animations.
 * Uses Intersection Observer API for efficient scroll detection.
 * Respects user's motion preferences from the operating system.
 * 
 * Validates: Requirements 1.1, 1.2, 1.4, 1.6, 11.1
 * 
 * @param options Configuration options for the animation behavior
 * @returns Object containing ref, visibility state, and animation state
 * 
 * @example
 * ```tsx
 * function AnimatedSection() {
 *   const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
 *   
 *   return (
 *     <div 
 *       ref={ref} 
 *       className={isVisible ? 'opacity-100' : 'opacity-0'}
 *     >
 *       Content animates when 20% visible
 *     </div>
 *   );
 * }
 * ```
 */
export function useScrollAnimation(
  options: ScrollAnimationOptions = {}
): ScrollAnimationReturn {
  const {
    threshold = 0.1,
    triggerOnce = true,
    delay = 0,
    disabled = false,
  } = options;

  const prefersReducedMotion = useReducedMotion();
  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(prefersReducedMotion || disabled);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    
    // Skip if no element, disabled, or reduced motion preferred
    if (!element || disabled || prefersReducedMotion) {
      setIsVisible(true);
      setHasAnimated(true);
      return;
    }

    // Check if IntersectionObserver is supported
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      // Fallback: show element without animation
      setIsVisible(true);
      setHasAnimated(true);
      return;
    }

    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is visible
            if (delay > 0) {
              // Apply delay before showing
              setTimeout(() => {
                setIsVisible(true);
                setHasAnimated(true);
              }, delay);
            } else {
              setIsVisible(true);
              setHasAnimated(true);
            }

            // If triggerOnce, stop observing after first trigger
            if (triggerOnce) {
              observer.unobserve(element);
            }
          } else if (!triggerOnce) {
            // Element is not visible and we want to re-trigger
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px',
      }
    );

    // Start observing
    observer.observe(element);

    // Cleanup observer on unmount
    return () => {
      if (element) {
        observer.unobserve(element);
      }
      observer.disconnect();
    };
  }, [threshold, triggerOnce, delay, disabled, prefersReducedMotion]);

  return {
    ref: elementRef,
    isVisible,
    hasAnimated,
  };
}
