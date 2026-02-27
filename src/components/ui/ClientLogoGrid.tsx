'use client'

import Image from 'next/image'
import { useState } from 'react'
import type { Client } from '@/types'

function ClientLogo({ client }: { client: Client }) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className="flex flex-col items-center gap-1.5">
        {/* Elegant text fallback — initial circle + name */}
        <div className="w-10 h-10 rounded-full bg-orange/10 border border-orange/20 flex items-center justify-center">
          <span className="font-display font-black text-orange/70 text-base leading-none">
            {client.name.charAt(0)}
          </span>
        </div>
        <span className="text-white/40 text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-center leading-tight">
          {client.name}
        </span>
      </div>
    )
  }

  return (
    <Image
      src={client.logoUrl}
      alt={`${client.name} logo`}
      width={120}
      height={60}
      className="object-contain grayscale brightness-200 hover:grayscale-0 hover:brightness-100 transition-all duration-300 opacity-60 hover:opacity-100 h-12 w-auto"
      unoptimized
      onError={() => setError(true)}
    />
  )
}

export function ClientLogoGrid({ clients }: { clients: Client[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
      {clients.map((client) => (
        <div
          key={client.id}
          className="flex items-center justify-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors min-h-[80px]"
        >
          <ClientLogo client={client} />
        </div>
      ))}
    </div>
  )
}
