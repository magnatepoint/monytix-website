# Source Assets

This folder contains assets that are imported directly into React components. These files are processed by webpack during build.

## Folder Structure

- `images/logos/` - Logo files for import into components
- `icons/` - Icon files for import into components

## Usage

Files in this folder must be imported into components:

```javascript
// Import logo
import MonytixLogo from '../assets/images/logos/monytix-logo.png';

// Use in component
function Header() {
  return <img src={MonytixLogo} alt="Monytix Logo" />;
}
```

## Benefits of src/assets

- **Optimization**: Webpack optimizes and processes images
- **Cache Busting**: Automatic filename hashing for better caching
- **Import Validation**: Build-time errors if files are missing
- **Tree Shaking**: Unused assets are excluded from build

## File Naming Conventions

- Use kebab-case: `monytix-logo.png`
- Include size in name if multiple versions: `monytix-logo-400x200.png`
- Use descriptive names: `monytix-icon-dark.svg` 