
# Transcredit Microfinance Services (TMS) - Embedded Financial Platform

![Transcredit Hero Banner](./public/images/hero-banner.jpg)

A modern, responsive web application for Transcredit Microfinance Services, enabling embedded financial services across Tanzania and East Africa.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

### Core Functionality
- **Multi-step Partner Onboarding Form**
  - Beautiful form wizard with progress tracking
  - Data validation and PDF generation
  - Automatic email integration

- **Service Offerings**
  - Fuel Loans (Refuel Now, Pay Later)
  - MSME Financing (Working Capital)
  - Emergency Loans (Medical/School Fees)
  - Embedded Loan APIs for platforms

- **User Experience**
  - Animated page transitions
  - Responsive design for all devices
  - Accessibility optimized

### Technical Highlights
- React.js with TypeScript
- Vite build system
- Framer Motion animations
- Tailwind CSS styling
- Form handling with react-hook-form
- PDF generation with jsPDF

## Technologies Used

### Frontend
- ![React](https://img.shields.io/badge/React-18.2-blue)
- ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
- ![Vite](https://img.shields.io/badge/Vite-4.0-orange)
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-blue)
- ![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.0-purple)

### Form Handling
- ![React Hook Form](https://img.shields.io/badge/React_Hook_Form-7.0-blue)
- ![Yup Validation](https://img.shields.io/badge/Yup-1.0-green)

### Utilities
- ![jsPDF](https://img.shields.io/badge/jsPDF-2.5-red)
- ![React Icons](https://img.shields.io/badge/React_Icons-4.0-pink)

## Installation

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher) or yarn
- Git

### Setup Instructions
1. Clone the repository:
```bash
git clone https://github.com/your-username/transcredit-tms.git
cd transcredit-tms
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Configure environment variables:
```bash
cp .env.example .env
```

4. Start development server:
```bash
npm run dev
# or
yarn dev
```

## Project Structure
```
transcredit-tms/
├── public/                  # Static assets
│   ├── images/              # Project images
│   └── pdf-templates/       # PDF templates
├── src/
│   ├── assets/              # Local assets
│   ├── components/          # Reusable components
│   │   ├── Form/            # Form wizard components
│   │   ├── animations/      # Animation presets
│   │   └── ui/              # UI components
│   ├── pages/               # Application pages
│   ├── types/               # TypeScript types
│   ├── utils/               # Utility functions
│   ├── App.tsx              # Main application
│   └── main.tsx             # Entry point
├── .env.example             # Environment variables template
├── tsconfig.json            # TypeScript config
├── vite.config.ts           # Vite config
└── package.json             # Project dependencies
```

## Configuration

### Environment Variables
Create a `.env` file in the root directory with the following variables:
```env
VITE_APP_TITLE="Transcredit Microfinance"
VITE_APP_EMAIL=info@transcredit.co.tz
VITE_APP_API_BASE=https://api.transcredit.co.tz/v1
```

### Tailwind Configuration
The project uses a custom color palette:
```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#005452',
        secondary: '#F7FAFF',
        accent: '#00A19A',
      }
    }
  }
}
```

## Deployment

### Building for Production
```bash
npm run build
# or
yarn build
```

### Deployment Options

**Vercel (Recommended):**
- Connect your GitHub repository
- Set environment variables
- Deploy automatically on push

**Netlify:**
```bash
npm install -g netlify-cli
netlify deploy
```

**Static Hosting:**
- Serve the `dist` folder from any web server

## Contributing
We welcome contributions! Please follow these steps:
- Fork the repository
- Create your feature branch (`git checkout -b feature/your-feature`)
- Commit your changes (`git commit -m 'Add some feature'`)
- Push to the branch (`git push origin feature/your-feature`)
- Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.
