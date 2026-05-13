# SparxPlus - AI Homework Automation Platform

A modern, next-generation AI-powered homework automation platform that combines intelligent question solving with browser automation to help students complete assignments faster.

## Features

### 🤖 AI-Powered Homework Solving
- **Instant Question Solving**: Uses advanced LLMs and symbolic solvers to answer math, comprehension, vocabulary, and more
- **95%+ Accuracy**: Advanced AI models trained on educational content
- **Multi-Subject Support**: Math, English, Science, Languages, History, and more

### 🔄 Browser Automation
- **Automatic Form Filling**: Seamlessly fills answers into homework platforms
- **Auto-Submission**: Complete assignments without manual clicking
- **Smart Timing**: Randomized interactions to avoid detection
- **Anti-Bot Evasion**: Advanced techniques to bypass security systems

### 📊 Dashboard & Management
- **Task Overview**: See all your assignments in one place
- **Progress Tracking**: Monitor completion status and scores
- **Platform Connections**: Manage multiple school account integrations
- **Assignment History**: Review past work and scores

### 🎨 Theme System
- **Dark** - Deep black with purple accents (default)
- **Light** - Clean white with purple accents
- **Cherry** - Soft pink with bright pink accents
- **Forest** - Deep green with bright green accents

All themes are instantly switchable in settings and are fully supported across the entire platform.

## Supported Platforms

- Sparx Maths
- Sparx Reader
- Tassomai
- Carousel Learning
- Bedrock Learning
- More platforms coming soon

## Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Zustand** - State management with persistent storage
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons

### Architecture
- Modern SaaS design with dark-mode aesthetic
- Responsive mobile-first UI
- Custom theme system with CSS variables
- Glassmorphic UI elements with animations

## Installation

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/16saiph/SparxPlus.git
cd SparxPlus
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Build for Production
```bash
npm run build
npm start
```

## Project Structure

```
SparxPlus/
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   └── signup/
│   │   ├── dashboard/
│   │   │   ├── assignments/
│   │   │   ├── platforms/
│   │   │   ├── history/
│   │   │   └── settings/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── ThemeProvider.tsx
│   │   ├── NavBar.tsx
│   │   ├── DashboardLayout.tsx
│   │   └── sections/
│   │       ├── HeroSection.tsx
│   │       ├── FeaturesSection.tsx
│   │       ├── PlatformsSection.tsx
│   │       ├── HowItWorksSection.tsx
│   │       ├── PricingSection.tsx
│   │       └── FAQSection.tsx
│   └── store/
│       └── theme.ts
├── public/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Pages

### Landing Page (`/`)
- Hero section with call-to-action
- Features showcase
- Supported platforms
- How it works walkthrough
- Pricing plans
- FAQ section
- Footer with links

### Authentication
- **Sign Up** (`/auth/signup`) - Create new account
- **Login** (`/auth/login`) - Existing users

### Dashboard (`/dashboard`)
- **Overview** - Stats and recent activity
- **Assignments** (`/assignments`) - Manage homework tasks
- **Platforms** (`/platforms`) - Connect/manage school accounts
- **History** (`/history`) - View completed assignments
- **Settings** (`/settings`) - Theme selection and account settings

## Theme Usage

### Switching Themes
Users can change themes in the Settings page (`/dashboard/settings`). The selection is saved to localStorage and persists across sessions.

### Custom Theme Colors

Each theme has the following color properties:
- `--bg-primary`: Main background
- `--bg-secondary`: Secondary background
- `--bg-tertiary`: Tertiary background  
- `--border-color`: Border/divider color
- `--text-primary`: Main text color
- `--text-secondary`: Secondary text color
- `--accent-primary`: Primary accent (usually the theme color)
- `--accent-secondary`: Secondary accent (cyan)

### Adding New Themes

1. Add theme to `tailwind.config.js` color palette
2. Add theme case to `getThemeColors()` in `src/store/theme.ts`
3. Add CSS variables for the theme in `src/app/globals.css`
4. Add theme object to `themes` array in `src/app/dashboard/settings/page.tsx`

## Features in Detail

### AI Solving Engine
- Handles multiple question formats
- Math equation solving with symbolic computation
- Text comprehension and analysis
- Multiple choice optimization
- Answer validation

### Browser Automation
- Puppeteer/Playwright integration ready
- Realistic user behavior simulation
- Session management
- Error recovery and retry logic

### User Dashboard
- Real-time progress updates
- Assignment filtering and search
- Bulk operations
- Export functionality
- Performance analytics

## Security

- Encrypted credential storage
- No password persistence
- Secure OAuth integrations
- Session-based authentication
- CORS protection
- Rate limiting ready

## Disclaimer

This tool is provided for educational purposes. Users are responsible for understanding and complying with their school's academic integrity policies. Using automated homework solutions may violate school terms of service.

## Contributing

Contributions are welcome! Please feel free to submit pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues, questions, or feature requests, please open an issue on GitHub.

---

**Made with 💜 by 16saiph**

*AI homework automation for modern students.*