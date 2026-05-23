interface SectionHeaderProps {
  label: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export function SectionHeader({
  label,
  title,
  subtitle,
  align = 'left',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={`mb-16 max-w-3xl animate-in-view ${alignClass}`}>
      <div
        className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}
      >
        <span className="h-px w-8 bg-gradient-to-r from-neon-cyan to-transparent" />
        <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-neon-cyan">
          {label}
        </span>
        {align === 'center' && (
          <span className="h-px w-8 bg-gradient-to-l from-neon-cyan to-transparent" />
        )}
      </div>
      <h2 className={`section-title mt-4 ${align === 'center' ? '' : ''}`}>
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && (
        <p className={`section-subtitle ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
