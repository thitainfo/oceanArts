import type { Metadata } from "next"
import Link from "next/link"
import {
  PenTool,
  Layers,
  Scissors,
  Wand2,
  Package,
  Database,
  Globe2,
  Clock,
  DollarSign,
  RefreshCw,
  Phone,
  Shield,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive design services: vector artwork, logo design, embroidery digitizing, product mockups, digital image editing, and web design. Serving businesses worldwide.",
}

const services = [
  {
    icon: PenTool,
    title: "Vector Artwork & Conversion",
    description:
      "Convert your raster images (JPEG, PNG, etc.) into scalable vector formats (AI, EPS, SVG) perfect for printing, embroidery, and large-format applications.",
    features: [
      "High-precision manual tracing",
      "Multiple format delivery",
      "Unlimited revisions",
      "Fast turnaround (24–48 hours)",
    ],
    accent: "from-cyan-500 to-teal-600",
  },
  {
    icon: Layers,
    title: "Logo Design & Branding",
    description:
      "Create a memorable brand identity with custom logo designs and comprehensive branding packages that reflect your company's values and vision.",
    features: [
      "Multiple concept options",
      "Brand style guide included",
      "Stationery design",
      "Social media kit",
    ],
    accent: "from-violet-500 to-purple-600",
  },
  {
    icon: Globe2,
    title: "Web Design & Development",
    description:
      "Build a professional online presence with responsive, user-friendly websites that attract visitors and convert them into customers.",
    features: [
      "Responsive design",
      "SEO optimization",
      "Content management system",
      "E-commerce solutions",
    ],
    accent: "from-blue-500 to-indigo-600",
  },
  {
    icon: Scissors,
    title: "Embroidery Digitizing",
    description:
      "Convert your logos and designs into embroidery files compatible with industrial machines for apparel, caps, and promotional items.",
    features: [
      "Multiple file formats (DST, PES, etc.)",
      "Stitch optimization",
      "Accurate color matching",
      "Fast turnaround",
    ],
    accent: "from-rose-500 to-pink-600",
  },
  {
    icon: Package,
    title: "Product Mockup / Virtual Proof",
    description:
      "Create realistic product mockups and virtual proofs to visualize your designs on actual products before production — perfect for presentations and client approvals.",
    features: [
      "Virtual proof mockup",
      "Multiple angles and views",
      "Customizable backgrounds",
      "Print-ready mockups",
    ],
    accent: "from-orange-500 to-amber-600",
  },
  {
    icon: Wand2,
    title: "Digital Image Editing",
    description:
      "Enhance and refine your photos with professional image editing services — perfect for e-commerce, marketing, and personal use with high-quality polished results.",
    features: [
      "Background removal & replacement",
      "Color correction & retouching",
      "Clipping paths & masking",
      "Product photo enhancement",
    ],
    accent: "from-emerald-500 to-green-600",
  },
]

const whyUs = [
  {
    icon: Globe2,
    title: "Global Expertise",
    description: "Our team combines international design perspectives with local market understanding.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "24/7 operations ensure quick project completion without compromising quality.",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description: "High-quality design services at prices that offer exceptional value.",
  },
  {
    icon: RefreshCw,
    title: "Unlimited Revisions",
    description: "We work with you until you're completely satisfied with the results.",
  },
  {
    icon: Phone,
    title: "Direct Communication",
    description: "US-based project management ensures clear, responsive communication.",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "We stand behind our work with a 100% satisfaction guarantee.",
  },
]

const serviceAreas = {
  USA: [
    "New York", "Los Angeles", "Chicago", "Houston", "Dallas",
    "San Francisco", "Austin", "Miami", "Washington D.C.", "Boston",
    "Atlanta", "Seattle", "Denver", "Phoenix", "San Diego",
  ],
  Australia: [
    "Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide",
    "Gold Coast", "Canberra", "Newcastle", "Wollongong", "Sandy",
  ],
  Canada: [
    "Toronto", "Vancouver", "Montreal", "Calgary", "Edmonton",
    "Ottawa", "Winnipeg", "Quebec City", "Hamilton", "Kitchener",
  ],
  UK: [
    "London", "Manchester", "Birmingham", "Leeds", "Glasgow",
    "Liverpool", "Bristol", "Sheffield", "Edinburgh", "Newcastle",
  ],
}

const faqs = [
  {
    q: "What file formats do you deliver?",
    a: "We deliver in all standard formats based on your needs: AI, EPS, SVG, PDF for vector files; PNG, JPEG, TIFF for raster; DST, PES, EMB, JEF for embroidery. Just let us know what you need and we'll accommodate.",
  },
  {
    q: "How long does a typical project take?",
    a: "Most vector artwork and logo redraws are completed within 24–48 hours. Embroidery digitizing takes 12–24 hours. Complex projects like full branding or web design can take 3–7 business days. Rush service is available.",
  },
  {
    q: "Do you offer revisions?",
    a: "Yes — we offer unlimited revisions until you're 100% satisfied with the result. We want to make sure every project meets your exact requirements before delivery.",
  },
  {
    q: "What if I need rush service?",
    a: "We offer expedited turnaround for urgent projects. Simply mention your deadline when you contact us, and we'll prioritize your project. Our 24/7 team means we can work around the clock to meet tight deadlines.",
  },
  {
    q: "How do I get started?",
    a: "Simply use the contact form or email us with your project details. We'll provide a free quote within 2–4 hours. Once approved, we get started immediately. For a free trial, just request it — no payment needed upfront.",
  },
]

type AreaKey = keyof typeof serviceAreas

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-[#0B1929] pt-32 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.06) 1px, transparent 0)",
            backgroundSize: "36px 36px",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(8,145,178,0.11),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <nav className="text-xs text-slate-500 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-slate-400">Services</span>
          </nav>
          <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-5">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">
              Services
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Comprehensive design solutions tailored to your business needs — from vector
            artwork to complete web solutions.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-lg text-slate-600 leading-relaxed">
            At OceanArts, we offer a wide range of design services that help businesses
            build a strong identity and stand out in the market. Whether you need vector
            artwork for printing, a beautiful website, or complete branding solutions —
            we manage it all. Our services are designed to assist startups, small companies,
            and large enterprises alike.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-600 text-white font-semibold text-sm hover:bg-cyan-700 transition-colors"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 pb-24 bg-white" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className="group flex flex-col rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-slate-900/8 transition-all duration-300"
                >
                  <div className={`h-2 bg-gradient-to-r ${service.accent}`} />
                  <div className="flex flex-col flex-1 p-7">
                    <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center mb-5 group-hover:bg-slate-200 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-slate-700" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-slate-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-5 flex-1">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-slate-600">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-500 shrink-0" aria-hidden="true" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 hover:text-cyan-700 transition-colors"
                    >
                      Free Quote
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-24 lg:py-32 bg-slate-50" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-cyan-600 mb-3 block">
              The Difference
            </span>
            <h2
              id="why-heading"
              className="font-heading font-bold text-4xl md:text-5xl tracking-tight text-slate-900 mb-4"
            >
              Why Choose OceanArts?
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              What sets us apart from other design service providers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-slate-200 hover:border-cyan-200 transition-colors duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-4.5 h-4.5 text-cyan-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="py-24 lg:py-32 bg-white" aria-labelledby="areas-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-cyan-600 mb-3 block">
              Coverage
            </span>
            <h2
              id="areas-heading"
              className="font-heading font-bold text-4xl md:text-5xl tracking-tight text-slate-900 mb-4"
            >
              Our Service Areas
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              We provide professional design services to clients in these locations and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(Object.keys(serviceAreas) as AreaKey[]).map((country) => (
              <div
                key={country}
                className="rounded-2xl border border-slate-200 overflow-hidden"
              >
                <div className="bg-[#0B1929] px-5 py-3">
                  <h3 className="font-heading font-semibold text-white text-sm">
                    {country} Cities
                  </h3>
                </div>
                <div className="p-5">
                  <ul className="space-y-1.5">
                    {serviceAreas[country].map((city) => (
                      <li
                        key={city}
                        className="text-xs text-slate-600 flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-cyan-400 shrink-0" />
                        {city}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 bg-slate-50" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-cyan-600 mb-3 block">
              Questions
            </span>
            <h2
              id="faq-heading"
              className="font-heading font-bold text-4xl md:text-5xl tracking-tight text-slate-900 mb-4"
            >
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              Answers to common questions about our services and process.
            </p>
          </div>

          <Accordion className="space-y-3">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={idx}
                className="border border-slate-200 rounded-xl overflow-hidden bg-white px-6"
              >
                <AccordionTrigger className="text-sm font-semibold text-slate-900 py-5 text-left hover:text-cyan-600 transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-slate-500 leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0B1929] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(8,145,178,0.1),transparent)]" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white tracking-tight mb-4">
            Ready to Transform Your Designs?
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            Get in touch today to discuss your project and receive a free quote.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-cyan-600 text-white font-semibold hover:bg-cyan-500 transition-colors"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/8 transition-colors"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
