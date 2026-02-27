import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { services } from '@/data/services'
import { WHATSAPP_URL, EMAIL } from '@/lib/constants'
import {
  BookOpen,
  ShoppingBag,
  FileText,
  Folder,
  Newspaper,
  Book,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Vahin Printers offers premium printing services: catalogues, paper bags, flyers, folders, magazines, and books. Based in New Delhi.',
}

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  ShoppingBag,
  FileText,
  Folder,
  Newspaper,
  Book,
}

const process = [
  {
    num: '01',
    title: 'Brief',
    desc: 'Share your requirements, goals, and vision with our team.',
  },
  {
    num: '02',
    title: 'Proof',
    desc: 'We design and send you a digital proof for review and approval.',
  },
  {
    num: '03',
    title: 'Print & Deliver',
    desc: 'We produce with precision and deliver right to your doorstep.',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Dramatic Hero */}
      <section className="relative bg-navy overflow-hidden min-h-[55vh] flex items-end pb-16">
        {/* Dot-grid texture */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,107,53,0.12) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        {/* Ghost background text */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
          <span
            className="font-display font-black leading-none whitespace-nowrap"
            style={{
              fontSize: '18vw',
              WebkitTextStroke: '1px rgba(255,255,255,0.04)',
              color: 'transparent',
            }}
          >
            PRINT
          </span>
        </div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-orange" />

        <div className="relative max-w-7xl mx-auto px-4 pt-36 w-full">
          <p className="text-orange text-xs font-medium uppercase tracking-[0.3em] mb-5">
            What We Offer
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
              SERVICES
            </span>
            <span
              className="text-white block mt-3"
              style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)' }}
            >
              Everything you need — printed to perfection.
            </span>
          </h1>
        </div>
      </section>

      {/* Services — editorial list */}
      <section className="bg-cream py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="divide-y divide-gray-200">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon]
              return (
                <div
                  key={service.id}
                  className="group py-10 grid grid-cols-1 md:grid-cols-[5rem_1fr_3rem] gap-6 items-center hover:bg-white -mx-4 px-4 transition-colors rounded-xl cursor-default"
                >
                  {/* Number */}
                  <p className="font-display font-black text-5xl text-gray-200 group-hover:text-orange transition-colors duration-300 leading-none">
                    {String(i + 1).padStart(2, '0')}
                  </p>

                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-orange/10 rounded-lg flex items-center justify-center group-hover:bg-orange transition-colors duration-300 shrink-0">
                        {Icon && (
                          <Icon className="w-5 h-5 text-orange group-hover:text-white transition-colors duration-300" />
                        )}
                      </div>
                      <h2 className="font-display text-2xl font-bold text-navy">{service.name}</h2>
                    </div>
                    <p className="text-gray-500 leading-relaxed max-w-2xl text-sm">
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow circle */}
                  <div className="w-10 h-10 rounded-full border-2 border-gray-200 group-hover:border-orange group-hover:bg-orange transition-all duration-300 flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process strip */}
      <section className="bg-navy py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-orange text-xs font-medium uppercase tracking-[0.3em] mb-3">
              How It Works
            </p>
            <h2 className="font-display font-black text-4xl md:text-5xl text-white leading-none">
              Our Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-px bg-white/10" />
            {process.map((step) => (
              <div key={step.num} className="text-center relative">
                <p
                  className="font-display font-black leading-none mb-4 mx-auto"
                  style={{
                    fontSize: 'clamp(3rem, 7vw, 5rem)',
                    WebkitTextStroke: '2px #ff6b35',
                    color: 'transparent',
                  }}
                >
                  {step.num}
                </p>
                <h3 className="font-display text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange py-20 px-4 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'repeating-linear-gradient(-45deg, rgba(255,255,255,0.3) 0, rgba(255,255,255,0.3) 1px, transparent 0, transparent 50%)',
            backgroundSize: '10px 10px',
          }}
        />
        <div className="relative">
          <p className="text-orange-100 text-xs font-medium uppercase tracking-widest mb-4">
            Get Started
          </p>
          <h2
            className="font-display font-black text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            Ready to start your<br />print project?
          </h2>
          <p className="text-orange-100 mb-10 text-lg max-w-lg mx-auto">
            Get in touch — we&apos;ll help you from concept to delivery.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button
              href={WHATSAPP_URL}
              variant="secondary"
              external
              className="border-white! text-white hover:bg-white! hover:text-orange!"
            >
              WhatsApp Us
            </Button>
            <Button
              href={`mailto:${EMAIL}`}
              variant="ghost"
              external
              className="text-white hover:text-orange-100!"
            >
              Send an Email
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
