import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { Star, Clock, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Vahin Printers — a Delhi-based printing company led by Vinod Koul, Printing Technologist. Quality, reliability, and client focus since day one.',
}

const stats = [
  { value: '25+', label: 'Years Experience' },
  { value: '100+', label: 'Happy Clients' },
  { value: '10K+', label: 'Projects Delivered' },
]

const story = [
  'Vahin Printers is a Delhi-based printing company led by Vinod Koul, a seasoned Printing Technologist with years of hands-on experience in the industry. We are your one-stop solution for all printing needs.',
  'From vibrant product catalogues and elegant corporate folders to custom paper bags and full-colour magazines — we handle every project with the same commitment to quality and attention to detail.',
  "Our advanced printing processes, combined with a deep understanding of our clients' needs, allow us to deliver work that is not just printed — but crafted.",
]

const values = [
  {
    num: '01',
    icon: Star,
    title: 'Uncompromising Quality',
    description: 'Every print is inspected to meet our high standards before leaving the press.',
  },
  {
    num: '02',
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We respect your deadlines and work to deliver every order on time, every time.',
  },
  {
    num: '03',
    icon: Users,
    title: 'Client-First Approach',
    description:
      'Your satisfaction drives everything we do — from first proof to final delivery.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Dramatic Hero */}
      <section className="relative bg-navy overflow-hidden min-h-[55vh] flex items-end pb-16">
        {/* Dot-grid texture */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(13,143,165,0.12) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        {/* Large ghost text */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
          <span
            className="font-display font-black leading-none whitespace-nowrap"
            style={{
              fontSize: '22vw',
              WebkitTextStroke: '1px rgba(255,255,255,0.04)',
              color: 'transparent',
            }}
          >
            STORY
          </span>
        </div>
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-orange" />

        <div className="relative max-w-7xl mx-auto px-4 pt-36 w-full">
          <p className="text-orange text-xs font-medium uppercase tracking-[0.3em] mb-5">
            Our Story
          </p>
          <h1 className="font-display font-black leading-[0.9]">
            <span
              className="block"
              style={{
                fontSize: 'clamp(4rem, 12vw, 10rem)',
                WebkitTextStroke: '2px rgba(255,255,255,0.8)',
                color: 'transparent',
              }}
            >
              ABOUT
            </span>
            <span
              className="text-white block mt-2"
              style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}
            >
              Vahin Printers
            </span>
          </h1>
          <p className="text-gray-400 text-lg mt-6 max-w-lg leading-relaxed">
            Crafted with precision, delivered with pride — from Delhi to the world.
          </p>
        </div>
      </section>

      {/* Stats Strip */}
      <div className="bg-orange">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-orange-600">
          {stats.map((s) => (
            <div key={s.label} className="text-center px-6 py-2">
              <p className="font-display font-black text-4xl text-white">{s.value}</p>
              <p className="text-orange-100 text-xs uppercase tracking-widest mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Story Section */}
      <section className="py-24 px-4 bg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: sticky editorial block */}
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-medium uppercase tracking-widest text-orange mb-4">
              The Vahin Story
            </p>
            <h2 className="font-display font-black text-5xl md:text-6xl text-navy leading-tight mb-8">
              Built on<br />craftsmanship<br />&amp; commitment.
            </h2>
            {/* Founder card */}
            <div className="bg-navy rounded-2xl p-8 text-white">
              <div className="w-16 h-16 rounded-full bg-orange flex items-center justify-center mb-6">
                <span className="text-white font-display font-black text-3xl">V</span>
              </div>
              <p className="font-display font-bold text-2xl">Vinod Koul</p>
              <p className="text-orange text-sm font-medium mt-1 mb-4">
                Printing Technologist &amp; Founder
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Leading Vahin Printers with decades of printing industry experience, Vinod brings
                technical mastery and creative vision to every project.
              </p>
            </div>
          </div>

          {/* Right: Story paragraphs */}
          <div className="space-y-8">
            {story.map((para, i) => (
              <div key={i} className="relative">
                {i === 0 && (
                  <span className="float-left font-display font-black text-9xl text-orange leading-[0.75] mr-4 mt-2 select-none">
                    V
                  </span>
                )}
                <p className={`text-gray-700 leading-relaxed ${i === 0 ? 'text-xl' : 'text-lg'}`}>
                  {para}
                </p>
              </div>
            ))}
            <blockquote className="border-l-4 border-orange pl-6 py-2 mt-4">
              <p className="font-display italic text-2xl text-navy font-bold leading-snug">
                &ldquo;Not just printed — but crafted.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end gap-6 mb-16">
            <h2 className="font-display font-black text-5xl md:text-6xl text-navy leading-none">
              What We<br />Stand For
            </h2>
            <div className="flex-1 h-px bg-gray-200 mb-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map(({ num, icon: Icon, title, description }) => (
              <div key={title} className="group relative">
                <p className="font-display font-black text-[7rem] text-gray-100 absolute -top-10 -left-2 group-hover:text-orange-50 transition-colors select-none leading-none">
                  {num}
                </p>
                <div className="relative pt-14 pb-8 px-2 border-t-2 border-gray-200 group-hover:border-orange transition-colors duration-300">
                  <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange transition-colors duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-navy mb-3">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-24 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(13,143,165,0.08) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-orange text-xs font-medium uppercase tracking-widest mb-6">
            Ready to Print?
          </p>
          <h2 className="font-display font-black leading-tight mb-4" style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}>
            <span className="text-white">Let&apos;s create</span>
            <br />
            <span
              style={{
                WebkitTextStroke: '2px #0d8fa5',
                color: 'transparent',
              }}
            >
              something great.
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto">
            Get in touch with us today and bring your print vision to life.
          </p>
          <Button href="/contact" variant="primary">
            Contact Us
          </Button>
        </div>
      </section>
    </>
  )
}
