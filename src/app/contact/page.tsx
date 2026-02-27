import type { Metadata } from 'next'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { contact } from '@/data/contact'
import { localBusinessJsonLd } from '@/lib/json-ld'
import type { Address } from '@/types'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Vahin Printers — call, email, or WhatsApp us. Visit us at Patparganj Industrial Area, Jhilmil Colony, New Delhi 110095.',
}

function formatAddress(addr: Address): string {
  return [addr.line1, addr.area, `${addr.city}, ${addr.state} ${addr.pin}`]
    .filter(Boolean)
    .join(', ')
}

export default function ContactPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

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
            REACH US
          </span>
        </div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-orange" />

        <div className="relative max-w-7xl mx-auto px-4 pt-36 w-full">
          <p className="text-orange text-xs font-medium uppercase tracking-[0.3em] mb-5">
            Reach Out
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
              CONTACT
            </span>
            <span
              className="text-white block mt-3"
              style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)' }}
            >
              We&apos;d love to hear about your print project.
            </span>
          </h1>
        </div>
      </section>

      {/* Contact cards + Map */}
      <section className="py-24 px-4 bg-cream">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact info */}
          <div>
            <p className="text-orange text-xs font-medium uppercase tracking-widest mb-4">
              Get in Touch
            </p>
            <h2 className="font-display font-black text-4xl md:text-5xl text-navy mb-10 leading-tight">
              Let&apos;s talk<br />printing.
            </h2>

            <div className="space-y-4 mb-10">
              {/* Address */}
              <div className="flex items-start gap-5 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-orange" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                    Address
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {formatAddress(contact.address)}
                    <br />
                    {contact.address.country}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <a
                href={`tel:${contact.phone}`}
                className="flex items-start gap-5 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-orange/30 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center shrink-0 group-hover:bg-orange transition-colors duration-300">
                  <Phone className="w-6 h-6 text-orange group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                    Phone
                  </p>
                  <p className="text-navy font-display font-bold text-xl">{contact.phone}</p>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${contact.email}`}
                className="flex items-start gap-5 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-orange/30 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center shrink-0 group-hover:bg-orange transition-colors duration-300">
                  <Mail className="w-6 h-6 text-orange group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                    Email
                  </p>
                  <p className="text-navy font-medium text-sm break-all">{contact.email}</p>
                </div>
              </a>
            </div>

            {/* WhatsApp CTA card */}
            <div className="bg-navy rounded-2xl p-8 text-center">
              <MessageCircle className="w-10 h-10 text-orange mx-auto mb-4" />
              <h3 className="font-display font-bold text-white text-xl mb-2">
                Prefer WhatsApp?
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Chat directly with our team for quick quotes and queries.
              </p>
              <Button href={contact.social.whatsapp} variant="primary" external>
                Chat on WhatsApp
              </Button>
            </div>
          </div>

          {/* Right: Google Maps */}
          <div className="lg:sticky lg:top-28">
            <p className="text-orange text-xs font-medium uppercase tracking-widest mb-4">
              Find Us
            </p>
            <h3 className="font-display font-black text-3xl text-navy mb-6 leading-tight">
              Visit Our Press
            </h3>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <iframe
                src={contact.mapEmbedUrl}
                title="Vahin Printers location on Google Maps"
                width="100%"
                height="480"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-gray-400 text-xs mt-3 text-center leading-relaxed">
              3/2-A, 1st Floor, B-Block, Patparganj Industrial Area,<br />
              Jhilmil Colony, New Delhi 110095
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
