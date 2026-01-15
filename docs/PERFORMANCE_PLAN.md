# Performance Enhancement Plan

## Overview

This document outlines the performance enhancement plan for the Altama Next.js project. The goal is to improve Core Web Vitals, reduce bundle size, and optimize runtime performance.

---

## Current State Analysis

### Technology Stack
- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **State Management:** React Query (TanStack Query v5)
- **Internationalization:** next-intl with 2 locales (en, id)
- **Build Output:** standalone

### Key Metrics Concerns
- **Bundle Size:** VisiMisiMilestone.tsx at 94KB
- **Image Loading:** Missing `sizes` prop on all Image components
- **Font Loading:** No `display: 'swap'` configured
- **Component Hydration:** Large components load immediately without lazy loading
- **Code Duplication:** Inline SVGs in Footer (400+ lines)

---

## Quick Wins (High Impact, Low Effort)

### 1. Add `sizes` prop to Image components

**Impact:** High
**Estimated Time:** 5 minutes
**Priority:** P0

#### Description
Add proper `sizes` prop to all Next.js Image components to enable responsive image loading and proper srcset generation.

#### Implementation
```tsx
// Before
<Image src="..." fill alt="..." />

// After
<Image src="..." fill sizes="(max-width: 768px) 100vw, 50vw" alt="..." />
```

#### Files to Update
- `components/section/HeroSection.tsx`
- `components/Header.tsx`
- `components/Footer.tsx`
- `components/section/BrandSection.tsx`
- `components/section/CompanySection.tsx`
- `components/section/CareerSection.tsx`
- `components/section/LocationSection.tsx`

---

### 2. Lazy-load heavy components

**Impact:** High
**Estimated Time:** 10 minutes
**Priority:** P0

#### Description
Implement code-splitting for large components using `next/dynamic` to reduce initial bundle size.

#### Implementation
```tsx
// In app/[locale]/page.tsx or relevant pages
import dynamic from 'next/dynamic';

const VisiMisiMilestone = dynamic(
  () => import('@/components/section/VisiMisiMilestone'),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
    ssr: true,
  }
);
```

#### Components to Lazy Load
| Component | File Size | Lazy Load Location |
|-----------|-----------|-------------------|
| VisiMisiMilestone | 94KB | Profile pages |
| AwardSection | 13KB | Awards page |
| VisiMisiMilestone | 94KB | Profile overview |

---

### 3. Configure font display swap

**Impact:** Medium (CLS improvement)
**Estimated Time:** 2 minutes
**Priority:** P0

#### Description
Add `display: 'swap'` to all next/font configurations to prevent layout shifts during font loading.

#### Implementation
```tsx
// In app/font.ts
import { Inter, League_Spartan } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',  // Add this
  variable: '--font-inter',
});

export const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  display: 'swap',  // Add this
  variable: '--font-league_spartan',
});
```

```tsx
// In components/section/HeroSection.tsx
const leagueSpartan = League_Spartan({
  variable: '--font-league_spartan',
  subsets: ['latin'],
  display: 'swap',  // Add this
});
```

---

## Medium Effort Tasks

### 4. Extract Footer inline SVGs to separate components

**Impact:** Medium
**Estimated Time:** 15 minutes
**Priority:** P1

#### Description
Extract inline SVG icons from Footer.tsx into reusable icon components to improve code maintainability and reduce HTML payload.

#### Implementation
1. Create `components/ui/SocialIcons.tsx`:
```tsx
import { Facebook, LinkedIn, Instagram, YouTube, WhatsApp } from './Icon';

export function SocialIcons() {
  return (
    <div className="flex gap-4">
      <a href="https://wa.me/..."><WhatsApp /></a>
      <a href="https://facebook.com/..."><Facebook /></a>
      <a href="https://youtube.com/..."><YouTube /></a>
      <a href="https://linkedin.com/..."><LinkedIn /></a>
      <a href="https://instagram.com/..."><Instagram /></a>
    </div>
  );
}
```

2. Create `components/ui/Icon.tsx` with individual icon components

#### Files to Create/Modify
- `components/ui/Icon.tsx` (new)
- `components/ui/SocialIcons.tsx` (new)
- `components/Footer.tsx` (modify)

---

### 5. Add React Query prefetching ✅

**Impact:** Medium (UX improvement)
**Estimated Time:** 15 minutes
**Priority:** P1
**Status:** Completed

#### Description
Implement prefetching for data that users are likely to access to reduce perceived latency.

#### Implementation
```tsx
// In lib/career.ts
import { queryClient } from './query-client';
import { apiClient } from './api-client';

export async function prefetchCareers() {
  await queryClient.prefetchQuery({
    queryKey: ['careers'],
    queryFn: () => apiClient.get('/careers'),
    staleTime: 5 * 60 * 1000,
  });
}

export async function prefetchMediaCenter() {
  await queryClient.prefetchQuery({
    queryKey: ['media-center'],
    queryFn: () => apiClient.get('/media-center'),
    staleTime: 5 * 60 * 1000,
  });
}
```

```tsx
// In components/Header.tsx - prefetch on hover
import { prefetchCareers, prefetchMediaCenter } from '@/lib/career';

// Add to menu items
<Link
  href="/career"
  onMouseEnter={() => prefetchCareers()}
  onMouseEnter={() => prefetchMediaCenter()}
>
  Career
</Link>
```

#### Files to Modify
- `lib/career.ts`
- `lib/media-center.ts`
- `components/Header.tsx`
- `components/section/CareerSection.tsx`

---

## Advanced Optimizations (Future Consideration)

### 6. Optimize i18n Loading

**Impact:** Medium
**Estimated Time:** 30 minutes
**Priority:** P2

#### Current Issue
All translation files are loaded on every request.

#### Potential Solution
```tsx
// In i18n.ts - lazy load translations per page
export default getRequestConfig(async ({ locale }) => {
  // Only load common messages on all pages
  const common = await import(`./locales/${locale}/common.json`);

  // Page-specific messages loaded dynamically
  return {
    locale,
    messages: common.default,
  };
});
```

---

### 7. Add Image Blur Placeholders

**Impact:** Medium (UX improvement)
**Estimated Time:** 20 minutes
**Priority:** P2

#### Implementation
```tsx
// In HeroSection.tsx
import background1 from '@/public/images/0c1d2a3b7eb424e2f5d2bfe8c72d39db643b8338.webp';

<Image
  src={background1}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQ..." // Generate using: https://blurha.sh
  priority // For first image
/>
```

---

### 8. Optimize React Query Configuration

**Impact:** Medium
**Estimated Time:** 10 minutes
**Priority:** P2

#### Implementation
```tsx
// In lib/query-client.ts
export function createQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000, // 5 minutes
        gcTime: 30 * 60 * 1000,   // 30 minutes (formerly cacheTime)
        refetchOnWindowFocus: false,
        retry: (failureCount, error) => {
          const status = (error as { statusCode?: number }).statusCode;
          if (status && status >= 400 && status < 500) {
            return false;
          }
          return failureCount < 2;
        },
        maxQueryFetches: 3, // Limit retries
      },
      mutations: {
        retry: 0,
      },
    },
  });
}
```

---

## Implementation Order

| Priority | Task | Estimated Time | Expected Impact | Status |
|----------|------|----------------|-----------------|--------|
| 1 | Add sizes prop to Images | 5 min | High | Pending |
| 2 | Lazy-load VisiMisiMilestone | 10 min | High | Pending |
| 3 | Configure font display swap | 2 min | Medium | Pending |
| 4 | Extract Footer SVGs | 15 min | Medium | Pending |
| 5 | React Query prefetching | 15 min | Medium | ✅ Completed |

**Total estimated time: ~45-50 minutes**

---

## Performance Metrics to Track

### Core Web Vitals
- **LCP (Largest Contentful Paint):** Target < 2.5s
- **CLS (Cumulative Layout Shift):** Target < 0.1
- **INP (Interaction to Next Paint):** Target < 200ms

### Bundle Size
- **Initial JS Bundle:** Target < 200KB (gzipped)
- **Total Images:** Optimize to < 1MB total

### Lighthouse Scores
- **Performance:** Target > 90
- **Best Practices:** Target > 90
- **SEO:** Target > 90

---

## Tools for Validation

```bash
# Build and analyze bundle
npm run build

# View bundle analysis (if @next/bundle-analyzer is installed)
npm run build --analyze

# Run Lighthouse CI
npx lhci autorun

# Check bundle size trend
npx budibase .
```

---

## References

- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [next/font Documentation](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- [React Query Performance](https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr)
- [Web Vitals](https://web.dev/vitals/)

---

**Last Updated:** January 2026
**Version:** 1.0
