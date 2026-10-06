import type { Dictionary } from '@/core/i18n/dictionary.types';

/**
 * English copy. `*text*` renders as italic emphasis (see RichText atom).
 * To add Arabic, copy this file to ar.ts and translate the values — the type keeps both in sync.
 */
export const en = {
  meta: {
    title: 'Hager Tarek — Product Designer',
    description:
      'End-to-end product design bridging data insights, true Arabic RTL localization, and frictionless user journeys for Gulf, MENA and global products.',
    ogAlt: 'Hager Tarek — Product Designer portfolio',
  },
  nav: {
    brandName: 'Hager Tarek',
    brandRole: 'Product Designer',
    work: 'Work',
    about: 'About',
    contact: 'Contact',
    backToWork: 'All work',
    skipToContent: 'Skip to content',
    primaryLabel: 'Primary',
  },
  common: {
    viewCaseStudy: 'View case study',
    caseStudy: 'Case study',
    nextProject: 'Next project',
    role: 'Role',
    product: 'Product',
    scope: 'Scope',
    timeline: 'Timeline',
    before: 'Before',
    after: 'After',
    scrollHint: 'Scroll',
    notFoundTitle: 'This page took a wrong turn.',
    notFoundBody: 'The page you are looking for does not exist or has moved.',
    notFoundCta: 'Back to the portfolio',
  },
  home: {
    hero: {
      title: 'Designing high-impact products for regional & *global* growth.',
      subtitle:
        'End-to-end product design bridging data insights, true Arabic RTL localization, and frictionless user journeys.',
      tags: 'Product design · Arabic RTL UX · Systems · Metrics',
      meta: 'Selected projects · 3+ years exp',
      portraitAlt: 'Portrait of Hager Tarek',
    },
    about: {
      eyebrow: 'Who I am',
      title: 'A Product Designer bridging *user behavior* with business viability.',
      body: 'I turn complex business constraints into clear, research-informed products, and build scalable interfaces and systems for Gulf and MENA markets, with a focus on reducing friction.',
      meta: [
        '3+ years · Cairo, working remotely',
        'KSA · UAE · Morocco · Arabic RTL native',
        'Works with product, dev & business teams',
      ],
      approachTitle: 'My approach, in the order I work',
      approach: [
        {
          title: 'UX thinking & research',
          body: 'Finding where people drop off, through Hotjar recordings, heatmaps and journey mapping.',
        },
        {
          title: 'Product strategy',
          body: 'Aligning user goals with business goals before a feature is designed.',
        },
        {
          title: 'Information architecture',
          body: 'Restructuring navigation around intent, so complex workflows read as one clear path.',
        },
        {
          title: 'Interaction design',
          body: 'Progressive, one-page flows that ask only what matters, when it matters.',
        },
        {
          title: 'Design systems',
          body: 'Tokenized component libraries with native Arabic RTL foundations, mapped to code.',
        },
        {
          title: 'UI & handoff',
          body: 'Responsive, consistent interfaces, specified for a clean developer handoff.',
        },
      ],
    },
    work: {
      eyebrow: 'Selected work — 3 projects',
      outro:
        'Each case study reads the same way: the insight, the process, the decisions and the thinking behind them, then *the screens and the system.*',
    },
    contact: {
      title: "Let's build scalable products that drive *real business impact.*",
      body: 'Available for Senior Product Design roles, Design System architecture, and strategic contract consultancies. Open to remote global opportunities.',
      labels: { email: 'Email', linkedin: 'LinkedIn', behance: 'Behance', whatsapp: 'WhatsApp' },
    },
  },
  projects: {
    digitalcar: {
      name: 'DigitalCar',
      category: 'Financing funnel redesign & core design system · Saudi Arabia',
      summary: 'Focused on friction reduction, affordability UX, and native RTL components.',
      logoAlt: 'DigitalCar logo',
      thumbAlt: 'DigitalCar desktop home page redesign',
    },
    rofoof: {
      name: 'Rofoof',
      category: 'E-commerce architecture & conversion optimization · UAE',
      summary: 'Designed for high-frequency retail & wholesale cart journeys.',
      logoAlt: 'Rofoof logo',
      thumbAlt: 'Rofoof customer app screens',
    },
    tourstica: {
      name: 'Tourstica',
      category: 'Travel experience & immersive discovery engine · Morocco',
      summary: 'End-to-end web & mobile product design built for booking conversion.',
      logoAlt: 'Tourstica logo',
      thumbAlt: 'Tourstica landing page hero',
    },
  },
  caseStudies: {
    digitalcar: {
      seoTitle: 'DigitalCar — Financing funnel redesign',
      seoDescription:
        'Answering "Can I afford this?" before users commit to browsing: a financing-first automotive experience and Arabic RTL design system for Saudi Arabia.',
      meta: {
        region: 'Saudi Arabia (KSA) · Gulf Financial UX',
        role: 'End-to-End Product Designer · Discovery, UX Strategy, Systems Architecture & UI Craft',
        product: 'Unified Automotive Ecosystem (Buy, Sell & Finance under a single account architecture)',
        scope: '61 Production-ready Mobile Web Screens · Scalable Arabic RTL Framework · Desktop Expansion Specs',
        timeline: '2 Months Behavioral Discovery · 7 Days Design System Architecture · 10 Days High-Fi Sprints',
      },
      blocks: {
        cover: {
          title: 'DigitalCar: Answering *"Can I afford this?"* before users commit to browsing.',
        },
        insight: {
          label: '01 — The insight',
          title: 'Flipping the mental model: From "Pick a car" to *"Discover your purchasing power."*',
          body: 'Standard automotive platforms assume buyers start with a specific car model. Our research revealed that affordability precedes discovery. By gating financing behind a long registration form, the legacy product introduced unnecessary cognitive load and high abandonment rates.',
          flow: {
            before: ['Pick a car', 'Long registration form', 'Find out if approved'],
            after: ['Discover your budget', 'Cars that fit it', 'Confirm the request'],
          },
        },
        process: {
          label: '02 — Process',
          title: 'Research before pixels. Structure before colour.',
          body: 'Two months studying the live product: a UX audit, Hotjar recordings and heatmaps to see where people got stuck, then a strategy, personas and journey maps. Flows and the sitemap were tested before the low-fi, and only then did the system and final screens begin.',
          stats: [
            { value: '2 months', label: 'Research & strategy', note: 'Audit, Hotjar, heatmaps, personas, journeys' },
            { value: 'Tested', label: 'Flows & sitemap', note: 'Information architecture validated' },
            { value: 'Low-fi', label: 'Structure', note: 'Every flow in grayscale' },
            { value: '7 days', label: 'Design system', note: 'Tokens, components, states' },
            { value: '10 days', label: 'High-fidelity', note: '61 screens, Arabic RTL' },
          ],
          note: 'AI and automation speed up production, so the time goes where it matters: research and decisions.',
          imageTitle: 'Research in Miro',
          imageCaption: 'Journey maps, UX audit and one set of priorities',
        },
        wireframes: {
          title: 'Low-fidelity wireframes',
          subtitle: 'Tested before any colour · 28 low-fi screens',
          captions: [
            'Financing · two doors, one confirmation: entry, calculator, result, confirm, received',
            'Buy · Sell · Research: home, car page, compare, sell and account',
          ],
        },
        decision1: {
          label: '03 — Key decisions',
          counter: '01',
          title: 'Surface Affordability First: Anchor on Monthly Payments, Not Total Price.',
          body: 'Integrated calculated monthly installments directly into the primary card layout. By establishing instant financial context from the first scroll, we significantly reduced bounce rates and pre-filtered cars by purchasing power.',
          rationaleTitle: 'Strategic rationale & behavioral intent',
          rationale:
            'Aligning UX language with user mental models. Financing buyers evaluate affordability via cash-flow impact rather than total liability. Presenting the monthly commitment upfront eliminates friction, speeds up discovery, and sets clear expectations early in the funnel.',
          imageAlt: 'Car listing cards showing the monthly installment next to the total price',
        },
        decision2: {
          label: 'Key decisions · 02 of 03',
          counter: '02',
          title: 'Embed Financing Calculation at the Point of Intent.',
          body: "Positioned 'Check Financing' as the primary CTA on product detail pages. Triggering an intuitive single-view calculator—capturing salary, obligations, down payment, and tenure—to immediately return calibrated installments and matched inventory.",
          rationaleTitle: 'Behavioral strategy & expectation management',
          rationale:
            'Eliminating late-stage rejection anxiety. Factoring financial obligations upfront protects trust, sets realistic expectations early, and prevents high churn caused by false pre-approvals later in the funnel.',
          imageAlt: 'Financing calculator embedded on the car detail page',
        },
        decision3: {
          label: 'Key decisions · 03 of 03',
          counter: '03',
          title: 'Transform Complex Comparisons into Decisive Actionable Insights.',
          body: 'Designed a progressive comparison matrix that highlights winning parameters per row, translates technical specs into plain-language pros/cons, and embeds an AI co-pilot to resolve final user hesitation.',
          rationaleTitle: 'Behavioral rationale & choice architecture',
          rationale:
            "Solving decision paralysis. Users compare to validate choices, not to cross-reference spec sheets. The UI performs the cognitive heavy-lifting—guiding the mental flow from 'Which car is better?' directly to 'This is the right car for me.'",
          imageAlt: 'Comparison screen highlighting the winning value per row',
        },
        screens: {
          label: '04 — Screens',
          title: 'From first scroll to a financing offer.',
          imageAlt: 'DigitalCar mobile screens: home, browse, car page, compare, model and bank offers',
        },
        webRedesign: {
          label: '04 — Web redesign',
          title: 'Desktop web · in progress, on the same system.',
          captions: [
            'Before: many things asking for attention. After: one focal point, search as the hero.',
          ],
        },
        palette: {
          label: '05 — Design system',
          title: 'Intentional Color Architecture: Guiding Action Through Purposeful Contrast.',
          body: 'Orange is strictly reserved for primary conversion triggers and brand accents, while a restrained neutral palette lowers cognitive noise—ensuring immediate visual focus on the next logical action.',
          swatches: {
            primary: { name: 'Primary', role: 'Brand Action Token · High-Intent CTAs' },
            hover: { name: 'Hover', role: 'Interactive State · Pressed & Focus' },
            onLight: { name: 'On light', role: 'Accessible Text · AA/AAA Contrast on Light Surface' },
            tint: { name: 'Primary tint', role: 'Active Surface · Highlights & Badges' },
            ink: { name: 'Ink', role: 'Primary Typography · High Contrast Neutral' },
            background: { name: 'Background', role: 'Canvas Surface · Low-Friction Neutral' },
            success: { name: 'Success', role: 'System Approved · Positive Feedback' },
            warning: { name: 'Warning', role: 'System Pending · Action Required' },
            error: { name: 'Error', role: 'System Critical · Validation Failure' },
          },
        },
        components: {
          title: 'Component library',
          subtitle: '8 of 32 sets · Figma',
          captions: [
            'Buttons, vehicle list items and detail cards, offer cards, phone verification, approval feedback, status tags and brand filters',
          ],
        },
        outcome: {
          label: '06 — Outcome',
          title: 'Handoff Complete & In Development: Validating Success Through Behavioral KPIs.',
          metrics: [
            {
              title: 'Financing Conversion Rate',
              body: "Tracking the conversion funnel from initial 'Check Financing' CTA click-through to final application submission.",
            },
            {
              title: 'Form Friction & Drop-Off Analytics',
              body: 'Monitoring field-level abandonment to identify friction points and continuously optimize form length.',
            },
            {
              title: 'Comparison Feature Attribution',
              body: 'Measuring downstream impact: percentage of comparison sessions that transition directly into active financing requests.',
            },
          ],
          status: 'Status: Mobile web in production development · Desktop expansion in progress',
        },
      },
    },
    rofoof: {
      seoTitle: 'Rofoof — Unified B2C & B2B grocery ecosystem',
      seoDescription:
        'One adaptive engine for retail and wholesale grocery: consumer app, courier app, admin ERP and a dual-theme design system for the UAE.',
      meta: {
        region: 'United Arab Emirates',
        role: 'Lead Product Designer · End-to-End UX/UI Architecture & Brand Identity',
        product: 'Multi-sided On-Demand Grocery Engine (Retail & Wholesale)',
        scope: '4 Interconnected Touchpoints: Consumer App, Courier App, Enterprise Admin ERP & Web Portal',
        timeline: 'Discovery & Research: 1 Month · System Design & Handoff: 20 Days',
      },
      blocks: {
        cover: {
          title: 'Rofoof: Designing a Unified Ecosystem Bridging B2C Retail & *B2B Wholesale* Grocery.',
        },
        insight: {
          label: '01 — The insight',
          title: 'A household orders 500g of grapes for today. A retailer orders 10 cartons *for next Thursday.*',
          body: 'Shared inventory, but fundamentally divergent unit economics, pricing tiers, bulk constraints, and fulfillment SLAs. Instead of fragmenting the user base into two separate applications, we built an adaptive unified engine where context dynamically dictates the transaction logic.',
          challenges: [
            {
              label: 'Challenge 1 · Dynamic quantity & tiered pricing',
              body: 'Household units (grams/kilos) vs. wholesale volume (cartons/crates with MOQs). How do we support tiered bulk pricing and minimum order thresholds within a single unified catalog interface?',
            },
            {
              label: 'Challenge 2 · Fulfillment & scheduling disparity',
              body: 'Instant on-demand delivery (<60 mins) vs. scheduled wholesale fulfillment windows. How do we seamlessly blend real-time dispatch logic with multi-day batch scheduling inside one checkout flow?',
            },
          ],
        },
        process: {
          label: '02 — Process',
          title: 'Four Interconnected Products, Engineered as One Cohesive Ecosystem.',
          body: 'Architected role-specific user journeys across four distinct personas: Consumer, Courier, Branch Manager, and Super Admin. Streamlined the end-to-end design lifecycle from cross-platform wireframes to a unified, dual-mode (Light/Dark) design system.',
          stats: [
            { value: '1 Month', label: 'Discovery & Ecosystem Architecture', note: 'Persona journeys, multi-role mapping & Retail vs. Wholesale logic' },
            { value: 'Low-fi Prototyping', label: 'Structural Wireframes', note: 'Multi-platform touchpoints: Consumer, Courier & ERP Admin' },
            { value: '20 Days', label: 'Design System Architecture', note: 'Tokenized UI kit, dual-theme support (Light/Dark) & scalable components' },
            { value: 'Hi-fi Production', label: 'High-Fidelity Handoff', note: 'Complete UI suite across 4 products with responsive web ERP' },
          ],
          note: 'Leveraged AI workflows and component automation to compress production time—enabling seamless delivery of 4 interconnected products within a tight timeline.',
          imageTitle: 'Adaptive onboarding',
          imageCaption:
            'A single contextual choice configures the entire platform experience for B2C Retail or B2B Wholesale.',
        },
        wireframes: {
          title: 'Low-fidelity wireframes',
          subtitle: 'Customer app, driver app and admin',
          captions: [
            'Customer app · one app, two ways of buying: onboarding, home, product, checkout and tracking',
          ],
        },
        decision1: {
          label: '03 — Key decisions',
          counter: '01',
          title: 'One Unified Layout, Contextual Transaction Logic.',
          body: 'Leveraged a single adaptive PDP (Product Detail Page) structure. Based on the initial onboarding intent, the UI dynamically switches pricing paradigms—displaying per-kg retail rates vs. tiered bulk pricing with MOQ (Minimum Order Quantity) constraints for wholesale buyers.',
          rationaleTitle: 'Strategic rationale & system efficiency',
          rationale:
            'Maximizing operational efficiency and cognitive familiarity. Maintaining a single UI architecture eliminates user retraining and drastically reduces design-to-engineering maintenance overhead. The contextual shift happens precisely at the point of decision without fragmenting the core experience.',
          imageAlt: 'The same product page in retail per-kg mode and wholesale MOQ mode',
        },
        decision2: {
          label: 'Key decisions · 02 of 03',
          counter: '02',
          title: 'Adaptive Fulfillment: Progressive Disclosure in Checkout Logistics.',
          body: 'Checkout intelligently defaults to instant delivery for high-speed B2C orders. Through progressive disclosure, a single tap unlocks same-day time slots or multi-day batch scheduling for bulk B2B shipments with a consolidated summary card.',
          rationaleTitle: 'Strategic rationale & UX efficiency',
          rationale:
            'Optimizing default paths to minimize transaction time. B2C users experience zero friction by skipping unnecessary scheduling steps, while B2B users gain full logistical precision via an on-demand modal—all within a single, unified checkout funnel.',
          imageAlt: 'Instant delivery default and the schedule delivery calendar',
        },
        decision3: {
          label: 'Key decisions · 03 of 03',
          counter: '03',
          title: 'Actionable Analytics: Transforming ERP Data into Direct Operational Workflows.',
          body: 'Shifted the Admin ERP from passive reporting to contextual execution. Every alert, status indicator, and order row embeds contextual primary actions—allowing admins to assign couriers, resolve delays, or trigger reorders in a single click without context switching.',
          rationaleTitle: 'Operational UX rationale',
          rationale:
            "Designing for operational velocity. Operational managers don't need passive metrics; they need immediate resolution pathways. By pairing system alerts directly with their resolution CTAs, we drastically reduce time-to-action and operational bottlenecks.",
          imageAlt: 'ERP dispatch center and low stock alerts with inline actions',
        },
        screens: {
          label: '04 — Screens',
          title: 'Customer app, in light and dark.',
          imageAlt: 'Rofoof customer app home and product page in light and dark themes, plus onboarding, cart and tracking',
        },
        driverAdmin: {
          label: '04 — Driver app & admin ERP',
          title: 'Decide in seconds, one hand. All branches, role-based.',
          captions: ['Driver earnings, order requests and route details, with the admin order and product management'],
        },
        palette: {
          label: '05 — Design system',
          title: 'Semantic Tokenization: Single Token Architecture, Dual-Theme Execution.',
          body: 'Established a robust semantic token system that normalizes component behavior across both Light and Dark themes. The signature brand navy anchors primary actions consistently, eliminating style ambiguity across cross-functional platforms.',
          note: 'Production-Ready Handoff: 1:1 mapping between Figma variables, CSS custom properties, and Tailwind CSS utility classes for seamless developer integration.',
          swatches: {
            primary: { name: 'Primary', role: 'Action' },
            hover: { name: 'Primary hover', role: 'Interactive' },
            tint: { name: 'Primary tint', role: 'Subtle bg' },
            ink: { name: 'Ink', role: 'Headings' },
            darkSurface: { name: 'Dark surface', role: 'Cards · dark' },
            darkPrimary: { name: 'Dark primary', role: 'Action · dark' },
            darkText: { name: 'Dark text', role: 'Body · dark' },
            success: { name: 'Success', role: 'Delivered' },
            warning: { name: 'Warning', role: 'Low stock' },
            danger: { name: 'Danger', role: 'Cancelled' },
            info: { name: 'Info', role: 'Updates' },
          },
        },
        brand: {
          label: 'Brand identity · Logo designed by me',
          title: 'Brand Identity: Designing a Scalable & Adaptive Logo System.',
          body: 'Architected a dynamic logomark symbolizing stacked shelves—bridging Retail and Wholesale within a unified framework. Engineered concurrently with the UI design system to ensure perfect color token alignment and seamless cross-platform adaptability.',
          captions: ['Rofoof logo system: combination mark, mark, color and monochrome variants'],
        },
        outcome: {
          label: '06 — Outcome',
          title: 'Success Metrics: Measuring Platform Health Across B2C & B2B Cohorts.',
          metrics: [
            {
              title: 'B2B Reorder Rate & Merchant Retention',
              body: 'Tracking purchase frequency and 30-day retention for B2B accounts to validate platform stickiness for inventory replenishment.',
            },
            {
              title: 'Fulfillment Adoption & Intent Accuracy',
              body: 'Analyzing fulfillment selection patterns to confirm B2B users adopt scheduled windows while B2C users convert via instant delivery.',
            },
            {
              title: 'ERP Dispatch Velocity & Time-to-Action',
              body: 'Measuring the operational impact of inline ERP alerts—specifically the reduction in order assignment and courier dispatch latency.',
            },
          ],
          status: 'Client deliverable · Production-ready design handoff complete',
          imageAlt: 'Wholesale product page, delivery scheduling and dispatch center',
        },
      },
    },
    tourstica: {
      seoTitle: 'Tourstica — Storytelling-driven travel UX',
      seoDescription:
        'A destination first, a booking second: a story-led, trust-first travel marketplace for authentic local experiences in Morocco.',
      meta: {
        region: 'Morocco',
        role: 'Lead Product Designer — End-to-End UX/UI Architecture & Brand Identity',
        product: 'Curated Marketplace for Authentic Local Travel Experiences',
        scope: 'Responsive Web Platform (Desktop/Mobile), Experience Discovery, Storytelling Modules & Identity',
        timeline: '2-Week Intensive Sprint',
      },
      blocks: {
        cover: {
          title: 'Tourstica: *Storytelling-Driven* UX for High-Conversion Travel Experiences.',
          intro:
            'Transforming traditional travel booking into an immersive cultural journey. By prioritizing authentic storytelling and local narrative before transaction, we drive emotional engagement that significantly boosts booking conversions.',
          tagline: '*A destination first — a booking second.*',
        },
        insight: {
          label: '01 — The insight',
          title: "Destinations aren't selected from price grids. They're chosen through emotional resonance—*and validated by trust.*",
          body: 'Traditional travel platforms immediately force transactional mechanics—search bars and price tables. For first-time visitors, this bypasses the two core psychological drivers of conversion: emotional desire and host credibility. Tourstica flips this model by leading with immersive local narratives before introducing the booking action.',
          imageAlt: 'Tourstica hero and the trust section with verification badges',
        },
        process: {
          label: '02 — Process',
          title: 'Information Architecture: Structuring Narrative Flow Before Visual Polish.',
          body: 'Mapped the user journey like a story narrative across structural chapters: Discovery → Experiences → Local Hosts → Trust Validation → Stories → Actionable Planning. Low-fidelity wireframes validated section hierarchy and conversion touchpoints prior to visual asset curation.',
          stats: [
            { value: 'Week 1 · UX', note: 'UX Strategy · Narrative Architecture, Trust Model Definition & Low-Fi Wireframing' },
            { value: 'Week 2 · Design', note: 'Visual UI System · High-Fidelity Responsive Design (Desktop & Mobile) & Asset Orchestration' },
          ],
          note: 'Delivered full end-to-end responsive design within a 2-week sprint by leveraging AI generation and automated workflows for layout iteration and content prototyping.',
          imageTitle: 'Low-fidelity wireframes',
          imageCaption: 'Structure before imagery: the page as chapters — feeling, interest, hosts, trust, stories.',
        },
        decision1: {
          label: '03 — Key decisions',
          counter: '01',
          title: 'Inspiration-Driven Architecture: Destination First, Transaction Second.',
          body: 'Architected the landing experience to lead with emotional immersion rather than transactional utility. By guiding users through interest-based discovery before presenting booking options, we eliminate choice paralysis and build genuine booking intent.',
          rationaleTitle: 'Strategic rationale',
          rationale:
            'Aligned product discovery with natural human decision-making: Inspiration builds emotional connection, emotional connection establishes value, and value context renders price resistance secondary.',
          imageAlt: 'Emotional hero section and interest-led visual taxonomy',
        },
        decision2: {
          label: 'Key decisions · 02 of 03',
          counter: '02',
          title: 'Trust Architecture: Designing Systemic Credibility & Frictionless Safety.',
          body: 'Integrated transparent trust mechanics directly into the decision flow. Every experience highlights vetted local hosts alongside a 4-point verification framework (Verified Identity, Licensed Guide, Local Residency, Top Rating) to eliminate user skepticism prior to booking.',
          rationaleTitle: 'Strategic rationale',
          rationale:
            'Addressing the core psychological barrier in peer-to-peer travel: physical safety anxiety. By embedding multi-layered verification signals directly at the point of evaluation, we convert user hesitation into confidence.',
          imageAlt: 'Verification matrix and humanized host profiles',
        },
        decision3: {
          label: 'Key decisions · 03 of 03',
          counter: '03',
          title: 'Zero-Friction Onboarding: Progressive Commitment & Story-Led Conversion.',
          body: 'Eliminated upfront friction by deferring account creation and payment capture until host confirmation. Transformed user-generated travel stories into direct transactional pathways—allowing users to book exact trip itineraries in a single click.',
          rationaleTitle: 'Strategic rationale',
          rationale:
            'Minimizing initial interaction cost to maximize exploration depth. Users unburdened by mandatory registration engage longer, allowing authentic traveler stories to serve as contextual gateways directly into the conversion funnel.',
          imageAlt: 'Four-step booking guide and traveler stories with book-the-same-trip actions',
        },
        screens: {
          label: '04 — Screens',
          title: 'Full Experience Architecture: A Chapter-Based Narrative Landing Page.',
          body: 'A sequential page structure designed to guide the user from initial emotional inspiration to host verification, peer validation, and effortless booking conversion.',
          imageAlt: 'Four chapters of the Tourstica landing page',
        },
        palette: {
          label: '05 — Design system',
          title: 'Color System: Intentional Contrast & Semantic Action Tokens.',
          body: "Deep Forest Green forms the cultural and visual foundation, while Terracotta is strictly reserved as a high-contrast semantic token for primary actions (color-action-primary). This strict hierarchy trains user intuition—ensuring Terracotta unequivocally signifies 'Interactivity'.",
          imageAlt: 'Experience card and host card built with the Tourstica tokens',
          swatches: {
            darkGreen: { name: 'Dark green', role: 'Structural canvas & deep emphasis cards', token: 'color-bg-anchor' },
            terracotta: { name: 'Terracotta', role: 'High-priority CTAs & interactive triggers', token: 'color-action-primary' },
            cream: { name: 'Warm cream', role: 'Editorial card backgrounds & soft contrast', token: 'color-bg-surface-light' },
            sectionGreen: { name: 'Section green', role: 'Section separation & secondary containers', token: 'color-bg-surface-dark' },
            page: { name: 'Page', role: 'Main page background canvas', token: 'color-bg-base' },
            terracottaLight: { name: 'Terracotta light', role: 'Active states, hover highlights & badge fills', token: 'color-action-hover' },
          },
        },
        outcome: {
          label: '06 — Outcome',
          title: 'Success Metrics: Validating the Story-First Approach via Behavioral KPIs.',
          metrics: [
            {
              title: 'Content-Driven Conversion Rate',
              body: 'Tracking the conversion rate and direct revenue attribution from story readers activating the "Book The Same Trip" CTA.',
            },
            {
              title: 'Unauthenticated Session Depth',
              body: 'Measuring increase in average session duration and depth prior to mandatory authentication steps.',
            },
            {
              title: 'Trust Signals & Cancellation Drop',
              body: 'Evaluating how visible host verification badges impact pre-booking support inquiries and post-booking cancellation rates.',
            },
          ],
          status: 'Client deliverable · Production-ready design handoff complete',
          imageAlt: 'Traveler stories, interest discovery and a host card',
        },
      },
    },
  },
} satisfies Dictionary;
