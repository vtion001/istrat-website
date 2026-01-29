# GSAP Panel Scroll - Multi-Page Implementation Guide

## 🎯 **Objective**

Apply GSAP panel scroll animation to all pages with each section as an individual panel.

**Date:** January 30, 2026  
**Status:** ⚠️ **In Progress**

---

## 📋 **Pages To Update**

1. ✅ **Homepage** (`/app/page.tsx`) - COMPLETE (5 panels)
2. ⚠️ **About Us** (`/app/about-us/page.tsx`) - In Progress
3. 🔲 **Our Work** (`/app/our-works/page.tsx`) - Pending
4. 🔲 **Our Services** (`/app/products-and-services/page.tsx`) - Pending
5. 🔲 **Contact Us** (`/app/connect-with-us/page.tsx`) - Pending

---

## 🎨 **Implementation Pattern**

### **Step 1: Import Component**
```tsx
import GSAPPanelScroll from "@/components/gsap-panel-scroll"
```

### **Step 2: Wrap Main**
```tsx
<main className="...">
  <GSAPPanelScroll>
    {/* All panels go here */}
  </GSAPPanelScroll>
</main>
```

### **Step 3: Create Panels**
```tsx
{/* Panel 1: First Section */}
<div className="section">
  <div className="section-inner">
    {/* Section content */}
  </div>
</div>

{/* Panel 2: Second Section */}
<div className="section">
  <div className="section-inner">
    {/* Section content */}
  </div>
</div>

{/* Panel N: Last Section - Will not animate */}
<div className="section">
  <div className="section-inner">
    {/* Section content */}
  </div>
</div>
```

---

## 📊 **Homepage Example (COMPLETE)**

✅ **5 Panels:**
1. Hero Section
2. What We Do
3. Bento Grid
4. Highlights
5. Partner Carousel (no animation)

**Code Structure:**
```tsx
<GSAPPanelScroll>
  <div className="section"><div className="section-inner"><Hero /></div></div>
  <div className="section"><div className="section-inner"><WhatWeDo /></div></div>
  <div className="section"><div className="section-inner"><BentoGrid /></div></div>
  <div className="section"><div className="section-inner"><Highlights /></div></div>
  <div className="section"><div className="section-inner"><Partners /></div></div>
</GSAPPanelScroll>
```

---

## 🔧 **Recommended Panel Count Per Page**

### **About Us (Who We Are):**
Suggested panels (5):
1. Hero Section
2. Power Statement ("WE DON'T JUST RUN CAMPAIGNS")
3. Experience & Story (32+ years, Behind the Lens)
4. Specializations
5. Team Section (no animation)

### **Our Work (Portfolio):**
Suggested panels (5-6):
1. Hero Section  
2. Social Media Management
3. Campaigns
4. Event Management
5. Services Grid
6. Featured Works (no animation)

### **Our Services:**
Suggested panels (4-5):
1. Hero Section
2. Service Overview
3. Detailed Services Grid
4. Proof of Impact
5. CTA Section (no animation)

### **Contact Us:**
Suggested panels (3-4):
1. Hero Section
2. Contact Form
3. Map/Location
4. Footer Info (no animation)

---

## ⚠️ **Important Rules**

### **1. Always Wrap:**
- Import `GSAPPanelScroll`
- Wrap all content inside `<GSAPPanelScroll>`
- Close properly

### **2. Panel Structure:**
```tsx
<div className="section">       ← Required class
  <div className="section-inner">  ← Required class
    {/* Your content */}
  </div>
</div>
```

### **3. Last Panel:**
- Automatically excluded from animation (via `.pop()`)
- No coding changes needed
- Just make sure last panel is the one you DON'T want animated

### **4. Nested Sections:**
- Keep existing `<section>` tags inside panel divs
- Don't wrap each subsection - only major content blocks

---

## 📝 **About Us Page Structure (Planned)**

### **Current Sections:**
1. Hero Section (HeroSection component)
2. Power Statement ("WE DON'T JUST RUN CAMPAIGNS")
3. Experience & Story (32+ years with video)
4. Specializations List
5. Team Grid
6. Closing Statement

### **Recommended Panels:**
```tsx
<GSAPPanelScroll>
  {/* Panel 1: Hero */}
  <div className="section">
    <div className="section-inner">
      <HeroSection title="About Us" ... />
    </div>
  </div>

  {/* Panel 2: Power Statement */}
  <div className="section">
    <div className="section-inner">
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-24">
        {/* "WE DON'T JUST RUN CAMPAIGNS" */}
      </section>
    </div>
  </div>

  {/* Panel 3: Experience & Story */}
  <div className="section">
    <div className="section-inner">
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-24">
        {/* 32+ years, Behind the Lens */}
      </section>
    </div>
  </div>

  {/* Panel 4: Specializations */}
  <div className="section">
    <div className="section-inner">
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        {/* Specializations grid */}
      </section>
    </div>
  </div>

  {/* Panel 5: Team Grid + Closing (no animation) */}
  <div className="section">
    <div className="section-inner">
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-24">
        {/* Team grid */}
        {/* Closing statement */}
      </section>
    </div>
  </div>
</GSAPPanelScroll>
```

---

## 🚧 **Current Issue**

The About Us page has partial implementation that created lint errors:
- Missing closing tags
- Incomplete panel structure

**Solution:** Need to properly close all divs and sections.

---

## 🔄 **Next Steps**

1. ⚠️ **Fix About Us page** - Complete panel structure
2. 🔲 **Apply to Our Work page** - 5-6 panels
3. 🔲 **Apply to Our Services page** - 4-5 panels
4. 🔲 **Apply to Contact Us page** - 3-4 panels
5. ✅ **Test all pages** - Verify animations work

---

## 📊 **Expected Results**

### **Per Page:**
- Multiple panels (3-6 depending on content)
- Each major section gets spotlight
- Smooth transitions between sections
- Last section static (no fade)

### **Site-Wide:**
- **Consistent UX** across all  pages
- **Premium feel** throughout
- **Brand cohesion** - same scroll experience
- **Memorable** interactions on every page

---

## ⚙️ **Testing Checklist**

For each page:
- [ ] GSAPPanelScroll imported
- [ ] All sections wrapped in panels
- [ ] Proper closing tags
- [ ] No lint errors
- [ ] Build passes
- [ ] Animations smooth
- [ ] Last panel excluded

---

## 🎯 **Success Criteria**

✅ All 5 pages have GSAP panel scroll  
✅ Each section animates independently  
✅ Smooth transitions throughout  
✅ No build errors  
✅ Consistent brand experience  
✅ Premium scroll feel site-wide  

---

**Current Status:** ⚠️ In Progress (1/5 pages complete)  
**Next Action:** Fix About Us page panel structure  
**Timeline:** ~2 hours for all pages  

---

*"Creating a cinematic scroll experience across the entire website."* ✨
