import type { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'catalogues',
    name: 'Catalogues',
    description:
      'High-quality product and corporate catalogues with professional finishing and vibrant colour reproduction.',
    icon: 'BookOpen',
  },
  {
    id: 'paper-bags',
    name: 'Paper Bags',
    description:
      'Custom branded paper bags for retail, gifting, and corporate use — available in all sizes and finishes.',
    icon: 'ShoppingBag',
  },
  {
    id: 'flyers',
    name: 'Flyers',
    description:
      'Eye-catching single and double-sided promotional flyers for events, marketing campaigns, and retail.',
    icon: 'FileText',
  },
  {
    id: 'folders',
    name: 'Folders',
    description:
      'Presentation and corporate document folders that leave a lasting impression on clients and partners.',
    icon: 'Folder',
  },
  {
    id: 'magazines',
    name: 'Magazines',
    description:
      'Full-colour magazine printing with saddle-stitch or perfect binding for any publication size.',
    icon: 'Newspaper',
  },
  {
    id: 'books',
    name: 'Books',
    description:
      'Educational books, novels, and corporate publications printed to the highest standard of clarity and finish.',
    icon: 'Book',
  },
]
