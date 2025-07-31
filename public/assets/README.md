# Public Assets

This folder contains static assets that are served directly by the web server and can be accessed via URL paths.

## Folder Structure

- `images/logos/` - Logo files (PNG, SVG, JPG)
- `icons/` - Icon files and favicons

## Usage

Files in this folder can be referenced directly in HTML or accessed via URL:

```html
<!-- In HTML -->
<img src="/assets/images/logos/monytix-logo.png" alt="Monytix Logo" />

<!-- In React components -->
<img src={process.env.PUBLIC_URL + '/assets/images/logos/monytix-logo.png'} alt="Monytix Logo" />
```

## Recommended Logo Formats

- **SVG**: Best for scalable logos (recommended)
- **PNG**: For logos with transparency
- **JPG**: For photographic logos (avoid for simple logos)

## Recommended Sizes

- **Main Logo**: 400x200px or similar ratio
- **Favicon**: 32x32px, 16x16px
- **High DPI**: 2x versions (@2x suffix) 