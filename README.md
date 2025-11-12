# OS Interview Prep - Next.js Blog

A modern, AirBnB-styled blog website built with Next.js 14, featuring comprehensive operating systems interview preparation articles.

## 🚀 Features

- **Modern Next.js 14** with App Router
- **AirBnB-inspired design** - Clean, minimalist, and professional
- **Fully responsive** - Mobile-first design approach
- **8 comprehensive articles** covering key OS concepts
- **TypeScript** for type safety
- **CSS Modules** for scoped styling
- **Static export** ready for deployment

## 📚 Articles Covered

1. **Process vs Thread** - Understanding core differences
2. **CPU Scheduling** - FCFS, SJF, Round Robin, and more
3. **Deadlock** - Detection, prevention, and recovery
4. **Memory Management** - Paging, segmentation, TLB
5. **Virtual Memory** - Page replacement algorithms
6. **File Systems** - Structure and implementation
7. **Synchronization** - Semaphores, mutexes, monitors
8. **IPC** - Pipes, message queues, shared memory

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎨 Design System

### Colors
- **Primary:** #FF385C (AirBnB Red)
- **Text:** #222222 (Primary), #717171 (Secondary)
- **Background:** #FFFFFF (White), #F7F7F7 (Gray)

### Typography
- **Font Family:** Circular Std, Inter, system fonts
- **Headings:** Bold, large, high contrast
- **Body:** Regular weight, comfortable line height

### Components
- **Navbar:** Fixed, minimalist, with scroll effect
- **Hero:** Gradient background with statistics
- **Article Cards:** Clean, hoverable, with gradient headers
- **Article Pages:** Readable, well-spaced content

## 📁 Project Structure

```
OS_Blog/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   └── ArticleCard.tsx
│   ├── articles/
│   │   ├── layout.tsx
│   │   ├── article.module.css
│   │   └── [article-name]/
│   │       └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── page.module.css
├── public/
├── next.config.js
├── package.json
├── tsconfig.json
└── README.md
```

## 🌐 Deployment

This project is configured for static export and can be deployed to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting service

```bash
npm run build
# Output will be in the 'out' directory
```

## 📝 Adding New Articles

1. Create a new folder in `app/articles/[article-name]/`
2. Add a `page.tsx` file with your article content
3. Update the articles array in `app/page.tsx`
4. Follow the existing article structure for consistency

## 🎯 Key Features

### Performance
- Static generation for fast loading
- Optimized images and fonts
- Minimal JavaScript bundle

### Accessibility
- Semantic HTML
- Keyboard navigation
- Focus indicators
- High contrast text

### SEO
- Meta tags for each page
- Structured data
- Descriptive URLs

## 📄 License

MIT License - feel free to use this project for your own learning!

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add new articles
- Improve existing content
- Enhance the design
- Fix bugs

---

Built with ❤️ for OS Interview Preparation
