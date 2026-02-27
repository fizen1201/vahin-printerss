import type { GalleryItem } from '@/types'

// Images sourced from the reference site: https://fizen1201.github.io/newvahingallery/
// Download these to /public/images/gallery/ before launch and update paths accordingly.
// For now, using the remote URLs (configured in next.config.ts).

const BASE = 'https://fizen1201.github.io/newvahingallery'

export const gallery: GalleryItem[] = [
  // ── Featured (Profound Works) ────────────────────────────────
  {
    id: 'bentley-catalogue',
    title: 'Bentley — Corporate Catalogue',
    category: 'catalogues',
    imageUrl: `${BASE}/images/bentley.jpg`,
    alt: 'Bentley corporate catalogue printed by Vahin Printers',
    client: 'Bentley',
    featured: true,
  },
  {
    id: 'aero-work',
    title: 'Aero — Print Collateral',
    category: 'folders',
    imageUrl: `${BASE}/images/aero.jpg`,
    alt: 'Aero print collateral produced by Vahin Printers',
    client: 'Aero',
    featured: true,
  },
  {
    id: 'ratna-sagar-books',
    title: 'Ratna Sagar — Educational Books',
    category: 'books',
    imageUrl: `${BASE}/images/ratnasagar.jpg`,
    alt: 'Ratna Sagar educational books printed by Vahin Printers',
    client: 'Ratna Sagar',
    featured: true,
  },

  // ── Samples ─────────────────────────────────────────────────
  {
    id: 'paper-bags-01',
    title: 'Custom Paper Bags',
    category: 'paper-bags',
    imageUrl: `${BASE}/images/paperbags1.jpg`,
    alt: 'Custom branded paper bags by Vahin Printers',
    featured: false,
  },
  {
    id: 'paper-bags-02',
    title: 'Retail Paper Bags',
    category: 'paper-bags',
    imageUrl: `${BASE}/images/paperbags2.jpg`,
    alt: 'Retail paper bags printed by Vahin Printers',
    featured: false,
  },
  {
    id: 'stationery-01',
    title: 'Corporate Stationery',
    category: 'stationery',
    imageUrl: `${BASE}/images/stationery1.jpg`,
    alt: 'Corporate stationery printed by Vahin Printers',
    featured: false,
  },
  {
    id: 'catalogues-01',
    title: 'Product Catalogue',
    category: 'catalogues',
    imageUrl: `${BASE}/images/catalogue1.jpg`,
    alt: 'Product catalogue printed by Vahin Printers',
    featured: false,
  },
  {
    id: 'folders-01',
    title: 'Presentation Folder',
    category: 'folders',
    imageUrl: `${BASE}/images/folder1.jpg`,
    alt: 'Corporate presentation folder by Vahin Printers',
    featured: false,
  },
  {
    id: 'flyers-01',
    title: 'Promotional Flyer',
    category: 'flyers',
    imageUrl: `${BASE}/images/flyer1.jpg`,
    alt: 'Promotional flyer printed by Vahin Printers',
    featured: false,
  },
  {
    id: 'books-01',
    title: 'Book Printing',
    category: 'books',
    imageUrl: `${BASE}/images/book1.jpg`,
    alt: 'Book printed by Vahin Printers',
    featured: false,
  },
  {
    id: 'magazines-01',
    title: 'Magazine',
    category: 'magazines',
    imageUrl: `${BASE}/images/magazine1.jpg`,
    alt: 'Magazine printed by Vahin Printers',
    featured: false,
  },
  {
    id: 'magazines-02',
    title: 'Corporate Magazine',
    category: 'magazines',
    imageUrl: `${BASE}/images/magazine2.jpg`,
    alt: 'Corporate magazine printed by Vahin Printers',
    featured: false,
  },
]
