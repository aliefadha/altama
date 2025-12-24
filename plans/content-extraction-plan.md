# Content Extraction and Translation Plan

## Overview

This document outlines all the text content that needs to be extracted and translated for implementing Indonesian and English localization.

## Content Analysis

### 1. Header Component (components/Header.tsx)

#### Navigation Menu Items

- Profile → Profile / Profil
- Brand → Brand
- Media Center → Media Center
- Career → Career / Karir
- Contact Us → Contact Us / Hubungi Kami

#### Submenu Items

**Profile Submenu:**

- Company Overview → Company Overview / Profil
- Awards and Certification → Awards and Certification / Penghargaan dan Sertifikasi
- Board of Directors → Board of Directors / Dewan Direksi
- Gallery → Gallery / Galeri

**Brand Submenu:**

- Tekiro → Tekiro (brand name, no translation needed)
- Rexco → Rexco (brand name, no translation needed)
- Ryu → Ryu (brand name, no translation needed)

**Career Submenu:**

- Apply Jobs → Apply Jobs / Lamar Pekerjaan
- Life at Altama → Life at Altama

### 2. Hero Section (components/section/HeroSection.tsx)

#### Main Content

- "#AltamaGueBanget" → "#AltamaGueBanget" (hashtag, keep as is)
- "THE POWER OF INNOVATION FOR A STRONGER NATION." → "THE POWER OF INNOVATION FOR A STRONGER NATION." / "KEKUATAN INOVASI UNTUK BANGSA YANG LEBIH KUAT."
- "Your partner in progress, empowering every step toward Indonesia's success." → "Your partner in progress, empowering every step toward Indonesia's success." / "Mitra kemajuan Anda, memberdayakan setiap langkah menuju kesuksesan Indonesia."

### 3. Company Overview Page (app/profile/(profile)/company-overview/page.tsx)

#### Hero Section

- "Our Vision, Mission & Company Values" → "Our Vision, Mission & Company Values" / "Visi, Misi & Nilai Perusahaan"
- "Fondasi yang membentuk Altama Surya Anugerah dalam berkarya dan berkembang." → "The foundation that shapes Altama Surya Anugerah in creating and growing." / "Fondasi yang membentuk Altama Surya Anugerah dalam berkarya dan berkembang."
- "#AltamaGueBanget" → "#AltamaGueBanget" (keep as is)

#### Vision Section

- "Visi" → "Vision" / "Visi"
- "Menjadi distributor terpercaya di Indonesia untuk peralatan teknik, otomotif, dan industri, dengan produk berkualitas tinggi yang mendukung profesional, pelaku usaha, hingga pengguna rumahan." → "To become a trusted distributor in Indonesia for technical, automotive, and industrial equipment, with high-quality products that support professionals, business actors, to home users." / "Menjadi distributor terpercaya di Indonesia untuk peralatan teknik, otomotif, dan industri, dengan produk berkualitas tinggi yang mendukung profesional, pelaku usaha, hingga pengguna rumahan."

#### Mission Section

- "Mission" → "Mission" / "Misi"
- "Menghadirkan produk berkualitas tinggi dengan standar internasional." → "Presenting high-quality products with international standards." / "Menghadirkan produk berkualitas tinggi dengan standar internasional."
- "Mendukung kebutuhan masyarakat, profesional, dan industri." → "Supporting the needs of society, professionals, and industry." / "Mendukung kebutuhan masyarakat, profesional, dan industri."
- "Memperluas jaringan distribusi agar produk mudah dijangkau di seluruh Indonesia." → "Expanding distribution network so products are easily accessible throughout Indonesia." / "Memperluas jaringan distribusi agar produk mudah dijangkau di seluruh Indonesia."
- "Terus meningkatkan inovasi dan ekspansi sesuai perkembangan pasar." → "Continuously improving innovation and expansion according to market developments." / "Terus meningkatkan inovasi dan ekspansi sesuai perkembangan pasar."

#### Core Values Section

- "CORE VALUE" → "CORE VALUE" / "NILAI INTI"
- "Integrity" → "Integrity" / "Integritas"
- "Konsisten dan dapat dipercaya." → "Consistent and trustworthy." / "Konsisten dan dapat dipercaya."
- "Innovation" → "Innovation" / "Inovasi"
- "Selalu menghadirkan solusi lebih baik." → "Always providing better solutions." / "Selalu menghadirkan solusi lebih baik."
- "Collaboration" → "Collaboration" / "Kolaborasi"
- "Bekerja bersama untuk tujuan yang sama." → "Working together for the same purpose." / "Bekerja bersama untuk tujuan yang sama."
- "Customer Focus" → "Customer Focus" / "Fokus Pelanggan"
- "Mengutamakan kepuasan dan kebutuhan pelanggan." → "Prioritizing customer satisfaction and needs." / "Mengutamakan kepuasan dan kebutuhan pelanggan."

#### Milestone Section

- "Milestone" → "Milestone" / "Tonggak Sejarah"

**Timeline Items:**

- 2011: "Altama berdiri di Jakarta, memulai perjalanan sebagai distributor teknik." → "Altama was established in Jakarta, starting the journey as a technical distributor." / "Altama berdiri di Jakarta, memulai perjalanan sebagai distributor teknik."
- 2015: "Perluasan jaringan distribusi ke lebih banyak kota besar." → "Expansion of distribution network to more major cities." / "Perluasan jaringan distribusi ke lebih banyak kota besar."
- 2018: "Penambahan produk baru: Tekiro Handtools, RYU Power Tools, Rexco Chemicals." → "Addition of new products: Tekiro Handtools, RYU Power Tools, Rexco Chemicals." / "Penambahan produk baru: Tekiro Handtools, RYU Power Tools, Rexco Chemicals."
- 2020: "Distribusi nasional semakin kuat + peningkatan ekspansi modern market." → "National distribution becomes stronger + modern market expansion increase." / "Distribusi nasional semakin kuat + peningkatan ekspansi modern market."
- 2023: "Memenangkan Digital Popular Brand Award." → "Winning Digital Popular Brand Award." / "Memenangkan Digital Popular Brand Award."

#### Navigation Buttons

- "Back" → "Back" / "Kembali"
- "Next" → "Next" / "Selanjutnya"

### 4. Other Pages to Analyze

#### Board of Directors Page

- Need to analyze titles, director names, descriptions
- Navigation buttons (Back/Next)

#### Awards & Certification Page

- Need to analyze award titles, descriptions, dates
- Navigation buttons (Back/Next)

#### Career Pages

- Job listings, application forms, company culture content
- Form labels and validation messages

#### Contact Us Page

- Form fields, addresses, contact information
- Button labels and success/error messages

#### Media Center Pages

- Article titles, descriptions, categories
- Navigation and filtering options

### 5. Common Elements

#### Footer Component

- Need to analyze footer links, copyright text
- Social media links and descriptions

#### Shared UI Components

- Button labels, form validation messages
- Loading states, error messages
- Modal dialogs, tooltips

## Translation Strategy

### 1. Content Categories

1. **Static Text**: Navigation, labels, buttons
2. **Dynamic Content**: Page titles, descriptions
3. **Brand Content**: Company values, mission statements
4. **User-Generated**: Form labels, validation messages

### 2. Translation Approach

1. **Direct Translation**: Simple UI elements
2. **Localization**: Cultural adaptation for marketing content
3. **Transcreation**: Brand slogans and marketing copy
4. **Preservation**: Brand names, hashtags, technical terms

### 3. Quality Considerations

1. **Context Awareness**: Ensure translations fit the context
2. **Tone Consistency**: Maintain brand voice across languages
3. **Cultural Sensitivity**: Adapt content for Indonesian audience
4. **Technical Accuracy**: Ensure technical terms are correctly translated

## File Organization

### Translation File Structure

```
locales/
├── en/
│   ├── common.json          # Common UI elements
│   ├── navigation.json      # Navigation menu items
│   ├── hero.json           # Hero section content
│   ├── profile.json        # Profile pages content
│   ├── career.json         # Career pages content
│   ├── contact.json        # Contact page content
│   ├── media.json          # Media center content
│   └── footer.json         # Footer content
└── id/
    ├── common.json          # Common UI elements
    ├── navigation.json      # Navigation menu items
    ├── hero.json           # Hero section content
    ├── profile.json        # Profile pages content
    ├── career.json         # Career pages content
    ├── contact.json        # Contact page content
    ├── media.json          # Media center content
    └── footer.json         # Footer content
```

### Translation Key Naming Convention

- Use dot notation for nested keys
- Use camelCase for key names
- Group related content together
- Use descriptive names for clarity

Example:

```json
{
  "navigation": {
    "profile": "Profile",
    "brand": "Brand",
    "mediaCenter": "Media Center",
    "career": "Career",
    "contactUs": "Contact Us"
  },
  "hero": {
    "hashtag": "#AltamaGueBanget",
    "title": "THE POWER OF INNOVATION FOR A STRONGER NATION.",
    "subtitle": "Your partner in progress, empowering every step toward Indonesia's success."
  }
}
```

## Implementation Priority

### Phase 1: Core Navigation

1. Header navigation menu
2. Footer links
3. Language selector

### Phase 2: Main Pages

1. Homepage hero section
2. Company overview page
3. Contact page

### Phase 3: Secondary Pages

1. Profile subpages
2. Career pages
3. Media center

### Phase 4: Interactive Elements

1. Forms and validation
2. Error messages
3. Success notifications

## Testing Strategy

### 1. Content Verification

- Ensure all text is extracted
- Verify no hardcoded strings remain
- Check for missing translations

### 2. Functional Testing

- Test language switching
- Verify correct locale detection
- Check cookie persistence

### 3. Visual Testing

- Ensure text fits in allocated space
- Check responsive behavior
- Verify consistent styling

### 4. SEO Testing

- Verify hreflang tags
- Check meta descriptions
- Test sitemap generation
