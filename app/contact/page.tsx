import type { Metadata } from "next"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react"
import TrialForm from "@/components/forms/trial-form"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with OceanArts. Start your free design project, request a quote, or ask us anything. We respond within 2–4 hours.",
}

const contactInfo = [
  {
    icon: MapPin,
    label: "Our Location",
    lines: ["V.O. Houston, TX", "Production Office in Virpur, Gujarat, India"],
  },
  {
    icon: Phone,
    label: "Phone Number",
    lines: ["+91 81415 95426"],
    sublabel: "Available 24/7 for international clients",
    href: "tel:+918141595426",
  },
  {
    icon: Mail,
    label: "Email Address",
    lines: ["hello@vectorprintindia.in"],
    sublabel: "We respond within 2–4 hours",
    href: "mailto:hello@vectorprintindia.in",
  },
  {
    icon: Clock,
    label: "Working Hours",
    lines: ["Mon–Fri: 9:00 AM – 6:00 PM CDT"],
    sublabel: "Weekend support available for urgent projects",
  },
]

export default function ContactPage() {
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
            <span className="text-slate-400">Contact</span>
          </nav>
          <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-5">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">
              Touch
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
            Have a project in mind? Let&apos;s discuss how we can bring your ideas to life
            with our professional design services.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Main contact section */}
      <section className="py-24 lg:py-32 bg-white" aria-label="Contact information and form">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Contact info */}
            <div>
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-cyan-600 mb-3 block">
                Reach Out
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl tracking-tight text-slate-900 mb-5">
                Contact Information
              </h2>
              <p className="text-slate-500 text-base leading-relaxed mb-10">
                Reach out to us through any of the following channels. Our team is ready
                to assist you with all your design needs.
              </p>

              <div className="space-y-6 mb-12">
                {contactInfo.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-cyan-50 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-5 h-5 text-cyan-600" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                          {item.label}
                        </p>
                        {item.lines.map((line) =>
                          item.href ? (
                            <a
                              key={line}
                              href={item.href}
                              className="block text-sm font-medium text-slate-900 hover:text-cyan-600 transition-colors"
                            >
                              {line}
                            </a>
                          ) : (
                            <p key={line} className="text-sm font-medium text-slate-900">{line}</p>
                          )
                        )}
                        {item.sublabel && (
                          <p className="text-xs text-slate-400 mt-0.5">{item.sublabel}</p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Trust badges */}
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
                <p className="text-sm font-semibold text-slate-700 mb-4">
                  Why work with us?
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Free sample on your first project",
                    "Response within 2–4 hours",
                    "100% Money-Back Guarantee",
                    "24/7 global support team",
                    "100% manual vector tracing",
                    "Unlimited revisions until satisfied",
                  ].map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-cyan-500 shrink-0" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div>
              <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                <div className="mb-6">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-semibold text-cyan-700 mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    Start Free Trial / Zero Cost
                  </span>
                  <h3 className="font-heading font-bold text-xl text-slate-900 mb-1">
                    Send Us Your Project
                  </h3>
                  <p className="text-sm text-slate-500">
                    Fill in your details and we&apos;ll get back to you with a free quote.
                  </p>
                </div>
                <TrialForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map / location strip */}
      <section
        className="py-20 bg-slate-50 border-t border-slate-200"
        aria-label="Location details"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                flag: "🇺🇸",
                title: "Virtual Office",
                subtitle: "Houston, Texas, USA",
                desc: "Client management and North American business development hub.",
              },
              {
                flag: "🇮🇳",
                title: "Production Studio",
                subtitle: "Virpur, Gujarat, India",
                desc: "Full-stack design studio with 24/7 operations and 10+ specialists.",
              },
              {
                flag: "🌍",
                title: "Global Clients",
                subtitle: "USA · Canada · UK · Australia",
                desc: "Serving clients across four continents through remote design excellence.",
              },
            ].map((loc) => (
              <div
                key={loc.title}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-slate-200"
              >
                <div className="text-2xl leading-none mt-0.5" aria-hidden="true">{loc.flag}</div>
                <div>
                  <p className="font-heading font-semibold text-slate-900 text-sm mb-0.5">
                    {loc.title}
                  </p>
                  <p className="text-xs text-cyan-600 font-medium mb-2">{loc.subtitle}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{loc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
