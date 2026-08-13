# TASK [TASK-ID] — [TASK TITLE]

## Task Metadata
- **Task ID**: `[DOMAIN]-[NUMBER]` (e.g. `WEB-001`, `HOME-004`)
- **Title**: [Task Title]
- **Domain**: [governance / homepage / header / footer / product / collection / cart / qa]
- **Design References**: `docs/design-references/[domain]/[TASK-ID]/`
- **Status**: [DRAFT / IN PROGRESS / QA REVIEW / COMPLETE]
- **Git Branch**: `[branch-name]`
- **Git Commit**: `[commit message]`
- **Git Commit Hash**: `[hash]`
- **Git Push Status**: [PENDING / PUSHED]

---

## 1. Purpose & Objective
[Brief description of why this task is being undertaken and what business or technical goal it fulfills.]

## 2. Current State
[Technical description of the codebase or feature state prior to implementation.]

## 3. Target State
[Technical description of the desired codebase or feature state post-implementation.]

## 4. Dependencies
[Pre-requisite tasks, theme assets, or platform features required before starting.]

---

## 5. Technical Requirements

### Design Requirements
- [Color tokens, visual layout, typography specs, aesthetic boundaries]

### Data Requirements
- [Shopify objects, section schema settings, block definitions, metafields]

### Liquid Requirements
- [Liquid template logic, loops, conditionals, 3-tier image fallback priority]

### CSS Requirements
- [Scoped CSS rules, design tokens, aspect ratios, animation properties]

### Responsive Requirements
- [Desktop 4-col / split, Tablet 2-col, Mobile single column, touch target sizes]

### Accessibility Requirements
- [WCAG 2.1 AA contrast, keyboard navigation, focus indicators, alt text]

### Performance Requirements
- [Native image_tag, lazy loading, zero layout shift, minimal JS]

---

## 6. Scope & File Architecture

### Files Created
- `[path/to/created/file]`

### Files Modified
- `[path/to/modified/file]`

---

## 7. Implementation Plan & Steps
1. [Step 1 description]
2. [Step 2 description]
3. [Step 3 description]

---

## 8. Verification Plan & QA Matrix
- [ ] **Level 1: Static Code Validation**
- [ ] **Level 2: Liquid & Schema JSON Validation**
- [ ] **Level 3: Desktop Visual QA (>= 1200px)**
- [ ] **Level 4: Tablet Visual QA (750px - 1199px)**
- [ ] **Level 5: Mobile Visual QA (< 750px)**
- [ ] **Level 6: Accessibility Sanity**
- [ ] **Level 7: Shopify Theme Editor Compatibility**
- [ ] **Level 8: Live Preview Verification**

---

## 9. Rollback Plan
[Steps required to revert changes safely if critical regressions are detected.]

## 10. Documentation Updates
- [ ] Master Index (`docs/00_MASTER_INDEX.md`) updated
- [ ] Changelog (`docs/CHANGELOG.md`) updated

---

## 11. Completion Gate & Final Sign-Off
- [ ] Code committed to Git
- [ ] Branch pushed to remote origin
- [ ] Commit hash recorded
- [ ] Task status updated to COMPLETE
