### Key Concepts of CSS Grid

- **Grid Container and Items**  
  CSS Grid works by designating an element as the grid container using `display: grid` (or `inline-grid`), and its children become grid items. This allows you to organize items into rows and columns.

- **Defining Columns and Rows**  
  - **Explicit Grids:**  
    You can explicitly define the structure using properties like:
    - **`grid-template-columns` / `grid-template-rows`:** Specify the number, size, and widths/heights of columns and rows (e.g., `75px 75px 75px` or `50px 50px`).
    - **`grid-template`:** A shorthand to set both rows and columns in one property (e.g., `50px 50px / 50px 50px 50px`).
    
  - **Implicit Grids:**  
    Additional items not fitting into the explicit grid structure are placed in implicit rows or columns. You can control the sizing of these using:
    - **`grid-auto-rows` / `grid-auto-columns`:** Define sizes for tracks created implicitly.
    - **`grid-auto-flow`:** Dictates whether the auto-placement algorithm fills rows or columns first.

- **Gap (Gutter) Control**  
  The `gap` property (and its specific versions `column-gap` and `row-gap`) lets you specify spacing between grid tracks, providing a cleaner layout without needing extra margins.

- **Benefits Over Other Layouts**  
  Compared to older techniques or even Flexbox (which is primarily one-dimensional), CSS Grid excels at two-dimensional layouts by giving you fine control over both rows and columns simultaneously.

### Additional Relevant Info

- **Responsive Design**  
  CSS Grid makes responsive design easier by allowing you to redefine grid structures at different breakpoints with media queries.

- **Alignment and Justification**  
  Grid layout also offers robust options for aligning content both vertically and horizontally within the grid container using properties like `align-items`, `justify-items`, and their container-level counterparts.

- **Use Cases**  
  Ideal for complex layouts where you need both row and column control—such as dashboards, magazine designs, and application UIs—while still simplifying code compared to float-based or table-based designs.

- [**CSS tricks**](https://css-tricks.com/snippets/css/complete-guide-grid/#aa-css-grid-animation)
- [**Grid animations**](https://www.matuzo.at/blog/2023/100daysof-day97)

---

### **Grid Item Placement Techniques**
- **Line-based Placement**  
  Use `grid-column-start/end` and `grid-row-start/end` to position items by grid lines.  
  Example:  
  ```css
  #living-room {
    grid-column-start: 1;
    grid-column-end: 6; /* Spans from line 1 to 6 */
    grid-row-start: 1;
    grid-row-end: 3;
  }
  ```
  - **Span Keyword:**  
    Use `span` to define how many tracks an item should cover:  
    ```css
    #bathroom {
      grid-row-end: span 3; /* Spans 3 rows */
    }
    ```

- **Shorthand Syntax**  
  Combine column/row start/end with `grid-column` and `grid-row`:  
  ```css
  #kitchen {
    grid-column: 4 / 6; /* Columns 4 to 6 */
    grid-row: 3 / 6;    /* Rows 3 to 6 */
  }
  ```
  - **`grid-area` Shorthand:**  
    Define all four lines in one property: `grid-area: row-start / column-start / row-end / column-end`.  
    Example:  
    ```css
    #living-room {
      grid-area: 1 / 1 / 3 / 6; /* Same as line-based example */
    }
    ```

---

### **Grid Template Areas**
- Use `grid-template-areas` to visually map item placements in the container:  
  ```css
  .container {
    grid-template-areas:
      "living-room living-room living-room living-room living-room"
      "living-room living-room living-room living-room living-room"
      "bedroom     bedroom     bathroom    kitchen     kitchen"
      ".           .           bathroom    kitchen     kitchen";
    /* "." denotes empty cells */
  }
  ```
  - Assign items to areas with `grid-area: [name]`:  
    ```css
    #living-room { grid-area: living-room; }
    #kitchen { grid-area: kitchen; }
    ```

---

### **Advanced Sizing and Responsiveness**
- **`repeat()` Function**  
  Simplify repetitive track definitions:  
  ```css
  grid-template-columns: repeat(5, 40px); /* 5 columns of 40px */
  grid-template-rows: repeat(2, 1fr);     /* 2 rows, each taking equal space */
  ```
- **Fractional Unit (`fr`)**  
  Distribute remaining space proportionally:  
  ```css
  grid-template-columns: repeat(2, 2fr) repeat(3, 1fr); /* 2fr for first 2 columns, 1fr for next 3 */
  ```
- **Dynamic Sizing with `min()`, `max()`, and `minmax()`**  
  - Constrain track sizes:  
    ```css
    grid-template-rows: repeat(2, min(200px, 50%)); /* Smaller of 200px or 50% container height */
    grid-template-columns: repeat(5, max(120px, 15%)); /* Larger of 120px or 15% container width */
    ```
  - Define flexible bounds with `minmax()`:  
    ```css
    grid-template-columns: repeat(5, minmax(150px, 200px)); /* Tracks between 150px and 200px */
    ```

- **Auto-Fit and Auto-Fill**  
  Automatically adjust the number of tracks based on container size:  
  ```css
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Responsive columns, min 150px */
  ```

---

### **Container Utilities**
- **Resize and Overflow**  
  Allow users to resize the grid container and add scrollbars:  
  ```css
  .grid-container {
    resize: both;    /* Enable manual resizing */
    overflow: auto;  /* Add scrollbars if content overflows */
  }
  ```
  - **So what’s going on here specifically with `repeat(auto-fit, minmax(150px, 1fr));`?**
  Remember that `auto-fit` will return the **highest positive integer** without overflowing the grid.\
  So first, the browser has to know **how wide** our grid is: in this case, it’s just the window’s width (minus margins) because we didn’t explicitly set it.For the sake of this example, let’s pretend like our window is currently 500px wide.\
  Second, the browser needs to know **how many grid column** tracks could possibly fit in that width. To do this, it uses the **minimum** value in our `minmax()` function, since that will yield the highest number of items, which is 150px. If our window is 500px wide, this means our grid will render 3 columns.\
  But wait, there’s more! Once the browser has determined how many columns we can fit, it then resizes our columns up to the **maximum** value allowed by our `minmax()` function.In this case, our max size is 1fr, so all three columns will be given an equal allotment of the space available. As we resize our window, these calculations happen in realtime and the result is what you see in the above example!

  - **What about auto-fill?**\
In most cases, `auto-fill` is going to work **exactly the same way** as `auto-fit`. The difference is only noticeable when there are *fewer* items than can fill up the entirety of the grid row once. When the grid is expanded to a size where another grid item could fit, but there aren’t any left, `auto-fit` will keep the grid items at their max size. Using `auto-fill`, the grid items will snap back down to their min size once the space becomes available to add another grid item, even if there isn’t one to be rendered. They will continue their pattern of growing to max and snapping back to their min as the grid expands and more room becomes available for new grid tracks.

--- 

### **Miscellaneous Tips**
- **Mixing Units**  
  Combine static (e.g., `px`) and dynamic (e.g., `fr`) units:  
  ```css
  grid-template-columns: repeat(2, 125px) repeat(3, 1fr);
  ```
- **`clamp()` vs `minmax()`**  
  - `clamp(min, ideal, max)` works globally in CSS (e.g., `font-size`).  
  - `minmax()` is specific to grid track sizing.  

--- 

### **Additional resources**
- **[Learn more about the differences between `auto-fit` and `auto-fill`](https://www.youtube.com/watch?v=qjJR3qYCd54)**
- **[This video provides a summary of CSS grid in a concise format.](https://www.youtube.com/watch?v=EiNiSFIPIQE)**
- **[Check out this beautiful interactive guide to grid.](https://www.joshwcomeau.com/css/interactive-guide-to-grid/)**

---

## Using Flexbox and Grid
### Content first vs layout first design
A way to decide between `Grid` and `Flexbox` is to consider if your design starts from the **content**, or from the **layout**.

**In Content First Design,** you begin with clarity of how the *content* should be, and the layout follows. This is a great opportunity to use **Flexbox**. Its flexible nature gives you control of the behavior of items through logical rules. How they grow, shrink, their ideal size and position in relation to each other, all make the layout dynamic. While Flexbox gives you control over its content, the final layout is only a consequence. Depending on the dimensions of the flex container, the general layout can change a lot.

**In Layout First Design,** you decide how you want the *pieces arranged*, then fill in the content. That is when Grid shines. Defining grid row and column tracks gives you full control of layout. Content in a grid can only fill the spaces of explicit or implicit tracks. So, when you have an idea of how the big picture of a container should look like, Grid is the clear choice.

### Combining flexbox and grid
- If you have **one-dimensional** content, *Flexbox* can make it easier to control how that content is positioned in a Flex container. 
- If, on the other hand, you want to accurately place content on a complex layout in **two-dimensions**, *Grid* can be easier to use.

### **Additional resources**
- **[Flexbox or grid - How to decide?](https://www.youtube.com/watch?v=3elGSZSWTbM)** (very recommended)