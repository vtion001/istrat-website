# GSAP Panel Scroll Animation Implementation

## 🎯 **Overview**

Implementing a stunning GSAP ScrollTrigger panel-based scroll animation on the Our Vision page (homepage) with scale and fade effects.

**Date:** January 30, 2026

---

## ✨ **Animation Description**

The animation creates a modern, cinematic scroll experience where:

1. **Each section becomes a "panel"** that pins to the viewport
2. **As you scroll**, content slides up within the panel ("fake scroll")
3. **When a panel is complete**, it scales down to 0.7 and fades to 50% opacity
4. **Finally fades out completely** as the next panel comes in

This creates a **magazine-style, editorial scroll experience** perfect for a hero brand.

---

## 📦 **Dependencies Installed**

```bash
npm install gsap
```

**GSAP (GreenSock Animation Platform)** - Industry-standard animation library
- Includes ScrollTrigger plugin for scroll-based animations
- Provides smooth, performant animations
- Works seamlessly with React/Next.js

---

## 📁 **Files Created**

### **1. `/components/gsap-panel-scroll.tsx`**

**Purpose:** Reusable GSAP scroll animation wrapper component

**Key Features:**
- Registers ScrollTrigger plugin
- Finds all `.section` panels
- Calculates "fake scroll" for tall content
- Creates timeline animations for each panel
- Handles cleanup on unmount

**Props:**
- `children` - React nodes to wrap
- `className` - Optional container class

**Usage:**
```tsx
<GSAPPanelScroll>
  <div className="section">
    <div className="section-inner">
      {/* Your content */}
    </div>
  </div>
</GSAPPanelScroll>
```

---

## 🎨 **Animation Breakdown**

### **Pin & Fake Scroll:**
```js
// If content is taller than viewport, we "fake scroll" it
if (fakeScrollRatio) {
  tl.to(innerpanel, {
    yPercent: -100,
    y: window.innerHeight,
    duration: calculated,
    ease: "none"
  })
}
```

### **Scale & Fade Out:**
```js
// Scale down to 70% and fade to 50%
tl.fromTo(panel, 
  { scale: 1, opacity: 1 }, 
  { scale: 0.7, opacity: 0.5, duration: 0.9 }
)
// Then fade out completely
.to(panel, { opacity: 0, duration: 0.1 })
```

---

## 🏗️ **Implementation Structure**

### **Homepage Panels:**

```tsx
<GSAPPanelScroll>
  {/* Panel 1: Hero */}
  <div className="section">
    <div className="section-inner">
      <Hero />
    </div>
  </div>

  {/* Panel 2: What We Do */}
  <div className="section">
    <div className="section-inner">
      <section className="...">
        {/* Content */}
      </section>
    </div>
  </div>

  {/* Panel 3: Bento Grid + Highlights + Partners */}
  <div className="section">
    <div className="section-inner">
      <BentoGrid />
      {/* More content */}
    </div>
  </div>
</GSAPPanelScroll>
```

---

## ⚙️ **Technical Details**

### **Panel Structure:**
- **`.section`** - Outer panel container (gets pinned & animated)
- **`.section-inner`** - Inner content container (can fake-scroll if needed)

### **ScrollTrigger Config:**
```js
scrollTrigger: {
  trigger: panel,           // Element to watch
  start: "bottom bottom",   // Start when panel bottom hits viewport bottom
  end: "bottom top",        // End when panel bottom hits viewport top
  pinSpacing: false,        // Don't add extra space
  pin: true,                // Pin the panel
  scrub: true              // Sync animation with scroll
}
```

### **Fake Scroll Calculation:**
```js
// panelHeight = content height
// windowHeight = viewport height
// difference = how much taller content is than viewport

const fakeScrollRatio = difference > 0 
  ? difference / (difference + windowHeight) 
  : 0

// Add margin to create space for fake scrolling
if (fakeScrollRatio) {
  panel.style.marginBottom = panelHeight * fakeScrollRatio + "px"
}
```

---

## 🎬 **Animation Timeline**

For each panel:

1. **Pin** the panel when it hits the viewport
2. **Fake scroll** content if taller than viewport (yPercent: -100)
3. **Scale down** from 1 to 0.7 (duration: 0.9)
4. **Fade** from opacity 1 to 0.5 (duration: 0.9)
5. **Fade out** completely from 0.5 to 0 (duration: 0.1)
6. **Unpin** and let next panel come in

---

## ✅ **Expected Visual Effect**

### **Scroll Behavior:**
1. Hero section fills screen
2. Scroll → Hero sticks, content scrolls
3. Continue scroll → Hero scales down & fades
4. Continue scroll → Hero fades out completely
5. What We Do section comes in
6. Repeat for each section

### **Final Panel:**
- Last panel excluded from scale/fade (calls `.pop()`)
- Allows normal scroll-out behavior
- Prevents awkward ending

---

## 🎨 **Why This Animation?**

### **Brand Alignment:**
- **Cinematic** - Magazine-style editorial feel
- **Premium** - Smooth, sophisticated transitions
- **Modern** - Industry-leading scroll experience
- **Intentional** - Deliberate, not playful
- **Engaging** - Encourages scroll exploration

### **User Experience:**
- **Clear Sections** - Each panel is distinct
- **Smooth Transitions** - No jarring jumps
- **Content Focus** - Scaling removes distractions
- **Memory** - Memorable scroll experience

---

## 🔧 **Configuration**

### **Adjustment Options:**

**Scale Amount:**
```js
// Current: 0.7 (scales to 70%)
{ scale: 0.7, opacity: 0.5 }

// More dramatic: 0.5
// More subtle: 0.8
```

**Fade Timing:**
```js
// Current: 0.9 scale/fade, 0.1 final fade
duration: 0.9  // Scale/fade together
duration: 0.1  // Final fadeout

// Can adjust ratio for different feel
```

**Scroll Speed:**
```js
scrub: true    // Instant sync with scroll
scrub: 0.5     // 0.5s delay (smoother)
scrub: 1       // 1s delay (very smooth)
```

---

## 🐛 **Current Status**

**Installation:** ✅ Complete (GSAP installed)  
**Component Created:** ✅ Complete  
**Homepage Integration:** ⚠️ In Progress  

**Issue:** Need to properly close all panel divs  
**Next Step:** Ensure all `.section` and `.section-inner` tags are properly closed

---

## 📝 **Notes**

### **Performance:**
- GSAP is highly optimized
- Uses GPU acceleration
- Minimal impact on page load
- Cleanup on unmount prevents memory leaks

### **Compatibility:**
- Works on all modern browsers
- Mobile-friendly (touch scroll)
- Respects reduced motion preferences (can add)

### **Accessibility:**
- Content remains accessible
- Keyboard navigation works
- Screen readers unaffected
- Can add `prefers-reduced-motion` check

---

## 🚀 **Next Steps**

1. ✅ Install GSAP
2. ✅ Create component
3. ⚠️ Fix panel structure in homepage
4. 🔲 Test scroll behavior
5. 🔲 Adjust timing/scaling if needed
6. 🔲 Add reduced motion support
7. 🔲 Document final implementation

---

**Status:** ⚠️ In Progress  
**Complexity:** High (7/10)  
**Impact:** High (Transforms scroll UX)  
**Timeline:** ~30 minutes to completion  

---

*"Creating a cinematic scroll experience worthy of a hero brand."* ✨
