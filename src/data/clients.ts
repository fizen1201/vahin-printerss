import type { Client } from '@/types'

const BASE = 'https://fizen1201.github.io/newvahingallery'

export const clients: Client[] = [
  // Featured clients (Profound Works)
  { id: 'bentley',     name: 'Bentley',      logoUrl: `${BASE}/images/clients/bentley.png`,     featured: true },
  { id: 'aero',        name: 'Aero',          logoUrl: `${BASE}/images/clients/aero.png`,         featured: true },
  { id: 'ratna-sagar', name: 'Ratna Sagar',   logoUrl: `${BASE}/images/clients/ratnasagar.png`,  featured: true },

  // Other clients
  { id: 'client-04', name: 'Client 4',  logoUrl: `${BASE}/images/clients/client4.png`,  featured: false },
  { id: 'client-05', name: 'Client 5',  logoUrl: `${BASE}/images/clients/client5.png`,  featured: false },
  { id: 'client-06', name: 'Client 6',  logoUrl: `${BASE}/images/clients/client6.png`,  featured: false },
  { id: 'client-07', name: 'Client 7',  logoUrl: `${BASE}/images/clients/client7.png`,  featured: false },
  { id: 'client-08', name: 'Client 8',  logoUrl: `${BASE}/images/clients/client8.png`,  featured: false },
  { id: 'client-09', name: 'Client 9',  logoUrl: `${BASE}/images/clients/client9.png`,  featured: false },
  { id: 'client-10', name: 'Client 10', logoUrl: `${BASE}/images/clients/client10.png`, featured: false },
  { id: 'client-11', name: 'Client 11', logoUrl: `${BASE}/images/clients/client11.png`, featured: false },
  { id: 'client-12', name: 'Client 12', logoUrl: `${BASE}/images/clients/client12.png`, featured: false },
]
