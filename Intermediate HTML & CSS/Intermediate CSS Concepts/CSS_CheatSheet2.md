# CSS Study Notes

This document explains various CSS selectors, combinators, pseudo-classes, pseudo-elements, and attribute selectors with in-line comments. The notes are designed to help you understand what each section of the code does and how to use these features when writing CSS.

---
## Table of Contents

1. [Descendant Selector](#1-descendant-selector)
2. [Combinators](#2-combinators)
   - [Child Combinator](#21-child-combinator)
   - [Adjacent Sibling Combinator](#22-adjacent-sibling-combinator)
   - [General Sibling Combinator](#23-general-sibling-combinator)
3. [Pseudo-classes](#3-pseudo-classes)
   - [Example: `:first-child`](#31-example-first-child)
   - [Other Common Pseudo-classes](#32-other-common-pseudo-classes)
4. [Styling Links](#4-styling-links)
5. [Global and Structural Pseudo-classes](#5-global-and-structural-pseudo-classes)
   - [Global Variables](#51-global-variables)
   - [Structural Pseudo-classes](#52-structural-pseudo-classes)
6. [Pseudo-elements](#6-pseudo-elements)
   - [Common Pseudo-elements](#61-common-pseudo-elements)
   - [`::before` and `::after`](#62-before-and-after)
7. [Attribute Selectors](#7-attribute-selectors)
   - [Basic Attribute Selectors](#71-basic-attribute-selectors)
   - [Advanced Attribute Selectors](#72-advanced-attribute-selectors)
8. [Background Properties](#8-background-properties)
   - [Basic Background Color](#81-basic-background-color)
   - [Background Image with Repeat Style](#82-background-image-with-repeat-style)
   - [Background with Border Box and Color](#83-background-with-border-box-and-color)
   - [Single Image, Centered and Scaled](#84-single-image-centered-and-scaled)
   - [Global Background Values](#85-global-background-values)
9. [Box Shadow](#9-box-shadow)
   - [Keyword and Default Values](#91-keyword-and-default-values)
   - [Box Shadow with Two Values](#92-box-shadow-with-two-values)
   - [Box Shadow with Three Values](#93-box-shadow-with-three-values)
   - [Box Shadow with Four Length Values](#94-box-shadow-with-four-length-values)
   - [Inset Box Shadow](#95-inset-box-shadow)
   - [Multiple Box Shadows](#96-multiple-box-shadows)
   - [Global Box Shadow Values](#97-global-box-shadow-values)
10. [Overflow Properties](#10-overflow-properties)
    - [Basic Overflow Keywords](#101-basic-overflow-keywords)
    - [Global Overflow Values](#102-global-overflow-values)
    - [Text Overflow with Ellipsis](#103-text-overflow-with-ellipsis)
11. [Color and Background with Functions](#11-color-and-background-with-functions)
12. [Sizing Functions: calc(), min(), max(), and clamp()](#12-sizing-functions-calcm-min-max-and-clamp)
    - [calc()](#121-calc)
    - [min()](#122-min)
    - [max()](#123-max)
    - [clamp()](#124-clamp)
13. [Positioning](#13-positioning)
    - [Understanding Static vs. Relative vs. Others](#131-understanding-static-vs-relative-vs-others)
14. [CSS Custom Properties (Variables) and Media Queries](#14-css-custom-properties-variables-and-media-queries)
    - [Custom Properties and the var() Function](#141-custom-properties-and-the-var-function)
    - [Scope of Custom Properties](#142-scope-of-custom-properties)
    - [Media Queries and prefers-color-scheme](#143-media-queries-and-prefers-color-scheme)
    - [Additional Notes on the `@media` Function](#144-additional-notes-on-the-media-function)

## 1. Descendant Selector

```css
/* 
  Select all the child and grand-child <div> elements inside of <main>.
  Explanation:
  - "main div" selects all <div> elements that are descendants of <main> at any depth.
  - This includes both direct children and any nested (grand-child, etc.) div elements.
*/
main div {
    /* Our cool CSS */
}
```

---

## 2. Combinators

Below are a few combinator examples in CSS:

- **`>` (Child Combinator):** Selects only direct children.
- **`+` (Adjacent Sibling Combinator):** Selects the element immediately following the first element (on the same level).
- **`~` (General Sibling Combinator):** Selects all siblings following the first element (on the same level).

---

### 2.1 Child Combinator

```css
/* 
  Child selector example: "main>div"
  Explanation:
  - This selector selects only the <div> elements that are direct children of <main>.
  - Typically used to style elements with the class "child" that are directly under <main>.
*/
main>div {
    /* Our cool CSS */
}
```

```css
/* 
  Further Descendant Selection: "main>div>div"
  Explanation:
  - This selector targets <div> elements that are direct children of a <div> element,
    which in turn is a direct child of <main>.
  - Use it to specifically style nested elements like a "grand-child" div.
*/
main>div>div {
    /* More cool CSS */
}
```

---

### 2.2 Adjacent Sibling Combinator

```css
/* 
  Adjacent Sibling Combinator: "+"
  Explanation:
  - This selector targets an element that is immediately following another element on the same level.
  - For example, if an element with the class "group1" is immediately followed by a <div>,
    that <div> will be selected.
*/
.group1+div {
    /* Our cool CSS */
}
```

```css
/* 
  Chaining the adjacent sibling combinator:
  Explanation:
  - ".group1+div+div" selects the <div> that immediately follows the first adjacent sibling.
  - This will target, for instance, the third <div> if it is directly after a ".group1" element.
*/
.group1+div+div {
    /* More cool CSS */
}
```

---

### 2.3 General Sibling Combinator

```css
/* 
  General Sibling Combinator: "~"
  Explanation:
  - This selector targets all sibling elements following the specified element on the same level.
  - For example, ".group1~div" selects all <div> siblings that come after the element with the class "group1".
  - This might include, for example, the 2nd and 3rd child divs if they are siblings of ".group1".
*/
.group1~div {
    /* Our cool CSS */
}
```

---

## 3. Pseudo-classes

Pseudo-classes are used to define a special state of an element.

### 3.1 Example: `:first-child`

```css
/* 
  :first-child pseudo-class
  Explanation:
  - This selector targets the first child element of a parent.
  - Here, in an <article>, the first <p> element will be styled.
*/
article p:first-child {
    font-size: 120%;
    font-weight: bold;
}
```

### 3.2 Other Common Pseudo-classes

Below are some common pseudo-classes and their use cases:

- **`:focus`**:  
  Applies to an element that is currently selected (e.g., via keyboard or mouse). It is useful for accessibility and highlighting form elements when they are active.

- **`:hover`**:  
  Applies when the user places the mouse pointer over an element. This is great for indicating interactability, such as on buttons or links.

- **`:active`**:  
  Applies while an element is being clicked. It provides tactile feedback, such as changing the appearance of buttons during a click.

---

## 4. Styling Links

CSS offers pseudo-classes for styling hyperlinks based on their state.

```css
/* 
  This rule applies to all links on the page.
*/
a {
    text-decoration: underline;
}

/* 
  Styling for unvisited links.
*/
a:link {
    color: blue;
}

/* 
  Styling for visited (clicked) links.
*/
a:visited {
    color: purple;
}
```

---

## 5. Global and Structural Pseudo-classes

### 5.1 Global Variables

- **`:root`**  
  Typically used to define global CSS variables or rules available everywhere in the document.

### 5.2 Structural Pseudo-classes

- **`:first-child`** and **`:last-child`**  
  Match the first or last sibling in a group.

- **`:empty`**  
  Matches an element with no children.

- **`:only-child`**  
  Matches an element that is the sole child of its parent.

- **`:nth-child()`**  
  Offers a dynamic way to select elements based on their position:
  
```css
/* 
  Selects the 5th element with the class "myList"
*/
.myList:nth-child(5) {
    /* Specific styling */
}

/* 
  Selects every 3rd element with the class "myList"
*/
.myList:nth-child(3n) {
    /* Specific styling */
}

/* 
  Alternative syntax for every 3rd element, starting from the 3rd element.
*/
.myList:nth-child(3n + 3) {
    /* Specific styling */
}

/* 
  Selects every even element with the class "myList"
*/
.myList:nth-child(even) {
    /* Specific styling */
}
```

---

## 6. Pseudo-elements

Pseudo-elements allow you to style parts of an element and insert content without extra markup.

### 6.1 Common Pseudo-elements

- **`::marker`**:  
  Customizes the bullets or numbers of list items.

- **`::first-letter`** and **`::first-line`**:  
  Targets and styles the first letter or line of text in an element.

- **`::selection`**:  
  Alters the appearance of text when it is highlighted/selected by the user.

### 6.2 ::before and ::after

These pseudo-elements let you insert content before or after an element's actual content:

```html
<!-- HTML Example: -->
<body>
    <div>Let's <span class="emojify">emojify</span> this span!</div>
</body>
```

```css
/* 
  Using ::before and ::after to add extra content.
  Explanation:
  - The .emojify::before rule inserts emojis before the element's content.
  - The .emojify::after rule inserts emojis after the element's content.
  This technique is often used for decoration without changing the HTML.
*/
.emojify::before {
    content: '😎 😄 🤓';
}

.emojify::after {
    content: '🤓 😄 😎';
}

/* 
  When applied, the output will be:
  Let’s 😎 😄 🤓 emojify 🤓 😄 😎 this span!
*/
```

---

## 7. Attribute Selectors

Attribute selectors allow you to target elements based on the presence or value of their attributes.

### 7.1 Basic Attribute Selectors

```css
/* 
  [attribute] selects any element with the given attribute, regardless of its value.
*/
[src] {
    /* This will target any element that has a "src" attribute. */
}

/* 
  Combining an element selector with an attribute selector:
  This only targets <img> elements that have a src attribute.
*/
img[src] {
    /* Our cool CSS */
}

/* 
  [attribute="value"] matches elements where the attribute's value is exactly "puppy.jpg".
*/
img[src="puppy.jpg"] {
    /* Our cool CSS */
}
```

### 7.2 Advanced Attribute Selectors

- **`[attribute^="value"]`**:  
  Matches elements where the attribute value **starts** with the given string.

- **`[attribute$="value"]`**:  
  Matches elements where the attribute value **ends** with the given string.

- **`[attribute*="value"]`**:  
  Matches elements where the attribute value **contains** the given string **anywhere** in it.

```css
/* 
  [class^='aus'] selects any element with a class starting with 'aus',
  e.g., class="austria" or class="australia".
*/
[class^='aus'] {
    /* Our cool CSS */
}
  
/* 
  [src$='.jpg'] selects any element with a src attribute ending with '.jpg',
  e.g., src="puppy.jpg" or src="kitten.jpg".
*/
[src$='.jpg'] {
    /* Our cool CSS */
}
  
/* 
  [for*='ill'] selects any element with a for attribute that contains the string 'ill',
  e.g., for="bill", for="jill", for="silly", or for="ill".
*/
[for*='ill'] {
    /* Our cool CSS */
}
```
---

## 8. Background Properties

### 8.1 Basic Background Color

```css
/* 
  Applying a background color to all elements.
  "*" selects every element on the page.
*/
* {
  background: green; /* Sets background color to green */
}
```

### 8.2 Background Image with Repeat Style

```css
/* 
  Using a background image with a specified repeat style.
  "url('test.jpg')" defines the image, and "repeat-y" makes it repeat vertically.
*/
* {
  background: url("test.jpg") repeat-y;
}
```

### 8.3 Background with Border Box and Color

```css
/* 
  This example sets background-related properties with a border-box and color.
  Although "border-box" is more commonly used with the box-sizing property,
  here it's shown along with a red background for illustration.
*/
* {
  background: border-box red;
}
```

### 8.4 Single Image, Centered and Scaled

```css
/* 
  Setting a single background image that is centered and scaled.
  - "no-repeat": Image is not repeated.
  - "center": Image is centered.
  - "80%": Scales the image to 80% of the container.
  - "url('../img/image.png')": Defines the image path.
*/
* {
  background: no-repeat center/80% url("../img/image.png");
}
```

### 8.5 Global Background Values

```css
/* 
  Global background keyword values:
  - inherit: Takes the computed value from its parent.
  - initial: Sets the property to its initial value.
  - revert: Resets the property to the value established by the user-agent stylesheet.
  - unset: Resets the property to its inherited or initial value.
*/
* {
  background: inherit;
}
* {
  background: initial;
}
* {
  background: revert;
}
* {
  background: unset;
}
```

---

## 9. Box Shadow

### 9.1 Keyword and Default Values

```css
/* 
  Setting no box shadow using the keyword "none".
*/
* {
  box-shadow: none;
}
```

### 9.2 Box Shadow with Two Values

```css
/* 
  When only two values are given, they represent:
  - <offset-x> and <offset-y>
  In this case, a red shadow shifted 60px to the right and -16px upward.
*/
* {
  box-shadow: red 60px -16px;
}
```

### 9.3 Box Shadow with Three Values

```css
/* 
  Three values: 
  - <offset-x>, <offset-y>, and <blur-radius>
  Here, a shadow with a 10px right offset, 5px downward offset, a 5px blur, and black color.
*/
* {
  box-shadow: 10px 5px 5px black;
}
```

### 9.4 Box Shadow with Four Length Values

```css
/* 
  Four length values indicate:
  - <offset-x>, <offset-y>, <blur-radius>, and <spread-radius> followed by a color.
  This example uses 2px, 2px, 2px, 1px with a semi-transparent black.
*/
* {
  box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 20%);
}
```

### 9.5 Inset Box Shadow

```css
/* 
  The "inset" keyword changes the box-shadow from an outer shadow to an inner shadow.
  This example uses inset with 5em horizontal offset, 1em vertical offset, and gold color.
*/
* {
  box-shadow: inset 5em 1em gold;
}
```

### 9.6 Multiple Box Shadows

```css
/* 
  Defining multiple shadows separated by commas.
  First shadow: inset red shadow offset by 3px.
  Second shadow: olive shadow with offsets of -1em and 0, plus a blur of 0.4em.
*/
* {
  box-shadow: 
    3px 3px red inset,
    -1em 0 0.4em olive;
}
```

### 9.7 Global Box Shadow Values

```css
/* 
  Applying global keyword values for box-shadow:
  - inherit, initial, revert, and unset.
*/
* {
  box-shadow: inherit;
}
* {
  box-shadow: initial;
}
* {
  box-shadow: revert;
}
* {
  box-shadow: unset;
}
```

---

## 10. Overflow Properties

### 10.1 Basic Overflow Keywords

```css
/* 
  Various overflow values applied to all elements:
  - visible: Content is not clipped.
  - hidden: Content is clipped and not accessible.
  - clip: Similar to hidden, but without scrollbars.
  - scroll: Always shows scrollbars.
  - auto: Shows scrollbars only when necessary.
  - "hidden visible": Combined approach (usually for bidirectional overflow).
*/
* {
  overflow: visible;
}
* {
  overflow: hidden;
}
* {
  overflow: clip;
}
* {
  overflow: scroll;
}
* {
  overflow: auto;
}
* {
  overflow: hidden visible;
}
```

### 10.2 Global Overflow Values

```css
/* 
  Global keyword values for overflow:
  - inherit, initial, revert, and unset.
*/
* {
  overflow: inherit;
}
* {
  overflow: initial;
}
* {
  overflow: revert;
}
* {
  overflow: unset;
}
```

### 10.3 Text Overflow with Ellipsis

```css
/* 
  Styling for text truncation with ellipsis:
  - white-space: nowrap ensures text stays on a single line.
  - overflow: hidden hides overflowing content.
  - text-overflow: ellipsis replaces clipped text with "…".
*/
.overflowing {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

---

## 11. Color and Background with Functions

```css
/* 
  This example applies a text color and a linear gradient background
  to all elements:
  - "color: rgb(0, 42, 255)" sets the text color.
  - "background: linear-gradient(90deg, blue, red)" creates a gradient from blue to red.
*/
* {
  color: rgb(0, 42, 255);
  background: linear-gradient(90deg, blue, red);
}
```

---

## 12. Sizing Functions: calc(), min(), max(), and clamp()

### 12.1 calc()

```css
/* 
  Using calc() for dynamic sizing.
  - Define custom properties (--header, --footer) in the :root selector.
  - --main calculates the remaining height of the viewport after subtracting the header and footer.
*/
:root {
  --header: 3rem;
  --footer: 40px;
  --main: calc(100vh - calc(var(--header) + var(--footer)));
}
```

### 12.2 min()

```css
/* 
  The min() function takes the smallest value.
  Here, #iconHolder's width and height will be the smaller of 150px or 100% of the parent's dimension.
*/
#iconHolder {
  width: min(150px, 100%);
  height: min(150px, 100%);
  box-sizing: border-box;
  border: 6px solid blue;
}

/*
  Explanation:
  - If 150px is available, it uses 150px.
  - Otherwise, it falls back to 100% of the available space.
*/
```

### 12.3 max()

```css
/* 
  The max() function selects the largest value from the list provided.
  In this example, width will be the largest value among 100px, 4em, and 50%.
  This ensures a minimum width of 100px.
*/
* {
  width: max(100px, 4em, 50%);
}
```

### 12.4 clamp()

```css
/* 
  The clamp() function allows responsive sizing with a minimum, preferred, and maximum value.
  Here, h1 will have a font-size that never goes below 320px, ideally is 80vw, and never exceeds 60rem.
*/
h1 {
  font-size: clamp(320px, 80vw, 60rem);
}
```

---

## 13. Positioning

### 13.1 Understanding Static vs. Relative vs. Others

```css
/* 
  Positioning examples:
  - static: The default position; elements follow the normal document flow.
  - relative: Elements are positioned relative to their normal position.
  - absolute: Elements are positioned relative to their closest positioned ancestor (removed from the normal flow).
  - fixed: Positioned relative to the viewport; remains in place as you scroll.
  - sticky: Acts like relative until a defined scroll position is reached, then becomes fixed.
  - inherit: Takes the parent's position property.
*/
.el {
  position: static;    /* default positioning */
  position: relative;  /* relative to its normal position */
  position: absolute;  /* positioned absolutely relative to parent */
  position: fixed;     /* fixed to the viewport */
  position: sticky;    /* sticky positioning */
  position: inherit;   /* inherits the position from its parent */
}
```
## 14. CSS Custom Properties (Variables) and Media Queries

### 14.1 Custom Properties and the var() Function

```css
/* 
  The .error-modal class demonstrates how to declare and use custom properties (CSS variables).
  
  Custom properties:
  - Begin with "--" (e.g., --color-error-text).
  - Are declared inside a selector.
  - Can be used in the same or descendant selectors via the var() function.
  
  Here, we define:
  - --color-error-text: red;
  - --modal-border: 1px solid black;
  - --modal-font-size: calc(2rem + 5vw);
  
  Then, we apply these variables to color, border, and font-size.
*/
.error-modal {
    --color-error-text: red;
    --modal-border: 1px solid black;
    --modal-font-size: calc(2rem + 5vw);

    color: var(--color-error-text);
    border: var(--modal-border);
    font-size: var(--modal-font-size);
}

/* 
  Note: Custom properties must start with "--" when declared.
  Use the var() function to access them.
*/

/* 
  The var() function can accept two parameters:
  1. The custom property name.
  2. An optional fallback value if the custom property is invalid or not declared.
*/
.fallback {
    --color-text: white;

    /* 
      - background-color: Uses --undeclared-property with a fallback of black.
      - color: Uses --undeclared-again; if not declared, it falls back to --color-text.
        If --color-text is also not available, yellow is used.
    */
    background-color: var(--undeclared-property, black);
    color: var(--undeclared-again, var(--color-text, yellow));
}
```

---

### 14.2 Scope of Custom Properties

```css
/* 
  Custom properties have a specific scope:
  - Variables declared in a selector are only available within that selector and its descendants.
  - For global access, declare variables in the :root selector.
  
  This technique provides modularity and allows for easier theming.
*/
```

---

### 14.3 Media Queries and prefers-color-scheme

```css
/* 
  The prefers-color-scheme media query checks the user's operating system or browser theme preference.
  
  - Only "dark" and "light" are valid values.
  - It allows you to apply different CSS based on the user's preference.
  
  In the example below:
  - If the user prefers a dark theme, the :root selector is updated with custom properties for borders, background, text colors, and button backgrounds.
*/
@media (prefers-color-scheme: dark) {
    :root {
      --border-btn: 1px solid rgb(220, 220, 220);
      --color-base-bg: rgb(18, 18, 18);
      --color-base-text: rgb(240, 240, 240);
      --color-btn-bg: rgb(36, 36, 36);
      --theme-name: "dark";
    }
}
```
Below is the updated Markdown file with additional study notes focusing on the `@media` function and media queries in general.

---

```md
## 14. CSS Custom Properties (Variables) and Media Queries

### 14.1 Custom Properties and the var() Function

```css
/* 
  The .error-modal class demonstrates how to declare and use custom properties (CSS variables).
  
  Custom properties:
  - Begin with "--" (e.g., --color-error-text).
  - Are declared inside a selector.
  - Can be used in the same or descendant selectors via the var() function.
  
  Here, we define:
  - --color-error-text: red;
  - --modal-border: 1px solid black;
  - --modal-font-size: calc(2rem + 5vw);
  
  Then, we apply these variables to color, border, and font-size.
*/
.error-modal {
    --color-error-text: red;
    --modal-border: 1px solid black;
    --modal-font-size: calc(2rem + 5vw);

    color: var(--color-error-text);
    border: var(--modal-border);
    font-size: var(--modal-font-size);
}

/* 
  Note: Custom properties must start with "--" when declared.
  Use the var() function to access them.
*/

/* 
  The var() function can accept two parameters:
  1. The custom property name.
  2. An optional fallback value if the custom property is invalid or not declared.
*/
.fallback {
    --color-text: white;

    /* 
      - background-color: Uses --undeclared-property with a fallback of black.
      - color: Uses --undeclared-again; if not declared, it falls back to --color-text.
        If --color-text is also not available, yellow is used.
    */
    background-color: var(--undeclared-property, black);
    color: var(--undeclared-again, var(--color-text, yellow));
}
```

---

### 14.2 Scope of Custom Properties

```css
/* 
  Custom properties have a specific scope:
  - Variables declared in a selector are only available within that selector and its descendants.
  - For global access, declare variables in the :root selector.
  
  This technique provides modularity and allows for easier theming.
*/
```

---

### 14.3 Media Queries and prefers-color-scheme

```css
/* 
  The prefers-color-scheme media query checks the user's operating system or browser theme preference.
  
  - Only "dark" and "light" are valid values.
  - It allows you to apply different CSS based on the user's preference.
  
  In the example below:
  - If the user prefers a dark theme, the :root selector is updated with custom properties for borders, background, text colors, and button backgrounds.
*/
@media (prefers-color-scheme: dark) {
    :root {
      --border-btn: 1px solid rgb(220, 220, 220);
      --color-base-bg: rgb(18, 18, 18);
      --color-base-text: rgb(240, 240, 240);
      --color-btn-bg: rgb(36, 36, 36);
      --theme-name: "dark";
    }
}
```

---

### 14.4 Additional Notes on the `@media` Function

Media queries allow CSS to be applied selectively based on device or viewport conditions. Here are some additional notes to deepen your understanding:

- **Purpose of Media Queries:**  
  Media queries let you design responsive websites by applying specific CSS rules when particular conditions are met—such as when the viewport is a minimum or maximum width, or when the device is in a specific orientation (portrait or landscape).

- **Basic Syntax:**
  ```css
  @media (condition) {
    /* CSS rules go here */
  }
  ```
  Common conditions include:
  - `(min-width: 600px)` — Apply styles when the viewport is at least 600px wide.
  - `(max-width: 800px)` — Apply styles when the viewport is no more than 800px wide.
  - `(orientation: portrait)` — Apply styles when the device is in portrait mode.
  - `(resolution: 2dppx)` — Target high-resolution (retina) displays.
  - `only screen and` - additional safety.

- **Combining Conditions:**  
  You can combine multiple conditions using logical operators like `and`, `not`, and `only`:
  ```css
    /* max-width sets the lower bounds (acts like the opposite) */
    @media only screen and (max-width: 600px) and (orientation: landscape){

        /* only change what needs to be changed */
        .wrapper{
            width: 100%;
            background-color: orange;
        }
    }
  ```

- **Use Cases in Responsive Design:**
  - **Layout Adjustments:** Change grid layouts or adjust flex properties to match different screen sizes.
  - **Typography:** Modify font sizes, line heights, or margins to enhance readability on various devices.
  - **Visibility Control:** Hide, show, or rearrange elements based on the screen size (e.g., hamburger menus for mobile devices).

- **Device-Specific Styling:**  
  Media queries also allow for device-targeted styling. For example, if you need to adjust button sizes or touch targets for devices with smaller screens, media queries provide an effective method for tailoring the experience.

- **Best Practices:**
  - **Mobile-First Approach:** Start by writing styles for small screens and then use media queries with `min-width` to adjust for larger viewports.
  - **Organized CSS:** Keep your media query rules together or near the base styles they modify. This makes maintenance easier.
  - **Testing:** Always test your media queries across multiple devices and browsers to ensure that your responsive design works as intended.

Media queries are a foundational part of modern CSS, enabling the creation of flexible, responsive designs that adapt seamlessly to different devices and user preferences.

---