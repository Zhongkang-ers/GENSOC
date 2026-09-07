'use client';

import { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks';

/**
 * Props for AnimatedSection component
 */
export interface AnimatedSectionProps {
  /** Content to animate */
  children: ReactNode;
  /** Animation direction */
  direction?: 'up' | 'left' | 'right';
  /** Delay before animation starts (ms) */
  delay?: number;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Wrapper component that adds scroll-based entrance animations to its children.
 * Uses Intersection Observer to detect when the element enters the viewport.
 * Respects user's motion preferences.
 * 
 * Validates: Requirements 1.1, 1.2, 1.3, 1.7
 * 
 * @example
 * ```tsx
 * <AnimatedSection direction="up" delay={100}>
 *   <h2>This title fades and slides up when scrolled into view</h2>
 * </AnimatedSection>
 * ```
 */
export function AnimatedSection({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
    delay,
  });

  // Animation classes based on direction
  const animationClass = direction === 'up'
    ? 'animate-fade-up'
    : direction === 'left'
    ? 'animate-fade-left'
    : 'animate-fade-right';

  // Visibility classes
  const visibilityClass = isVisible ? 'opacity-100' : 'opacity-0';

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${visibilityClass} ${isVisible ? animationClass : ''} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
