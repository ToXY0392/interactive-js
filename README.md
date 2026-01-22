# Interactive JS — Project Overview

This project adds interactivity to an existing HTML page using JavaScript only.  
The HTML file must remain untouched; all behavior is implemented through `script.js`.

---

x## Features Implemented

### 1. Footer Click Counter
- Detects clicks on the `<footer>`.
- Logs a counter in the console that increases on each click.

### 2. Hamburger Menu Toggle
- Clicking the navbar toggler opens or closes the hidden section `#navbarHeader`.
- Implemented by toggling the `collapse` class.

### 3. First Card — Red Text
- Clicking *Edit* on the first card turns its text red.
- Permanent change (no toggle).

### 4. Second Card — Green Text (Toggle)
- Clicking *Edit* on the second card toggles its text between green and the default color.

### 5. Disable / Enable Bootstrap
- A double-click on the navbar disables the Bootstrap stylesheet.
- A second double-click reactivates it.

### 6. Card Reduction on View Hover
- Hovering the *View* button hides the card text and shrinks its image to 20%.
- Leaving the button restores the original layout.
- Works for all cards.

### 7. Rotate Cards (Right)
- Clicking the gray button `==>` moves the last card to the first position.

### 8. Rotate Cards (Left)
- Clicking the blue button `<==` prevents navigation and moves the first card to the last position.

### 9. Layout Adjustment via Keyboard
- When the “JS & Events” logo is focused:
  - Press `a` → compress content left.
  - Press `y` → compress content center.
  - Press `p` → compress content right.
  - Press `b` → restore normal layout.

---

## File Structure

