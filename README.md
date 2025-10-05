# RAJ AI APP BUILDER

> Transform natural language descriptions into production-ready React applications with AI-powered code generation.

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

## Overview

RAJ AI APP BUILDER is an enterprise-grade platform that leverages Cerebras GPT-OSS-120B to convert natural language specifications into fully functional React applications. Built with Next.js 14 and featuring real-time streaming capabilities, AI-powered personalization, and comprehensive analytics.

**Live Demo:** [https://nlptoapp.vercel.app](https://nlptoapp.vercel.app)

## Features

- **🤖 AI-Powered Generation** - Natural language to React code using Cerebras GPT-OSS-120B
- **⚡ Real-Time Streaming** - Watch code generation token-by-token with Server-Sent Events
- **💻 Monaco Editor** - Professional code editing experience with syntax highlighting
- **👁️ Live Preview** - Instant React component rendering in sandboxed iframe
- **🧪 Auto-Generated Tests** - Comprehensive test suites created automatically
- **📊 Analytics Dashboard** - Track usage patterns and engagement metrics
- **🎨 Modern UI/UX** - Responsive design with Tailwind CSS and smooth animations

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 14.2.33 | React framework with App Router |
| TypeScript | 5.3.3 | Type-safe development |
| Tailwind CSS | 3.3.6 | Utility-first styling |
| Cerebras AI | Latest | GPT-OSS-120B language model |
| Monaco Editor | 4.7.0 | Code editor component |

## Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher
- Cerebras API Key ([Get one here](https://cerebras.ai/))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rajshah9305/NLPtoapp.git
   cd NLPtoapp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   ```bash
   cp .env.example .env
   ```
   
   Add your Cerebras API key to `.env`:
   ```env
   CEREBRAS_API_KEY=your-api-key-here
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## Usage

1. Enter a natural language description of your desired application
2. Click "Generate App" to start the AI generation process
3. Watch real-time progress through 4 stages: Analyzing → Generating → Testing → Complete
4. View generated code in the Monaco editor
5. Preview the live component in the Preview tab
6. Review auto-generated tests in the Tests tab
7. Copy, download, or share your generated code

### Example Prompts

```
Create a todo list app with drag and drop, dark mode, and local storage
```

```
Build a weather dashboard with current conditions and 5-day forecast
```

```
Design an e-commerce product catalog with filters and shopping cart
```

## Project Structure

```
src/
├── app/
│   ├── api/generate/route.ts    # Streaming API endpoint
│   ├── globals.css              # Global styles & animations
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Main application page
├── components/
│   ├── AgentProgress.tsx        # Multi-stage progress indicator
│   ├── AnalyticsDashboard.tsx   # Analytics dashboard
│   ├── CodeViewer.tsx           # Monaco editor & preview
│   ├── PromptInput.tsx          # AI-powered input interface
│   └── Toast.tsx                # Toast notifications
└── lib/
    └── personalization.ts       # AI personalization engine
```

## API Reference

### POST /api/generate

Generates React application code from natural language.

**Request:**
```json
{
  "prompt": "Create a todo list app with dark mode"
}
```

**Response:** Server-Sent Events (SSE) stream

**Event Types:**
- `code` - Component code generation progress
- `test` - Test suite generation progress
- `done` - Generation complete with metadata

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `CEREBRAS_API_KEY` | Yes | Cerebras Cloud API key for GPT-OSS-120B |

## Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/rajshah9305/NLPtoapp)

**Manual Deployment:**

```bash
npm i -g vercel
vercel --prod
```

Add `CEREBRAS_API_KEY` in Vercel Dashboard → Project Settings → Environment Variables

### Other Platforms

Compatible with any Next.js hosting platform:
- AWS Amplify
- Netlify
- Railway
- DigitalOcean App Platform

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Performance

- ✅ Zero TypeScript errors
- ✅ Zero ESLint warnings
- ✅ Zero security vulnerabilities
- ✅ Optimized bundle size: 102 kB first load
- ✅ GPU-accelerated animations at 60 FPS

## Security

- Environment variables secured (server-side only)
- Input sanitization implemented
- XSS prevention measures
- CSRF protection via Next.js
- Sandboxed iframe for preview
- Regular dependency updates

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Cerebras](https://cerebras.ai/) - GPT-OSS-120B language model
- [Vercel](https://vercel.com/) - Next.js framework and hosting
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) - Code editing experience
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## Contact

**Developer:** Raj Shah

- GitHub: [@rajshah9305](https://github.com/rajshah9305)
- Repository: [NLPtoapp](https://github.com/rajshah9305/NLPtoapp)
- Live Demo: [nlptoapp.vercel.app](https://nlptoapp.vercel.app)

## Support

- 🐛 [Report Bug](https://github.com/rajshah9305/NLPtoapp/issues)
- 💡 [Request Feature](https://github.com/rajshah9305/NLPtoapp/issues)

---

<div align="center">

**Built with ❤️ by [Raj Shah](https://github.com/rajshah9305)**

Powered by Cerebras GPT-OSS-120B

⭐ Star this repository if you find it helpful!

</div>
