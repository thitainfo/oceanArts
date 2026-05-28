import Link from "next/link"
import {
  PenTool,
  Layers,
  Scissors,
  Wand2,
  Package,
  Database,
  ArrowRight,
  CheckCircle,
  Upload,
  FileText,
  Star,
} from "lucide-react"
import TrialForm from "@/components/forms/trial-form"

const services = [
  {
    icon: PenTool,
    title: "Vector Artwork",
    description:
      "Clean vectorization of raster images — ideal for screen printing, vinyl cutting, engraving, and professional image-to-vector conversion worldwide.",
  },
  {
    icon: Layers,
    title: "Logo Redraw",
    description:
      "Convert blurry logos into crisp vector files (AI, EPS, SVG, PDF). Perfect for reprinting, scaling, and professional brand applications.",
  },
  {
    icon: Scissors,
    title: "Embroidery Digitizing",
    description:
      "Perfect DST & EMB files for embroidery machines with accurate stitching, color matching, and optimized stitch paths for any design.",
  },
  {
    icon: Wand2,
    title: "Digital Image Editing",
    description:
      "Professional clean-up, background removal, color correction, photo retouching, and high-quality image enhancement for e-commerce and marketing.",
  },
  {
    icon: Package,
    title: "Product Mockup",
    description:
      "Realistic product mockups and virtual proofs showcasing packaging, branding, and promotional designs with a print-ready look.",
  },
  {
    icon: Database,
    title: "Admin & Data Support",
    description:
      "PO entry, back-office support, and data entry services ensuring smooth day-to-day operations for businesses in the USA and worldwide.",
  },
]

const portfolioPreview = [
  {
    title: "Vector Artwork",
    description: "High-detail vector illustration with modern artistic touch",
    gradient: "from-cyan-600 to-teal-700",
    category: "Vector Art",
  },
  {
    title: "Graphic Design",
    description: "Bold promotional poster inspired by modern branding aesthetics",
    gradient: "from-violet-600 to-purple-700",
    category: "Graphic Design",
  },
  {
    title: "Custom Design",
    description: "Vintage-style vector art created for apparel and merchandise",
    gradient: "from-orange-500 to-amber-600",
    category: "Custom Design",
  },
]

const testimonials = [
  {
    quote:
      "OceanArts delivered exactly what I needed. Super fast turnaround and great communication throughout the whole project!",
    name: "Mark T.",
    location: "Houston, TX — USA",
    initials: "MT",
  },
  {
    quote:
      "Excellent tracing and color accuracy. My go-to team for all vector jobs. Highly recommend for any design work.",
    name: "Linda P.",
    location: "United Kingdom",
    initials: "LP",
  },
  {
    quote:
      "Professional service with quick turnaround. Highly recommended for all design needs — they really go above and beyond.",
    name: "Sarah K.",
    location: "Sandy, Australia",
    initials: "SK",
  },
]

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Send Requirements",
    description:
      "Share your design files or requirements with us via email or the contact form. Any format works.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Get Free Quote",
    description:
      "We'll review your project and provide a free quote with a clear timeline — usually within 2 hours.",
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Approve & Receive",
    description:
      "Approve the quote and our team gets to work. Receive your final files with unlimited revisions.",
  },
]

function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20 bg-[#0B1929] overflow-hidden"
      aria-label="Hero"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.07) 1px, transparent 0)",
          backgroundSize: "36px 36px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(8,145,178,0.13),transparent)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent" />

      <div className="relative max-w-4xl mx-auto text-center z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-500/8 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-medium text-cyan-300 tracking-wide">
            Creative Design Studio · Houston, TX
          </span>
        </div>

        <h1 className="font-heading font-black text-5xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.08] mb-6">
          Precision Design,{" "}
          <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">
            Delivered Worldwide.
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
          Expert vector artwork, logo design, embroidery digitizing &amp; web
          solutions — trusted by 95+ businesses across USA, Canada, UK &amp;
          Australia with a 24/7 dedicated team.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-cyan-600 text-white font-semibold text-base hover:bg-cyan-500 active:bg-cyan-700 transition-all duration-150 shadow-lg shadow-cyan-600/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
          >
            Start Free Trial
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 text-white font-semibold text-base hover:bg-white/8 transition-all duration-150"
          >
            View Portfolio
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
          {[
            "100% Manual Tracing",
            "24/7 Global Team",
            "Fast Turnaround",
            "Money-Back Guarantee",
          ].map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/8"
            >
              <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" aria-hidden="true" />
              <span className="text-xs text-slate-300 font-medium leading-tight">
                {badge}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}

function StatsStrip() {
  const stats = [
    { value: "120+", label: "Projects Completed" },
    { value: "95+", label: "Happy Clients" },
    { value: "4", label: "Countries Served" },
    { value: "10+", label: "Years Experience" },
  ]
  return (
    <section className="bg-slate-50 border-y border-slate-200" aria-label="Stats">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-heading font-black text-4xl text-cyan-600 mb-1">{s.value}</div>
              <div className="text-sm text-slate-500 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 bg-white" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.15em] uppercase text-cyan-600 mb-3 block">
            What We Do
          </span>
          <h2
            id="services-heading"
            className="font-heading font-bold text-4xl md:text-5xl tracking-tight text-slate-900 mb-4"
          >
            Our Services
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Comprehensive design solutions for all your business needs — from concept
            to print-ready files.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="group p-7 rounded-2xl border border-slate-200 bg-white hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-600/5 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-cyan-50 flex items-center justify-center mb-5 group-hover:bg-cyan-100 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-cyan-600" aria-hidden="true" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 hover:text-cyan-700 transition-colors"
          >
            Explore all services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function PortfolioPreview() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50" aria-labelledby="portfolio-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.15em] uppercase text-cyan-600 mb-3 block">
            Recent Work
          </span>
          <h2
            id="portfolio-heading"
            className="font-heading font-bold text-4xl md:text-5xl tracking-tight text-slate-900 mb-4"
          >
            Our Sample Works
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            A glimpse into our recent creative projects across industries and formats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {portfolioPreview.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-500 group-hover:scale-105`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="text-xs font-semibold tracking-widest uppercase text-white/65 mb-1">
                  {item.category}
                </span>
                <h3 className="font-heading font-bold text-xl text-white">{item.title}</h3>
                <p className="text-xs text-white/55 mt-1 leading-relaxed">{item.description}</p>
              </div>
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="w-3.5 h-3.5 text-white" aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm hover:border-cyan-600 hover:text-cyan-600 transition-all duration-150"
          >
            View All Portfolios
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-white" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.15em] uppercase text-cyan-600 mb-3 block">
            Client Voices
          </span>
          <h2
            id="testimonials-heading"
            className="font-heading font-bold text-4xl md:text-5xl tracking-tight text-slate-900 mb-4"
          >
            What Our Clients Say
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            We take pride in delivering exceptional results across every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-7 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:shadow-slate-900/5 transition-shadow duration-300"
            >
              <div className="flex gap-0.5 mb-4" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center text-white font-bold text-sm shrink-0" aria-hidden="true">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section
      className="py-24 lg:py-32 bg-[#0B1929] relative overflow-hidden"
      aria-labelledby="process-heading"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.05) 1px, transparent 0)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.15em] uppercase text-cyan-400 mb-3 block">
            The Process
          </span>
          <h2
            id="process-heading"
            className="font-heading font-bold text-4xl md:text-5xl tracking-tight text-white mb-4"
          >
            How It Works
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            A simple, transparent process to get your project delivered with excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="relative text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-600/15 border border-cyan-600/25 mb-5 group-hover:bg-cyan-600/25 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-cyan-400" aria-hidden="true" />
                </div>
                <div className="font-heading font-black text-6xl text-white/4 absolute -top-4 left-1/2 -translate-x-1/2 select-none">
                  {idx + 1}
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function TrialSection() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50" aria-labelledby="trial-heading">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-cyan-600 mb-3 block">
              Zero Cost
            </span>
            <h2
              id="trial-heading"
              className="font-heading font-bold text-4xl md:text-5xl tracking-tight text-slate-900 mb-5"
            >
              Start Your<br />Free Trial
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-8">
              No commitment, no credit card required. Share your project details and
              experience our quality firsthand.
            </p>
            <ul className="space-y-3">
              {[
                "Free sample on your first project",
                "Response within 2–4 hours",
                "100% Money-Back Guarantee",
                "24/7 global support team",
              ].map((point) => (
                <li key={point} className="flex items-center gap-3 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-cyan-500 shrink-0" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <TrialForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <ServicesSection />
      <PortfolioPreview />
      <Testimonials />
      <HowItWorks />
      <TrialSection />
    </>
  )
}
