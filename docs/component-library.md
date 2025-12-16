# Component Library

This document details the key reusable components used in the iStrat website.

## Core Components

### Hero
**Path**: `components/hero.tsx`
The primary visual entry point on the homepage.
- **Features**: 
  - Dynamic background elements (videos or images).
  - Animated title and entrance text using Framer Motion.
  - "Explore" CTA button.

### BentoGrid
**Path**: `components/bento-grid.tsx`
A grid layout component used to display high-level service categories or highlights in a unified bento-box style.

### ClientTicker
**Path**: `components/client-ticker.tsx`
An infinite scrolling ticker that displays client logos.
- **Usage**: Placed near the footer or main content areas to show social proof.

### FloatingNavbar
**Path**: `components/floating-navbar.tsx`
The main navigation bar.
- **Behavior**: Sticks to the top of the viewport or floats depending on scroll position.
- **Links**: Home, About, Services, Works, Connect.

## Utility Components

### PageTransition
**Path**: `components/page-transition.tsx`
Wraps page content to provide smooth fade-in/fade-out animations when navigating between routes.

### ThemeProvider
**Path**: `components/theme-provider.tsx`
Manages the application's color theme (Dark/Light mode), typically wrapping the entire app in `layout.tsx`.
