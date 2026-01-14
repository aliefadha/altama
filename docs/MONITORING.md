# Performance Monitoring Guide

This document provides comprehensive guidance on setting up, configuring, and using performance monitoring tools for the Altama Surya Anugerah website.

## Table of Contents

1. [Overview](#overview)
2. [Core Web Vitals Metrics](#core-web-vitals-metrics)
3. [Monitoring Tools](#monitoring-tools)
4. [Setup Instructions](#setup-instructions)
5. [Alerting Configuration](#alerting-configuration)
6. [Performance Budget](#performance-budget)
7. [Reporting](#reporting)
8. [Troubleshooting](#troubleshooting)

---

## Overview

### Purpose

This guide establishes performance monitoring practices to ensure the Altama website maintains optimal Core Web Vitals scores and user experience after optimization implementation.

### Monitoring Goals

1. **Real User Monitoring (RUM):** Collect actual user experience data
2. **Synthetic Monitoring:** Regular automated performance tests
3. **Alerting:** Proactive notification of performance regressions
4. **Optimization:** Data-driven improvement decisions

### Target Metrics

| Metric | Target (Green) | Target (Excellent) |
|--------|----------------|-------------------|
| LCP | < 2.5s | < 1.8s |
| CLS | < 0.1 | < 0.05 |
| INP | < 200ms | < 100ms |
| TBT | < 200ms | < 100ms |

---

## Core Web Vitals Metrics

### Largest Contentful Paint (LCP)

**Definition:** Time from page load start until the largest content element is rendered.

**Measurement Points:**
- Hero section heading text
- Main hero image
- Featured article image

**Optimization Targets:**

| Device | Network | Target |
|--------|---------|--------|
| Desktop | Fast 3G | < 1.5s |
| Desktop | 4G | < 2.0s |
| Mobile | Fast 3G | < 2.0s |
| Mobile | 4G | < 2.5s |

### Cumulative Layout Shift (CLS)

**Definition:** Measure of visual stability based on unexpected layout shifts.

**Common Causes:**
- Images without dimensions
- Dynamic content injection
- Web fonts (FOUT)
- Late-loading scripts

**Optimization Targets:**

| Component | Max Shift | Priority |
|-----------|-----------|----------|
| Hero Section | 0.05 | Critical |
| Article Cards | 0.10 | High |
| Navigation | 0.05 | Critical |
| Footer | 0.15 | Medium |

### Interaction to Next Paint (INP)

**Definition:** Time from user interaction until visual feedback.

**Target:** < 200ms for all interactions

**Interactions to Monitor:**
- Menu hover/click
- Language switcher
- Mobile menu toggle
- Article card click

---

## Monitoring Tools

### 1. Vercel Analytics

**What it monitors:**
- Real user Core Web Vitals
- Page views and unique visitors
- Geographic distribution
- Device breakdown

**Setup:**

```bash
# Already configured in app/[locale]/layout.tsx
export const metadata: Metadata = {
  title: "Altama Surya Anugerah",
  description: "...",
};

// Vercel Analytics is automatic on Vercel deployments
```

**Access:** https://vercel.com/dashboard → Your Project → Analytics

### 2. Lighthouse CI

**What it monitors:**
- Performance score (0-100)
- Accessibility
- Best practices
- SEO

**Setup:**

```bash
# Install CLI
npm install -g @lhci/cli

# Create configuration
cat > lighthouserc.json << EOF
{
  "ci": {
    "collect": {
      "staticDistDir": "./.next/server",
      "url": ["http://localhost:3000"],
      "numberOfRuns": 3
    },
    "assert": {
      "assertions": {
        "categories:performance": ["error", { "minScore": 0.8 }],
        "categories:accessibility": ["error", { "minScore": 0.9 }]
      }
    },
    "upload": {
      "target": "temporary-public-storage"
    }
  }
}
EOF
```

**Run Tests:**

```bash
# Build and test
npm run build
npm run start &
lhci autorun

# Or with custom URL
lhci autorun --target=staging
```

### 3. Chrome DevTools Performance Panel

**What it monitors:**
- Frame rate
- JavaScript execution time
- Paint and render performance
- Network activity

**Usage:**

```javascript
// Console command to measure LCP
performance.mark('LCP-start');
// User action
performance.mark('LCP-end');
performance.measure('LCP', 'LCP-start', 'LCP-end');
```

### 4. PageSpeed Insights API

**What it monitors:**
- Field data (real users)
- Lab data (synthetic tests)
- Opportunities for improvement

**Usage:**

```bash
# Using curl
curl "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://altama.co.id&key=YOUR_API_KEY"
```

---

## Setup Instructions

### Step 1: Configure Lighthouse CI

**File:** `lighthouserc.json`

```json
{
  "ci": {
    "collect": {
      "staticDistDir": "./.next/server",
      "url": [
        "http://localhost:3000",
        "http://localhost:3000/en",
        "http://localhost:3000/id",
        "http://localhost:3000/en/media-center",
        "http://localhost:3000/id/media-center"
      ],
      "numberOfRuns": 3,
      "settings": {
        "headless": true,
        "preset": "desktop",
        "emulatedFormFactor": "desktop"
      }
    },
    "assert": {
      "assertions": {
        "categories:performance": ["error", { "minScore": 0.8 }],
        "first-contentful-paint": ["warn", { "maxNumericValue": 2000 }],
        "largest-contentful-paint": ["error", { "maxNumericValue": 2500 }],
        "cumulative-layout-shift": ["error", { "maxNumericValue": 0.1 }],
        "first-input-delay": ["warn", { "maxNumericValue": 100 }],
        "interactive": ["warn", { "maxNumericValue": 5000 }]
      }
    },
    "upload": {
      "target": "temporary-public-storage"
    }
  }
}
```

### Step 2: Add Performance Scripts

**File:** `package.json`

```json
{
  "scripts": {
    "perf:test": "lhci autorun",
    "perf:test:mobile": "lhci autorun --preset=mobile",
    "perf:report": "lhci autorun --upload.target=filesystem --upload.outputDir=./perf-reports",
    "perf:budget": "node scripts/performance-budget.js"
  }
}
```

### Step 3: Create Performance Budget Script

**File:** `scripts/performance-budget.js`

```javascript
const fs = require('fs');
const path = require('path');

const BUDGETS = {
  performance: 85,
  lcp: 2500, // ms
  cls: 0.1,
  fid: 100, // ms
  tbt: 200, // ms
  js: 200000, // bytes
  css: 50000, // bytes
  images: 1000000, // bytes
  fonts: 100000, // bytes
};

function checkBudget(actual, budget, metric) {
  if (actual > budget) {
    console.error(`❌ ${metric}: ${actual} exceeds budget ${budget}`);
    return false;
  }
  console.log(`✅ ${metric}: ${actual} within budget ${budget}`);
  return true;
}

// Usage with Lighthouse results
function validateResults(results) {
  const scores = results.categories;
  const audits = results.audits;
  
  let allPass = true;
  
  allPass &= checkBudget(
    scores.performance.score * 100,
    BUDGETS.performance,
    'Performance Score'
  );
  
  allPass &= checkBudget(
    audits['largest-contentful-pact'].numericValue,
    BUDGETS.lcp,
    'LCP'
  );
  
  allPass &= checkBudget(
    audits['cumulative-layout-shift'].numericValue,
    BUDGETS.cls,
    'CLS'
  );
  
  if (!allPass) {
    console.error('\n❌ Performance budget exceeded!');
    process.exit(1);
  }
  
  console.log('\n✅ All performance budgets passed!');
}

module.exports = { BUDGETS, checkBudget, validateResults };
```

### Step 4: Configure GitHub Actions

**File:** `.github/workflows/performance.yml`

```yaml
name: Performance Testing

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  performance:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build project
        run: npm run build
      
      - name: Run Lighthouse CI
        run: npx lhci autorun
        env:
          LHCI_GITHUB_APP_TOKEN: ${{ secrets.LHCI_GITHUB_APP_TOKEN }}
      
      - name: Comment on PR
        uses: actions/github-script@v7
        with:
          script: |
            // Comment performance results on PR
```

---

## Alerting Configuration

### Threshold Alerts

**File:** `.lhcirc.json`

```json
{
  "ci": {
    "assert": {
      "assertions": {
        "categories:performance": ["error", { "minScore": 0.8 }],
        "largest-contentful-paint": ["error", { "maxNumericValue": 2500 }],
        "cumulative-layout-shift": ["error", { "maxNumericValue": 0.1 }],
        "server-response-time": ["warn", { "maxNumericValue": 500 }],
        "mainthread-work-breakdown": ["warn", { "maxNumericValue": 4000 }]
      }
    }
  }
}
```

### Vercel Deployment Alerts

1. **Go to:** Vercel Dashboard → Project → Settings → Git → Deploy Comments
2. **Enable:** Performance summary in PR comments
3. **Configure:** Alert thresholds

### Slack Integration

```yaml
# .github/workflows/alert.yml
name: Performance Alerts

on:
  workflow_run:
    workflows: ['Performance Testing']
    types: [completed]

jobs:
  alert:
    if: github.event.workflow_run.conclusion == 'failure'
    steps:
      - name: Send Slack Alert
        uses: 8398a7/action-slack@v3
        with:
          status: failure
          channel: '#performance-alerts'
          text: 'Performance regression detected! Check Lighthouse results.'
```

---

## Performance Budget

### Budget Definitions

**File:** `performance-budget.json`

```json
{
  "budgets": [
    {
      "resourceSizes": [
        {
          "resourceType": "total",
          "budget": 200
        },
        {
          "resourceType": "script",
          "budget": 80
        },
        {
          "resourceType": "css",
          "budget": 20
        },
        {
          "resourceType": "image",
          "budget": 400
        },
        {
          "resourceType": "font",
          "budget": 50
        }
      ],
      "resourceCount": {
        "budget": 50
      },
      "timings": [
        {
          "metric": "lcp",
          "budget": 2500
        },
        {
          "metric": "fid",
          "budget": 100
        },
        {
          "metric": "cls",
          "budget": 0.1
        },
        {
          "metric": "tbt",
          "budget": 200
        }
      ],
      "path": "**/*"
    }
  ]
}
```

### Budget Enforcement

```javascript
// scripts/check-budget.js
const budget = require('./performance-budget.json');
const buildMetrics = require('./metrics.json');

function enforceBudget() {
  const violations = [];
  
  for (const metric of budget.budgets[0].timings) {
    const actual = buildMetrics[metric.metric];
    if (actual > metric.budget) {
      violations.push({
        metric: metric.metric,
        actual: actual,
        budget: metric.budget,
        exceededBy: `${((actual - metric.budget) / metric.budget * 100).toFixed(1)}%`
      });
    }
  }
  
  if (violations.length > 0) {
    console.error('❌ Performance budget violations:');
    violations.forEach(v => {
      console.error(`  - ${v.metric}: ${v.actual}ms (budget: ${v.budget}ms)`);
    });
    process.exit(1);
  }
  
  console.log('✅ All performance budgets passed!');
}
```

---

## Reporting

### Weekly Performance Report

**Template:** `docs/reports/WEEKLY-REPORT.md`

```markdown
# Performance Report - Week [X]

## Summary

- **Overall Score:** [X]/100 (+/- [X] from last week)
- **LCP:** [X]ms ([status])
- **CLS:** [X] ([status])
- **INP:** [X]ms ([status])

## Metrics Breakdown

### Page Performance

| Page | LCP | CLS | INP | Score |
|------|-----|-----|-----|-------|
| Homepage | [X] | [X] | [X] | [X] |
| Media Center | [X] | [X] | [X] | [X] |
| Contact | [X] | [X] | [X] | [X] |

### Device Breakdown

| Device | LCP | Score |
|--------|-----|-------|
| Desktop | [X] | [X] |
| Mobile | [X] | [X] |

## Changes This Week

- [ ] Optimization implemented: [description]
- [ ] Bug fixed: [description]

## Action Items

- [ ] [Task] - [Owner] - [Due Date]

## Notes

[Any additional observations or concerns]
```

### Monthly Performance Review

**Template:** `docs/reports/MONTHLY-REVIEW.md`

```markdown
# Monthly Performance Review - [Month] [Year]

## Executive Summary

Overall performance trend: 📈 Improving / 📉 Declining / ➡️ Stable

### Key Achievements

- Milestone: [What was achieved]
- Improvement: [X]% in [metric]
- Deployment: [Date]

### Areas for Improvement

- [Issue]: [Impact] - [Proposed solution]

## Detailed Metrics

### Core Web Vitals Distribution

| Metric | P50 | P75 | P90 | Target |
|--------|-----|-----|-----|--------|
| LCP | [X] | [X] | [X] | < 2.5s |
| CLS | [X] | [X] | [X] | < 0.1 |
| INP | [X] | [X] | [X] | < 200ms |

### Comparison to Last Month

| Metric | Last Month | This Month | Change |
|--------|------------|------------|--------|
| Score | [X] | [X] | [+/-X] |
| LCP | [X] | [X] | [+/-X] |
| CLS | [X] | [X] | [+/-X] |

## Next Month Goals

1. [Goal 1] - [Target]
2. [Goal 2] - [Target]
3. [Goal 3] - [Target]

## Appendix

- Full Lighthouse reports attached
- Real user metrics data
- Test configurations
```

---

## Troubleshooting

### Issue: Lighthouse Score Dropping

**Diagnosis:**

```bash
# Run Lighthouse locally
npm run build
npm run start
lhci autorun --target=localhost:3000

# Check specific audits
# Compare with previous run
```

**Common Causes:**
- New dependency with large bundle
- Unoptimized images
- Layout shifts from new components
- Increased API response time

**Solution:**
1. Run bundle analyzer: `npm run build --analyze`
2. Check image sizes
3. Review recent code changes
4. Check API performance

### Issue: LCP Too High

**Diagnosis:**

```javascript
// Add to page
new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    console.log('LCP:', entry.startTime);
  }
}).observe({ type: 'largest-contentful-paint', buffered: true });
```

**Solutions:**
1. Preload hero image
2. Optimize image size/format
3. Remove render-blocking resources
4. Reduce JavaScript execution time

### Issue: CLS Unexpectedly High

**Diagnosis:**

```javascript
// Monitor layout shifts
new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    if (!entry.hadRecentInput) {
      console.log('CLS:', entry.value);
    }
  }
}).observe({ type: 'layout-shift', buffered: true });
```

**Solutions:**
1. Add explicit width/height to images
2. Reserve space for dynamic content
3. Preload fonts
4. Defer non-critical JavaScript

### Issue: INP Too High

**Diagnosis:**

```javascript
// Monitor interactions
new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    console.log('INP:', entry.processingStart - entry.startTime);
  }
}).observe({ type: 'first-input', buffered: true });
```

**Solutions:**
1. Break up long tasks
2. Optimize event handlers
3. Reduce main thread work
4. Use web workers for heavy computation

---

## Quick Reference

### Essential Commands

```bash
# Run performance test
npm run perf:test

# Run mobile performance test
npm run perf:test:mobile

# Generate report
npm run perf:report

# Check budget
npm run perf:budget

# Bundle analysis
npm run build --analyze
```

### Key URLs

| Tool | URL |
|------|-----|
| Vercel Analytics | https://vercel.com/dashboard |
| PageSpeed Insights | https://pagespeed.web.dev/ |
| Lighthouse | chrome://inspect/#devices |
| Web Vitals | https://web.dev/vitals/ |

### Performance Targets

| Metric | Good | Needs Improvement |
|--------|------|-------------------|
| LCP | < 2.5s | > 2.5s |
| CLS | < 0.1 | > 0.1 |
| INP | < 200ms | > 200ms |
| TBT | < 200ms | > 200ms |

---

**Document Version:** 1.0
**Last Updated:** January 14, 2026
**Next Review:** February 14, 2026
**Owner:** Development Team
