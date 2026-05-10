'use client'

const marqueeItems = [
  'Suspended Ceilings',
  'Drywall Partitioning',
  'Geyser Installation',
  'Leak Repairs',
  'Waterproofing',
  'Bulkheads & Cornices',
  'Bathroom Renovations',
  'Emergency Plumbing',
  'Commercial Projects',
  'Residential Services',
]

export function Marquee() {
  return (
    <div className="border-y border-border bg-primary/5 py-4 overflow-hidden">
      <div className="flex animate-marquee gap-16 hover:[animation-play-state:paused]" style={{ width: 'max-content' }}>
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-muted-foreground whitespace-nowrap"
          >
            <span className="text-primary text-[0.5rem]">&#9670;</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
