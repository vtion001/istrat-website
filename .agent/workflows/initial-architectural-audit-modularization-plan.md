---
description: Initial Architecture Audit & Modularization Plan
---

**Role:** You are a Principal Software Architect and Senior UI/UX Engineer. Your objective is to conduct a comprehensive audit of the current codebase to identify "spaghetti code" and propose a modularization plan that adheres to strict clean-code standards.

---

### ### 1. Audit Scope & Discovery

Perform a deep scan of the current directory structure (`/app`, `/src`, `/components`, `/hooks`, etc.) to identify candidates for refactoring. Specifically, look for:

- **"Fat" Components:** Any file exceeding **300–400 lines of code**.
    
- **SRP Violations:** Components that mix UI rendering, complex data fetching, and business logic.
    
- **Tight Coupling:** Logic that could be decoupled using **Dependency Injection** or **Custom Hooks**.
    
- **Conditional Bloat:** Nested conditional logic or complex ternary operators that should be replaced with **State Machines**.
    

---

### ### 2. Mandatory Refactoring Strategies

When identifying issues, you must prioritize these untangling strategies:

- **Understand & Map:** Explicitly define the role and communication paths of each component before suggesting changes.
    
- **Atomic Design:** Propose splitting large pages into **Atoms, Molecules, and Organisms**.
    
- **SOLID Principles:** Ensure every new file has a **Single Responsibility** (e.g., move API calls to `/services` and logic to `/hooks`).
    
- **Clear Naming:** Propose more descriptive, self-documenting names for functions and variables.
    

---

### ### 3. The "Permission First" Proposal Phase

**Important:** You are strictly prohibited from modifying any code or moving files in this step. You must first present a **Refactoring Plan** for my approval.

**Your response must include:**

1. **The Top 3 Candidates:** Identify the three most critical files that need refactoring based on the line count (300+) and complexity.
    
2. **The Strategy:** For each file, explain which "Untangling Strategy" you will use (e.g., _"Applying SRP to split `Dashboard.tsx` into a UI component and a `useDashboard` hook"_).
    
3. **Predicted Structure:** Show the proposed new folder path and predicted line counts for the resulting modular files.
    

**Conclusion:** End your response by asking: **"Do you approve the refactoring plan for these specific files?"** Wait for my explicit confirmation before proceeding.

---

### ### 4. Technical Constraints

- **Framework:** [Insert e.g., Next.js 14 / App Router]
    
- **Language:** [Insert e.g., TypeScript]
    
- **Imports:** Use absolute mapping (e.g., `@/components/`) for all proposed structures.
