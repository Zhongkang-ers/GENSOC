/**
 * Example usage of the useReducedMotion hook
 * This file demonstrates how to use the hook in a real component
 * 
 * Note: This is an example file and is not used in the actual application.
 * It's provided for reference and can be deleted in production.
 */

'use client';

import { useReducedMotion } from './useReducedMotion';

/**
 * Example 1: Conditional animation classes
 */
export function AnimatedCard() {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <div 
      className={`
        card 
        ${prefersReducedMotion ? 'opacity-100' : 'animate-fade-up'}
      `}
    >
      <h2>I respect your motion preferences!</h2>
      <p>
        {prefersReducedMotion 
          ? 'Animations are disabled because you prefer reduced motion.'
          : 'Animations are enabled!'}
      </p>
    </div>
  );
}

/**
 * Example 2: Conditional inline styles
 */
export function AnimatedButton() {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <button
      style={{
        transition: prefersReducedMotion ? 'none' : 'all 0.3s ease',
        transform: prefersReducedMotion ? 'none' : 'translateY(0)',
      }}
      onMouseEnter={(e) => {
        if (!prefersReducedMotion) {
          e.currentTarget.style.transform = 'translateY(-4px)';
        }
      }}
      onMouseLeave={(e) => {
        if (!prefersReducedMotion) {
          e.currentTarget.style.transform = 'translateY(0)';
        }
      }}
    >
      Hover me!
    </button>
  );
}

/**
 * Example 3: Conditional animation duration
 */
export function AnimatedSection({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <section
      style={{
        animationDuration: prefersReducedMotion ? '0.01ms' : '600ms',
        transitionDuration: prefersReducedMotion ? '0.01ms' : '300ms',
      }}
      className="animate-fade-in"
    >
      {children}
    </section>
  );
}

/**
 * Example 4: Debug component to show current preference
 */
export function MotionPreferenceDebug() {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <div 
      style={{
        position: 'fixed',
        bottom: '1rem',
        right: '1rem',
        padding: '0.5rem 1rem',
        backgroundColor: prefersReducedMotion ? '#ef4444' : '#10b981',
        color: 'white',
        borderRadius: '0.5rem',
        fontSize: '0.875rem',
        fontWeight: 'bold',
      }}
    >
      Motion: {prefersReducedMotion ? 'REDUCED' : 'ENABLED'}
    </div>
  );
}
