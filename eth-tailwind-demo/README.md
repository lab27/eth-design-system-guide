# ETH Zürich Tailwind CSS Demo

This project demonstrates how developers can easily theme their Tailwind CSS applications using ETH Zürich design tokens.

## Purpose

This proof of concept shows that a developer with an essentially unstyled Tailwind app can quickly implement ETH Zürich's branding by simply adding the ETH Tailwind configuration.

## Demo Structure

- `/before` - A basic Tailwind application without ETH styling
- `/after` - The same application with ETH Zürich design tokens applied
- `/eth-tailwind-config.js` - The configuration file containing ETH design tokens for Tailwind

## How It Works

1. A developer creates an application using standard Tailwind CSS classes (see `/before` directory)
2. The developer downloads and imports the ETH Tailwind configuration
3. The developer replaces standard Tailwind classes with ETH-specific ones:
   - `bg-blue-500` → `bg-eth-blue`
   - `text-gray-700` → `text-eth-grey-70`
   - etc.

## Benefits

- **Brand Consistency**: All applications follow ETH Zürich brand guidelines
- **Development Speed**: Reduces time spent implementing design specifications
- **Maintainability**: Centralized design tokens make updates easier to implement
- **Simplicity**: Developers don't need to memorize exact color codes or spacing values

## Getting Started

To run this demo locally:

1. Clone this repository
2. Open `index.html` in your browser
3. Compare the "before" and "after" examples

To use ETH design tokens in your own Tailwind project:

1. Download `eth-tailwind-config.js`
2. Import it into your Tailwind configuration
3. Start using ETH-specific classes in your HTML

## Notes

- In a real implementation, you would need to properly import the ETH fonts
- Screenshots are placeholders and should be replaced with actual application screenshots
- This demo uses CDN-loaded Tailwind; in a production environment, you would configure Tailwind properly through npm 