# UI Specification: TUI-Hacker-Portfolio

## 1. Global Styles
- **Background Color:** `#121212` (Matte Black)
- **Primary Text Color:** `#E0E0E0` (Off-White)
- **Border/Line Color:** `#E0E0E0` (1px solid)
- **Font:** Monospace (e.g., 'JetBrains Mono', 'Fira Code', or 'Courier New')
- **Casing:** Strictly lowercase for navigation and headers.
- **Scrolling:** Overflow content must be scrollable *within* the left pane only. Scrollbars must be hidden or styled as thin 1px lines.

## 2. Layout Structure
- **Container:** A centered flex/grid box with a 1px solid white border.
- **Split:** - **Left Pane (Content):** 75% width.
  - **Right Pane (Nav):** 25% width.
- **Divider:** A 1px vertical white line separating the two panes.

## 3. Right Column (Navigation)
- **Items:** about, essays, quotes, portfolio, resume, links.
- **Alignment:** Left-aligned text with 1ch (one character) padding from the divider.
- **States:**
  - **Default:** Plain text.
  - **Active/Current:** Prefixed with a `> ` character (e.g., `> about`).
  - **Hover/Focus:** The entire line background turns `#E0E0E0` and text color turns `#121212`. The selection block must span the full width of the sidebar minus 1px padding.

## 4. Left Column (Content Area)
- **Margin Decoration:** A vertical line of dots (Braille pattern `.` or `:`) running top-to-bottom on the far-left edge (approx. 2ch from border).
- **Header:** The page title (e.g., `about`) appears at the top-left, sometimes followed by a `#` identifier or bracketed metadata.
- **Visuals:** Support for dithered 1-bit style images (black and white pixel art).
- **Padding:** 4ch horizontal padding to prevent text from touching the borders or dividers.

## 5. Interaction Model
- The website should feel like a single-page application (SPA). 
- Clicking a link in the right column refreshes only the content in the left column.
- Content should "pop" in instantly without smooth fades to maintain the terminal aesthetic.
