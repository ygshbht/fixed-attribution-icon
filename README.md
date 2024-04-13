# Fixed Attribution Icon

This npm package allows you to add a customizable attribution icon fixed at the bottom of your website. The icon remains visible and fixed as the user scrolls through the page.

## Installation

Install the package via npm:

```bash
npm install fixed-attribution-icon
```

```js
// Import the FixedAttributionIcon class
import FixedAttributionIcon from "fixed-attribution-icon";

// Create a new instance of the icon, setting the link URL
const icon = new FixedAttributionIcon("https://example.com");

// Optinally Set the size of the icon (width, height in pixels)
icon.setSize(40, 40);
```
