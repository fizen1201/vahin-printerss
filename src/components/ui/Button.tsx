import Link from 'next/link'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost'
  href?: string
  children: React.ReactNode
  onClick?: () => void
  className?: string
  external?: boolean
}

const variants = {
  primary: 'bg-orange text-white hover:bg-orange-600 shadow-sm',
  secondary: 'border-2 border-navy text-navy hover:bg-navy hover:text-white',
  ghost: 'text-orange hover:underline underline-offset-4',
}

export function Button({
  variant = 'primary',
  href,
  children,
  onClick,
  className = '',
  external = false,
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors duration-200 cursor-pointer'
  const cls = `${base} ${variants[variant]} ${className}`

  if (href) {
    if (external) {
      return (
        <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  )
}
