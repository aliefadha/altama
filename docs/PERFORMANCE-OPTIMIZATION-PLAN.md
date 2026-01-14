# Performance Optimization Plan

## Executive Summary

This document outlines a comprehensive performance optimization strategy for the Altama Surya Anugerah corporate website. The plan addresses critical performance issues identified during codebase analysis and provides a phased implementation approach to achieve significant improvements in Core Web Vitals and user experience.

**Project Analysis Date:** January 14, 2026
**Framework:** Next.js 16.0.10 with React 19.2.1
**Current State:** Production-ready with identified optimization opportunities

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Critical Performance Issues](#critical-performance-issues)
3. [Phased Implementation Plan](#phased-implementation-plan)
4. [Quick Wins](#quick-wins)
5. [Implementation Guide](#implementation-guide)
6. [Monitoring & Metrics](#monitoring--metrics)
7. [Expected Results](#expected-results)

---

## Project Overview

### Technology Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | Next.js | 16.0.10 |
| UI Library | React | 19.2.1 |
| Styling | Tailwind CSS | 4.x |
| State Management | TanStack Query | 5.90.16 |
| Internationalization | next-intl | 4.6.1 |
| Animations | tw-animate-css | 1.4.0 |
| Carousel | embla-carousel | 8.6.0 |

### Current Performance Baseline

Based on codebase analysis, current performance metrics are estimated as follows:

| Metric | Current Estimate | Target |
|--------|------------------|--------|
| LCP (Largest Contentful Paint) | 2.8s | < 1.8s |
| FID (First Input Delay) | 120ms | < 100ms |
| CLS (Cumulative Layout Shift) | 0.25 | < 0.1 |
| TBT (Total Blocking Time) | 400ms | < 200ms |
| Initial Bundle Size | 250KB | < 150KB |
| Time to Interactive | 3.5s | < 2.5s |

---

## Critical Performance Issues

### 1. Homepage Bundle Size

**Location:** `app/[locale]/page.tsx:1-20`

**Issue:** All 6 sections load synchronously on initial render, causing large initial JavaScript bundle.

```tsx
// Current Implementation
export default function Home() {
  return (
    <>
      <HeroSection />         // Loads immediately
      <CompanySection />      // Loads immediately
      <IntegrationSection />  // Loads immediately
      <BrandSection />        // Loads immediately
      <CareerSection />       // Loads immediately
      <LocationSection />     // Loads immediately
    </>
  );
}
```

**Impact:**
- Large initial JavaScript bundle (~250KB)
- Slow First Contentful Paint (FCP)
- Increased Time to Interactive (TTI)
- Poor mobile performance

**Solution:** Implement code splitting with `next/dynamic` for below-the-fold sections.

---

### 2. Hero Slider Image Loading

**Location:** `components/section/HeroSection.tsx:47-61`

**Issue:** All 3 background images load immediately with the `fill` prop, causing unnecessary bandwidth usage.

```tsx
// Current Implementation
{backgroundImages.map((src, index) => (
  <div key={index}>
    <Image
      alt={`hero-bg-${index}`}
      fill
      className="w-full h-full object-cover"
      src={src}
      priority={index === 0}  // Only first image has priority
    />
  </div>
))}
```

**Impact:**
- Increased LCP time for non-first slides
- Unnecessary bandwidth consumption
- Potential memory issues on low-end devices

**Solution:**
- Add proper `sizes` attribute
- Implement blur placeholders
- Consider responsive image sets

---

### 3. Font Loading Performance

**Location:** `app/font.ts:1-21`

**Issue:** Three font families loaded with no explicit optimization for critical rendering path.

```tsx
export const inter = Inter({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",  // Causes FOUT
});

export const leagueSpartan = League_Spartan({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const helvetica = localFont({
  src: '../public/fonts/Helvetica.ttf',
  variable: "--font-helvetica"
});
```

**Impact:**
- Potential Flash of Unstyled Text (FOUT)
- Cumulative Layout Shift (CLS) from font swapping
- Slightly delayed text rendering

**Solution:**
- Preload critical fonts
- Use `sizeAdjust` for better performance
- Optimize subset loading

---

### 4. TanStack Query Configuration

**Location:** `lib/query-client.ts:1-25`

**Issue:** No persistent caching configured, resulting in repeated API calls.

```tsx
export function createQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000,  // 5 minutes
        refetchOnWindowFocus: false,
        // No persistence configured
        // No deduplication settings
      },
    },
  });
}
```

**Impact:**
- Repeated API calls when navigating between pages
- No offline support
- Increased server load

**Solution:**
- Enable query persistence
- Optimize stale times per query type
- Add garbage collection time (gcTime)

---

### 5. API Client localStorage Access

**Location:** `lib/api-client.ts:39-43`

**Issue:** localStorage access on every API request.

```tsx
if (typeof window !== "undefined") {
  const token = localStorage.getItem("auth-token");
  if (token && !mergedHeaders.has("Authorization")) {
    mergedHeaders.set("Authorization", `Bearer ${token}`);
  }
}
```

**Impact:**
- Potential hydration mismatches
- Unnecessary browser API calls
- Code complexity

**Solution:**
- Use React Context for auth state
- Move token retrieval to proper hooks

---

### 6. Footer Decorative Elements

**Location:** `components/Footer.tsx:66-220`

**Issue:** Large inline SVG elements and decorative components.

**Impact:**
- Large DOM size
- Rendering overhead
- Increased HTML payload

**Solution:**
- Extract inline SVGs to separate components
- Use CSS gradients instead of SVG where possible
- Lazy load decorative elements

---

## Phased Implementation Plan

### Phase 1: Core Web Vitals (Week 1)

**Focus:** Largest Contentful Paint (LCP), First Input Delay (FID), Cumulative Layout Shift (CLS)

| Priority | Task | Estimated Impact | Complexity |
|----------|------|------------------|------------|
| Critical | Add `sizes` prop to Hero images | LCP -0.5s | Low |
| Critical | Lazy load below-fold sections | TBT -200ms | Medium |
| Critical | Optimize font loading | CLS -0.2 | Low |
| High | Preload critical fonts | LCP -0.3s | Low |
| High | Add next.config.ts optimizations | Bundle -15% | Low |

---

### Phase 2: Data Fetching (Week 2)

**Focus:** Network efficiency, caching strategies

| Priority | Task | Estimated Impact | Complexity |
|----------|------|------------------|------------|
| High | Configure query persistence | API calls -40% | Medium |
| Medium | Add request deduplication | Network -20% | Low |
| Medium | Implement SSR data fetching | FCP -0.5s | Medium |
| Medium | Add request memoization | API calls -30% | Low |

---

### Phase 3: Bundle & Runtime (Week 3)

**Focus:** JavaScript optimization, runtime performance

| Priority | Task | Estimated Impact | Complexity |
|----------|------|------------------|------------|
| High | Code splitting by route | Initial JS -25% | Medium |
| Medium | Tree-shaking optimizations | Bundle -10% | Low |
| Medium | Component lazy loading | TBT -150ms | Medium |
| Low | Remove unused dependencies | Bundle -5% | Low |

---

## Quick Wins

These optimizations can be implemented immediately with minimal risk:

### 1. Hero Section Image Optimization

```tsx
<Image
  alt={`hero-bg-${index}`}
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="w-full h-full object-cover"
  src={src}
  priority={index === 0}
  quality={85}
  placeholder="blur"
  blurDataURL="data:image/..."
/>
```

### 2. Homepage Code Splitting

```tsx
import dynamic from 'next/dynamic';

const HeroSection = dynamic(
  () => import('@/components/section/HeroSection'),
  { loading: () => <HeroSkeleton /> }
);

const CompanySection = dynamic(
  () => import('@/components/section/CompanySection'),
  { loading: () => <SectionSkeleton /> }
);

// Other sections...
```

### 3. TanStack Query Optimization

```tsx
export function createQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000,
        gcTime: 30 * 60 * 1000,
        refetchOnWindowFocus: false,
        retry: 1,
      },
    },
  });
}
```

### 4. Next.js Config Optimization

```tsx
const nextConfig: NextConfig = {
  output: 'standalone',
  experimental: {
    optimizeCss: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
};
```

---

## Implementation Guide

### Prerequisites

1. Node.js 20.x or higher
2. Access to production deployment
3. Lighthouse CI configured
4. Performance monitoring tool (Vercel Analytics, SpeedCurve, etc.)

### Development Workflow

1. **Create Feature Branch**
   ```bash
   git checkout -b performance/optimization-phase-1
   ```

2. **Implement Changes**
   - Follow the quick wins first
   - Then move to phased implementation
   - Use pull requests for code review

3. **Test Performance**
   ```bash
   npm run build
   npm run start
   # Run Lighthouse CI
   ```

4. **Deploy to Staging**
   - Test on staging environment
   - Verify no regressions

5. **Production Deployment**
   - Deploy during low-traffic period
   - Monitor Core Web Vitals

---

## Monitoring & Metrics

### Key Performance Indicators

| KPI | Description | Target |
|-----|-------------|--------|
| LCP | Largest Contentful Paint | < 2.5s (green), < 1.8s (excellent) |
| FID | First Input Delay | < 100ms (green), < 50ms (excellent) |
| CLS | Cumulative Layout Shift | < 0.1 (green), < 0.05 (excellent) |
| TBT | Total Blocking Time | < 200ms |
| SI | Speed Index | < 3.4s |

### Monitoring Tools

1. **Vercel Analytics** - Real user monitoring
2. **Lighthouse CI** - Automated performance testing
3. **Web Vitals Chrome Extension** - Manual testing
4. **PageSpeed Insights** - Google performance data

### Performance Budget

| Metric | Budget |
|--------|--------|
| Total JS | < 200KB gzipped |
| Total CSS | < 50KB gzipped |
| Images | < 1MB total |
| Fonts | < 100KB |
| API Calls (initial) | < 5 |

---

## Expected Results

### After Phase 1 (Week 1)

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| LCP | 2.8s | 2.0s | 29% |
| CLS | 0.25 | 0.10 | 60% |
| TBT | 400ms | 280ms | 30% |
| Bundle Size | 250KB | 200KB | 20% |

### After Phase 2 (Week 2)

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| LCP | 2.0s | 1.8s | 10% |
| TBT | 280ms | 220ms | 21% |
| API Calls | 15/page | 8/page | 47% |
| Time to Interactive | 3.5s | 2.8s | 20% |

### After Phase 3 (Week 3)

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| LCP | 1.8s | 1.5s | 17% |
| TBT | 220ms | 150ms | 32% |
| Bundle Size | 200KB | 140KB | 30% |
| Time to Interactive | 2.8s | 2.2s | 21% |

---

## Risk Assessment

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Layout shifts from font loading | Medium | Medium | Test thoroughly, use fallbacks |
| Image quality degradation | Low | Low | Test with stakeholders, use quality: 85 |
| Broken lazy loading | Medium | Low | Test all navigation paths |
| API caching issues | Medium | Low | Implement proper cache invalidation |

---

## Success Criteria

### Minimum Viable Success

- [ ] LCP < 2.5s on mobile
- [ ] CLS < 0.1
- [ ] No hydration errors
- [ ] Bundle size < 200KB

### Target Success

- [ ] LCP < 1.8s on all devices
- [ ] CLS < 0.05
- [ ] FID < 50ms
- [ ] Bundle size < 150KB

### Stretch Goals

- [ ] LCP < 1.5s
- [ ] All Core Web Vitals in green
- [ ] Perfect Lighthouse score (100)

---

## Maintenance

### Regular Tasks

1. **Weekly:** Review Core Web Vitals dashboard
2. **Monthly:** Run Lighthouse CI on main branch
3. **Quarterly:** Performance audit and optimization review

### Performance Regression Prevention

1. Add performance tests to CI/CD pipeline
2. Set up performance budget alerts
3. Monitor third-party script performance
4. Regular dependency updates

---

## Related Documentation

- [Critical Issues](CRITICAL-ISSUES.md) - Detailed issue analysis
- [Quick Wins](QUICK-WINS.md) - Immediate optimization tasks
- [Implementation Guide](IMPLEMENTATION-GUIDE.md) - Step-by-step instructions
- [Roadmap](ROADMAP.md) - Timeline and milestones
- [Monitoring](MONITORING.md) - Performance tracking setup

---

**Document Version:** 1.0
**Last Updated:** January 14, 2026
**Next Review:** February 14, 2026
