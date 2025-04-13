# HTML & CSS Study Notes

## Table of Contents
1. [Basic HTML Structure](#1-basic-html-structure)
2. [Linking External Resources](#2-linking-external-resources)
3. [HTML Elements & Attributes](#3-html-elements--attributes)
4. [Relative vs. Absolute Paths](#4-relative-vs-absolute-paths)
5. [CSS Basics](#5-css-basics)
6. [Flexbox Layout](#6-flexbox-layout)
7. [Semantic HTML](#7-semantic-html)
8. [JavaScript Integration](#8-javascript-integration)
9. [Best Practices & Pitfalls](#9-best-practices--pitfalls)
10. [HTML Images and Multimedia](#10-html-images-and-multimedia)
11. [Internal Navigation and Site Structure](#11-internal-navigation-and-site-structure)
12. [Common HTML Mistakes and Validation](#12-common-html-mistakes-and-validation)
13. [Accessibility Considerations](#13-accessibility-considerations)
14. [Responsive Design with Meta Viewport](#14-responsive-design-with-meta-viewport)
15. [Working with Buttons and Interactive Elements](#15-working-with-buttons-and-interactive-elements)
16. [Project Structure Best Practices](#16-project-structure-best-practices)
17. [Comments and Code Readability](#17-comments-and-code-readability)
18. [Security in Links](#18-security-in-links)
19. [Internal vs. External CSS/JavaScript](#19-internal-vs-external-cssjavascript)
20. [Advanced Flexbox Concepts](#20-advanced-flexbox-concepts)
21. [Semantic HTML Deep Dive](#21-semantic-html-deep-dive)
22. [List Styling and Navigation](#22-list-styling-and-navigation)
23. [Advanced Linking Techniques](#23-advanced-linking-techniques)
24. [Script Loading Strategies](#24-script-loading-strategies)
25. [Image Optimization](#25-image-optimization)
26. [Form Handling Basics](#26-form-handling-basics)
27. [CSS Specificity Hierarchy](#27-css-specificity-hierarchy)
28. [Debugging Techniques](#28-debugging-techniques)
29. [Performance Optimization](#29-performance-optimization)
30. [Version Control Basics](#30-version-control-basics)

---

### 1. Basic HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- Content goes here -->
</body>
</html>
```
- **Key Components**:
  - `<!DOCTYPE html>`: Declares HTML5.
  - `<html lang="en">`: Root element with language specification.
  - `<head>`: Contains meta-information and resource links.
  - `<meta>` tags: Define character set and responsive viewport.
  - `<body>`: Holds visible content.

---

### 2. Linking External Resources
#### CSS:
```html
<!-- External CSS -->
<link rel="stylesheet" href="../../CSS/styles.css">

<!-- Internal CSS (commented out) -->
<!--
<style>
  div { color: white; background-color: black; }
</style>
-->
```
- `rel="stylesheet"`: Required attribute for CSS links.
- Use external CSS for better maintainability.

#### JavaScript:
```html
<!-- External JS -->
<script src="../../JAVA SCRIPT/script.js"></script>

<!-- Internal JS (commented out) -->
<!--
<script>
  console.log("Hello World!");
</script>
-->
```

---

### 3. HTML Elements & Attributes
#### Common Elements:
```html
<!-- Headings -->
<h1>Hello World 1</h1>
<h2><strong>Hello World 2</strong></h2> <!-- Bold -->
<h3><em>Hello World 3</em></h3>        <!-- Italic -->

<!-- Lists -->
<ul>
  <li>Unordered List Item</li>
</ul>
<ol>
  <li>Ordered List Item</li>
</ol>

<!-- Links -->
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  External Link
</a>
```
- **Attributes**:
  - `target="_blank"`: Opens link in a new tab.
  - `rel="noopener noreferrer"`: Security measure for external links.

---

### 4. Relative vs. Absolute Paths
- **Relative Paths**:
  - `./about.html`: File in the same directory.
  - `../images/img.jpg`: Navigate up one directory.
- **Absolute Paths**:
  - `https://www.theodinproject.com/about`

---

### 5. CSS Basics
- **Selectors**:
  - Class: `.class-name`
  - ID: `#id-name`
- **Inline Styles** (avoid when possible):
  ```html
  <button style="color: blueviolet;">OWOWOWO</button>
  ```

---

### 6. Flexbox Layout
```html
<div class="container">
  <div class="one"></div>
  <div class="two"></div>
  <div class="three"></div>
</div>
```
- Use `display: flex` in CSS to create flexible layouts.
- Nest flex containers for complex designs.

---

### 7. Semantic HTML
```html
<header>
  <nav>...</nav>
</header>
<main>
  <section class="part1">...</section>
</main>
<footer>...</footer>
```
- **Why Use Semantic Tags**:
  - Improves accessibility.
  - Enhances SEO.
  - Clarifies structure.

---

### 8. JavaScript Integration
- Place `<script>` tags at the end of `<body>` for performance.
- Example:
  ```html
  <script src="script.js"></script>
  ```

---

### 9. Best Practices & Pitfalls
1. **Comments**:
   ```html
   <!-- This is a comment -->
   ```
2. **Typos**:
   - Fix malformed tags like `</buttton>` → `</button>`.
3. **Security**:
   - Always use `rel="noopener noreferrer"` with `target="_blank"`.
4. **File Organization**:
   - Separate CSS/JS/images into dedicated folders (e.g., `../../CSS/`).
5. **Alt Text**:
   ```html
   <img src="img.jpg" alt="Descriptive text">
   ```

--- 

**Next Steps**:
- Practice creating nested flexbox layouts.
- Experiment with relative linking between pages.
- Convert inline styles to external CSS classes.
  
---

### 10. HTML Images and Multimedia
```html
<!-- From about.html -->
<img src="../images/img.jpg" alt="THE MOOOOON HAUNTS YOU" height="250" width="250">
```
- **Key Attributes**:
  - `alt`: Provides descriptive text for screen readers and if images fail to load.
  - `height`/`width`: Specify dimensions (use CSS for responsive scaling instead).
- **Best Practices**:
  - Always include meaningful `alt` text for accessibility.
  - Use relative paths for internal images (`../` to navigate directories).

---

### 11. Internal Navigation and Site Structure
```html
<!-- From Odin Recipes -->
<a href="./recipies/pizza.html">Pizza</a>
```
- **Directory Structure**:
  - `./` refers to the current directory.
  - `../` moves up one directory level.
- **Example Structure**:
  ```
  project-root/
  ├── index.html
  ├── pages/
  │   └── about.html
  └── images/
      └── img.jpg
  ```

---

### 12. Common HTML Mistakes and Validation
#### Mistake in Provided Code:
```html
<dev class="part1">...</dev> <!-- INCRECT: Should be <div> -->
```
- **Fix**:
  ```html
  <div class="part1">...</div>
  ```
- **Validation Tips**:
  - Use [W3C Validator](https://validator.w3.org/) to check for typos.
  - Avoid inventing tags like `<dev>`; stick to standard HTML elements.

---

### 13. Accessibility Considerations
```html
<!-- Semantic tags improve accessibility -->
<header>
  <nav>...</nav>
</header>
<main>...</main>
<footer>...</footer>
```
- **Key Practices**:
  - Use heading hierarchy (`h1` → `h2` → `h3`).
  - Add `alt` to images.
  - Use ARIA roles when necessary.

---

### 14. Responsive Design with Meta Viewport
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
- **Why It Matters**:
  - Ensures content scales properly on mobile devices.
  - `width=device-width`: Matches screen width.
  - `initial-scale=1.0`: Sets default zoom level.

---

### 15. Working with Buttons and Interactive Elements
```html
<button class="help">Me Too!</button>
```
- **Buttons vs. Links**:
  - Use `<button>` for actions (e.g., form submission).
  - Use `<a>` for navigation.
- **Styling**:
  - Style buttons with CSS classes (avoid inline styles).

---

### 16. Project Structure Best Practices
- **Organize Files**:
  ```
  CSS/
    └── styles.css
  JAVA SCRIPT/
    └── script.js
  imgs/
    └── spider.jpeg
  ```
- **Naming Conventions**:
  - Use lowercase filenames (e.g., `about.html`, not `About.HTML`).
  - Avoid spaces in filenames (use hyphens: `rock-paper-scissors.js`).

---

### 17. Comments and Code Readability
```html
<!-- From index.html -->
<!-- href: specifies the destination link -->
<!-- rel: describes the relation between documents -->
```
- **Purpose**:
  - Explain complex logic or attributes.
  - Temporarily disable code (e.g., `<!-- <p>Test</p> -->`).
- **Tip**: Keep comments concise and relevant.

---

### 18. Security in Links
```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">External Link</a>
```
- **Why `noopener noreferrer`**:
  - Prevents the new page from accessing the `window.opener` property.
  - Enhances security against phishing attacks.

---

### Final Project Exercise
**Build a Multi-Page Website**:
1. Create a `recipes` directory with `pizza.html` and `burger.html`.
2. Link pages using relative paths.
3. Add images with proper `alt` text.
4. Style buttons and links with external CSS.
5. Validate your HTML using the W3C validator.

**Example Structure**:
```html
<!-- pizza.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Pizza Recipe</title>
    <link rel="stylesheet" href="../../CSS/styles.css">
</head>
<body>
    <h1>Margherita Pizza</h1>
    <img src="../../imgs/pizza.jpg" alt="Fresh margherita pizza">
    <a href="../index.html">Back to Home</a>
</body>
</html>
```

--- 

**Review Checklist**:
- [ ] All links use `rel="noopener noreferrer"` where needed.
- [ ] Images include descriptive `alt` text.
- [ ] No typos in tags (e.g., `<div>`, not `<dev>`).
- [ ] CSS/JS files are organized in dedicated folders.
- [ ] Semantic tags (`<header>`, `<nav>`) are used appropriately.

---

### 19. Internal vs. External CSS/JavaScript
#### When to Use Each:
```html
<!-- Internal (for quick prototypes) -->
<style>
  body { margin: 0; }
</style>

<!-- External (production-ready) -->
<link rel="stylesheet" href="styles.css">
```
- **Best Practices**:
  - Use external files for code reusability across pages
  - Internal styles/scripts only for page-specific tweaks
  - Never mix inline styles with external CSS

---

### 20. Advanced Flexbox Concepts
From `flexbox.html`:
```html
<div class="container">
  <div class="three"> 
    <div class="item1"></div>
    <div class="item2"></div>
  </div>
</div>
```
**Key CSS Properties**:
```css
.container {
  display: flex;
  justify-content: center; /* Horizontal alignment */
  align-items: stretch; /* Vertical alignment */
  flex-direction: row-reverse; /* Layout direction */
}
```
- **Nested Flex Containers**: Create complex layouts by making child elements flex containers
- **Flexbox Cheat Sheet**:
  - `flex-wrap: wrap` for responsive item wrapping
  - `gap: 20px` for consistent spacing between items

---

### 21. Semantic HTML Deep Dive
```html
<!-- From index.html -->
<main>
  <section aria-label="Hero section">  <!-- ARIA for accessibility -->
    <article>...</article>
  </section>
</main>
```
**Underused Semantic Tags**:
- `<figure>` + `<figcaption>` for images with captions
- `<time datetime="2024-03-15">March 15</time>` for machine-readable dates
- `<mark>` for highlighted text

---

### 22. List Styling and Navigation
From recipes index:
```html
<ul> 
  <li><a href="./recipies/pizza.html">Pizza</a></li>
</ul>
```
**CSS Techniques**:
```css
/* Remove default list styling */
ul {
  list-style: none;
  padding: 0;
}

/* Create horizontal nav */
li {
  display: inline-block;
  margin: 0 15px;
}
```

---

### 23. Advanced Linking Techniques
```html
<!-- Link to download file -->
<a href="menu.pdf" download="Restaurant_Menu.pdf">Download PDF</a>

<!-- Email link with subject -->
<a href="mailto:contact@example.com?subject=Website%20Inquiry">Email Us</a>

<!-- Anchor links -->
<a href="#section2">Jump to Section 2</a>
<section id="section2">...</section>
```

---

### 24. Script Loading Strategies
```html
<!-- Async vs Defer -->
<script src="script.js" async></script> <!-- For independent scripts -->
<script src="analytics.js" defer></script> <!-- For DOM-dependent scripts -->
```
- **Loading Order**:
  - `async`: Loads parallel to HTML parsing, executes immediately when ready
  - `defer`: Loads parallel but executes after HTML parsing completes

---

### 25. Image Optimization
```html
<!-- Responsive image example -->
<img src="spider.jpeg" 
     srcset="spider-400w.jpeg 400w,
             spider-800w.jpeg 800w"
     sizes="(max-width: 600px) 400px,
            800px"
     alt="Spider-Man illustration">
```
**Best Practices**:
- Use WebP format for modern browsers
- Compress images with tools like Squoosh
- Implement lazy loading: `<img loading="lazy" ...>`

---

### 26. Form Handling Basics
```html
<form action="/submit" method="POST">
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <fieldset>
    <legend>Preferred Hero:</legend>
    <input type="radio" id="spider" name="hero">
    <label for="spider">Spider-Man</label>
  </fieldset>
  
  <button type="submit">Join</button>
</form>
```

---

### 27. CSS Specificity Hierarchy
From conflicting class/id example:
```html
<h1 class="test">Hello</h1>
<h2 id="test">Hello</h2>
```
**Specificity Order**:
1. Inline styles (`style=""`)
2. IDs (`#test`)
3. Classes (`.test`), attributes, pseudo-classes
4. Elements (`h1`), pseudo-elements

---

### 28. Debugging Techniques
**Common Issues in Provided Code**:
1. Malformed closing tags (`</buttton>` → `</button>`)
2. Incorrect path references (`../../CSS/project1/stylesheet.css`)
3. Missing `alt` attributes in some images
4. Overuse of generic `<div>` instead of semantic tags

**Debugging Checklist**:
- Validate HTML at [W3C Validator](https://validator.w3.org/)
- Check browser console for errors (F12)
- Use CSS border debugging: `* { border: 1px solid red; }`

---

### 29. Performance Optimization
**Critical Rendering Path**:
1. Minify CSS/JS files
2. Optimize hero images with `loading="eager"`
3. Use browser caching headers
4. Implement code splitting for large JS files

---

### 30. Version Control Basics
**Sample .gitignore**:
```
# Ignore OS files
.DS_Store

# Ignore build files
/node_modules/
/dist/

# Ignore environment files
.env
```

---

**Final Project Enhancement**:
1. Convert all `<dev>` tags to proper semantic HTML
2. Implement responsive images using srcset
3. Add ARIA labels to navigation elements
4. Create print stylesheet for recipe pages
5. Set up basic SEO meta tags

```html
<!-- SEO Example -->
<meta name="description" content="Marvel fan site with character profiles and game strategies">
<meta property="og:image" content="https://yoursite.com/imgs/og-image.jpg">
```