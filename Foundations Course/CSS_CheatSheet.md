# CSS & Flexbox Study Notes

## Table of Contents
1. [Classes vs IDs](#1-classes-vs-ids)
2. [Selector Grouping & Chaining](#2-selector-grouping--chaining)
3. [Flexbox Fundamentals](#3-flexbox-fundamentals)
4. [Display Properties](#4-display-properties)
5. [Margin/Padding Shorthands](#5-marginpadding-shorthands)
6. [Advanced Layout Patterns](#6-advanced-layout-patterns)
7. [Project Organization](#7-project-organization)

---

### 1. Classes vs IDs
```css
/* classes-and-id.css */
.alert-text { color: red; } /* Reusable */
#title { background-color: red; } /* Unique per page */
```
**Key Differences**:
| Classes | IDs |
|---------|-----|
| Multiple per element | Single per element |
| `.` prefix | `#` prefix |
| Lower specificity | Higher specificity |
| Group styling | Anchor links/JS hooks |

**Multi-class Example**:
```html
<div class="subsection header"> <!-- Space-separated -->
```

---

### 2. Selector Grouping & Chaining
**Grouping**:
```css
/* Shared styles */
.read, .unread {
  color: white;
  background: black;
}

/* Unique styles */
.read { border-left: 3px solid green; }
```
**Chaining**:
```css
.subsection.header { /* Both classes required */
  color: red;
}

.subsection#preview { /* Class + ID combo */
  color: blue;
}
```

---

### 3. Flexbox Fundamentals
```css
/* flexbox.css */
.container {
  display: flex;
  flex-direction: column; /* row(default)/column */
  justify-content: center; /* Main axis (mainly horizontally)*/
  align-items: center; /* Cross axis (vertically)*/
  gap: 18px; /* Space between items */
}
```
**Flex Item Properties**:
```css
.item {
  flex: 1; /* Shorthand for flex-grow/shrink/basis */
  flex-grow: 2; /* Growth ratio */
  flex-shrink: 1; /* Shrink ratio */
  flex-basis: auto; /* Initial size */
}
```
**Key Concepts**:
- `flex: 1` equates to: flex-grow: 1, flex-shrink: 1, flex-basis: 0.
- `flex: auto` equates to: flex-grow: 1, flex-shrink: 1, flex-basis: auto.
- `flex-direction: column` makes `flex-basis` control height
- Use `gap` instead of margins for consistent spacing
- Nest flex containers for complex layouts
- `flex-grow` the number is used as the flex-item’s *“growth factor”*. 
    When we applied flex: 1 to every div inside our container, 
    we were telling every div to grow the same amount. 
    The result of this is that every div ends up the exact same size. 
    If we instead add flex: 2 to just one of the divs, 
    then that div would grow to 2x the size of the others
- `flex-shrink` is similar to `flex-grow`, but sets the *“shrink factor”* of a flex item. 
    flex-shrink only ends up being applied if the size of all flex items is larger than their parent container. 
    For example, if our 3 divs from above had a width declaration like: width: 100px, 
    and .flex-container was smaller than 300px, our divs would have to shrink to fit.
- `flex-basis` sets the *initial size of a flex item*, 
    so any sort of `flex-growing` or `flex-shrinking` starts from that baseline size. 
    The shorthand value defaults to flex-basis: 0%. 
        The reason we had to change it to auto in the flex-shrink 
        example is that with the basis set to 0, 
        those items would ignore the item’s width, 
        and everything would shrink evenly. 
        Using auto as a flex-basis tells the item to check for a width declaration

---

### 4. Display Properties
```css
/* styles.css */
.block-element { display: block; } /* Full width */
.inline-element { display: inline; } /* Content width */
.inline-block { display: inline-block; } /* Mix */
.flex-container { display: flex; }
.grid-container { display: grid; }
```
**When to Use**:
- `block`: Sections, containers
- `inline`: Text elements, icons
- `inline-block`: Buttons, nav items
- `flex`: 1D layouts
- `grid`: Complex 2D layouts

---

### 5. Margin/Padding Shorthands
```css
/* 4 values: top right bottom left */
margin: 10px 20px 30px 40px;

/* 3 values: top (left-right) bottom */
padding: 10px 20px 30px;

/* 2 values: (top-bottom) (left-right) */
margin: 20px 40px;

/* 1 value: All sides */
padding: 15px;
```

---

### 6. Advanced Layout Patterns
**Header Layout**:
```css
/* stylesheet.css */
header {
  display: flex;
  justify-content: space-between;
  padding: 10px 200px; /* Vertical Horizontal */
  background: #1f2937;
}

nav {
  display: flex;
  gap: 20px; /* Modern spacing */
}
```
**Card Grid**:
```css
.pics {
  display: flex;
  justify-content: center;
  gap: 50px;
}

.pics img {
  width: 250px;
  height: 250px;
  border: 10px solid #3882f6;
  border-radius: 10px;
}
```

---

### 7. Project Organization
**File Structure**:
```bash
CSS/
├── flexbox.css
├── styles.css
├── stylesheet.css
└── classes-and-id.css
```
**Best Practices**:
1. Use semantic class names (`.hero-section`, not `.part1`)
2. Group related styles with comment headers:
```css
/*========== HEADER ========*/
/*========== MAIN CONTENT ========*/
```
3. Maintain consistent units (px vs rem)
4. Use CSS variables for theme colors:
```css
:root {
  --primary-blue: #3882f6;
  --dark-bg: #1f2937;
}
```

**Debugging Tips**:
```css
* { outline: 2px solid red; } /* Visual layout check */
```
```bash
npm install -g css-validator # Command line validation
```

--- 

**Key Takeaways**:
- Avoid ID selectors for styling - use classes
- Combine flex properties for responsive layouts
- Use `gap` instead of margin hacks
- Organize CSS with logical sections
- Prefer relative units (rem/%) for responsiveness
