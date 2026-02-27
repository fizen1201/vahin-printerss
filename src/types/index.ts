// ── Services ─────────────────────────────────────────────────

export interface Service {
  id: string
  name: string
  description: string
  icon: string
  imageUrl?: string
}

// ── Gallery ──────────────────────────────────────────────────

export type GalleryCategory =
  | 'catalogues'
  | 'paper-bags'
  | 'flyers'
  | 'folders'
  | 'magazines'
  | 'books'
  | 'stationery'

export interface GalleryItem {
  id: string
  title: string
  category: GalleryCategory
  imageUrl: string
  alt: string
  client?: string
  featured: boolean
}

// ── Testimonials ─────────────────────────────────────────────

export interface Testimonial {
  id: string
  quote: string
  authorName: string
  authorTitle?: string
  company?: string
}

// ── Clients ──────────────────────────────────────────────────

export interface Client {
  id: string
  name: string
  logoUrl: string
  featured: boolean
}

// ── Contact ──────────────────────────────────────────────────

export interface Address {
  line1: string
  line2?: string
  area: string
  city: string
  state: string
  pin: string
  country: string
}

export interface SocialLinks {
  facebook?: string
  whatsapp: string
}

export interface ContactInfo {
  readonly address: Address
  readonly phone: string
  readonly email: string
  readonly social: SocialLinks
  readonly mapEmbedUrl: string
}
