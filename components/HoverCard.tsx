'use client';

import { ReactNode } from 'react';
import { useHover3D } from '../hooks';

/**
 * Props for HoverCard component
 */
export interface HoverCardProps {
  /** Content to wrap with hover effect */
  children: ReactNode;
  /** Type of hover effect to apply */
  effect?: 'lift' | 'tilt' | 'scale';
  /** Additional CSS classes */
  className?: string;
}

/**
 * Wrapper component that applies interactive hover effects to cards.
 * Supports lift (vertical translation), tilt (3D rotation), and scale effects.
 * Automatically disables complex effects on touch devices.
 * 
 * Validates: Requirements 2.1, 2.2, 2.3, 2.6, 12.1, 12.2
 * 
 * @example
 * ```tsx
 * <HoverCard effect="lift">
 *   <div className="card">
 *     This card lifts up on hover
 *   </div>
 * </HoverCard>
 * 
 * <HoverCard effect="tilt">
 *   <div className="card">
 *     This card tilts in 3D on hover
 *   </div>
 * </HoverCard>
 * ```
 */
export function HoverCard({
  children,
  effect = 'lift',
  className = '',
}: HoverCardProps) {
  const { ref: tiltRef, style: tiltStyle } = useHover3D({
    maxTilt: 8,
    perspective: 1000,
    speed: 400,
  });

  // Apply appropriate hover classes based on effect type
  const effectClasses = {
    lift: 'hover-lift',
    tilt: 'hover-tilt',
    scale: 'hover-scale',
  };

  const effectClass = effectClasses[effect] || effectClasses.lift;

  if (effect === 'tilt') {
    // For tilt effect, use the useHover3D hook
    return (
      <div
        ref={tiltRef as React.RefObject<HTMLDivElement>}
        style={tiltStyle}
        className={`transition-all ${effectClass} ${className}`.trim()}
      >
        {children}
      </div>
    );
  }

  // For other effects, use CSS-based hover transitions
  return (
    <div className={`transition-all ${effectClass} ${className}`.trim()}>
      {children}
    </div>
  );
}
