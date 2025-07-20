# SPA Frontend with Lit, Rspack, TypeScript, and pnpm

A modern Single Page Application (SPA) built with Lit web components, Rspack bundler, TypeScript, and pnpm package manager.

## 🚀 Features

- **Lit Web Components**: Lightweight, fast web components with a simple API
- **Rspack**: Lightning-fast bundler written in Rust
- **TypeScript**: Full type safety and better developer experience
- **Lit Router**: Client-side routing for seamless navigation
- **pnpm**: Fast, disk space efficient package manager
- **Modern UI**: Beautiful, responsive design with CSS Grid and Flexbox
- **Hot Reload**: Fast development with hot module replacement

## 📦 Prerequisites

- Node.js (version 18 or higher)
- pnpm (version 8 or higher)

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Start development server:**
   ```bash
   pnpm dev
   ```

3. **Build for production:**
   ```bash
   pnpm build
   ```

4. **Preview production build:**
   ```bash
   pnpm preview
   ```

5. **Type checking:**
   ```bash
   pnpm type-check
   ```

## 📁 Project Structure

```
ui/
├── src/
│   ├── components/
│   │   ├── app-header.ts      # Navigation header component
│   │   └── app-footer.ts      # Footer component
│   ├── pages/
│   │   ├── home-page.ts       # Home page component
│   │   ├── about-page.ts      # About page component
│   │   └── contact-page.ts    # Contact page component
│   ├── types/
│   │   └── lit-router.d.ts    # TypeScript declarations
│   ├── types/
│   │   └── lit-router.d.ts    # TypeScript declarations
│   └── main.ts               # Application entry point
├── index.html               # HTML entry point
├── rspack.config.js         # Rspack configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Project dependencies and scripts
└── README.md              # This file
```

## 🎯 Available Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm type-check` - Run TypeScript type checking

## 🏗️ Technology Stack

### Core Technologies
- **Lit**: A lightweight library for building web components
- **Rspack**: Fast bundler written in Rust
- **TypeScript**: Static type checking for JavaScript
- **pnpm**: Fast package manager

### Routing
- **@lit-labs/router**: Official Lit router for client-side routing

### Development Tools
- **Rspack Dev Server**: Development server with hot reload
- **TypeScript Compiler**: Type checking and compilation

## 🎨 Component Architecture

The application follows a component-based architecture using Lit web components:

### Main Components
- `app-main`: Root application component with routing
- `app-header`: Navigation header with menu
- `app-footer`: Application footer

### Page Components
- `home-page`: Landing page with hero section and features
- `about-page`: Information about the technology stack
- `contact-page`: Contact form and information

## 🔧 Configuration

### Rspack Configuration (`rspack.config.js`)
- TypeScript support with SWC loader
- Development server with hot reload
- Production optimization
- History API fallback for SPA routing

### TypeScript Configuration (`tsconfig.json`)
- Modern ES2022 target
- Strict type checking
- Module resolution for bundlers
- DOM and DOM.Iterable libraries

## 🚀 Development Workflow

1. **Start Development:**
   ```bash
   pnpm dev
   ```
   This will start the development server at `http://localhost:3200`

2. **Make Changes:**
   - Edit TypeScript files in the `src/` directory
   - Changes will automatically reload in the browser
   - Use hot reload for instant feedback

3. **Build for Production:**
   ```bash
   pnpm build
   ```
   This creates optimized files in the `dist/` directory

## 📱 Browser Support

The application supports all modern browsers that support:
- ES2022 features
- Web Components
- CSS Grid and Flexbox
- Modern CSS features

## 🎯 Key Features

### Routing
- Client-side routing with Lit Router
- No page reloads on navigation
- Clean URLs with history API

### Responsive Design
- Mobile-first approach
- CSS Grid and Flexbox layouts
- Responsive typography and spacing

### Performance
- Fast builds with Rspack
- Optimized production bundles
- Efficient web components

### Developer Experience
- TypeScript for type safety
- Hot reload for fast development
- Modern tooling and workflows

## 🔍 Troubleshooting

### TypeScript Errors
If you encounter TypeScript decorator errors, ensure:
- TypeScript version is 5.0 or higher
- `experimentalDecorators` and `useDefineForClassFields: false` are enabled in tsconfig.json
- Proper import statements for Lit decorators
- For state management, use `this.requestUpdate()` instead of `@state()` decorator if needed

### Rspack Configuration Issues
- Use `.js` extension for rspack config file (not `.ts`)
- Ensure ES module syntax is used when `"type": "module"` is in package.json
- Keep configuration simple to avoid path resolution issues

### Build Issues
- Clear `node_modules` and reinstall: `rm -rf node_modules && pnpm install`
- Check Rspack configuration syntax
- Verify all dependencies are installed

### Development Server Issues
- Check if port 3000 is available
- Verify Rspack configuration
- Check console for error messages

## 📚 Learning Resources

- [Lit Documentation](https://lit.dev/docs/)
- [Rspack Documentation](https://rspack.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [pnpm Documentation](https://pnpm.io/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and type checking
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

---

Happy coding! 🎉 