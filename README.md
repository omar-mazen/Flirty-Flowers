# Flirty Flowers

Flirty Flowers is a modern and elegant landing page that showcases beautiful floral designs. The page is built using React and styled with custom CSS. The animations are powered by GSAP, providing smooth transitions and interactions as the user scrolls through the different sections.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Animations](#animations)
- [Custom Cursor](#custom-cursor)
- [Contributing](#contributing)
- [License](#license)

## Demo

A live demo of the project can be found [here](#).

## Features

- Responsive design with custom styling
- Smooth animations and transitions using GSAP
- Horizontal scrolling gallery with image previews
- Custom pre-loader before the main content is displayed
- Custom cursor that follows the mouse movement
- Modern typography and layout

## Technologies Used

- **React**: JavaScript library for building user interfaces
- **GSAP (GreenSock Animation Platform)**: Animation library used for creating animations and scroll-triggered effects
- **SplitType**: Utility library for splitting text into lines, words, or characters for animation purposes
- **CSS**: Custom styling using modern CSS features like Grid and Flexbox

## Getting Started

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/flirty-flowers.git
   ```

2. Navigate to the project directory:

   ```bash
   cd flirty-flowers
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Project

To start the project locally, run:

```bash
npm start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```bash
flirty-flowers/
├── public/
│   ├── index.html
│   ├── favicon.ico
├── src/
│   ├── components/
│   │   ├── About.js
│   │   ├── CustomCursor.js
│   │   ├── Featured.js
│   │   ├── Footer.js
│   │   ├── Gallery.js
│   │   ├── Header.js
│   │   ├── HeroSection.js
│   │   ├── Loader.js
│   │   ├── NavBar.js
│   ├── hooks/
│   │   ├── useOnScreen.js
│   ├── App.js
│   ├── index.js
│   ├── App.css
│   └── index.css
├── README.md
└── package.json
```

## Usage

The project is divided into different sections, each representing a component in React. The main sections include:

- **Hero Section**: The introduction section with the brand name, menu, and a header.
- **Featured Section**: Displays featured items with images and labels, including smooth scroll-triggered animations.
- **About Section**: Provides information about the brand, including a text animation that reveals as the user scrolls.
- **Gallery Section**: A horizontally scrollable gallery showcasing different images with titles and categories.
- **Footer**: The closing section with a creative text animation.

## Animations

The project heavily utilizes GSAP for animations. Key animations include:

- **Hero Section**: Animations for the brand name, cart, and menu items.
- **Featured Section**: Smooth scrolling animations for featured items.
- **About Section**: Text splitting and animation using SplitType and GSAP.
- **Gallery Section**: Horizontal scrolling effect with synchronized image transitions.
- **Footer**: Animated text lines with staggered effects.

### Custom Cursor

A custom cursor is implemented to replace the default browser cursor. It follows the mouse movements and adds a unique interaction to the webpage.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch with your feature or bug fix: `git checkout -b feature-branch-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-branch-name`
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
