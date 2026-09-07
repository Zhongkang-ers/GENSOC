'use client';

import { CSSProperties, useEffect, useRef, useState } from 'react';

/**
 * Options for configuring 3D hover effects
 */
export interface Hover3DOptions {
  /** Maximum tilt angle in degrees */
  maxTilt?: number;
  /** CSS perspective value */
  perspective?: number;
  /** Transition speed for smooth movement */
  speed?: number;
}

/**
 * Return value from useHover3D hook
 */
export interface Hover3DReturn {
  /** Ref to attach to the element */
  ref: React.RefObject<any>;
  /** Inline styles to apply for 3D effect */
  style: CSSProperties;
}

/**
 * Detects if the device supports touch
 * @returns true if touch is supported
 */
function isTouchDevice(): boolean {
  if (typeof window === 'undefined') return false;
  
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    (navigator as any).msMaxTouchPoints > 0
  );
}

/**
 * Custom hook for 3D tilt effect based on cursor position.
 * Calculates tilt based on mouse position relative to element center.
 * Automatically disables on touch devices.
 * 
 * Validates: Requirements 2.3, 12.1
 * 
 * @param options Configuration options for the 3D tilt effect
 * @returns Object containing ref and style for the element
 * 
 * @example
 * ```tsx
 * function TiltCard() {
 *   const { ref, style } = useHover3D({ maxTilt: 10 });
 *   
 *   return (
 *     <div ref={ref} style={style}>
 *       Tilts based on cursor position
 *     </div>
 *   );
 * }
 * ```
 */
export function useHover3D(options: Hover3DOptions = {}): Hover3DReturn {
  const { maxTilt = 8, perspective = 1000, speed = 400 } = options;

  const elementRef = useRef<HTMLElement>(null);
  const [transform, setTransform] = useState<string>('');
  const [isHovering, setIsHovering] = useState(false);
  const [touchDevice] = useState(isTouchDevice());

  useEffect(() => {
    const element = elementRef.current;
    
    // Skip if no element or touch device
    if (!element || touchDevice) {
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      if (!isHovering) return;

      const rect = element.getBoundingClientRect();
      
      // Calculate cursor position relative to element center
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const mouseX = event.clientX - centerX;
      const mouseY = event.clientY - centerY;
      
      // Calculate tilt angles
      // Normalize to -1 to 1 range
      const tiltX = (mouseY / (rect.height / 2)) * maxTilt;
      const tiltY = (mouseX / (rect.width / 2)) * -maxTilt;
      
      // Apply transform
      setTransform(
        `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`
      );
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
      if (element) {
        (element as HTMLElement).style.willChange = 'transform';
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setTransform('');
      if (element) {
        (element as HTMLElement).style.willChange = 'auto';
      }
    };

    // Add event listeners
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mousemove', handleMouseMove);

    // Cleanup on unmount
    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mousemove', handleMouseMove);
    };
  }, [maxTilt, perspective, isHovering, touchDevice]);

  // Return style object
  const style: CSSProperties = touchDevice
    ? {} // No transform on touch devices
    : {
        transform: transform || 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
        transition: `transform ${speed}ms cubic-bezier(0.4, 0, 0.2, 1)`,
        transformStyle: 'preserve-3d',
      };

  return {
    ref: elementRef,
    style,
  };
}
