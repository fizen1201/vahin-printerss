import type { ContactInfo } from '@/types'

export const contact: ContactInfo = {
  address: {
    line1: '3/2-A, 1st Floor, B-Block',
    area: 'Patparganj Industrial Area, Jhilmil Colony',
    city: 'New Delhi',
    state: 'Delhi',
    pin: '110095',
    country: 'India',
  },
  phone: '9313040145',
  email: 'vahinprinters@gmail.com',
  social: {
    whatsapp: 'https://wa.me/919313040145',
  },
  // Generate the real embed URL from Google Maps:
  // Search address → Share → Embed a map → copy src value
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.8!2d77.2953!3d28.6618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb4b5b5b5b5b%3A0x0!2sPatparganj+Industrial+Area%2C+Jhilmil+Colony%2C+New+Delhi%2C+Delhi+110095!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
}
