import { SITE_URL, SITE_DESCRIPTION } from './constants'

export const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Vahin Printers',
  url: SITE_URL,
  telephone: '+919313040145',
  email: 'vahinprinters@gmail.com',
  description: SITE_DESCRIPTION,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '3/2-A, 1st Floor, B-Block, Patparganj Industrial Area, Jhilmil Colony',
    addressLocality: 'New Delhi',
    addressRegion: 'Delhi',
    postalCode: '110095',
    addressCountry: 'IN',
  },
  priceRange: '₹₹',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  },
}
