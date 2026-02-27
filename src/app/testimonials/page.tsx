import type { Metadata } from 'next'
import { testimonials } from '@/data/testimonials'
import { clients } from '@/data/clients'
import { ClientLogoGrid } from '@/components/ui/ClientLogoGrid'

export const metadata: Metadata = {
  title: 'Testimonials',
  description:
    'See what our clients say about Vahin Printers. Trusted by Bentley, Ratna Sagar, Aero, and 15+ companies across India.',
}

const sortedClients = [...clients].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))

export default function TestimonialsPage() {
  return (
    <>
      {/* Dramatic Hero */}
      <section className="relative bg-navy overflow-hidden min-h-[55vh] flex items-end pb-16">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,107,53,0.12) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
          <span
            className="font-display font-black leading-none whitespace-nowrap"
            style={{
              fontSize: '14vw',
              WebkitTextStroke: '1px rgba(255,255,255,0.04)',
              color: 'transparent',
            }}
          >
            CLIENTS
          </span>
        </div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-orange" />

        <div className="relative max-w-7xl mx-auto px-4 pt-36 w-full">
          <p className="text-orange text-xs font-medium uppercase tracking-[0.3em] mb-5">
            Client Stories
          </p>
          <h1 className="font-display font-black leading-[0.9]">
            <span
              className="block"
              style={{
                fontSize: 'clamp(3.5rem, 10vw, 9rem)',
                WebkitTextStroke: '2px rgba(255,255,255,0.8)',
                color: 'transparent',
              }}
            >
              TESTIMONIALS
            </span>
            <span
              className="text-white block mt-3"
              style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)' }}
            >
              What our clients say about working with us.
            </span>
          </h1>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => {
              const isPlaceholder = t.authorName.includes('[')
              return (
                <div
                  key={t.id}
                  className={`group relative bg-white rounded-2xl p-10 shadow-sm border transition-shadow hover:shadow-md ${
                    isPlaceholder ? 'border-dashed border-amber-200' : 'border-gray-100'
                  }`}
                >
                  {/* Large quote mark */}
                  <p
                    className="font-display font-black text-[6rem] leading-none text-orange/15 absolute top-4 left-8 select-none pointer-events-none"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </p>

                  {/* Number */}
                  <p className="font-display font-black text-sm text-gray-300 uppercase tracking-widest mb-6">
                    {String(i + 1).padStart(2, '0')}
                  </p>

                  <p className="text-gray-700 italic leading-relaxed text-lg mb-8 relative z-10">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center shrink-0">
                      <span className="text-orange font-display font-bold text-base">
                        {t.authorName.replace('[', '').charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm">{t.authorName}</p>
                      {t.authorTitle && (
                        <p className="text-xs text-gray-400 mt-0.5">{t.authorTitle}</p>
                      )}
                      {t.company && (
                        <p className="text-xs text-orange font-medium mt-0.5">{t.company}</p>
                      )}
                    </div>
                  </div>

                  {isPlaceholder && (
                    <p className="mt-5 text-xs text-amber-600 bg-amber-50 px-3 py-1.5 rounded-full inline-block border border-amber-200">
                      Placeholder — replace before launch
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Client Logos — dark section */}
      <section className="py-24 px-4 bg-navy relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,107,53,0.06) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-orange text-xs font-medium uppercase tracking-widest mb-4">
              Trusted By
            </p>
            <h2 className="font-display font-black text-4xl md:text-5xl text-white leading-none">
              Our Clients
            </h2>
            <p className="text-gray-400 mt-4 max-w-lg mx-auto">
              Trusted by leading brands across India.
            </p>
          </div>
          <ClientLogoGrid clients={sortedClients} />
        </div>
      </section>
    </>
  )
}
