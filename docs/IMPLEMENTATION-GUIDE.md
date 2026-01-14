# Implementation Guide

This comprehensive guide provides step-by-step instructions for implementing all performance optimizations in the Altama Surya Anugerah website project.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Environment Setup](#environment-setup)
3. [Phase 1: Core Web Vitals](#phase-1-core-web-vitals)
4. [Phase 2: Data Fetching](#phase-2-data-fetching)
5. [Phase 3: Bundle Optimization](#phase-3-bundle-optimization)
6. [Testing Procedures](#testing-procedures)
7. [Deployment](#deployment)
8. [Troubleshooting](#troubleshooting)

---

## Prerequisites

### Required Tools

```bash
# Node.js version
node --version  # Should be >= 20.x

# Package manager
npm --version   # >= 10.x

# Git
git --version   # Any recent version
```

### Access Requirements

1. **Repository Access:** Read/write access to the altama repository
2. **Deployment Access:** Access to staging and production environments
3. **Monitoring Access:** Vercel dashboard or equivalent analytics platform
4. **API Access:** If implementing backend optimizations

### Pre-Implementation Checklist

- [ ] Node.js 20.x or higher installed
- [ ] npm or pnpm installed
- [ ] Git configured with user.name and user.email
- [ ] Repository cloned locally
- [ ] Dependencies installed: `npm install`
- [ ] No lint errors: `npm run lint`
- [ ] Build succeeds: `npm run build`

---

## Environment Setup

### 1. Create Feature Branch

```bash
# Navigate to project directory
cd /Users/aliefadha/Dev/gawe/altama

# Create performance optimization branch
git checkout -b performance/optimization-v1

# Verify branch
git branch
```

### 2. Set Up Monitoring (Before Changes)

```bash
# Create baseline performance test
npm run build

# Start production server
npm run start

# Open new terminal and run Lighthouse
# Or use CLI:
npm install -g @lhci/cli
lhci autorun
```

### 3. Configure Environment Variables

```bash
# Copy example env file
cp .env.example .env.local

# Review and update if needed
cat .env.local
```

### 4. Set Up Git Hooks

```bash
# Ensure pre-commit hooks are running
# This should be automatic with npm install
ls -la .git/hooks/
```

---

## Phase 1: Core Web Vitals

### Goal: Improve LCP, FID, and CLS

### Step 1.1: Optimize Next.js Configuration

**File:** `next.config.ts`

```tsx
import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL ? new URL(process.env.NEXT_PUBLIC_API_BASE_URL) : null;

const nextConfig: NextConfig = {
  output: 'standalone',
  
  // Enable CSS optimization
  experimental: {
    optimizeCss: true,
  },
  
  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3003",
        pathname: "/uploads/**",
      },
      ...(apiUrl ? [{
        protocol: apiUrl.protocol.replace(':', '') as 'http' | 'https',
        hostname: apiUrl.hostname,
        port: apiUrl.port || undefined,
        pathname: "/uploads/**",
      }] : []),
    ],
  },
  
  // Performance settings
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
};

export default withNextIntl(nextConfig);
```

**Verification:**

```bash
npm run build
# Should complete without errors
```

---

### Step 1.2: Optimize Hero Section Images

**File:** `components/section/HeroSection.tsx`

```tsx
// Add blur placeholder generator
function generateBlurDataURL(): string {
  return "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzUzMTg1Ii8+PC9zdmc+";
}

// Update Image components
<Image
  alt={`hero-bg-${index}`}
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1920px"
  className="w-full h-full object-cover"
  src={src}
  priority={index === 0}
  quality={85}
  placeholder={index === 0 ? "blur" : undefined}
  blurDataURL={generateBlurDataURL()}
/>
```

**Verification:**

```bash
npm run build && npm run start
# Open http://localhost:3000
# Check Network tab - images should be optimized
```

---

### Step 1.3: Optimize Font Loading

**File:** `app/font.ts`

```tsx
import { Inter, League_Spartan } from "next/font/google"
import localFont from 'next/font/local'

export const inter = Inter({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
})

export const leagueSpartan = League_Spartan({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-league-spartan",
  preload: true,
  sizeAdjust: '95%',
  fallback: ["Georgia", "serif"],
})

export const helvetica = localFont({
  src: [
    {
      path: '../public/fonts/Helvetica.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: "--font-helvetica",
  display: "swap",
  preload: false,
})
```

**Verification:**

```bash
npm run build
# Check build output for font preloading
```

---

### Step 1.4: Code Split Homepage

**File:** `app/[locale]/page.tsx`

```tsx
import dynamic from 'next/dynamic';
import HeroSection from "@/components/section/HeroSection";

// Skeleton components
function SectionSkeleton() {
  return (
    <div className="animate-pulse bg-gray-100 h-96 w-full">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-center">
        <div className="text-gray-400">Loading...</div>
      </div>
    </div>
  );
}

// Lazy load below-the-fold sections
const CompanySection = dynamic(
  () => import('@/components/section/CompanySection'),
  { 
    loading: () => <SectionSkeleton />,
    ssr: false 
  }
);

const IntegrationSection = dynamic(
  () => import('@/components/section/IntegrationSection'),
  { loading: () => <SectionSkeleton /> }
);

const BrandSection = dynamic(
  () => import('@/components/section/BrandSection'),
  { loading: () => <SectionSkeleton /> }
);

const CareerSection = dynamic(
  () => import('@/components/section/CareerSection'),
  { loading: () => <SectionSkeleton /> }
);

const LocationSection = dynamic(
  () => import('@/components/section/LocationSection'),
  { loading: () => <SectionSkeleton /> }
);

export default function Home() {
  return (
    <>
      <HeroSection />
      <CompanySection />
      <IntegrationSection />
      <BrandSection />
      <CareerSection />
      <LocationSection />
    </>
  );
}
```

**Verification:**

```bash
npm run build
# Check .next/server/pages/index.html for deferred scripts
npm run start
# Test lazy loading in browser DevTools
```

---

### Step 1.5: Add Sizes to All Images

**Components to update:**

1. `components/Header.tsx`
2. `components/Footer.tsx`
3. `components/section/CompanySection.tsx`
4. `components/section/BrandSection.tsx`
5. `components/section/CareerSection.tsx`

**Example update:**

```tsx
<Image
  alt="Logo"
  fill
  className="object-cover"
  src="/path/to/image.webp"
  sizes="200px"
  priority={false}
  quality={85}
/>
```

**Verification:**

```bash
npm run build
# Test responsive images in browser
```

---

## Phase 2: Data Fetching

### Goal: Reduce API calls, improve caching

### Step 2.1: Optimize TanStack Query Configuration

**File:** `lib/query-client.ts`

```tsx
import { QueryClient } from "@tanstack/react-query";

export function createQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // Critical data - shorter stale time
        staleTime: 1 * 60 * 1000, // 1 minute
        
        // Cache retention
        gcTime: 30 * 60 * 1000, // 30 minutes
        
        // Behavior
        refetchOnWindowFocus: false,
        refetchOnReconnect: true,
        
        // Retry with better logic
        retry: (failureCount, error) => {
          const status = (error as { statusCode?: number }).statusCode;
          if (status && status >= 400 && status < 500) {
            return false;
          }
          return failureCount < 3;
        },
      },
      mutations: {
        retry: 0,
        onError: (error) => {
          console.error('Mutation error:', error);
        },
      },
    },
  });
}

export const queryClient = createQueryClient();
```

**Verification:**

```bash
npm run build && npm run start
# Navigate to Media Center
# Check Network tab for cached responses
```

---

### Step 2.2: Add Query-Specific Stale Times

**File:** `app/[locale]/media-center/page.tsx`

```tsx
// In CategoryFilterContent component
const { data: categoriesData, isLoading } = useQuery({
  queryKey: ['category-articles'],
  queryFn: fetchCategoryArticles,
  staleTime: 60 * 60 * 1000, // 1 hour - categories rarely change
  gcTime: 24 * 60 * 60 * 1000, // Keep for 24 hours
});

// In ArticlesGridContent component
const { data: articles, isLoading } = useQuery({
  queryKey: ['articles', categoryId, searchQuery],
  queryFn: () => {
    if (searchQuery && searchQuery.trim()) {
      return fetchArticlesSearch(searchQuery);
    }
    return fetchArticles({ categoryId });
  },
  staleTime: 10 * 60 * 1000, // 10 minutes for articles
  gcTime: 60 * 60 * 1000, // 1 hour
});
```

---

### Step 2.3: Optimize API Client

**File:** `lib/api-client.ts`

```tsx
// Add caching headers support
export async function apiFetch<TData, TMeta = unknown>(
  input: string,
  init: ApiFetchOptions = {},
): Promise<ApiResponse<TData, TMeta>> {
  const { baseUrl = API_BASE_URL, headers, ...options } = init;

  const url = input.startsWith("http") ? input : `${baseUrl}${input}`;
  const mergedHeaders = new Headers(headers);

  // Add cache control for GET requests
  if (options.method === 'GET' || !options.method) {
    mergedHeaders.set('Cache-Control', 'max-age=300, stale-while-revalidate=600');
  }

  if (typeof window !== "undefined") {
    const token = localStorage.getItem("auth-token");
    if (token && !mergedHeaders.has("Authorization")) {
      mergedHeaders.set("Authorization", `Bearer ${token}`);
    }
  }

  // ... rest of the function
}
```

---

## Phase 3: Bundle Optimization

### Goal: Reduce JavaScript bundle size

### Step 3.1: Component Memoization

**File:** `components/Header.tsx`

```tsx
import { memo, useMemo } from 'react';

function HeaderComponent() {
  const pathname = usePathname();
  const t = useTranslations('navigation');

  const locale = useMemo(() => {
    const segments = pathname.split('/');
    const localeCode = segments[1] as Locale;
    return (localeCode === 'en' || localeCode === 'id') ? localeCode : 'en';
  }, [pathname]);

  // Memoize expensive menu calculations
  const menuStructure = useMemo(() => ({
    profile: {
      label: t('profile'),
      items: [
        { href: `/${locale}/profile/company-overview`, label: t('companyOverview') },
        { href: `/${locale}/profile/awards-certification`, label: t('awardsAndCertification') },
        // ...
      ]
    },
    // ...
  }), [locale, t]);

  return (
    // ... JSX
  );
}

export default memo(HeaderComponent);
```

---

### Step 3.2: Extract Inline SVGs

**Create file:** `components/icons/SocialIcons.tsx`

```tsx
import { SVGProps } from 'react';

export function WhatsAppIcon({ className = "w-full h-full" }: SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} fill="none" viewBox="0 0 34 37">
      <path 
        clipRule="evenodd" 
        d="M16.6667 0C7.46167 0 0 7.46167 0 16.6667C0 19.8167 0.875 22.7667 2.39667 25.28L0.91 30.3333C0.824641 30.6235 0.819024 30.9312 0.893741 31.2243C0.968457 31.5174 1.12075 31.7849 1.3346 31.9987C1.54845 32.2126 1.81597 32.3649 2.10903 32.4396C2.40209 32.5143 2.70986 32.5087 3 32.4233L8.05333 30.9367C10.6512 32.5082 13.6304 33.3372 16.6667 33.3333C25.8717 33.3333 33.3333 25.8717 33.3333 16.6667C33.3333 7.46167 25.8717 0 16.6667 0ZM12.8967 20.4383C16.2683 23.8083 19.4867 24.2533 20.6233 24.295C22.3517 24.3583 24.035 23.0383 24.69 21.5067C24.772 21.316 24.8016 21.1069 24.7758 20.9009C24.7501 20.6949 24.6698 20.4996 24.5433 20.335C23.63 19.1683 22.395 18.33 21.1883 17.4967C20.9365 17.3221 20.6268 17.2519 20.3244 17.301C20.0219 17.3502 19.7503 17.5147 19.5667 17.76L18.5667 19.285C18.5138 19.3667 18.4319 19.4252 18.3375 19.4487C18.2431 19.4722 18.1433 19.459 18.0583 19.4117C17.38 19.0233 16.3917 18.3633 15.6817 17.6533C14.9717 16.9433 14.3517 16 14.0033 15.365C13.9612 15.2841 13.9493 15.1908 13.9698 15.1019C13.9902 15.013 14.0417 14.9343 14.115 14.88L15.655 13.7367C15.8754 13.546 16.0177 13.2807 16.0546 12.9916C16.0915 12.7025 16.0204 12.4099 15.855 12.17C15.1083 11.0767 14.2383 9.68667 12.9767 8.765C12.8135 8.64776 12.6228 8.57465 12.4231 8.55276C12.2234 8.53086 12.0214 8.56091 11.8367 8.64C10.3033 9.29667 8.97667 10.98 9.04 12.7117C9.08167 13.8483 9.52667 17.0667 12.8967 20.4383Z" 
        fill="#353185" 
        fillRule="evenodd" 
      />
    </svg>
  );
}

// Export other icons...
```

**File:** `components/Footer.tsx`

```tsx
import { WhatsAppIcon } from '@/components/icons/SocialIcons';

// Replace inline SVG with icon component
<a href="..." className="...">
  <div className="w-6 lg:w-8 h-6 lg:h-8">
    <WhatsAppIcon />
  </div>
</a>
```

---

## Testing Procedures

### 1. Build Test

```bash
npm run build
# Expected: Successful build with no errors
# Check output for bundle sizes
```

### 2. Lint Test

```bash
npm run lint
# Expected: No errors or warnings
```

### 3. Type Check

```bash
npx tsc --noEmit
# Expected: No type errors
```

### 4. Lighthouse Test

```bash
# Option 1: CLI
npm install -g @lhci/cli
lhci autorun

# Option 2: Browser
# 1. npm run start
# 2. Open http://localhost:3000
# 3. Open DevTools > Lighthouse
# 4. Run audit
```

### 5. Core Web Vitals Check

```bash
# Use Chrome DevTools
# 1. Open http://localhost:3000
# 2. Open DevTools > Performance
# 3. Record page load
# 4. Check LCP, TBT, CLS metrics
```

### 6. Mobile Performance Test

```bash
# Chrome DevTools
# 1. Toggle device toolbar (Ctrl+Shift+M)
# 2. Select "iPhone 12" or similar
# 3. Reload page
# 4. Check performance metrics
```

### 7. Network Performance Test

```bash
# Throttle network
# 1. Open DevTools > Network
# 2. Select "Fast 3G" preset
# 3. Reload page
# 4. Check load times and resource sizes
```

---

## Deployment

### 1. Deploy to Staging

```bash
# Commit changes
git add .
git commit -m "perf: implement phase 1 optimizations

- Optimize Next.js config with CSS and image optimization
- Add lazy loading to homepage sections
- Optimize hero images with sizes and blur placeholders
- Configure font preloading
- Update TanStack Query caching strategy"

# Push to remote
git push origin performance/optimization-v1

# Create PR
# Merge to staging branch

# Deploy to staging
npm run build
# Deploy artifacts to staging environment
```

### 2. Test on Staging

```bash
# Run full test suite
npm run test

# Run Lighthouse on staging URL
lhci autorun --target=staging
```

### 3. Monitor Performance

```bash
# Check Vercel Analytics
# - Monitor Core Web Vitals
# - Check for regressions
# - Review real-user data
```

### 4. Deploy to Production

```bash
# Create production PR/branch
git checkout main
git merge performance/optimization-v1
git push origin main

# Deploy via Vercel
# Monitor during deployment
```

### 5. Post-Deployment Monitoring

```bash
# Monitor for 24 hours
# - Check Vercel Analytics dashboard
# - Review error logs
# - Monitor user feedback
```

---

## Troubleshooting

### Issue: Build Fails with Type Errors

**Solution:**

```bash
# Check TypeScript errors
npx tsc --noEmit

# Fix type errors in affected files
# Common issues:
# - Missing type definitions
# - Type mismatches in props
# - Generic type inference
```

### Issue: Images Not Loading

**Solution:**

```bash
# Check image paths
# Verify remotePatterns in next.config.ts
# Check browser console for 404 errors
# Ensure images are in public folder or accessible via URL
```

### Issue: Lazy Loading Causes Layout Shift

**Solution:**

```bash
# Ensure skeleton components have same dimensions as loaded components
# Add min-height to skeleton containers
# Use CSS aspect-ratio for image containers
```

### Issue: Font FOUT (Flash of Unstyled Text)

**Solution:**

```bash
# Increase preload priority
# Add fallback fonts that match metrics
# Use size-adjust for better fallback matching
# Consider using font-display: optional for critical text
```

### Issue: API Calls Still Happening Frequently

**Solution:**

```bash
# Verify query keys are consistent
# Check staleTime configuration
# Verify cache is persisting
# Check for query invalidation
```

### Issue: Bundle Size Increased

**Solution:**

```bash
# Analyze bundle
npm run build --analyze

# Check for duplicate dependencies
# Remove unused code
# Verify tree-shaking is working
```

---

## Rollback Procedures

### 1. Git Rollback

```bash
# Find last working commit
git log --oneline -20

# Revert to previous commit
git checkout <commit-hash>
git checkout -b hotfix/rollback
git push origin hotfix/rollback
```

### 2. Partial Rollback

```bash
# Revert specific file
git checkout HEAD -- path/to/file
git commit -m "revert: undo specific changes"
```

### 3. Configuration Rollback

```bash
# Revert next.config.ts
git checkout HEAD -- next.config.ts
npm run build
```

---

## Success Criteria

### Phase 1 Complete When:

- [ ] Lighthouse Performance > 80
- [ ] LCP < 2.5s on mobile
- [ ] CLS < 0.1
- [ ] TBT < 200ms
- [ ] Build succeeds without errors

### Phase 2 Complete When:

- [ ] API calls reduced by 40%
- [ ] Caching working correctly
- [ ] No duplicate requests
- [ ] Offline support functional

### Phase 3 Complete When:

- [ ] Bundle size < 200KB
- [ ] No unused JavaScript
- [ ] All components memoized
- [ ] Inline SVGs extracted

---

## Timeline

| Phase | Duration | Milestone |
|-------|----------|-----------|
| Phase 1 | Week 1 | Core Web Vitals improved |
| Phase 2 | Week 2 | Caching optimized |
| Phase 3 | Week 3 | Bundle size reduced |

---

**Document Version:** 1.0
**Last Updated:** January 14, 2026
**Next Review:** February 14, 2026
