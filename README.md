# Window Configurator Mark1

Window Configurator Mark1 is a web application developed with Next.js that allows users to configure custom windows through an intuitive step-by-step process. The application enables users to select window type, material, dimensions, colors, number of panels, and opening type, then generate a PDF quote with the complete configuration details.

**Diagram.png** contains the Use Case diagram for this window configurator project.

## Technologies Used

### Frontend
- Next.js 16.0.10
- React 19.2.0
- TypeScript 5
- Tailwind CSS 4
- jsPDF 4.0.0

### Development
- Node.js
- npm

## Concepts Used

- **Strategy Pattern** - Dynamic selection of opening type options based on window type and number of panels
- **Component Pattern** - Reusable React components (OptionCardGrid, AppNavigation)
- **App Router** - Next.js file-based routing system
- **Server Components & Client Components** - Hybrid component model

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev     # to test in localhost
npm run build   # to ensure project compile correctly for production on Vercel
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Deployed on Vercel
My app is available on vercel : 
https://window-configurator-mark1.vercel.app/