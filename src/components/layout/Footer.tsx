import Link from 'next/link'
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { SITE_TAGLINE, PHONE, EMAIL, WHATSAPP_URL } from '@/lib/constants'

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Logo variant="light" size="md" />
            <p className="mt-3 text-gray-400 text-sm leading-relaxed max-w-xs">
              {SITE_TAGLINE}
            </p>
            <p className="mt-2 text-gray-500 text-xs">
              3/2-A, B-Block, Patparganj Industrial Area,
              <br />
              Jhilmil Colony, New Delhi 110095
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gold mb-4 text-sm uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gold mb-4 text-sm uppercase tracking-wide">
              Contact Us
            </h3>
            <div className="space-y-3 text-sm text-gray-400">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                {PHONE}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                {EMAIL}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                WhatsApp Us
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-8 pt-6 text-center text-gray-500 text-xs">
          © {new Date().getFullYear()} Vahin Printers. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
