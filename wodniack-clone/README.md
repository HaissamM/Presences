# Wodniack.dev Clone

A modern, single-page portfolio website inspired by https://wodniack.dev

## Features

- **Animated Binary Background**: Matrix-style binary code animation in the hero section
- **Smooth Scrolling**: Seamless navigation between sections
- **Theme Toggle**: Light/dark mode with persistent storage
- **Responsive Design**: Optimized for all device sizes
- **Scroll Animations**: Framer Motion powered animations
- **Modern Stack**: Next.js 15, TypeScript, Tailwind CSS

## Sections

1. **Hero**: Full-screen introduction with animated binary background
2. **About**: Personal introduction and career journey
3. **Awards**: Comprehensive list of achievements and recognitions
4. **Work**: Portfolio grid showcasing projects
5. **Gallery**: Personal photos and historical snapshots
6. **Footer**: Animated marquee text and contact information

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Font**: System fonts for optimal performance

## Project Structure

```
wodniack-clone/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Awards.tsx
│   ├── Work.tsx
│   ├── Gallery.tsx
│   └── Footer.tsx
├── public/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## Customization

### Theme Colors

Edit the CSS variables in `app/globals.css`:

```css
:root {
  --background: #ffffff;
  --foreground: #000000;
}

[data-theme="dark"] {
  --background: #000000;
  --foreground: #ffffff;
}
```

### Content

Update the content in each component file:
- `components/About.tsx` - Personal bio and career info
- `components/Awards.tsx` - Awards and achievements
- `components/Work.tsx` - Portfolio projects
- `components/Gallery.tsx` - Personal gallery items

## License

This is a clone/recreation for educational purposes.

## Credits

Original design inspiration: [Antoine Wodniack](https://wodniack.dev)
