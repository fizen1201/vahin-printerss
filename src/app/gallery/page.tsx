'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, ZoomIn, Printer } from 'lucide-react'
import { gallery } from '@/data/gallery'
import type { GalleryItem } from '@/types'

function Lightbox({
  item,
  onClose,
}: {
  item: GalleryItem
  onClose: () => void
}) {
  const [imgError, setImgError] = useState(false)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Viewing: ${item.title}`}
    >
      <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/60 hover:text-orange transition-colors"
          aria-label="Close lightbox"
        >
          <X className="w-8 h-8" />
        </button>
        <div className="relative rounded-2xl overflow-hidden bg-navy aspect-4/3 shadow-2xl">
          {imgError ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-orange/10 border border-orange/20 flex items-center justify-center">
                <Printer className="w-10 h-10 text-orange/50" />
              </div>
              <p className="text-white/40 text-sm uppercase tracking-widest">
                {item.category.replace('-', ' ')}
              </p>
            </div>
          ) : (
            <Image
              src={item.imageUrl}
              alt={item.alt}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 900px"
              unoptimized
              onError={() => setImgError(true)}
            />
          )}
        </div>
        <div className="mt-4 text-center">
          <p className="text-white font-display font-bold text-lg">{item.title}</p>
          {item.client && <p className="text-orange text-sm mt-1">{item.client}</p>}
        </div>
      </div>
    </div>
  )
}

function FeaturedCard({ item, onClick }: { item: GalleryItem; onClick: () => void }) {
  const [imgError, setImgError] = useState(false)

  return (
    <button
      onClick={onClick}
      className="group relative w-full aspect-[4/5] overflow-hidden rounded-2xl bg-navy-800 cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-orange"
      style={{ backgroundColor: '#1e1e1e' }}
      aria-label={`View ${item.title}`}
    >
      {imgError ? (
        /* ── Elegant placeholder ── */
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5"
          style={{ background: 'linear-gradient(135deg, #1e1e1e 0%, #111111 100%)' }}>
          <div className="w-20 h-20 rounded-2xl bg-orange/10 border border-orange/20 flex items-center justify-center">
            <Printer className="w-10 h-10 text-orange/50" />
          </div>
          <div className="text-center px-6">
            <p className="text-orange/70 text-[0.65rem] font-semibold uppercase tracking-[0.2em] mb-1.5">
              {item.category.replace('-', ' ')}
            </p>
            <p className="text-white/40 text-sm font-medium leading-snug">{item.title}</p>
          </div>
          {/* Decorative corner marks */}
          <span className="absolute top-4 left-4 w-5 h-5 border-t border-l border-orange/20" />
          <span className="absolute top-4 right-4 w-5 h-5 border-t border-r border-orange/20" />
          <span className="absolute bottom-4 left-4 w-5 h-5 border-b border-l border-orange/20" />
          <span className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-orange/20" />
        </div>
      ) : (
        <>
          <Image
            src={item.imageUrl}
            alt={item.alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 33vw"
            unoptimized
            onError={() => setImgError(true)}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {/* Info */}
          <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <p className="text-white font-display font-bold text-xl leading-tight">{item.title}</p>
            {item.client && <p className="text-orange text-sm mt-1">{item.client}</p>}
          </div>
          {/* Zoom icon */}
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/0 group-hover:bg-black/30 flex items-center justify-center transition-colors duration-300">
            <ZoomIn className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </>
      )}
    </button>
  )
}

function GalleryCard({ item, onClick }: { item: GalleryItem; onClick: () => void }) {
  const [imgError, setImgError] = useState(false)

  return (
    <button
      onClick={onClick}
      className="group relative block w-full aspect-square overflow-hidden rounded-xl cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-orange"
      style={{ backgroundColor: '#f3f4f6' }}
      aria-label={`View ${item.title}`}
    >
      {imgError ? (
        /* ── Elegant placeholder ── */
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-cream to-gray-100">
          <div className="w-14 h-14 rounded-xl bg-navy/5 border border-navy/10 flex items-center justify-center group-hover:bg-orange/10 group-hover:border-orange/20 transition-colors duration-300">
            <Printer className="w-7 h-7 text-navy/25 group-hover:text-orange/50 transition-colors duration-300" />
          </div>
          <p className="text-gray-400 text-[0.6rem] font-semibold uppercase tracking-[0.18em]">
            {item.category.replace('-', ' ')}
          </p>
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/70 transition-colors duration-300 flex items-end p-3">
            <div className="translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <p className="text-white text-sm font-medium text-left leading-snug">{item.title}</p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Image
            src={item.imageUrl}
            alt={item.alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            unoptimized
            onError={() => setImgError(true)}
          />
          <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/70 transition-colors duration-300 flex items-end p-3">
            <div className="translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <p className="text-orange text-xs font-medium uppercase tracking-wider mb-1">
                {item.category.replace('-', ' ')}
              </p>
              <p className="text-white text-sm font-medium text-left leading-snug">{item.title}</p>
            </div>
          </div>
        </>
      )}
    </button>
  )
}

const featured = gallery.filter((g) => g.featured)
const samples = gallery.filter((g) => !g.featured)

export default function GalleryPage() {
  const [selected, setSelected] = useState<GalleryItem | null>(null)
  const close = useCallback(() => setSelected(null), [])

  return (
    <>
      {/* Dramatic Hero */}
      <section className="relative bg-navy overflow-hidden min-h-[55vh] flex items-end pb-16">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(13,143,165,0.12) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
          <span
            className="font-display font-black leading-none whitespace-nowrap"
            style={{
              fontSize: '20vw',
              WebkitTextStroke: '1px rgba(255,255,255,0.04)',
              color: 'transparent',
            }}
          >
            WORK
          </span>
        </div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-orange" />

        <div className="relative max-w-7xl mx-auto px-4 pt-36 w-full">
          <p className="text-orange text-xs font-medium uppercase tracking-[0.3em] mb-5">
            Portfolio
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
              OUR WORK
            </span>
            <span
              className="text-white block mt-3"
              style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)' }}
            >
              A showcase of print projects we are proud of.
            </span>
          </h1>
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-24 px-4 bg-navy-900" style={{ background: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end gap-6 mb-12">
            <div>
              <p className="text-orange text-xs font-medium uppercase tracking-widest mb-3">
                Featured
              </p>
              <h2 className="font-display font-black text-4xl md:text-5xl text-white leading-none">
                Profound Works
              </h2>
            </div>
            <div className="flex-1 h-px bg-white/10 mb-3" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {featured.map((item) => (
              <FeaturedCard key={item.id} item={item} onClick={() => setSelected(item)} />
            ))}
          </div>
        </div>
      </section>

      {/* Samples Grid */}
      <section className="py-24 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end gap-6 mb-12">
            <div>
              <p className="text-orange text-xs font-medium uppercase tracking-widest mb-3">
                More Work
              </p>
              <h2 className="font-display font-black text-4xl md:text-5xl text-navy leading-none">
                Samples
              </h2>
            </div>
            <div className="flex-1 h-px bg-gray-200 mb-3" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {samples.map((item) => (
              <GalleryCard key={item.id} item={item} onClick={() => setSelected(item)} />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selected && <Lightbox item={selected} onClose={close} />}
    </>
  )
}
