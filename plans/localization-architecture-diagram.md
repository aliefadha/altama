# Localization Architecture Diagram

## System Flow

```mermaid
graph TD
    A[User Request] --> B{Check URL Path}
    B -->|Has locale /en/ or /id/| C[Use URL Locale]
    B -->|No locale in URL| D{Check Cookie}
    D -->|Has language cookie| E[Use Cookie Locale]
    D -->|No cookie| F{Check Browser Headers}
    F -->|Has Accept-Language| G[Use Browser Locale]
    F -->|No browser preference| H[Use Default: English]

    C --> I[Set Locale Cookie]
    E --> I
    G --> I
    H --> I

    I --> J[Load Translation Files]
    J --> K[Render Page with Locale]

    K --> L[Language Selector Click]
    L --> M[Update Cookie]
    M --> N[Redirect to New Locale URL]
    N --> A
```

## Component Architecture

```mermaid
graph TB
    subgraph "App Structure"
        A[middleware.ts] --> B[Locale Detection]
        B --> C[URL Rewriting]
        C --> D[app/[locale]/layout.tsx]
        D --> E[Translation Provider]
    end

    subgraph "Translation System"
        F[i18n.ts] --> G[Locale Config]
        H[locales/en/] --> I[English Translations]
        J[locales/id/] --> K[Indonesian Translations]
        G --> I
        G --> K
    end

    subgraph "Components"
        L[Header.tsx] --> M[Language Selector]
        N[Page Components] --> O[useTranslations Hook]
        P[Shared Components] --> O
        E --> O
        I --> O
        K --> O
    end

    subgraph "Storage"
        Q[Cookie Storage] --> R[Language Preference]
        M --> Q
    end
```

## File Structure Flow

```mermaid
graph LR
    A[User visits /] --> B[middleware.ts detects no locale]
    B --> C[Checks cookie: none]
    C --> D[Checks browser: en-US]
    D --> E[Sets locale: en]
    E --> F[Redirects to /en/]
    F --> G[app/[en]/layout.tsx]
    G --> H[Loads locales/en/ files]
    H --> I[Renders page with English]

    J[User clicks Indonesian flag] --> K[Sets cookie: id]
    K --> L[Redirects to /id/]
    L --> M[app/[id]/layout.tsx]
    M --> N[Loads locales/id/ files]
    N --> O[Renders page with Indonesian]
```

## Data Flow for Translations

```mermaid
sequenceDiagram
    participant U as User
    participant M as Middleware
    participant C as Cookie
    participant L as Layout
    participant T as Translation Files
    participant P as Page Component

    U->>M: Request /page
    M->>C: Check language cookie
    C-->>M: Return locale (en/id)
    M->>M: Rewrite URL to /[locale]/page
    M->>L: Route to locale-specific layout
    L->>T: Load translation files for locale
    T-->>L: Return translations
    L->>P: Provide translation context
    P->>P: Render with translations
    P-->>U: Display localized page
```

## Language Selector Interaction

```mermaid
stateDiagram-v2
    [*] --> English: Default/Initial
    English --> Indonesian: Click ID flag
    Indonesian --> English: Click US flag

    English --> English: Click US flag (no change)
    Indonesian --> Indonesian: Click ID flag (no change)

    state English {
        [*] --> SetCookie: locale=en
        SetCookie --> Redirect: /en/current-path
    }

    state Indonesian {
        [*] --> SetCookie: locale=id
        SetCookie --> Redirect: /id/current-path
    }
```
