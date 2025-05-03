# **Preparing HTML for Bootstrap Cards**

Below is an in‑depth walkthrough of every major Bootstrap 5 “Card” feature, followed by a complete `cards.html` file illustrating them in action. You’ll find demos of:

* **Basic cards** with body, title, text, and links
* **Image caps** at top and bottom of cards
* **Image overlays** for background images with overlaid text
* **Headers & footers** for titled sections and footnotes
* **List groups** inside cards for lists of items
* **Card groups** and **responsive grid** layouts
* **Background & contextual variants** for colored cards
* **Sizing utilities** to control card width/height
* **Card navigation** with tabs and pills
* **Stretched links** to make entire cards clickable

Each section below references official docs and high‑quality tutorials.

---

## 1. Basic Card Structure

A card’s fundamental building block is the `.card` wrapper with a `.card-body` for padded content ([Bootstrap][1]). Inside the body you can add `.card-title`, `.card-subtitle`, `.card-text`, and `.card-link` for titles, subtitles, paragraphs, and inline links ([Bootstrap][1]).

## 2. Image Caps

Use `<img class="card-img-top">` or `<img class="card-img-bottom">` to append an image at the top or bottom of a card, respectively ([GeeksforGeeks][2]).

## 3. Image Overlay

For full‑card background images with overlaid text, wrap `<img class="card-img">` with a sibling `<div class="card-img-overlay">`. Add a dark background utility (e.g. `.bg-dark bg-opacity-50`) for contrast ([Bootstrap][1], [Material Design for Bootstrap][3]).

## 4. Headers & Footers

Place a `<div class="card-header">` at the top for headings and `<div class="card-footer">` at the bottom for footnotes or actions ([W3Schools.com][4]).

## 5. List Groups Inside Cards

Embed a `<ul class="list-group list-group-flush">` between body sections to display list items without outer borders ([Bootstrap][5]).

## 6. Card Groups & Responsive Layouts

* **`.card-group`**: flexbox container that equalizes card heights in a row ([FreeFrontend][6]).
* **Grid approach**: use `.row row-cols-1 row-cols-md-3 g-4` to auto‑arrange cards in responsive columns ([Bootstrap][1]).

## 7. Background Variants

Apply contextual utilities like `.bg-primary text-white`, `.bg-success`, `.bg-warning`, etc., to change card backgrounds ([Bootstrap][7]).

## 8. Sizing Utilities

Control card dimensions with `.w-25`, `.w-50`, `.mw-100`, `.h-100`, or custom inline styles ([GeeksforGeeks][2]).

## 9. Card Navigation Tabs/Pills

Within `.card-header`, combine a Bootstrap nav (`.nav-tabs` or `.nav-pills` plus `.card-header-tabs` / `.card-header-pills`) and place `.tab-content` in `.card-body` for tabbed cards ([Tutorial Republic][8]).

## 10. Stretched Links

Add `<a href="#" class="stretched-link"></a>` inside a relatively positioned card to make the entire card clickable ([Bootstrap builder for busy developers][9]).

---

[1]: https://getbootstrap.com/docs/5.0/components/card/?utm_source=chatgpt.com "Cards · Bootstrap v5.0"
[2]: https://www.geeksforgeeks.org/bootstrap-5-cards-images/?utm_source=chatgpt.com "Bootstrap 5 Cards Images | GeeksforGeeks"
[3]: https://mdbootstrap.com/docs/standard/extended/overlay/?utm_source=chatgpt.com "Bootstrap Overlay - free examples & tutorial - MDBootstrap.com"
[4]: https://www.w3schools.com/bootstrap5/bootstrap_cards.php?utm_source=chatgpt.com "Bootstrap 5 Cards - W3Schools"
[5]: https://getbootstrap.com/docs/5.0/components/list-group/?utm_source=chatgpt.com "List group · Bootstrap v5.0"
[6]: https://freefrontend.com/bootstrap-cards/?utm_source=chatgpt.com "31 Bootstrap Cards - FreeFrontend"
[7]: https://getbootstrap.com/docs/4.0/components/card/?utm_source=chatgpt.com "Cards - Bootstrap"
[8]: https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/bootstrap-cards.php?utm_source=chatgpt.com "How to Use Bootstrap 5 Cards - Tutorial Republic"
[9]: https://bootstrapshuffle.com/classes/cards/card-img-overlay?utm_source=chatgpt.com "Bootstrap class: .card-img-overlay"
