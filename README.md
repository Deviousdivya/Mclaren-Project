🏎️ McLaren 720S Scroll Animation


A high-performance, scroll-driven hero section built with Next.js, GSAP, and Lenis Smooth Scroll. This project features a smooth "painting" effect where a McLaren 720S travels across the screen, revealing dynamic statistics and unmasking typography based on the user's scroll progress.

🚀 Features
Scroll-Triggered Animation: Core interaction powered by GSAP ScrollTrigger with scrub logic for fluid motion.

Smooth Scrolling: Integrated with Lenis for a consistent, high-end feel across all browsers.

Initial Load Reveal: Staggered intro animations for the headline and impact metrics.

Dynamic Clipping: A custom "unmasking" text effect that follows the car's position.

Responsive UI: Styled with Tailwind CSS for a clean, modern dark-mode aesthetic.

🛠️ Tech Stack
Framework: Next.js 16 (App Router)

Styling: Tailwind CSS

Animation: GSAP (GreenSock Animation Platform)

Smooth Scroll: Lenis

Language: TypeScript

📦 Installation & Setup
To run this project locally, follow these steps:

Clone the repository:

Bash

git clone https://github.com/Deviousdivya/Mclaren-Project.git
cd Mclaren-Project
Install dependencies:

Bash

npm install
Run the development server:

Bash

npm run dev
View the project:
Open http://localhost:3000 in your browser.

🧪 Implementation Details
Scroll Logic
The car's movement is tied directly to the scrollbar using the useGSAP hook. By utilizing pin: true, the hero section stays locked in view while the user scrolls through the virtual timeline.

Performance
All animations use CSS transform and clip-path properties to ensure 60FPS performance by avoiding heavy layout reflows during scroll events.
