import { MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/constants'

export function WhatsAppFAB() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors duration-200"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  )
}
