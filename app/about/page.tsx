import type { Metadata } from "next"
import Link from "next/link"
import {
  Star,
  Users,
  Zap,
  Lightbulb,
  Globe2,
  Shield,
  ArrowRight,
  MapPin,
} from "lucide-react"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about OceanArts — our story, our team, and our mission to deliver precision design worldwide from Houston, TX.",
}

const values = [
  {
    icon: Star,
    title: "Quality First",
    description:
      "We never compromise on quality. Every project receives our full attention to detail and commitment to excellence.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description:
      "We view our clients as partners and work collaboratively to achieve their design goals and business objectives.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description:
      "Our 24/7 remote team ensures quick project completion without sacrificing quality or attention to detail.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We stay updated with the latest design trends and technologies to deliver modern, effective solutions.",
  },
  {
    icon: Globe2,
    title: "Global Perspective",
    description:
      "Our international team brings diverse perspectives to every project, ensuring designs that resonate globally.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description:
      "We deliver on our promises, meeting deadlines and exceeding expectations with consistent, dependable service.",
  },
]

const stats = [
  { value: "120+", label: "Projects Completed" },
  { value: "95+", label: "Happy Clients" },
  { value: "4", label: "Countries Served" },
  { value: "24/7", label: "Support Available" },
]

const locations = [
  {
    icon: MapPin,
    name: "Houston, Texas",
    description:
      "Our client management and business development team is located in Houston, making it easy to connect directly with North American clients.",
  },
  {
    icon: MapPin,
    name: "India",
    description:
      "Our design studio in India is home to our talented team of graphic designers, web developers, and support staff.",
  },
  {
    icon: Globe2,
    name: "International Clients",
    description:
      "We proudly serve clients across the USA, Canada, the UK, Australia, and beyond through our remote design services.",
  },
]

export default function AboutPage() {
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
            <span className="text-slate-400">About Us</span>
          </nav>
          <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-5">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">
              OceanArts
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
            Driven by precision, powered by creativity, and committed to your success.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Story section */}
      <section className="py-24 lg:py-32 bg-white" aria-labelledby="story-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            <div>
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-cyan-600 mb-3 block">
                Our Story
              </span>
              <h2
                id="story-heading"
                className="font-heading font-bold text-3xl md:text-4xl tracking-tight text-slate-900 mb-6"
              >
                Built on a Mission to Deliver World-Class Design
              </h2>
              <div className="space-y-4 text-slate-600 text-base leading-relaxed">
                <p>
                  I am Girish Khant, the founder of OceanArts. The studio was established
                  with a simple mission: to provide businesses of all sizes with
                  high-quality, affordable services in graphic design, web design, and
                  vector artwork worldwide.
                </p>
                <p>
                  What started as a small team has now grown into an international design
                  studio operating out of Houston, Texas. Our business model is unique —
                  we focus on fully understanding our customers&apos; needs and then solving
                  their problems effectively.
                </p>
                <p>
                  Over time, we have expanded our services from basic vector artwork to all
                  types of graphic design, including web design, branding, and business
                  support services. Currently, we have a team of 10 people and have been
                  working for over 10 years.
                </p>
                <p>
                  We take a slightly different approach and are continuously working to grow
                  our agency. We sincerely thank you for visiting our website.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-600 text-white font-semibold text-sm hover:bg-cyan-700 transition-colors duration-150"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Stats card */}
            <div className="lg:pt-8">
              <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 lg:p-10">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="text-center p-5 rounded-2xl bg-white border border-slate-200"
                    >
                      <div className="font-heading font-black text-4xl text-cyan-600 mb-1 tabular-nums">
                        {s.value}
                      </div>
                      <div className="text-xs text-slate-500 font-medium">{s.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-5 rounded-2xl bg-cyan-600/5 border border-cyan-200">
                  <p className="text-sm text-slate-600 leading-relaxed text-center italic">
                    &ldquo;Our goal is simple — deliver exceptional design that helps your
                    business grow and stand out in any market.&rdquo;
                  </p>
                  <p className="text-xs text-cyan-600 font-semibold text-center mt-3">
                    — Girish Khant, Founder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-slate-50" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-cyan-600 mb-3 block">
              What Drives Us
            </span>
            <h2
              id="values-heading"
              className="font-heading font-bold text-4xl md:text-5xl tracking-tight text-slate-900 mb-4"
            >
              Our Values
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              The principles that guide everything we do, from first brief to final delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div
                  key={v.title}
                  className="group p-7 rounded-2xl border border-slate-200 bg-white hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-600/5 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-cyan-50 flex items-center justify-center mb-5 group-hover:bg-cyan-100 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-cyan-600" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-slate-900 mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{v.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 lg:py-32 bg-white" aria-labelledby="presence-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-cyan-600 mb-3 block">
                Where We Are
              </span>
              <h2
                id="presence-heading"
                className="font-heading font-bold text-4xl md:text-5xl tracking-tight text-slate-900 mb-5"
              >
                Our Global Presence
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-10">
                Though our design team is based in India, we have built strong
                relationships with clients across multiple countries, establishing a
                truly global presence.
              </p>
              <div className="space-y-5">
                {locations.map((loc) => {
                  const Icon = loc.icon
                  return (
                    <div key={loc.name} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4.5 h-4.5 text-cyan-600" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1 text-sm">{loc.name}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">{loc.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Decorative world map placeholder */}
            <div className="relative lg:pl-8">
              <div className="rounded-3xl bg-[#0B1929] aspect-[4/3] flex items-center justify-center overflow-hidden relative">
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 1px 1px, rgba(8,145,178,0.25) 1px, transparent 0)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="relative z-10 text-center px-8">
                  <Globe2 className="w-16 h-16 text-cyan-400/60 mx-auto mb-4" aria-hidden="true" />
                  <p className="text-white/70 text-sm font-medium">Serving clients across</p>
                  <div className="flex flex-wrap justify-center gap-2 mt-3">
                    {["USA", "Canada", "UK", "Australia", "India"].map((c) => (
                      <span
                        key={c}
                        className="px-3 py-1 rounded-full border border-cyan-600/30 bg-cyan-600/10 text-cyan-300 text-xs font-medium"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0B1929] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(8,145,178,0.1),transparent)]" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white tracking-tight mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            Get in touch with us today to discuss your design needs and receive a free quote.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-cyan-600 text-white font-semibold hover:bg-cyan-500 transition-colors duration-150"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/8 transition-colors duration-150"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
