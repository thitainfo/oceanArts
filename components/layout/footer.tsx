import Link from "next/link"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
]

const services = [
  { href: "/services", label: "Vector Tracing" },
  { href: "/services", label: "Logo Design" },
  { href: "/services", label: "Embroidery Digitizing" },
  { href: "/services", label: "Web Design" },
  { href: "/services", label: "Graphic Design" },
]

export default function Footer() {
  return (
    <footer className="bg-[#0B1929] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <svg width="28" height="20" viewBox="0 0 30 22" fill="none" aria-hidden="true">
                <path
                  d="M1 14 C4.5 6 8 6 11 10.5 C14 15 17.5 6 21 6 C23.5 6 25.5 10 29 7"
                  stroke="#0891B2"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M1 19 C5 13 8.5 13 11.5 16.5 C14.5 20 18 14 22 14 C24 14 26 16 29 14.5"
                  stroke="#22D3EE"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  opacity="0.45"
                />
              </svg>
              <span className="font-heading font-bold text-lg tracking-tight">
                <span className="text-white">Ocean</span>
                <span className="text-cyan-400">Arts</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              High-quality graphic design, vector tracing, logo redraws, mockups,
              web solutions, and back-office support for businesses worldwide.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-white/90 tracking-wide uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white/90 tracking-wide uppercase mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-150"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white/90 tracking-wide uppercase mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400 leading-relaxed">
                  V.O. Houston, TX &amp; Production Office in Virpur, Gujarat, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-cyan-500 shrink-0" />
                <a
                  href="tel:+918141595426"
                  className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  +91 81415 95426
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan-500 shrink-0" />
                <a
                  href="mailto:hello@vectorprintindia.in"
                  className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  hello@vectorprintindia.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-cyan-500 shrink-0" />
                <span className="text-sm text-slate-400">Mon–Fri: 9 AM – 6 PM CDT</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} OceanArts. All Rights Reserved. Serving Houston TX and Worldwide.
          </p>
          <p className="text-xs text-slate-600">
            Designed &amp; built with precision.
          </p>
        </div>
      </div>
    </footer>
  )
}
