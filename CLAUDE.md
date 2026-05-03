# ATN WEBSITE — CLAUDE CODE INSTRUCTIONS

You are building a **production-ready marketing website** for ATN using Astro.

Read every section below carefully before writing a single line of code.

---

## GOAL

Build a complete, deployable Astro website in Hebrew (RTL) that:
- Generates leads and drives users to book a meeting
- Does NOT expose the full system logic
- Feels like a real product, not a landing page experiment
- Has a critical interactive demo with 2-step Overlay

---

## TECH STACK

- **Astro** (latest version)
- **TypeScript**
- **Plain CSS only** — NO Tailwind, NO UI frameworks
- **Minimal JavaScript** — only for Overlay and smooth scroll
- **RTL Hebrew first** — `<html lang="he" dir="rtl">`

---

## FOLDER STRUCTURE — BUILD EXACTLY THIS

```
src/
  layouts/
    BaseLayout.astro

  components/
    site/
      Header.astro
      Footer.astro
    home/
      Hero.astro
      ImmediateProof.astro
      ProblemSection.astro
      SolutionSection.astro
      InteractiveDemo.astro
      BenefitsSection.astro
      MicroConversion.astro
      FinalCTA.astro
    pages/
      ServicesContent.astro
      HowItWorksContent.astro
      AboutContent.astro
      ContactContent.astro
    ui/
      Button.astro
      Card.astro
      Overlay.astro
      Section.astro

  pages/
    index.astro
    services.astro
    how-it-works.astro
    about.astro
    contact.astro
    blog/
      index.astro
      [slug].astro

  styles/
    tokens.css
    base.css
    layout.css
    components.css
    utilities.css

  scripts/
    interactive-demo.ts
    smooth-scroll.ts
```

---

## CSS DESIGN TOKENS — USE EXACTLY THESE

```css
/* tokens.css */
:root {
  --color-bg: #ffffff;
  --color-surface: #f5f6fa;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-primary: #3b1f8f;
  --color-accent: #7c5cbf;
  --color-border: #e5e7eb;

  --font-main: 'Heebo', 'Assistant', sans-serif;

  --radius-md: 12px;
  --radius-lg: 20px;

  --space-1: 8px;
  --space-2: 16px;
  --space-3: 24px;
  --space-4: 32px;
  --space-5: 48px;
  --space-6: 64px;

  --container: 1200px;

  --shadow-sm: 0 1px 3px rgba(0,0,0,0.06);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.08);

  --transition-fast: 150ms ease;
  --transition-mid: 200ms ease;
  --transition-slow: 300ms ease;
}
```

---

## TYPOGRAPHY

- Font: **Heebo** (load from Google Fonts)
- H1: large, bold, up to 2–3 lines
- H2: medium-large, semibold
- H3: medium, medium weight
- Body: readable, generous line-height
- All text: RTL, right-aligned by default
- Max 70–75 chars per line on desktop

---

## PAGES & CONTENT

### Home Page (index.astro)

Sections in order:

1. **Hero**
   - H1: "דפי נחיתה שלא רק מביאים תנועה / אלא מייצרים פעולה"
   - Subtitle: "המשתמש לא רק קורא — הוא מגיב / והתגובה הזו היא מה שמובילה לפניות"
   - Primary button: "בדוק איך זה עובד" → smooth scroll to InteractiveDemo
   - Secondary button: "קבע פגישה" → /contact
   - Desktop: 2-column grid (text left, visual right)
   - Mobile: single column, no secondary button

2. **ImmediateProof**
   - H2: "זה לא תיאוריה — זו מערכת"
   - Text: "כשמשהו בדף מגיב למשתמש בזמן אמת / הוא נשאר, מתעניין — ופועל"
   - Button: "ראה מה קורה אחרי קליק" → smooth scroll to InteractiveDemo
   - Short looping animation/visual (CSS animation, no heavy library)

3. **ProblemSection**
   - H2: "למה דפי נחיתה לא ממירים"
   - 3 cards in a row:
     - Card 1: "1 / נכנסים / המשתמש מגיע לדף"
     - Card 2: "2 / קוראים / סורק במהירות"
     - Card 3: "3 / יוצאים / בלי להשאיר פרטים"
   - Hover: subtle scale or shadow (150ms)

4. **SolutionSection**
   - H2: "מה משתנה כאן"
   - Text: "הדף לא רק מציג מידע / הוא יוצר אינטראקציה / המשתמש נכנס לתוך התהליך / ולא רק צופה בו מהצד"
   - Desktop: 2-column grid

5. **InteractiveDemo** ← CRITICAL SECTION
   - Button: "בדוק מה קורה אחרי קליק"
   - Click → opens Overlay Step 1
   - See Overlay spec below

6. **BenefitsSection**
   - H2: "מה מקבלים בפועל"
   - 4 cards: "יותר פניות" / "פחות נטישה" / "זמן שהייה גבוה יותר" / "לידים איכותיים יותר"

7. **MicroConversion**
   - H2: "רוצה להבין איך דף נחיתה צריך לעבוד היום"
   - Text: "קבל מסמך קצר עם עקרונות ברורים להגדלת המרות בעולם הדיגיטלי של היום"
   - Button: "הורד מדריך" → Option A: direct file download OR Option B: modal with name+email form

8. **FinalCTA**
   - H2: "רוצה לראות איך זה עובד בפועל"
   - Text: "שיחה קצרה מספיקה כדי להבין אם זה מתאים לך"
   - Button: "קבע פגישה" → /contact
   - Dark background block

9. **Closing line**
   - "אל תביא רק תנועה — תגרום לה לפעול"
   - Button: "קבע פגישה"

---

### Services Page (services.astro)

- H1: "השירותים שלנו"
- Subtitle: result-focused, NOT feature-focused
- Block 1: "דפי נחיתה ממירים"
- Block 2: "יצירת מעורבות"
- Block 3: "הובלה לפעולה"
- Block 4: "התאמה לעידן הדיגיטלי"
- CTA at bottom: "קבע פגישה"

### How It Works Page (how-it-works.astro)

- H1: "איך זה עובד"
- Flow: בעיה → עקרון → תגובה → פעולה → דוגמה כללית → CTA
- Do NOT explain the full mechanism — give principle only
- CTA: "קבע פגישה"

### About Page (about.astro)

- H1: "מי אנחנו"
- Sections: מי אנחנו / איך חושבים / למה שונה / ניסיון
- Tone: factual, no fluff

### Contact Page (contact.astro)

- H1: "בוא נבדוק מה אפשר להשיג יחד"
- Short form: שם / טלפון / אימייל
- Submit button: "שלח"
- Also show: "או קבע פגישה ישירה" with calendar button
- Form submission: Netlify Forms OR fetch to API endpoint

### Blog (blog/index.astro + blog/[slug].astro)

- Index: list of articles, categories
- Article template: שאלה → תשובה → פירוט → סיכום → CTA
- Blog is infrastructure only for now — no real content needed

---

## HEADER

```
[ATN לוגו]          [שירותים] [איך זה עובד] [אודות] [בלוג] [צור קשר] [קבע פגישה ←]
```

- Sticky on scroll
- Background: transparent initially → white on scroll (150–200ms fade)
- Mobile: hamburger menu → full-screen nav overlay

---

## FOOTER

```
ATN.

[שירותים] [איך זה עובד] [אודות] [בלוג] [צור קשר]

hello@atn.co.il   |   050-1234567

[LinkedIn] [Twitter/X] [Instagram]
```

---

## OVERLAY — CRITICAL FEATURE

This is the most important interactive element. Build it exactly as specified.

### HTML Structure

```html
<div class="overlay" id="interactive-overlay" aria-modal="true" role="dialog">
  <div class="overlay-card">
    <button class="overlay-close" aria-label="סגור">✕</button>

    <!-- Step 1 -->
    <div class="overlay-step" data-step="1">
      <h2>יש דרך לגרום למשתמשים לפעול</h2>
      <p>כשהדף מגיב למשתמש<br>הוא מפסיק להיות צופה<br>ומתחיל להיות חלק מהתהליך</p>
      <button class="btn btn-primary" data-next-step>המשך</button>
    </div>

    <!-- Step 2 -->
    <div class="overlay-step" data-step="2" hidden>
      <h2>רוצה לראות איך זה נראה בפועל?</h2>
      <p>הדרך להבין באמת היא לראות את זה קורה<br>בדוגמא חיה</p>
      <button class="btn btn-primary" data-go-to-contact>קבע פגישה קצרה</button>
    </div>
  </div>
</div>
```

### CSS

```css
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: none;
  place-items: center;
  z-index: 1000;
  opacity: 0;
  transition: opacity var(--transition-slow);
}

.overlay.open {
  display: grid;
  opacity: 1;
}

.overlay-card {
  background: white;
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  width: min(480px, 90vw);
  position: relative;
  transform: scale(0.95);
  transition: transform var(--transition-slow);
}

.overlay.open .overlay-card {
  transform: scale(1);
}

.overlay-close {
  position: absolute;
  top: var(--space-2);
  left: var(--space-2);  /* RTL: close button on left */
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: var(--color-muted);
}

/* Mobile */
@media (max-width: 767px) {
  .overlay-card {
    width: 100%;
    border-radius: var(--radius-lg) var(--radius-lg) 0 0;
    position: fixed;
    bottom: 0;
    padding: var(--space-4);
  }
}
```

### TypeScript (interactive-demo.ts)

```typescript
const overlay = document.getElementById('interactive-overlay') as HTMLElement;
const openBtn = document.querySelector('[data-open-overlay]') as HTMLElement;
const closeBtn = overlay?.querySelector('.overlay-close') as HTMLElement;
const nextBtn = overlay?.querySelector('[data-next-step]') as HTMLElement;
const step1 = overlay?.querySelector('[data-step="1"]') as HTMLElement;
const step2 = overlay?.querySelector('[data-step="2"]') as HTMLElement;

function openOverlay() {
  overlay.style.display = 'grid';
  requestAnimationFrame(() => overlay.classList.add('open'));
  document.body.style.overflow = 'hidden';
}

function closeOverlay() {
  overlay.classList.remove('open');
  setTimeout(() => {
    overlay.style.display = 'none';
    // reset to step 1
    step1.hidden = false;
    step2.hidden = true;
    document.body.style.overflow = '';
  }, 300);
}

openBtn?.addEventListener('click', openOverlay);
closeBtn?.addEventListener('click', closeOverlay);

overlay?.addEventListener('click', (e) => {
  if (e.target === overlay) closeOverlay();
});

nextBtn?.addEventListener('click', () => {
  step1.style.opacity = '0';
  setTimeout(() => {
    step1.hidden = true;
    step2.hidden = false;
    step2.style.opacity = '0';
    requestAnimationFrame(() => {
      step2.style.transition = 'opacity 200ms ease';
      step2.style.opacity = '1';
    });
  }, 200);
});

document.querySelector('[data-go-to-contact]')?.addEventListener('click', () => {
  window.location.href = '/contact';
});

// Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeOverlay();
});
```

---

## INTERACTION SPECS — ALL TIMINGS

| Interaction | Trigger | Animation | Duration |
|---|---|---|---|
| Header sticky | Scroll | Fade bg | 150–200ms |
| Hero primary button | Click | Smooth scroll | 400–600ms |
| Problem cards | Hover (desktop) | Scale/shadow | 150ms |
| Overlay open | Click button | Fade + Scale | 200–300ms |
| Overlay step 1→2 | Click "המשך" | Fade out→in | 200ms |
| Overlay close | Click X / outside | Fade out | 150–200ms |
| Proof visual | Auto | Loop | 3–5s loop |
| Scroll blocks | Scroll | Fade-in (optional) | 200ms |

---

## LAYOUT RULES

```css
/* layout.css */
.container {
  max-width: var(--container);
  margin-inline: auto;
  padding-inline: 24px;
}

.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
  align-items: center;
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-3);
}

.grid-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-3);
}

@media (max-width: 767px) {
  .grid-2, .grid-3, .grid-4 {
    grid-template-columns: 1fr;
  }
}

section {
  padding-block: var(--space-6);
}
```

---

## BUTTONS

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-1);
  min-height: 48px;
  padding: 0 var(--space-3);
  border-radius: var(--radius-md);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all var(--transition-fast);
  text-decoration: none;
}

.btn-primary {
  background: var(--color-primary);
  color: white;
}
.btn-primary:hover { background: #2e1870; }

.btn-secondary {
  background: transparent;
  border-color: var(--color-primary);
  color: var(--color-primary);
}
.btn-secondary:hover { background: var(--color-primary); color: white; }

/* Mobile: full width */
@media (max-width: 767px) {
  .btn { width: 100%; }
}
```

---

## CARDS

```css
.card {
  background: white;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-3);
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--transition-fast), transform var(--transition-fast);
}

.card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}
```

---

## RTL RULES

- `<html lang="he" dir="rtl">` — always
- All text: `text-align: right` by default
- Flex rows: `flex-direction: row` (RTL handles it)
- Icons next to text: check they appear on correct side
- Form inputs: test cursor direction
- Numbers (phone, stats): use `unicode-bidi: embed`
- Close button (X): position `left` not `right` in RTL

---

## PERFORMANCE RULES

- Images: WebP format, lazy load
- Video (proof loop): short mp4, max 3–5 seconds, autoplay muted loop
- No heavy animation libraries
- Overlay must open in < 300ms
- No unnecessary re-renders
- CSS-only animations where possible

---

## SEO

Each page must have:
- `<title>` — unique per page
- `<meta name="description">` — unique per page
- Single `<h1>` per page
- Logical heading hierarchy (h1 → h2 → h3)

Home page title: "ATN | דפי נחיתה שמייצרים פעולה"

---

## DEVELOPMENT ORDER — FOLLOW THIS SEQUENCE

1. `npm create astro@latest` — set up project
2. Install Heebo font (Google Fonts link in BaseLayout)
3. Build CSS system: tokens → base → layout → components → utilities
4. Build BaseLayout.astro with RTL, Header, Footer
5. Build all UI components: Button, Card, Section, Overlay
6. Build Home page — static first (no JS)
7. Add InteractiveDemo + Overlay + JS interactions
8. Test mobile responsiveness
9. Build remaining pages: Services, HowItWorks, About, Contact
10. Build Blog infrastructure (index + slug template)
11. Add smooth scroll script
12. SEO meta tags on all pages
13. Performance pass: images, video, remove unused CSS
14. Final RTL audit

---

## DO NOT

- ❌ Invent new UX not in this spec
- ❌ Change the user flow
- ❌ Add features not defined here
- ❌ Expose or explain the full system mechanism
- ❌ Use Tailwind, Bootstrap, or any CSS framework
- ❌ Use React or heavy JS frameworks
- ❌ Use heavy animation libraries
- ❌ Use `text-align: left` anywhere (RTL site)

---

## DO

- ✅ Follow the interaction spec timings exactly
- ✅ Keep performance high
- ✅ Keep code clean and modular
- ✅ Use CSS variables for everything
- ✅ Respect RTL fully
- ✅ Make the Overlay feel instant and smooth
- ✅ Report progress after each major section is complete

---

## VISUAL REFERENCE (from images provided)

- Dark navy/purple Hero section with large bold Hebrew text
- White/light gray background for content sections
- Purple primary color (#3b1f8f) for CTAs and accents
- Phone mockup visual in Hero (right side)
- Cards with subtle borders and light shadow
- Clean footer with logo, nav links, contact info
- Mobile: hamburger menu, full-width buttons, generous spacing

---

## START

Run this to begin:
```bash
npm create astro@latest atn-website -- --template minimal --typescript strict --no-install
cd atn-website
npm install
```

Then build in the order specified above.
Report after each completed step.
