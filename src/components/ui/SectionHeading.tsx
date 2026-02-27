interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionHeading({
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left'
  const titleColor = light ? 'text-white' : 'text-navy'
  const subtitleColor = light ? 'text-gray-300' : 'text-gray-500'

  return (
    <div className={`mb-12 ${alignClass}`}>
      <h2 className={`font-display text-4xl font-bold ${titleColor} mb-3`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${subtitleColor} max-w-2xl mx-auto`}>{subtitle}</p>
      )}
    </div>
  )
}
