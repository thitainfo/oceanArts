"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = [
  "All",
  "Vector Artwork",
  "Graphic Design",
  "Logo Design",
  "Product Mockup",
  "Embroidery",
]

const projects = [
  {
    title: "Vector Artwork",
    subtitle: "High-detail vector illustration with a modern artistic touch",
    category: "Vector Artwork",
    gradient: "from-cyan-600 via-cyan-500 to-teal-600",
  },
  {
    title: "Automotive Poster Design",
    subtitle: "Bold and sleek poster artwork inspired by modern aesthetics",
    category: "Graphic Design",
    gradient: "from-slate-700 via-slate-600 to-zinc-800",
  },
  {
    title: "Vector T-Shirt Design",
    subtitle: "Unique vintage-style vector art for apparel and merchandise",
    category: "Vector Artwork",
    gradient: "from-orange-500 via-amber-500 to-yellow-600",
  },
  {
    title: "Vector Artwork Services",
    subtitle: "Professional low-resolution to vector conversion — crisp and scalable",
    category: "Logo Design",
    gradient: "from-violet-600 via-purple-500 to-fuchsia-600",
  },
  {
    title: "Logo Design",
    subtitle: "Creative and professional logo design for businesses worldwide",
    category: "Logo Design",
    gradient: "from-rose-500 via-pink-500 to-red-600",
  },
  {
    title: "Detailed Vector Artwork",
    subtitle: "High-quality precise artwork with clean lines and sharp detailing",
    category: "Vector Artwork",
    gradient: "from-teal-500 via-emerald-500 to-green-600",
  },
  {
    title: "Clean Logo Vector Artwork",
    subtitle: "Convert logos into sharp, scalable artwork for print and digital",
    category: "Logo Design",
    gradient: "from-blue-500 via-sky-500 to-cyan-600",
  },
  {
    title: "Vector Logo for Print",
    subtitle: "Professional vector logo optimized for high-quality printing",
    category: "Logo Design",
    gradient: "from-indigo-600 via-blue-500 to-sky-600",
  },
  {
    title: "Pixelated Logo → High-Quality Vector",
    subtitle: "Transform low-res logos into crisp, high-quality vector files",
    category: "Vector Artwork",
    gradient: "from-amber-500 via-orange-500 to-red-500",
  },
  {
    title: "Logo Design",
    subtitle: "Crisp, scalable vector artwork perfect for logos and apparel",
    category: "Vector Artwork",
    gradient: "from-cyan-700 via-teal-600 to-emerald-700",
  },
  {
    title: "Product Mockup",
    subtitle: "High-quality realistic mockups to showcase merchandise and branding",
    category: "Product Mockup",
    gradient: "from-slate-600 via-slate-500 to-zinc-600",
  },
  {
    title: "Image to Vector",
    subtitle: "Convert any image into crisp, scalable vector artwork",
    category: "Vector Artwork",
    gradient: "from-fuchsia-600 via-purple-500 to-violet-600",
  },
  {
    title: "Business Logo to Vector",
    subtitle: "Convert your existing logos into clean, scalable vector artwork",
    category: "Logo Design",
    gradient: "from-green-600 via-emerald-500 to-teal-600",
  },
  {
    title: "Embroidery to Vector",
    subtitle: "Convert embroidery designs into precise, scalable vector artwork",
    category: "Embroidery",
    gradient: "from-rose-600 via-red-500 to-orange-600",
  },
  {
    title: "Vector to One-Color Artwork",
    subtitle: "Clean, single-color designs perfect for screen printing",
    category: "Vector Artwork",
    gradient: "from-sky-600 via-blue-500 to-indigo-600",
  },
  {
    title: "Promotional Product Mockup",
    subtitle: "Realistic mockups for promotional products and branded items",
    category: "Product Mockup",
    gradient: "from-amber-600 via-yellow-500 to-lime-500",
  },
  {
    title: "Banner & Flyer Making",
    subtitle: "Creative and professional banner and flyer designs for your brand",
    category: "Graphic Design",
    gradient: "from-violet-700 via-fuchsia-500 to-pink-500",
  },
  {
    title: "Embroidery Design",
    subtitle: "Stitch-perfect embroidery designs for apparel and merchandise",
    category: "Embroidery",
    gradient: "from-pink-600 via-rose-500 to-red-500",
  },
]

export default function PortfolioPage() {
  const [active, setActive] = useState("All")

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active)

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
            <span className="text-slate-400">Portfolio</span>
          </nav>
          <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-5">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">
              Work
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mx-auto leading-relaxed mb-8">
            A showcase of precision, creativity, and craftsmanship — across vector art,
            branding, embroidery, and more.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-center">
            {[
              { v: "120+", l: "Projects" },
              { v: "7+", l: "Years Experience" },
              { v: "95+", l: "Happy Clients" },
            ].map((s) => (
              <div key={s.l} className="flex flex-col">
                <span className="font-heading font-black text-2xl text-white">{s.v}</span>
                <span className="text-xs text-slate-400">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Filter + Grid */}
      <section className="py-16 lg:py-24 bg-white" aria-label="Portfolio grid">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Filter tabs */}
          <div
            className="flex flex-wrap gap-2 mb-12 justify-center"
            role="tablist"
            aria-label="Filter by category"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={active === cat}
                onClick={() => setActive(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-600",
                  active === cat
                    ? "bg-cyan-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project) => (
              <div
                key={`${project.title}-${project.category}`}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-500 group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-between p-5">
                  <div>
                    <span className="inline-block px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm text-xs font-semibold text-white/90">
                      {project.category}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-white leading-tight mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-white/55 leading-relaxed line-clamp-2">
                      {project.subtitle}
                    </p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-3.5 h-3.5 text-white" aria-hidden="true" />
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-400 text-sm">No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0B1929] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(8,145,178,0.1),transparent)]" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white tracking-tight mb-4">
            Like What You See?
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            Let&apos;s create something exceptional together. Get a free quote today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-cyan-600 text-white font-semibold hover:bg-cyan-500 transition-colors"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
