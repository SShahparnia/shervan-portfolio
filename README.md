# Shervan Shahparnia - Personal Portfolio

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-brightgreen?style=for-the-badge&logo=vercel)](https://shervan-portfolio.vercel.app/)

This repository contains the source code for my personal portfolio website, showcasing my projects, skills, and academic journey. The site is built with Next.js and Tailwind CSS, featuring a responsive multi-page design with smooth animations and a clean, modern aesthetic.

**Live Site:** [https://shervan-portfolio.vercel.app/](https://shervan-portfolio.vercel.app/)

## About Me

I am a recent Computer Science graduate from San Jose State University (SJSU) with a concentration in Data Science. I am passionate about leveraging data to build intelligent systems and solve complex problems. This fall (2025), I will be starting my Master\s degree in Artificial Intelligence at SJSU to further deepen my expertise in machine learning, deep learning, and natural language processing.

This portfolio highlights my journey, skills, and the projects I\ve worked on.

## Features

*   **Multi-Page Layout:** Clear and distinct sections for Home, About Me, Projects, Skills, Education, and Contact.
*   **Sidebar Navigation:** Easy-to-use sidebar for navigating between different sections of the portfolio.
*   **Responsive Design:** Optimized for viewing on various devices, including desktops, tablets, and mobile phones.
*   **Interactive Elements:** Smooth page transitions and hover animations powered by Framer Motion for an engaging user experience.
*   **Project Showcase:** Detailed display of key projects with descriptions, technologies used, and links to GitHub repositories or live demos where applicable.
*   **Skills Overview:** Categorized list of technical skills.
*   **Education Timeline:** Information about my academic background and achievements.
*   **Contact Information:** Easy ways to get in touch, including links to my GitHub and LinkedIn profiles.

## Technologies Used

*   **Frontend:**
    *   [Next.js](https://nextjs.org/) (React Framework)
    *   [React](https://reactjs.org/)
    *   [Tailwind CSS](https://tailwindcss.com/)
    *   [Framer Motion](https://www.framer.com/motion/) (for animations)
    *   [Lucide React](https://lucide.dev/) (for icons)
    *   TypeScript
*   **Deployment:**
    *   [Vercel](https://vercel.com/)
*   **Development Tools:**
    *   Git & GitHub
    *   VS Code
    *   pnpm (Package Manager)

## Project Structure

The project follows a standard Next.js App Router structure:

```
/portfolio-website
|-- /public                 # Static assets (images, fonts, etc.)
|-- /src
|   |-- /app                # Next.js App Router pages and layouts
|   |   |-- /(pages)        # Folders for each page (e.g., /about, /projects)
|   |   |   |-- /about/page.tsx
|   |   |   |-- ...
|   |   |-- layout.tsx      # Root layout
|   |   |-- page.tsx        # Homepage
|   |   |-- globals.css     # Global styles
|   |-- /components         # Reusable React components
|   |   |-- Sidebar.tsx
|   |   |-- PageTransitionWrapper.tsx
|   |   |-- Hero.tsx
|   |   |-- ... (About.tsx, Projects.tsx, etc.)
|   |-- /data               # Local data files (e.g., projects.json)
|   |-- /lib                # Utility functions
|-- .gitignore
|-- next.config.mjs
|-- package.json
|-- pnpm-lock.yaml
|-- postcss.config.mjs
|-- tailwind.config.js
|-- tsconfig.json
|-- README.md               # This file
```

## Getting Started Locally

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/SShahparnia/shervan-portfolio.git
    cd shervan-portfolio
    ```

2.  **Install dependencies:**
    It\s recommended to use `pnpm` as used in the project setup:
    ```bash
    pnpm install
    ```
    Alternatively, if you prefer `npm` or `yarn`, delete `pnpm-lock.yaml` and run:
    ```bash
    # Using npm
    npm install

    # Using yarn
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    pnpm run dev
    ```
    (Or `npm run dev` / `yarn dev`)

4.  Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Deployment

This portfolio is automatically deployed on Vercel whenever changes are pushed to the `main` branch of the GitHub repository.

## Contact

*   **Shervan Shahparnia**
*   **GitHub:** [SShahparnia](https://github.com/SShahparnia)
*   **LinkedIn:** [Shervan Shahparnia](https://www.linkedin.com/in/shervan-shahparnia/)
*   **Email:** (You can add your email here if you wish, or direct them to the contact form on the site)

Feel free to reach out if you have any questions or opportunities!

