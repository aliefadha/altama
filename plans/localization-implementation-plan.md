# Localization Implementation Plan for Altama Website

## Overview

This document outlines the implementation of Indonesian and English localization for the Altama Surya Anugerah website using Next.js 16 and next-intl library.

## Requirements

- English as default language
- Indonesian as secondary language
- Language selector with flags in header
- Cookie-based language preference storage
- Full translation of all pages and components
- SEO-friendly with proper hreflang tags

## Technology Stack

- **Next.js 16** - React framework
- **next-intl** - Internationalization library for Next.js
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling

## Architecture

### 1. File Structure

```
/
├── middleware.ts                 # Locale detection and routing
├── i18n.ts                       # Internationalization configuration
├── next.config.ts               # Next.js config with next-intl
├── app/
│   ├── [locale]/                # Dynamic locale routes
│   │   ├── layout.tsx          # Root layout with locale param
│   │   ├── page.tsx            # Homepage
│   │   ├── profile/            # Profile pages
│   │   ├── career/             # Career pages
│   │   ├── contact-us/         # Contact page
│   │   └── media-center/       # Media center pages
│   └── globals.css
├── components/
│   ├── Header.tsx              # Updated with language selector
│   ├── Footer.tsx              # Updated with translations
│   └── section/                # All section components
├── locales/                     # Translation files
│   ├── en/
│   │   ├── common.json         # Common translations
│   │   ├── navigation.json     # Navigation items
│   │   ├── hero.json          # Hero section
│   │   ├── profile.json       # Profile pages
│   │   ├── career.json        # Career pages
│   │   └── contact.json       # Contact page
│   └── id/
│       ├── common.json         # Common translations
│       ├── navigation.json     # Navigation items
│       ├── hero.json          # Hero section
│       ├── profile.json       # Profile pages
│       ├── career.json        # Career pages
│       └── contact.json       # Contact page
└── lib/
    └── utils.ts               # Utility functions
```

### 2. Language Detection Strategy

1. **URL Path**: Check for locale in URL (`/en/`, `/id/`)
2. **Cookie**: Check for saved language preference
3. **Browser Headers**: Use `Accept-Language` header
4. **Default**: Fall back to English

### 3. Language Selector Design

- Position: Top-right corner of header
- Design: Flag icons with dropdown menu
- Flags: 🇺🇸 for English, 🇮🇩 for Indonesian
- Behavior: Click to switch, saves preference in cookie
- Mobile: Integrated into mobile menu

### 4. Translation Approach

#### Content Categories

1. **Navigation**: Header menu items, footer links
2. **Hero Section**: Main headlines, call-to-actions
3. **Profile Pages**: Company overview, board, awards, gallery
4. **Career Pages**: Job listings, application forms, company culture
5. **Contact Page**: Form labels, addresses, contact information
6. **Common Elements**: Buttons, form validation, error messages

#### Translation Structure

```json
{
  "common": {
    "loading": "Loading...",
    "error": "Error",
    "submit": "Submit",
    "cancel": "Cancel",
    "back": "Back",
    "next": "Next"
  },
  "navigation": {
    "profile": "Profile",
    "brand": "Brand",
    "mediaCenter": "Media Center",
    "career": "Career",
    "contactUs": "Contact Us"
  }
}
```

## Implementation Steps

### Phase 1: Setup and Configuration

1. Install next-intl dependencies
2. Create i18n configuration
3. Update Next.js configuration
4. Create middleware for locale routing
5. Update app structure with [locale] dynamic routes

### Phase 2: Language Infrastructure

1. Create translation file structure
2. Set up language context provider
3. Implement cookie-based language storage
4. Create language selector component

### Phase 3: Content Translation

1. Extract all text content from components
2. Create English translation files
3. Create Indonesian translation files
4. Update components to use translation hooks

### Phase 4: Integration and Testing

1. Integrate language selector into header
2. Test language switching functionality
3. Verify SEO implementation
4. Test responsive behavior
5. Performance optimization

## SEO Considerations

### 1. URL Structure

- Default: `/` (redirects to `/en/`)
- English: `/en/`
- Indonesian: `/id/`

### 2. Meta Tags

```html
<!-- English version -->
<html lang="en">
  <link rel="alternate" hreflang="en" href="https://altama.com/en/page" />
  <link rel="alternate" hreflang="id" href="https://altama.com/id/page" />

  <!-- Indonesian version -->
  <html lang="id">
    <link rel="alternate" hreflang="en" href="https://altama.com/en/page" />
    <link rel="alternate" hreflang="id" href="https://altama.com/id/page" />
  </html>
</html>
```

### 3. Sitemap

- Include all language variants in sitemap
- Use hreflang annotations for proper indexing

## Performance Considerations

### 1. Translation Loading

- Load only required translation files per locale
- Implement code splitting for translation files
- Cache translations in browser storage

### 2. Bundle Size

- Optimize translation file sizes
- Use tree-shaking for unused translations
- Implement lazy loading for large translation sets

## Accessibility

### 1. Language Declaration

- Proper lang attribute on HTML element
- Screen reader compatibility
- Keyboard navigation for language selector

### 2. Visual Design

- High contrast for flag icons
- Clear visual indicators for active language
- Responsive design for mobile devices

## Maintenance

### 1. Content Updates

- Centralized translation management
- Version control for translation files
- Automated testing for missing translations

### 2. Quality Assurance

- Translation review process
- Context validation for translations
- User testing for language switching

## Timeline Estimate

- **Phase 1**: 2-3 days (Setup and configuration)
- **Phase 2**: 2-3 days (Language infrastructure)
- **Phase 3**: 5-7 days (Content translation)
- **Phase 4**: 2-3 days (Integration and testing)

**Total Estimated Time**: 11-16 days

## Success Metrics

1. **Functional**: All pages load correctly in both languages
2. **SEO**: Proper hreflang implementation and indexing
3. **Performance**: No significant impact on page load times
4. **User Experience**: Seamless language switching
5. **Maintenance**: Easy content updates and translation management

## Risk Assessment

### High Risk

- Complex routing with dynamic locale parameters
- Large volume of content to translate
- SEO implications of URL structure changes

### Medium Risk

- Cookie-based preference storage reliability
- Mobile responsiveness of language selector
- Performance impact on initial page load

### Low Risk

- Translation file management
- Component updates for internationalization
- Browser compatibility

## Conclusion

This implementation plan provides a comprehensive approach to adding Indonesian and English localization to the Altama website. The use of next-intl library ensures compatibility with Next.js 16 while providing robust internationalization features. The modular approach allows for incremental implementation and easy maintenance.
