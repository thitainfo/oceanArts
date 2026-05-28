"use client"

import { useState, useRef } from "react"
import { Send, Loader2, CheckCircle2, Paperclip, X } from "lucide-react"

export default function TrialForm() {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [file, setFile] = useState<File | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] ?? null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 1600))
    setSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-cyan-50 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-cyan-600" />
        </div>
        <div>
          <h3 className="text-xl font-heading font-bold text-slate-900 mb-1">
            You&apos;re all set!
          </h3>
          <p className="text-slate-500 text-sm max-w-sm">
            We&apos;ve received your request. Our team will get back to you within
            2–4 hours.
          </p>
        </div>
        <button
          onClick={() => {
            setSubmitted(false)
            setFields({ name: "", email: "", phone: "", message: "" })
            setFile(null)
          }}
          className="text-sm text-cyan-600 hover:text-cyan-700 font-medium transition-colors"
        >
          Send another request
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
            Your Name <span className="text-red-400">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={fields.name}
            onChange={handleChange}
            placeholder="John Smith"
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-600/20 focus:border-cyan-600 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
            Your Email <span className="text-red-400">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={fields.email}
            onChange={handleChange}
            placeholder="john@company.com"
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-600/20 focus:border-cyan-600 transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={fields.phone}
          onChange={handleChange}
          placeholder="+1 (555) 000-0000"
          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-600/20 focus:border-cyan-600 transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
          Project Description <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={fields.message}
          onChange={handleChange}
          placeholder="Describe your project, file formats needed, and any specific requirements..."
          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-600/20 focus:border-cyan-600 transition-colors resize-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          Attach File <span className="text-slate-400 font-normal">(optional)</span>
        </label>
        {file ? (
          <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg border border-cyan-200 bg-cyan-50">
            <Paperclip className="w-4 h-4 text-cyan-600 shrink-0" />
            <span className="text-sm text-cyan-700 truncate flex-1">{file.name}</span>
            <button
              type="button"
              onClick={() => {
                setFile(null)
                if (fileRef.current) fileRef.current.value = ""
              }}
              className="p-0.5 text-cyan-400 hover:text-cyan-700 transition-colors"
              aria-label="Remove file"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-dashed border-slate-300 text-sm text-slate-500 hover:border-cyan-400 hover:text-cyan-600 transition-colors w-full justify-center"
          >
            <Paperclip className="w-4 h-4" />
            Choose file to attach
          </button>
        )}
        <input
          ref={fileRef}
          type="file"
          onChange={handleFile}
          className="hidden"
          accept="image/*,.pdf,.ai,.eps,.svg,.psd"
          aria-label="Attach file"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-cyan-600 text-white font-semibold text-sm hover:bg-cyan-700 active:bg-cyan-800 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
      >
        {submitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Start Free Trial
          </>
        )}
      </button>
      <p className="text-xs text-slate-400 text-center">
        Zero cost. No credit card required. We respond within 2–4 hours.
      </p>
    </form>
  )
}
