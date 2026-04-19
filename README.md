# KAKAS GLOBAL LIMITED Website

A modern, professional website for KAKAS GLOBAL LIMITED - a Nigerian company exporting agricultural raw materials to international buyers.

## Features

### Core Pages
1. **Home / Landing Page** - Hero section with tagline, value proposition, featured products carousel, trust indicators
2. **About Us** - Company story, mission & vision, core values, leadership team
3. **Products** - Grid layout for 10+ agricultural products with detailed information
4. **Services** - Sourcing, quality control, logistics, packaging, documentation
5. **Quality Assurance** - 6-stage quality process, certifications, testing parameters
6. **Contact Us** - Contact form with WhatsApp integration, company details, map

### Additional Features
7. **Request a Quote (RFQ)** - Multi-step form for product quotations
8. **Professional Design** - Clean, corporate B2B design with agricultural color palette
9. **Responsive Layout** - Mobile-first design that works on all devices
10. **Language Toggle** - Support for English, French, and Arabic
11. **WhatsApp Widget** - Floating WhatsApp button for instant communication
12. **SEO Optimized** - Semantic HTML, meta tags, structured data

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Responsive Design**: Mobile-first approach
- **Performance**: Optimized images, lazy loading

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn

### Installation
```bash
cd kakas-global
npm install
```

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
npm start
```

## Project Structure

```
kakas-global/
├── app/                    # Next.js app router pages
│   ├── page.tsx           # Homepage
│   ├── about/             # About Us page
│   ├── products/          # Products page
│   ├── services/          # Services page
│   ├── quality/           # Quality Assurance page
│   ├── contact/           # Contact Us page
│   └── request-quote/     # Request Quote page
├── components/            # Reusable components
│   ├── Navbar.tsx         # Navigation bar
│   ├── Footer.tsx         # Footer component
│   └── WhatsAppWidget.tsx # WhatsApp chat widget
├── public/                # Static assets
└── package.json          # Dependencies
```

## Design System

### Colors
- **Primary**: Emerald Green (#10B981) - Represents agriculture, growth
- **Secondary**: Amber Gold (#F59E0B) - Represents quality, value
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Headings**: Inter (sans-serif)
- **Body**: System fonts for optimal performance

## Key Features Implemented

1. **Multi-step RFQ Form**: Guided process for requesting quotes
2. **Product Grid**: Interactive product cards with detailed information
3. **Quality Process Timeline**: Visual representation of 6-stage quality control
4. **Contact Form**: With validation and WhatsApp integration
5. **Language Selector**: Ready for internationalization
6. **Responsive Navigation**: Mobile-friendly hamburger menu
7. **Trust Indicators**: Certifications, years in business, countries served

## Next Steps for Production

1. **Add Real Content**: Replace placeholder text with actual company information
2. **Connect Backend**: Integrate with CMS or database for dynamic content
3. **Add Analytics**: Google Analytics or similar for tracking
4. **SEO Optimization**: Add meta descriptions, Open Graph tags
5. **Performance Testing**: Lighthouse optimization
6. **Security**: Implement proper form validation and security headers
7. **Internationalization**: Full translation for French and Arabic

## License

This project is proprietary and belongs to KAKAS GLOBAL LIMITED.

## Contact

For questions about this website implementation, contact the development team.