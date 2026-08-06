# Sanket Botre - Developer Portfolio

Ultra-premium developer platform portfolio showcasing backend engineering and AI/Data Science expertise. Built with a design system inspired by modern developer tools like Supabase, Vercel, and OpenAI Developer Console.

## 🎨 Design Features

- **Ultra-Premium Dark Mode**: Deep charcoal background (`#0B0F19`) with subtle grid patterns
- **Developer Tool Aesthetic**: Terminal interfaces, metrics dashboards, and system logs
- **Premium Typography**: Inter for UI elements, JetBrains Mono for code and metrics
- **Accent Colors**: Electric Cyan (`#06b6d4`) for backend systems, Vibrant Violet (`#8b5cf6`) for AI/ML
- **Smooth Animations**: Fluid transitions, typing effects, and hover interactions

## 🚀 Tech Stack

- **Framework**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4
- **Build Tool**: Vite 7
- **Fonts**: Inter & JetBrains Mono (Google Fonts)

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.tsx              # Sticky navigation with glass-morphic effect
│   ├── HeroTerminal.tsx        # Terminal-style hero with typing animation
│   ├── LiveMetrics.tsx         # Real-time metrics dashboard
│   ├── TechnicalBlueprint.tsx  # Skills categorized by technology
│   ├── ArchitecturalGrid.tsx   # Project showcase with system metrics
│   ├── AcademicTrack.tsx       # Education timeline
│   ├── Milestones.tsx          # Achievements and recognition
│   ├── ContactNode.tsx         # Interactive terminal contact interface
│   └── Footer.tsx              # Enhanced footer with links
├── App.tsx                     # Main application component
├── main.tsx                    # Application entry point
└── index.css                   # Global styles and animations

## 🎯 Key Sections

### 1. Hero Terminal
- Simulated terminal boot sequence
- Typing animation effect
- Professional introduction
- Social media links

### 2. Live Metrics Board
- System uptime indicator with live pulse
- ML model precision stats
- API latency metrics
- Project deployment count

### 3. Technical Blueprint
- Categorized skill grid
- Languages, frameworks, databases
- AI/ML tools and cloud platforms
- Proficiency indicators

### 4. Architectural Grid
- 6 major projects with detailed descriptions
- System metrics (uptime, throughput, latency)
- Technology stack tags
- Status badges (Production, Award Winner, etc.)

### 5. Academic Track
- Current education details
- Timeline visualization
- Relevant coursework
- Specialization highlights

### 6. Milestones
- National hackathon wins
- Research publications
- Open source contributions
- Achievement statistics

### 7. Contact Node
- Interactive terminal interface
- Command-line style interaction
- Quick contact cards
- Email, GitHub, LinkedIn links

## 🎨 Color Palette

```css
/* Backgrounds */
--bg-primary: #0B0F19
--bg-secondary: #030712

/* Accents */
--cyan: #06b6d4      /* Backend/Systems */
--violet: #8b5cf6     /* AI/ML */
--emerald: #10b981    /* Active/Success */
--amber: #f59e0b      /* Awards/Special */

/* Neutrals */
--slate-100: #f1f5f9
--slate-200: #e2e8f0
--slate-300: #cbd5e1
--slate-400: #94a3b8
--slate-500: #64748b
--slate-800: #1e293b
--slate-900: #0f172a
```

## 🔧 Customization

### Update Personal Information
Edit the following components:
- `HeroTerminal.tsx` - Name, title, description
- `LiveMetrics.tsx` - Update metrics and values
- `ArchitecturalGrid.tsx` - Add/modify projects
- `AcademicTrack.tsx` - Education details
- `Milestones.tsx` - Achievements and awards

### Modify Colors
Update Tailwind classes throughout components:
- `text-cyan-400` → Backend/Systems color
- `text-violet-400` → AI/ML color
- `text-emerald-400` → Success/Active states
- `text-amber-400` → Awards/Highlights

### Add New Sections
1. Create new component in `src/components/`
2. Import in `App.tsx`
3. Add to component hierarchy

## 📱 Responsive Design

Fully responsive across all devices:
- Mobile: Single column layouts
- Tablet: 2-column grids
- Desktop: Multi-column grids with hover effects
- Ultra-wide: Maximum width constraint (7xl)

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy dist/ folder to Vercel
```

### Netlify
```bash
npm run build
# Deploy dist/ folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy dist/ folder to GitHub Pages
```

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

## 👤 Author

**Sanket Botre**
- Email: sanketbotre2004@gmail.com
- GitHub: [@sanketbotre](https://github.com/sanketbotre)
- LinkedIn: [sanket-botre](https://linkedin.com/in/sanket-botre)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
