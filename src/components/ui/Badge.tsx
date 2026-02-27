interface BadgeProps {
  label: string
}

export function Badge({ label }: BadgeProps) {
  return (
    <span className="inline-block bg-orange-100 text-orange-600 text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide">
      {label}
    </span>
  )
}
