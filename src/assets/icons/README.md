# Icon Assets

This folder contains all favicon and icon files for the Monytix website.

## Available Icons

- `favicon.ico` - Main favicon
- `favicon-16x16.png` - 16x16 favicon
- `favicon-32x32.png` - 32x32 favicon  
- `apple-touch-icon.png` - Apple touch icon
- `android-chrome-192x192.png` - Android chrome icon (192x192)
- `android-chrome-512x512.png` - Android chrome icon (512x512)

## Usage with Path Alias

```javascript
// Import using alias
import FaviconIcon from '@/icons/favicon-32x32.png';
import AppleTouchIcon from '@/icons/apple-touch-icon.png';

// Use in component
function Head() {
  return (
    <head>
      <link rel="icon" href={FaviconIcon} />
      <link rel="apple-touch-icon" href={AppleTouchIcon} />
    </head>
  );
}
```

## Icon Formats

All icons are generated from the main Monytix logo and include:
- Standard web favicons (ICO, PNG)
- Apple touch icons for iOS devices
- Android chrome icons for PWA support 