import type { Client } from '@/types'

const BASE = 'https://fizen1201.github.io/newvahingallery'

export const clients: Client[] = [
  { id: 'g-net-solutions', name: 'G-Net Solutions',  logoUrl: `${BASE}/images/clients/gnet.png`,        featured: false },
  { id: 'ratna-sagar',     name: 'Ratna Sagar',       logoUrl: `${BASE}/images/clients/ratnasagar.png`,  featured: true  },
  { id: 'etl',             name: 'ETL',               logoUrl: `${BASE}/images/clients/etl.png`,         featured: false },
  { id: 'wiley',           name: 'Wiley',             logoUrl: `${BASE}/images/clients/wiley.png`,       featured: false },
  { id: 'ambience-school', name: 'Ambience School',   logoUrl: `${BASE}/images/clients/ambience.png`,    featured: false },
  { id: 'aero-button',     name: 'Aero Button',       logoUrl: `${BASE}/images/clients/aero.png`,        featured: true  },
  { id: 'bentley',         name: 'Bentley',           logoUrl: `${BASE}/images/clients/bentley.png`,     featured: true  },
  { id: 'allana',          name: 'Allana',            logoUrl: `${BASE}/images/clients/allana.png`,      featured: false },
  { id: 'greaves',         name: 'Greaves',           logoUrl: `${BASE}/images/clients/greaves.png`,     featured: false },
  { id: 'helventia',       name: 'Helventia',         logoUrl: `${BASE}/images/clients/helventia.png`,   featured: false },
  { id: 'skas-autotech',   name: 'SKAS AUTOTECH',     logoUrl: `${BASE}/images/clients/skas.png`,        featured: false },
  { id: 'gmhs',            name: 'GMHS',              logoUrl: `${BASE}/images/clients/gmhs.png`,        featured: false },
]
