# Performance Optimization Roadmap

This document outlines the timeline, milestones, and deliverables for the Altama Surya Anugerah website performance optimization project.

## Executive Summary

**Project Duration:** 3 weeks
**Start Date:** January 14, 2026
**Target Completion:** February 4, 2026
**Goal:** Achieve Google Core Web Vitals green zone (LCP < 2.5s, CLS < 0.1, FID < 100ms)

---

## Table of Contents

1. [Project Timeline](#project-timeline)
2. [Phase 1: Core Web Vitals](#phase-1-core-web-vitals-week-1)
3. [Phase 2: Data Fetching Optimization](#phase-2-data-fetching-optimization-week-2)
4. [Phase 3: Bundle Optimization](#phase-3-bundle-optimization-week-3)
5. [Milestones](#milestones)
6. [Deliverables](#deliverables)
7. [Risks and Mitigation](#risks-and-mitigation)
8. [Success Criteria](#success-criteria)

---

## Project Timeline

```
Week 1          Week 2          Week 3
Jan 14-20       Jan 21-27       Jan 28 - Feb 4
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│  PHASE 1    │ │  PHASE 2    │ │  PHASE 3    │
│ Core Web    │ │ Data        │ │ Bundle      │
│ Vitals      │ │ Fetching    │ │ Optimization│
└─────────────┘ └─────────────┘ └─────────────┘
      │               │               │
   [M1]            [M2]            [M3]
```

---

## Phase 1: Core Web Vitals (Week 1)

### Goal
Improve Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS) to achieve green zone metrics.

### Dates
- **Start:** January 14, 2026
- **End:** January 20, 2026
- **Duration:** 7 days

### Tasks

| Day | Task | Owner | Deliverable |
|-----|------|-------|-------------|
| 1 | Next.js config optimization | Dev | Updated next.config.ts with CSS/image optimizations |
| 2 | Hero image optimization | Dev | HeroSection.tsx with sizes, blur placeholders |
| 3 | Font loading optimization | Dev | app/font.ts with preloading |
| 4 | Homepage code splitting | Dev | app/[locale]/page.tsx with dynamic imports |
| 5 | Image sizes attribute | Dev | Updated all Image components |
| 6 | Testing and verification | Dev/QA | Test report, Lighthouse scores |
| 7 | Deploy to staging | Dev | Staging deployment, PR review |

### Phase 1 Success Criteria

| Metric | Baseline | Target | Priority |
|--------|----------|--------|----------|
| LCP | 2.8s | < 2.5s | Critical |
| CLS | 0.25 | < 0.1 | Critical |
| TBT | 400ms | < 200ms | High |
| FCP | 2.0s | < 1.5s | Medium |

### Phase 1 Deliverables

- [ ] `next.config.ts` with performance optimizations
- [ ] Optimized HeroSection with proper image attributes
- [ ] Font preloading configuration
- [ ] Code-split homepage with lazy loading
- [ ] All Image components with sizes attribute
- [ ] Lighthouse performance report
- [ ] Staging deployment

---

## Phase 2: Data Fetching Optimization (Week 2)

### Goal
Reduce API calls, implement persistent caching, and improve perceived performance through better data management.

### Dates
- **Start:** January 21, 2026
- **End:** January 27, 2026
- **Duration:** 7 days

### Tasks

| Day | Task | Owner | Deliverable |
|-----|------|-------|-------------|
| 1 | TanStack Query configuration | Dev | Updated query-client.ts with gcTime |
| 2 | Query-specific caching | Dev | Media center queries with staleTime |
| 3 | API client optimization | Dev | api-client.ts with cache headers |
| 4 | Request deduplication | Dev | Optimized fetch patterns |
| 5 | Loading states | Dev | Skeleton components |
| 6 | Testing and verification | Dev/QA | API call reduction report |
| 7 | Deploy to staging | Dev | Staging deployment, PR review |

### Phase 2 Success Criteria

| Metric | Baseline | Target | Priority |
|--------|----------|--------|----------|
| API Calls (initial load) | 15 | < 9 | Critical |
| Cache Hit Rate | 0% | > 60% | High |
| Time to Interactive | 3.5s | < 2.8s | High |
| Navigation Speed | 1.5s | < 0.8s | Medium |

### Phase 2 Deliverables

- [ ] Optimized query-client.ts with persistent caching
- [ ] Query-specific staleTime configurations
- [ ] API client with cache headers
- [ ] Loading skeleton components
- [ ] API call reduction report
- [ ] Staging deployment

---

## Phase 3: Bundle Optimization (Week 3)

### Goal
Reduce JavaScript bundle size through code splitting, tree-shaking, and component optimization.

### Dates
- **Start:** January 28, 2026
- **End:** February 4, 2026
- **Duration:** 8 days

### Tasks

| Day | Task | Owner | Deliverable |
|-----|------|-------|-------------|
| 1 | Component memoization | Dev | Memoized Header, Footer, Sections |
| 2 | SVG extraction | Dev | Extracted icon components |
| 3 | Remove unused code | Dev | Cleaned up components |
| 4 | Bundle analysis | Dev | Bundle size report |
| 5 | Final optimizations | Dev | Performance tuning |
| 6 | Integration testing | Dev/QA | Full test suite |
| 7 | Production deployment | Dev | Production deployment |
| 8 | Post-launch monitoring | Dev | Performance monitoring report |

### Phase 3 Success Criteria

| Metric | Baseline | Target | Priority |
|--------|----------|--------|----------|
| Bundle Size | 250KB | < 200KB | Critical |
| JavaScript Execution | 400ms | < 300ms | High |
| Memory Usage | 45MB | < 35MB | Medium |
| Lighthouse Score | 70 | > 85 | High |

### Phase 3 Deliverables

- [ ] Memoized React components
- [ ] Extracted SVG icon components
- [ ] Bundle analysis report
- [ ] Production deployment
- [ ] Final performance report

---

## Milestones

### M1: Phase 1 Complete (January 20, 2026)

**Criteria:**
- [ ] Lighthouse Performance > 75
- [ ] LCP < 2.5s on mobile
- [ ] CLS < 0.15
- [ ] All Phase 1 code changes merged

**Key Achievements:**
- Hero images optimized
- Font loading improved
- Homepage code-split
- Image sizes configured

### M2: Phase 2 Complete (January 27, 2026)

**Criteria:**
- [ ] API calls reduced by 40%
- [ ] Cache hit rate > 50%
- [ ] Time to Interactive < 3.0s
- [ ] All Phase 2 code changes merged

**Key Achievements:**
- Query caching implemented
- API optimization complete
- Loading states improved
- Network efficiency improved

### M3: Phase 3 Complete (February 4, 2026)

**Criteria:**
- [ ] Lighthouse Performance > 85
- [ ] Bundle size < 200KB
- [ ] All Core Web Vitals in green zone
- [ ] Production deployment successful

**Key Achievements:**
- Bundle optimized
- Components memoized
- Production ready
- Performance targets met

---

## Deliverables

### Documentation

| Document | Description | Due Date |
|----------|-------------|----------|
| PERFORMANCE-OPTIMIZATION-PLAN.md | Main planning document | Jan 14 |
| CRITICAL-ISSUES.md | Detailed issue analysis | Jan 14 |
| QUICK-WINS.md | Immediate optimization tasks | Jan 14 |
| IMPLEMENTATION-GUIDE.md | Step-by-step instructions | Jan 14 |
| ROADMAP.md | This document | Jan 14 |
| MONITORING.md | Performance tracking | Jan 14 |
| TEST-REPORT.md | Phase 1 test results | Jan 20 |
| CACHE-REPORT.md | Phase 2 cache analysis | Jan 27 |
| FINAL-REPORT.md | Final performance report | Feb 4 |

### Code Changes

| Phase | Files Modified | New Files Created |
|-------|---------------|-------------------|
| Phase 1 | next.config.ts, HeroSection.tsx, app/font.ts, app/[locale]/page.tsx | Skeleton components |
| Phase 2 | lib/query-client.ts, lib/api-client.ts, media-center/page.tsx | Cache utilities |
| Phase 3 | components/Header.tsx, components/Footer.tsx, icons/*.tsx | Icon components |

### Deployments

| Environment | Date | Version |
|-------------|------|---------|
| Staging | Jan 20 | v1.0-rc1 |
| Staging | Jan 27 | v1.0-rc2 |
| Production | Feb 4 | v1.0.0 |

---

## Risks and Mitigation

### High Risks

| Risk | Impact | Likelihood | Mitigation | Contingency |
|------|--------|------------|------------|-------------|
| Layout shifts from changes | High | Medium | Test thoroughly with CLS tools | Revert layout changes |
| Build failures | High | Low | Run build before each commit | Use git bisect |
| Production bugs | High | Medium | Extensive testing | Rollback plan ready |

### Medium Risks

| Risk | Impact | Likelihood | Mitigation | Contingency |
|------|--------|------------|------------|-------------|
| Image quality degradation | Medium | Low | Quality: 85, stakeholder review | Increase quality |
| Caching issues | Medium | Medium | Test with cache disabled | Adjust staleTime |
| Bundle size increase | Medium | Low | Analyze before deploy | Remove optimizations |

### Low Risks

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Performance regression | Low | Low | Baseline comparison | Revert changes |
| Dependency conflicts | Low | Low | npm audit | Update carefully |
| Browser compatibility | Low | Medium | Test on multiple browsers | Add fallbacks |

---

## Success Criteria

### Minimum Success (Must Achieve)

| Metric | Target | Measurement |
|--------|--------|-------------|
| Lighthouse Performance | > 75 | Chrome Lighthouse CI |
| LCP | < 2.5s | Chrome DevTools |
| CLS | < 0.1 | Chrome DevTools |
| No console errors | 0 | Browser console |
| Build success | 100% | npm run build |

### Target Success (Should Achieve)

| Metric | Target | Measurement |
|--------|--------|-------------|
| Lighthouse Performance | > 85 | Chrome Lighthouse CI |
| LCP | < 2.0s | Chrome DevTools |
| FID | < 100ms | Chrome DevTools |
| TBT | < 200ms | Chrome DevTools |
| Bundle Size | < 200KB | Next.js build output |

### Stretch Goals (Nice to Have)

| Metric | Target | Measurement |
|--------|--------|-------------|
| Lighthouse Performance | 90+ | Chrome Lighthouse CI |
| LCP | < 1.5s | Chrome DevTools |
| All Core Web Vitals | Green | PageSpeed Insights |
| Mobile Performance | > 85 | Lighthouse mobile |

---

## Resource Allocation

### Team

| Role | Allocation | Responsibilities |
|------|------------|------------------|
| Frontend Developer | 100% | All implementation |
| QA Engineer | 20% | Testing, reporting |
| DevOps | 10% | Deployment support |

### Time Budget

| Phase | Estimated Hours | Actual Hours | Variance |
|-------|-----------------|--------------|----------|
| Phase 1 | 40 hours | - | - |
| Phase 2 | 32 hours | - | - |
| Phase 3 | 40 hours | - | - |
| Total | 112 hours | - | - |

---

## Communication Plan

### Daily Standups (Weekdays)

- **Time:** 9:00 AM
- **Attendees:** Dev team
- **Format:** 15-minute sync
- **Agenda:** Progress, blockers, plan for day

### Weekly Reviews

- **Time:** Friday 4:00 PM
- **Attendees:** All stakeholders
- **Format:** 30-minute review
- **Agenda:** Milestone review, metrics, next steps

### Phase Reviews

- **Time:** End of each phase
- **Attendees:** All stakeholders
- **Format:** 1-hour review
- **Agenda:** Deliverables review, metrics comparison, go/no-go decision

---

## Post-Project Maintenance

### Monthly Tasks

1. **Review Core Web Vitals** (1 hour)
   - Check Vercel Analytics
   - Review real-user metrics
   - Identify any regressions

2. **Lighthouse CI Run** (30 minutes)
   - Run automated tests
   - Compare to baseline
   - Document changes

3. **Dependency Updates** (2 hours)
   - Update npm packages
   - Check for performance improvements
   - Test for regressions

### Quarterly Tasks

1. **Performance Audit** (4 hours)
   - Full Lighthouse audit
   - Bundle analysis
   - Recommendations for improvements

2. **Architecture Review** (2 hours)
   - Review current approach
   - Identify new optimization opportunities
   - Plan improvements

---

## Appendix

### A. Reference Links

- [Next.js Performance Documentation](https://nextjs.org/docs/app/building-your-application/optimizing)
- [Core Web Vitals](https://web.dev/vitals/)
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/)
- [TanStack Query](https://tanstack.com/query/latest)
- [Web Vitals](https://github.com/GoogleChrome/web-vitals)

### B. Tools

- Chrome DevTools
- Lighthouse CI
- PageSpeed Insights
- Vercel Analytics
- Bundle Analyzer

### C. Glossary

| Term | Definition |
|------|------------|
| LCP | Largest Contentful Paint - time to render largest content element |
| CLS | Cumulative Layout Shift - measure of visual stability |
| FID | First Input Delay - time until page responds to user input |
| TBT | Total Blocking Time - total time main thread is blocked |
| FCP | First Contentful Paint - time to render first content |
| FOUT | Flash of Unstyled Text - font loading artifact |

---

**Document Version:** 1.0
**Last Updated:** January 14, 2026
**Approved By:** [To be filled]
**Next Review:** February 11, 2026 (Post-project review)
