/**
 * Example usage of useScrollAnimation hook
 * 
 * This file demonstrates various ways to use the scroll animation hook
 * for creating entrance animations that trigger when elements scroll into view.
 */

'use client';

import React from 'react';
import { useScrollAnimation } from './useScrollAnimation';

/**
 * Basic fade-in animation on scroll
 */
export function BasicAnimatedSection({ children }: { children: React.ReactNode }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref as React.Ref<HTMLDivElement>}
      className={`transition-all duration-600 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
}

/**
 * Animated section with custom threshold
 * Only triggers when 30% of element is visible
 */
export function PartialVisibilitySection({ children }: { children: React.ReactNode }) {
  const { ref, isVisible } = useScrollAnimation({ 
    threshold: 0.3 
  });

  return (
    <div
      ref={ref as React.Ref<HTMLDivElement>}
      className={`transition-all duration-600 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
    >
      {children}
    </div>
  );
}

/**
 * Staggered animation for list items
 * Each item has an increasing delay
 */
export function StaggeredList({ items }: { items: string[] }) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <StaggeredItem key={item} delay={index * 100}>
          {item}
        </StaggeredItem>
      ))}
    </div>
  );
}

function StaggeredItem({ 
  children, 
  delay 
}: { 
  children: React.ReactNode; 
  delay: number;
}) {
  const { ref, isVisible } = useScrollAnimation({ 
    delay,
    triggerOnce: true 
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-600 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}
    >
      {children}
    </div>
  );
}

/**
 * Animation that can repeat when scrolling back up
 * Useful for elements that should animate each time they enter viewport
 */
export function RepeatingAnimation({ children }: { children: React.ReactNode }) {
  const { ref, isVisible } = useScrollAnimation({ 
    triggerOnce: false 
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-600 ${
        isVisible ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-12'
      }`}
    >
      {children}
    </div>
  );
}

/**
 * Slide-in from different directions
 */
export function DirectionalSlideIn({ 
  children, 
  direction = 'up' 
}: { 
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
}) {
  const { ref, isVisible } = useScrollAnimation();

  const getTransformClasses = () => {
    const baseClasses = 'transition-all duration-600';
    
    if (isVisible) {
      return `${baseClasses} opacity-100 translate-x-0 translate-y-0`;
    }

    switch (direction) {
      case 'up':
        return `${baseClasses} opacity-0 translate-y-8`;
      case 'down':
        return `${baseClasses} opacity-0 -translate-y-8`;
      case 'left':
        return `${baseClasses} opacity-0 translate-x-8`;
      case 'right':
        return `${baseClasses} opacity-0 -translate-x-8`;
      default:
        return `${baseClasses} opacity-0`;
    }
  };

  return (
    <div ref={ref} className={getTransformClasses()}>
      {children}
    </div>
  );
}

/**
 * Complex animation combining multiple effects
 */
export function ComplexAnimation({ children }: { children: React.ReactNode }) {
  const { ref, isVisible, hasAnimated } = useScrollAnimation({
    threshold: 0.2,
    delay: 200,
  });

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out
        ${isVisible 
          ? 'opacity-100 translate-y-0 scale-100 blur-0' 
          : 'opacity-0 translate-y-12 scale-95 blur-sm'
        }
      `}
      data-animated={hasAnimated}
    >
      {children}
    </div>
  );
}

/**
 * Example page demonstrating all variations
 */
export default function ScrollAnimationExamples() {
  const listItems = [
    'First item with no delay',
    'Second item with 100ms delay',
    'Third item with 200ms delay',
    'Fourth item with 300ms delay',
  ];

  return (
    <div className="space-y-32 py-16 px-8">
      <BasicAnimatedSection>
        <div className="p-8 bg-blue-100 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Basic Fade In</h2>
          <p>This section fades in when it enters the viewport.</p>
        </div>
      </BasicAnimatedSection>

      <PartialVisibilitySection>
        <div className="p-8 bg-green-100 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Partial Visibility Trigger</h2>
          <p>This section only animates when 30% is visible.</p>
        </div>
      </PartialVisibilitySection>

      <div>
        <h2 className="text-2xl font-bold mb-8">Staggered List</h2>
        <StaggeredList items={listItems} />
      </div>

      <RepeatingAnimation>
        <div className="p-8 bg-yellow-100 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Repeating Animation</h2>
          <p>This animates every time you scroll past it.</p>
        </div>
      </RepeatingAnimation>

      <DirectionalSlideIn direction="left">
        <div className="p-8 bg-purple-100 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Slide from Left</h2>
          <p>This section slides in from the left side.</p>
        </div>
      </DirectionalSlideIn>

      <DirectionalSlideIn direction="right">
        <div className="p-8 bg-pink-100 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Slide from Right</h2>
          <p>This section slides in from the right side.</p>
        </div>
      </DirectionalSlideIn>

      <ComplexAnimation>
        <div className="p-8 bg-red-100 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Complex Animation</h2>
          <p>This combines fade, slide, scale, and blur effects.</p>
        </div>
      </ComplexAnimation>
    </div>
  );
}
