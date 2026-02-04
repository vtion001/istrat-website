# iStrat Website Revisions and Todo List

**Date:** February 3, 2026  
**Status:** Planning Phase - DO NOT IMPLEMENT YET

---

## Summary of Changes Required

This document outlines 6 major revisions requested for the iStrat Marketing Communications website. Each item is detailed with specific files to modify and implementation notes.

---

## 1. Navigation Bar - Remove Border

**Current State:**
The floating navbar has a visible border: `border border-white/10 bg-black/80 backdrop-blur-2xl`

**Required Change:**
Remove the border from the navigation bar while maintaining the background blur effect.

**File:** `components/floating-navbar.tsx` (Line 59)

**Implementation:**
- Remove `border border-white/10` class
- Keep `bg-black/80 backdrop-blur-2xl`
- Test on desktop and mobile

**Priority:** High | **Time:** 15 min

---

## 2. iStrat Logo - Resize (Make Smaller)

**Current State:**
- Mobile: `h-[168px]`
- Desktop: `h-[640px]`

**Required Change:**
Reduce logo size to be less dominant.

**File:** `components/hero.tsx` (Lines 75-83)

**Implementation:**
- Suggested: Mobile `h-[120px]`, Desktop `h-[400px]`
- Maintain `w-auto` for aspect ratio
- Test responsiveness

**Priority:** High | **Time:** 10 min

---

## 3. Tagline "i" Replacement - Use Provided Graphics

**Current State:**
Animated SVG "i" in `components/animated-i.tsx` with drop-in animation.

**Required Change:**
Replace with provided graphic from `public/icons/i-icon.svg`.

**Files:**
- `components/animated-i.tsx`
- `components/hero.tsx` (Lines 128-130)

**Implementation:**
- Option A: Keep animations with new SVG
- Option B: Use static SVG
- Ensure seamless fit in "INFLUENCE" text
- Maintain #DC7026 orange color

**Priority:** Medium | **Time:** 30 min

---

## 4. Homepage - Replace "What We Do" with Company Profile

**Current State:**
"What We Do" section (Panel 2) at lines 119-221 in `app/page.tsx`:
- Section title
- Video banner
- Core services description
- Awards tags

**Required Change:**
Remove entire section and replace with Company Profile.

**File:** `app/page.tsx` (Lines 119-221)

**BLOCKED - Need Clarification:**
- [ ] What content for Company Profile?
- [ ] Include company overview/history?
- [ ] Feature team or leadership?
- [ ] What visuals (images, videos)?
- [ ] Desired layout?

**Priority:** High | **Time:** 1-2 hrs (pending content)

---

## 5. About Us Page Restructure

**Current Structure:**
1. Hero Section ("About Us")
2. Power Statement ("WE DON'T JUST RUN CAMPAIGNS...")
3. Experience & Story (32+ years, video)
4. Specializations grid
5. Strategic Narrative (quote)
6. Leadership/Team

**Required Changes:**

**5A: Remove First Section (About Us Hero)**
- Remove Panel 1 (Lines 19-27)

**5B: Replace Second Section**
- Current: "WE DON'T JUST RUN CAMPAIGNS..."
- New: "Meet the minds behind the work" (tagline from hero)

**5C: Team Photos Section**
- Move team section up to become second panel
- Keep existing team grid (Lines 260-306)

**File:** `app/about-us/page.tsx`

**BLOCKED - Need Clarification:**
- [ ] Keep 32 years video/stats section?
- [ ] Keep specializations grid?
- [ ] Keep strategic narrative quote?
- [ ] Keep "Behind the Lens, Ahead of the Curve" content?

**Priority:** High | **Time:** 1-2 hrs

---

## 6. Our Services Page - Tab-Based Layout

**Current State:**
Services displayed as grid of cards (lines 204-230). Clicking opens PopupDetail modal.

**Required Change:**
Transform into tab-based interface:
- Service labels in tabs
- Clicking opens description and visuals
- Replace grid with interactive tabs

**File:** `app/products-and-services/page.tsx`

**BLOCKED - Need Design Clarification:**
- [ ] Horizontal or vertical tabs?
- [ ] Where does content display (below, beside, modal)?
- [ ] Include images in tab content?
- [ ] Keep or remove PopupDetail modal?
- [ ] Mobile behavior (accordion vs tabs)?

**Data Available:**
- Services: Lines 16-73
- Service details: Lines 75-111

**Priority:** High | **Time:** 2-3 hrs

---

## Files Referenced

- `components/floating-navbar.tsx`
- `components/hero.tsx`
- `components/animated-i.tsx`
- `app/page.tsx`
- `app/about-us/page.tsx`
- `app/products-and-services/page.tsx`
- `public/icons/i-icon.svg`
- `data/team.ts`

---

## Design System

**Colors:**
- Primary Orange: `#DC7026`
- Background: `#000000`, `#080808`, `#0a0a0a`
- Text: `#ffffff`, `gray-200/300/400`

**Typography:**
- Display: `var(--font-display)`
- Label: `var(--font-label)`

**Dependencies:**
- Framer Motion, GSAP, Radix UI Tabs

---

## Clarifications Needed

### Item 4 (Company Profile):
1. Specific content to include?
2. Reuse existing or new content?
3. Images/videos to feature?
4. Layout design preferences?

### Item 5 (About Us):
1. Which sections to keep besides team?
2. Keep 32 years stats/video?
3. Keep specializations grid?
4. Keep strategic narrative quote?

### Item 6 (Services Tabs):
1. Horizontal or vertical tabs?
2. Content display location?
3. Include images in content area?
4. Mobile behavior preference?

---

## Implementation Checklist

- [ ] Item 1: Remove navbar border
- [ ] Item 2: Resize logo
- [ ] Item 3: Replace animated "i"
- [ ] Item 4: Company Profile (pending content)
- [ ] Item 5: Restructure About Us (pending clarifications)
- [ ] Item 6: Tab-based services (pending design)

---

**Last Updated:** February 3, 2026  
**Status:** Draft - Pending Clarifications
