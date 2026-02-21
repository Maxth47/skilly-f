# Site review: Limitless (example.html → Next.js app)

Review compared the reference `example.html` (limitless.framer.photos) with the Next.js app and applied corrections so the app matches the reference. A second pass reviewed **section by section** to clone the reference exactly.

---

## Section-by-section clone (latest)

| Section | Reference detail | App implementation |
|--------|------------------|--------------------|
| **Header** | Nav: About, Blog, Features→#benefits, Pricing→#pricing, Pages→#pricing; then Tutorials (outline pill), Book a call (purple pill → cal.com) | Same order; Features→#benefits; Tutorials + Book a call as pills; Book a call → cal.com |
| **Hero** | Video Abstract+Objects.mp4, 48px radius; badge “Hurry, only 3 spots left.”; headline “The truly Limitless design subscription.”; “See plans” → #pricing; “Book a call” → cal.com | Video src = Abstract+Objects.mp4; poster = local hero image; same copy and links |
| **Logos** | “Our designs are featured on:”; mask gradient 0→25→75→100%; gap 64px | Same label and mask; gap-16 (64px) |
| **Testimonial** | 5 stars; Tony quote; Tony Saoprano, CEO of Tryal; image mask to right 80% | Same; image from `testimonialTonyCard` |
| **Process** | “Your designs, effortlessly.”; 3 steps; “Book a 15-min call” → cal.com | Same; step links → cal.com |
| **Benefits** | “Fast, quality & limitless.” (serif italic); Jenny testimonial; 3 benefit cards | Same |
| **Features** | “Reasons you will love us.”; 6 cards; CTA “Book a 15-min call” → cal.com | Same; CTA → cal.com |
| **Solution** | “All your design needs.”; categories with rounded-2xl, border-top only, gap 24px; id solution | Same; pills rounded-2xl border-t; gap-6; id="solution" |
| **Pricing** | “3 spots left”; $2,989/month; Subscribe → stripe.com; Book a call → cal.com; Framer +$500; feature list | Subscribe → stripe.com; Book a call → cal.com; same copy |
| **FAQ** | Accordion; 18px questions | Same structure |
| **Tutorials** | “Limitless” styled + “ Tutorials”; “Buy template” → hxmzaehsan.com/templates/limitless; “See tutorials” | Same; Buy template external link |
| **Footer** | 5 links only: About, Blog, Features→#features, Pricing→#pricing, Legal→/legal; Created by Hamza Ehsan→x.com; Use for free→framer.link+utm | Same 5 links; Features→#features; Hamza→x.com; Use for free with utm_source=framer |

---

## Reference vs app (before fixes)

| Area | Reference | App (before) | Status |
|------|-----------|--------------|--------|
| **Nav** | About, Blog, Features, Pricing, Legal | About, Blog, Features, Pricing, **Pages**, Tutorials | Fixed: removed Pages, added Legal, Features → #features |
| **Hero** | Video (Displacement.mp4), green pill “Hurry, only 3 spots left.”, “The truly Limitless design subscription.” | Static image, same copy | Fixed: hero uses video + poster fallback |
| **Section headings** | Serif italic for key words (“& limitless.”, “effortlessly.”, “design ”, “simple.”) | Plain text | Fixed: Benefits, Process, Solution, Pricing use serif italic |
| **Tutorials title** | “Limitless” styled (Li + mit italic + less 50%) + “ Tutorials” | “Limitless Tutorials” plain | Fixed: styled title |
| **Tutorials CTA** | “Buy template” → hxmzaehsan.com/templates/limitless | “Buy template” → #buy | Fixed: external URL |
| **Footer** | “Created by” → Hamza Ehsan (x.com/hxmzaehsan), “Use for free” → framer.link/FUaimTK?utm_source=framer | Hamza → hxmzaehsan.com, Use for free → framer.link | Fixed: Hamza → x.com, UTM on framer link |

---

## Changes made

1. **Header (`Header.tsx`)**
   - Nav: removed “Pages”, added “Legal” (href `/legal`), “Features” now points to `#features`.

2. **Hero (`Hero.tsx`)**
   - Replaced static image with `<video>` using reference URL (Displacement.mp4), autoplay, loop, muted, playsInline.
   - `poster={images.hero}` for fallback while video loads.

3. **Benefits (`Benefits.tsx`)**
   - Heading: “Fast, quality **& limitless.**” with `<span className="font-serif italic">& limitless.</span>`.

4. **Process (`Process.tsx`)**
   - Heading: “Your designs, **effortlessly.**” with serif italic on “effortlessly.”.

5. **Solution (`Solution.tsx`)**
   - Heading: “All your **design **needs.” with serif italic on “design ”.

6. **Tutorials (`Tutorials.tsx`)**
   - Title: “**Limitless** Tutorials” with Limitless styled (Li / mit italic / less 50%).
   - “Buy template” → `https://www.hxmzaehsan.com/templates/limitless` (external).

7. **Footer (`Footer.tsx`)**
   - “Hamza Ehsan” → `https://x.com/hxmzaehsan`.
   - “Use for free” → `https://framer.link/FUaimTK?utm_source=framer`.

---

## What already matched

- **Colors & theme**: Dark bg (10,10,10), cards (13,13,13), text (252,252,250), muted (153,153,153), accent purple (98,20,217), green dot (26,255,117).
- **Typography**: Satoshi (sans), Instrument Serif (serif) in layout and globals.
- **Section order**: Hero → Logos strip → Testimonial → Process → Benefits → Features → Solution → Pricing → FAQ → Tutorials → Footer.
- **Copy**: Hero subtext, testimonial (Tony Saoprano / Jenny London), process steps, benefits list, features, solution categories, pricing ($2,989, “3 spots left”), FAQ questions/answers, tutorials description.
- **Section pills**: Border, blur, border-radius 50px.
- **CTAs**: “Book a call”, “See plans”, purple primary and outline secondary.
- **IDs**: `#hero`, `#features`, `#pricing`, `#process`, `#benefits`, `#tutorials` for anchor links.

---

## Not replicated (by design)

- **Framer animations**: Scroll/entrance and Lottie in the reference are not reimplemented; the app is static.
- **Responsive variants**: Reference uses breakpoints (e.g. “Are you ready?” on some viewports); app uses one hero variant.
- **Legal / Blog / About routes**: Links go to `/legal`, `/about`, `/blog`; those pages are not implemented (404 unless you add them).

---

## How to verify

- Run `npm run dev`, open `/`, and compare to `example.html` (or the live reference site) for nav, hero video, section headings, Tutorials title, and footer links.
