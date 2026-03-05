import type { Metadata } from 'next'
import Link from 'next/link'
import {
  BookOpen, ShoppingBag, FileText, Folder, Newspaper, Book,
  ArrowRight, MessageCircle, Printer, Star, Clock, Users, CheckCircle,
} from 'lucide-react'
import { services } from '@/data/services'
import { clients } from '@/data/clients'
import { localBusinessJsonLd } from '@/lib/json-ld'
import { SITE_DESCRIPTION, WHATSAPP_URL, EMAIL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Vahin Printers — One Stop Solution for Printing in Delhi',
  description:
    'Premium quality printing for catalogues, magazines, paper bags, flyers, folders, and books. Based in New Delhi, serving clients across India.',
  openGraph: {
    title: 'Vahin Printers',
    description: SITE_DESCRIPTION,
    images: [{ url: '/images/og-image.jpg' }],
  },
}

const iconMap: Record<string, React.ElementType> = {
  BookOpen, ShoppingBag, FileText, Folder, Newspaper, Book,
}

const stats = [
  { number: '200+', label: 'Projects Delivered' },
  { number: '25+', label: 'Years of Excellence' },
  { number: '50+', label: 'Trusted Clients' },
  { number: '100%', label: 'Quality Assured' },
]

const process = [
  { step: '01', title: 'Share Your Brief', desc: 'Tell us what you need — size, quantity, finish, and timeline. We listen and advise.', icon: MessageCircle },
  { step: '02', title: 'Design & Proof',   desc: 'We send you a print-ready proof. You approve, we proceed — no surprises.',           icon: CheckCircle },
  { step: '03', title: 'Print & Deliver',  desc: 'Your order is printed with precision and delivered to your door, on time.',           icon: Printer },
]

const marqueeItems = [
  'CATALOGUES', 'PAPER BAGS', 'FLYERS', 'FOLDERS', 'MAGAZINES', 'BOOKS',
  'CATALOGUES', 'PAPER BAGS', 'FLYERS', 'FOLDERS', 'MAGAZINES', 'BOOKS',
]

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      {/* ══════════════════════════════════════════════════════════════
          HERO — Full viewport, dramatic typographic statement
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center bg-navy overflow-hidden">

        {/* ── Background layers ── */}
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

        {/* Large orange glow — top right */}
        <div className="absolute -top-48 -right-48 w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(13,143,165,0.3) 0%, transparent 70%)' }} />

        {/* Gold glow — bottom left */}
        <div className="absolute -bottom-64 -left-32 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(125,214,230,0.15) 0%, transparent 70%)' }} />

        {/* Decorative floating shapes — right side */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-5 items-end">
          {/* Stack of printed sheets effect */}
          <div className="animate-float">
            <div className="w-56 h-72 rounded-2xl rotate-6 opacity-20 border-2 border-orange"
              style={{ background: 'linear-gradient(135deg, rgba(13,143,165,0.1), transparent)' }} />
          </div>
          <div className="animate-float-delayed -mt-48 mr-8">
            <div className="w-40 h-52 rounded-2xl -rotate-3 opacity-30 border border-gold"
              style={{ background: 'linear-gradient(135deg, rgba(125,214,230,0.15), transparent)' }} />
          </div>
          <div className="-mt-36 mr-4">
            <div className="w-32 h-40 rounded-xl rotate-12 opacity-15 bg-white" />
          </div>
        </div>

        {/* Registration mark — decorative */}
        <div className="absolute top-8 right-8 opacity-20 w-8 h-8">
          <div className="absolute inset-0 border border-orange rounded-full" />
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-orange -translate-x-1/2" />
          <div className="absolute top-1/2 left-0 right-0 h-px bg-orange -translate-y-1/2" />
        </div>
        <div className="absolute bottom-24 left-8 opacity-10 w-6 h-6">
          <div className="absolute inset-0 border border-gold rounded-full" />
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold -translate-x-1/2" />
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gold -translate-y-1/2" />
        </div>

        {/* ── Main content ── */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-40">
          {/* Giant headline */}
          <h1 className="font-display leading-none mb-8">
            <span className="block text-white font-black tracking-tighter"
              style={{ fontSize: 'clamp(5rem, 16vw, 14rem)', lineHeight: '0.9' }}>
              VAHIN
            </span>
            <span className="block font-black tracking-tighter text-stroke-orange"
              style={{ fontSize: 'clamp(3.5rem, 11vw, 10rem)', lineHeight: '1' }}>
              PRINTERS
            </span>
          </h1>

          {/* Tagline with left accent bar */}
          <div className="flex items-start gap-5 mb-12 max-w-xl">
            <div className="w-1 h-20 bg-orange rounded-full shrink-0 mt-1" />
            <div>
              <p className="text-white text-xl font-semibold mb-2">
                One Stop Solution for Printing
              </p>
              <p className="text-gray-400 leading-relaxed">
                Catalogues, magazines, paper bags, flyers, folders, and books —
                crafted with precision and delivered on time across Delhi.
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link href="/gallery"
              className="group inline-flex items-center gap-3 bg-orange text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-orange-600 transition-all duration-300 hover:shadow-[0_0_40px_rgba(13,143,165,0.4)]">
              View Our Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact"
              className="inline-flex items-center gap-3 border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-white hover:text-navy transition-all duration-300 backdrop-blur-sm">
              Get a Quote
            </Link>
          </div>
        </div>

        {/* ── Stats bar — anchored to bottom ── */}
        <div className="absolute bottom-0 inset-x-0 border-t border-white/10 bg-white/5 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 py-5 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl md:text-4xl font-bold text-orange leading-none mb-1">
                  {stat.number}
                </p>
                <p className="text-gray-400 text-xs uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          MARQUEE — Scrolling services strip
      ══════════════════════════════════════════════════════════════ */}
      <div className="bg-orange py-4 overflow-hidden select-none">
        <div className="flex animate-marquee whitespace-nowrap">
          {marqueeItems.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-6 text-white font-bold text-sm tracking-[0.2em] px-8">
              {item}
              <span className="text-white/40">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          SERVICES — Editorial magazine-style grid
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Left: heading */}
            <div className="lg:col-span-1 lg:sticky lg:top-24">
              <p className="text-orange font-medium uppercase tracking-[0.2em] text-xs mb-4">
                What We Create
              </p>
              <h2 className="font-display text-5xl font-bold text-navy leading-tight mb-6">
                Every print,
                <br />
                <span className="text-stroke-navy">
                  perfected.
                </span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                From the first brief to the final delivery — we handle every detail
                so your brand looks its absolute best in print.
              </p>
              <Link href="/services"
                className="inline-flex items-center gap-2 text-orange font-semibold text-sm hover:gap-3 transition-all">
                See all services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right: services grid */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, i) => {
                const Icon = iconMap[service.icon]
                const isFeatured = i === 0
                return (
                  <Link key={service.id} href="/services"
                    className={`group relative bg-white rounded-2xl p-7 border border-gray-100 hover:border-orange/30 hover:shadow-xl transition-all duration-300 overflow-hidden ${isFeatured ? 'sm:col-span-2' : ''}`}>
                    {/* Hover gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange/0 to-orange/0 group-hover:from-orange/5 group-hover:to-orange/0 transition-all duration-500 rounded-2xl" />

                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-2xl" />

                    <div className="relative flex gap-5 items-start">
                      <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-orange transition-colors duration-300">
                        {Icon && <Icon className="w-6 h-6 text-orange group-hover:text-white transition-colors duration-300" />}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display text-xl font-bold text-navy mb-2 group-hover:text-orange transition-colors duration-300">
                          {service.name}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-orange transition-colors duration-300 shrink-0 mt-1" />
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          WHY VAHIN PRINTERS — Bold visual callout
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-navy py-24 px-4 overflow-hidden">
        {/* Background accent */}
        <div className="absolute right-0 top-0 h-full w-1/3 opacity-5"
          style={{ background: 'linear-gradient(to left, #0d8fa5, transparent)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5" />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: story */}
            <div>
              <p className="text-orange font-medium uppercase tracking-[0.2em] text-xs mb-4">
                About Us
              </p>
              <h2 className="font-display text-5xl font-bold text-white leading-tight mb-6">
                Crafted by hand.
                <br />
                <span className="text-gold">Trusted by brands.</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-5">
                Vahin Printers is led by <span className="text-white font-semibold">Vinod Koul</span>,
                a seasoned Printing Technologist with deep expertise in the craft of print. We are
                not just a vendor — we are a creative partner invested in your brand&apos;s success.
              </p>
              <p className="text-gray-400 leading-relaxed mb-10">
                Every project we take on receives the same level of care: from the quality of the
                stock to the precision of the colour — nothing leaves our press unless it is perfect.
              </p>
              <Link href="/about"
                className="group inline-flex items-center gap-3 bg-white text-navy px-8 py-4 rounded-full font-semibold text-sm hover:bg-gold transition-all duration-300">
                Our Story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right: value cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-4">
              {[
                { icon: Star, label: 'Quality', desc: 'Every print inspected before delivery' },
                { icon: Clock, label: 'On Time', desc: 'We never miss a deadline' },
                { icon: Users, label: 'Client First', desc: 'Your success is our success' },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-orange/30 transition-all duration-300 group">
                  <div className="w-10 h-10 bg-orange/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange transition-colors duration-300">
                    <Icon className="w-5 h-5 text-orange group-hover:text-white transition-colors duration-300" />
                  </div>
                  <p className="text-white font-semibold mb-1">{label}</p>
                  <p className="text-gray-400 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          HOW IT WORKS — 3-step process
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-orange font-medium uppercase tracking-[0.2em] text-xs mb-3">
              The Process
            </p>
            <h2 className="font-display text-5xl font-bold text-navy mb-4">
              Simple. Fast. Flawless.
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto">
              Getting your prints done with Vahin Printers is straightforward — no jargon, no hassle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-14 left-1/3 right-1/3 h-px bg-gradient-to-r from-orange via-gold to-orange opacity-30" />

            {process.map(({ step, title, desc, icon: Icon }) => (
              <div key={step} className="relative bg-cream rounded-3xl p-8 border border-gray-100 hover:border-orange/20 hover:shadow-lg transition-all duration-300 group text-center">
                <div className="relative w-16 h-16 mx-auto mb-6">
                  <div className="absolute inset-0 bg-orange rounded-2xl rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-300" />
                  <div className="relative w-full h-full bg-navy rounded-2xl flex items-center justify-center">
                    <Icon className="w-7 h-7 text-orange" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{parseInt(step)}</span>
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold text-navy mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          GALLERY TEASER — Dark section with visual cards
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-4 bg-navy-900 relative overflow-hidden"
        style={{ backgroundColor: '#0a0a0a' }}>
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(#0d8fa5 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-orange font-medium uppercase tracking-[0.2em] text-xs mb-3">
                Portfolio
              </p>
              <h2 className="font-display text-5xl font-bold text-white">
                Work that speaks
                <br />
                <span className="text-stroke-white">for itself.</span>
              </h2>
            </div>
            <Link href="/gallery"
              className="group inline-flex items-center gap-3 border border-white/20 text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-white hover:text-navy transition-all duration-300 self-start md:self-auto">
              View Full Gallery <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Gallery preview cards — visual placeholders */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: 'Catalogues', gradient: 'from-orange/40 to-navy', accent: '#0d8fa5' },
              { label: 'Paper Bags', gradient: 'from-gold/30 to-navy', accent: '#7dd6e6' },
              { label: 'Magazines & Books', gradient: 'from-purple-400/20 to-navy', accent: '#a78bfa' },
            ].map(({ label, gradient, accent }) => (
              <Link href="/gallery" key={label}
                className="group relative aspect-4/3 rounded-2xl overflow-hidden bg-navy-800 border border-white/5 hover:border-white/20 transition-all duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-60 group-hover:opacity-80 transition-opacity duration-300`} />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="w-10 h-1 rounded-full mb-3 transition-all duration-300 group-hover:w-16"
                    style={{ backgroundColor: accent }} />
                  <p className="text-white font-display font-bold text-xl">{label}</p>
                  <p className="text-gray-400 text-sm mt-1">View work →</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Client marquee — all brands, scrolling */}
          <div className="mt-14 border-t border-white/[0.07] pt-10">
            <p className="text-gray-600 text-xs uppercase tracking-widest text-center mb-6">Trusted By</p>
            <div className="overflow-hidden">
              <div className="flex animate-marquee whitespace-nowrap">
                {[...clients, ...clients].map((client, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-5 text-gray-400 font-semibold text-sm tracking-[0.18em] uppercase px-8 hover:text-white transition-colors duration-300"
                  >
                    {client.name}
                    <span className="text-orange/30">◆</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          FINAL CTA — Bold, high-contrast close
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-orange py-24 px-4 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, white 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #111111 0%, transparent 70%)' }} />

        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-white/70 font-medium uppercase tracking-[0.2em] text-xs mb-4">
            Let&apos;s Print Together
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Your brand deserves
            <br />
            the best in print.
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Share your project with us — we&apos;ll take it from brief to beautifully printed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-white text-orange px-8 py-4 rounded-full font-bold text-sm hover:bg-navy hover:text-white transition-all duration-300 hover:shadow-xl">
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-3 border-2 border-white/50 text-white px-8 py-4 rounded-full font-semibold text-sm hover:border-white hover:bg-white/10 transition-all duration-300">
              Send an Email
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
