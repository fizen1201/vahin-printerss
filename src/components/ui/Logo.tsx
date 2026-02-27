interface LogoProps {
  variant?: 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg'
}

const config = {
  sm: { mark: 'w-6 h-6', markText: 'text-sm', name: 'text-base', sub: 'text-[0.5rem]', gap: 'gap-2', radius: 'rounded-[4px]' },
  md: { mark: 'w-9 h-9', markText: 'text-xl', name: 'text-xl', sub: 'text-[0.58rem]', gap: 'gap-2.5', radius: 'rounded-[6px]' },
  lg: { mark: 'w-12 h-12', markText: 'text-3xl', name: 'text-3xl', sub: 'text-[0.7rem]', gap: 'gap-3', radius: 'rounded-[8px]' },
}

export function Logo({ variant = 'dark', size = 'md' }: LogoProps) {
  const nameColor = variant === 'light' ? 'text-white' : 'text-navy'
  const c = config[size]
  return (
    <span className={`inline-flex items-center ${c.gap}`}>
      {/* Print-mark badge — orange square with "V" */}
      <span
        className={`${c.mark} ${c.radius} bg-orange flex items-center justify-center shrink-0`}
        aria-hidden="true"
      >
        <span className={`font-display font-black text-white leading-none ${c.markText}`}>
          V
        </span>
      </span>

      {/* Wordmark */}
      <span className="flex flex-col justify-center leading-none">
        <span
          className={`font-display font-black tracking-[-0.02em] leading-none ${c.name} ${nameColor}`}
        >
          VAHIN
        </span>
        <span
          className={`font-sans font-semibold tracking-[0.22em] uppercase leading-none text-orange mt-[0.22em] ${c.sub}`}
        >
          PRINTERS
        </span>
      </span>
    </span>
  )
}
