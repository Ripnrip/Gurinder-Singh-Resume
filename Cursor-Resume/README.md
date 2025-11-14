# Cursor Resume

**Active Resume Project** - A modern, beautiful resume built with Next.js, TypeScript, and Tailwind CSS featuring a left sidebar with comprehensive skills organized into 5 sections.

> **Note**: Old projects and experiments have been moved to `/legacy/scrapwork/` for reference.

## Features

- **Left Sidebar Layout**: Skills organized in a beautiful left sidebar with icons
- **5 Consolidated Skill Sections**:
  1. iOS / Mobile & Web Engineering
  2. AI/ML & Agentic Systems
  3. Cloud, DevOps & Reliability
  4. Data & Databases
  5. Product, Design & Collaboration
- **Full Summary**: Summary section is displayed in full without splitting
- **Detailed Second Page**: Comprehensive technical skills reference for ATS optimization
- **Responsive Design**: Works beautifully on desktop, tablet, and mobile
- **Print-Friendly**: Optimized for PDF export and printing

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Skills Included

All skills from `strategy.md` are included with appropriate icons from `react-icons`. Skills without available icons display a fallback with initials.

## Project Structure

```
Cursor-Resume/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx         # Main resume page
│   └── globals.css      # Global styles
├── components/
│   └── SkillsGrid.tsx   # Skills grid component with all skills
└── package.json
```

## Technologies Used

- Next.js 14
- React 19
- TypeScript
- Tailwind CSS
- react-icons

