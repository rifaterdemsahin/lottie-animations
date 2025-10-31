# Lottie Animations Repository

## Project Overview
- **Name**: Lottie Animations
- **Type**: Web animation library experiments
- **Purpose**: Create and showcase animations using Lottie technology
- **Live Demo**: https://rifaterdemsahin.github.io/lottie-animations/

## Tech Stack
- **HTML5**: Markup and structure
- **JavaScript**: Animation control and interactivity
- **Lottie.js**: Animation rendering library (CDN: https://cdnjs.cloudflare.com/ajax/libs/bodymovin/)
- **CSS3**: Styling and layout

## Project Structure
```
/Users/rifaterdemsahin/projects/lottie-animations/
├── index.html                    # Main entry point
├── ai-vs-freelancer.html         # AI vs Freelancer animation (recently created)
├── ai-vs-freelancer.json         # Animation data (React component)
├── ball.html                     # Ball animation example
├── README.md                     # Project documentation
├── .github/workflows/static.yml  # GitHub Pages deployment
└── .zencoder/rules/repo.md       # This file
```

## Key Files
1. **index.html** - Main page with animation examples
2. **ai-vs-freelancer.html** - Standalone HTML with interactive animation showing AI vs Freelancer comparison
3. **ai-vs-freelancer.json** - React component version of the animation data
4. **ball.html** - Simple ball animation example

## Lottie Animation Features
- Vector-based scalable animations
- JSON format (lightweight)
- Interactive controls (play, pause, reset)
- 60fps performance
- Cross-platform support

## Animation Details

### AI vs Freelancer Animation
- **Canvas Size**: 800x600px
- **Framerate**: 30 fps
- **Duration**: 300 frames (~10 seconds)
- **Elements**:
  - Blue box with "AI" label
  - Red box with "Freelancer" label
  - "VS" text in center
  - Animated scores (3 pts each)
  - Flash and skill animations
  - Adaptability indicator with emoji

## Deployment
- Hosted on GitHub Pages
- Static site (no backend required)
- All animations self-contained in HTML files

## Development Notes
- Animations use Lottie.js library from CDN
- No build process required
- Simply open HTML files in browser to run
- Fully responsive design with gradient backgrounds