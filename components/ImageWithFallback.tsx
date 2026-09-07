'use client';

import Image from 'next/image';
import { ReactNode, useState } from 'react';

/**
 * Props for ImageWithFallback component
 */
export interface ImageWithFallbackProps {
  /** Image source URL */
  src: string;
  /** Alt text for accessibility */
  alt: string;
  /** Fallback content to show on error */
  fallbackIcon?: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Prioritize loading (for above-the-fold images) */
  priority?: boolean;
  /** Image width */
  width?: number;
  /** Image height */
  height?: number;
  /** Fill container */
  fill?: boolean;
}

/**
 * Image component with loading state and error fallback.
 * Shows shimmer placeholder while loading and fallback icon on error.
 * Applies zoom-on-hover effect for interactivity.
 * 
 * Validates: Requirements 4.5, 4.6, 4.7, 5.1, 5.2, 5.3, 6.3
 * 
 * @example
 * ```tsx
 * <ImageWithFallback
 *   src="/icon.svg"
 *   alt="Justice scales"
 *   fallbackIcon={<ScalesIcon />}
 *   width={64}
 *   height={64}
 * />
 * ```
 */
export function ImageWithFallback({
  src,
  alt,
  fallbackIcon,
  className = '',
  priority = false,
  width,
  height,
  fill = false,
}: ImageWithFallbackProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Handle image load
  const handleLoad = () => {
    setLoading(false);
  };

  // Handle image error
  const handleError = () => {
    setLoading(false);
    setError(true);
    console.warn(`Failed to load image: ${src}`);
  };

  // If error, show fallback
  if (error) {
    return (
      <div
        className={`flex items-center justify-center bg-slate-100 ${className}`}
        style={fill ? {} : { width, height }}
      >
        {fallbackIcon || (
          <svg
            className="w-8 h-8 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        )}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Shimmer loading placeholder */}
      {loading && (
        <div
          className="absolute inset-0 shimmer bg-slate-200"
          style={fill ? {} : { width, height }}
        />
      )}

      {/* Image with zoom-on-hover effect */}
      <div className="image-zoom-container">
        <Image
          src={src}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          fill={fill}
          priority={priority}
          onLoad={handleLoad}
          onError={handleError}
          unoptimized // Required for static export
          className={`transition-opacity duration-300 ${
            loading ? 'opacity-0' : 'opacity-100'
          } ${fill ? 'object-cover' : ''}`}
        />
      </div>
    </div>
  );
}
