# Custom Hooks

This directory contains custom React hooks for the Gender & Society website's interactive enhancements.

## Available Hooks

### `useReducedMotion`

Detects the user's motion preference from their operating system settings and monitors for changes.

**Purpose:** Allows the application to respect accessibility preferences by disabling or reducing animations for users who have enabled "Reduce Motion" in their OS settings.

**Requirements:** Validates Requirements 11.1, 11.2

**Returns:** `boolean` - `true` if the user prefers reduced motion, `false` otherwise

**Usage Example:**

```tsx
import { useReducedMotion } from '@/hooks';

function AnimatedComponent() {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <div 
      className={prefersReducedMotion ? 'static' : 'animate-fade-in'}
      style={{
        transition: prefersReducedMotion ? 'none' : 'all 0.3s ease'
      }}
    >
      Content with conditional animation
    </div>
  );
}
```

**Features:**
- Queries the `prefers-reduced-motion` CSS media query
- Listens for changes to user preferences in real-time
- Automatically updates when the user changes their OS settings
- Safe for server-side rendering (returns `false` during SSR)
- Cleans up event listeners on component unmount

**Browser Support:**
- Chrome 74+
- Firefox 63+
- Safari 10.1+
- Edge 79+

**Implementation Notes:**
- Uses the `matchMedia` API to query the media query
- Leverages React's `useState` and `useEffect` for state management
- Marked with `'use client'` directive for Next.js client components
- Handles SSR safely by checking for `window` availability

---

### `useScrollAnimation`

Detects when elements enter the viewport and provides state for triggering scroll-based entrance animations using the Intersection Observer API.

**Purpose:** Enables smooth scroll-based animations that trigger when content becomes visible, improving the user experience by progressively revealing content. Automatically respects user motion preferences.

**Requirements:** Validates Requirements 1.1, 1.2, 1.4, 1.6, 11.1

**Parameters:**
- `options?: ScrollAnimationOptions`
  - `threshold?: number` - Percentage of element visible to trigger (0-1), default: `0.1`
  - `triggerOnce?: boolean` - Animate only on first appearance, default: `true`
  - `delay?: number` - Delay in ms before animating (for stagger effects), default: `0`
  - `disabled?: boolean` - Explicitly disable animation, default: `false`

**Returns:** `ScrollAnimationReturn`
- `ref: RefObject<HTMLElement | null>` - Ref to attach to the DOM element
- `isVisible: boolean` - Whether the element is currently visible in viewport
- `hasAnimated: boolean` - Whether the element has been animated (for triggerOnce logic)

**Usage Example:**

```tsx
import { useScrollAnimation } from '@/hooks';

function AnimatedSection({ children }: { children: React.ReactNode }) {
  const { ref, isVisible } = useScrollAnimation({ 
    threshold: 0.2,
    triggerOnce: true,
    delay: 100
  });
  
  return (
    <div 
      ref={ref}
      className={`transition-all duration-600 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
}
```

**Advanced Example (Staggered List):**

```tsx
import { useScrollAnimation } from '@/hooks';

function StaggeredList({ items }: { items: string[] }) {
  return (
    <div>
      {items.map((item, index) => (
        <StaggeredItem key={item} delay={index * 100}>
          {item}
        </StaggeredItem>
      ))}
    </div>
  );
}

function StaggeredItem({ children, delay }: { children: React.ReactNode; delay: number }) {
  const { ref, isVisible } = useScrollAnimation({ delay });
  
  return (
    <div
      ref={ref}
      className={isVisible ? 'animate-fade-up' : 'opacity-0'}
    >
      {children}
    </div>
  );
}
```

**Features:**
- Uses native Intersection Observer API (no dependencies)
- Automatically integrates with `useReducedMotion` hook
- Supports staggered animations with configurable delays
- Configurable visibility threshold
- Option to animate once or repeatedly
- Proper cleanup on component unmount
- Graceful fallback when Intersection Observer is unavailable
- Performance-optimized with efficient observer management

**Browser Support:**
- Chrome 51+
- Firefox 55+
- Safari 12.1+
- Edge 15+
- Falls back to showing all content (no animation) in unsupported browsers

**Implementation Notes:**
- Automatically displays elements immediately if user prefers reduced motion
- Uses `IntersectionObserver` to detect element visibility efficiently
- Cleans up observers on unmount to prevent memory leaks
- Supports delayed animations for stagger effects
- `triggerOnce` mode automatically unobserves element after first animation
- Marked with `'use client'` directive for Next.js client components
- Safe for SSR (shows content immediately on server)

**Performance Considerations:**
- Each hook instance creates a separate `IntersectionObserver` for fine-grained control
- Observers are properly disconnected on unmount
- Delays are implemented using `setTimeout` for stagger effects
- No layout thrashing - purely observes visibility changes
- Works with CSS transforms for GPU-accelerated animations


