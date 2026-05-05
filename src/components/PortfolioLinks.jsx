import { motion } from 'framer-motion'

const CARDS = [
  

]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

export default function PortfolioLinks() {
  return (
    <section
      id="portfolio"
      aria-label="Portfolio and Links"
      className="relative z-10 px-6 pt-10 pb-24"
    >
      {/* Section separator */}
      <div className="flex items-center gap-6 max-w-4xl mx-auto mb-16" aria-hidden="true">
        <div className="flex-1 h-px bg-[rgba(60,55,48,0.12)]" />
        <span className="text-[0.6rem] tracking-[0.3em] uppercase text-muted whitespace-nowrap">
          Work &amp; Contact
        </span>
        <div className="flex-1 h-px bg-[rgba(60,55,48,0.12)]" />
      </div>

      {/* Heading */}
      <div className="text-center mb-14">
{/* Heading */}
<div className="text-center mb-14 max-w-2xl mx-auto">
  <h2 className="font-serif text-4xl md:text-5xl text-accent mb-6">
    Get in Touch
  </h2>

  <div className="space-y-2 text-[0.8rem] tracking-[0.08em] text-muted">
    <p>
      <span className="uppercase tracking-[0.2em] text-gold mr-2">Email</span>
      jitika2002dugal@gmail.com
    </p>

    <p>
      <span className="uppercase tracking-[0.2em] text-gold mr-2">Phone</span>
      +91 9876747500
      +971 547302111
    </p>
  </div>
</div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {CARDS.map((card, i) => (
          <motion.a
            key={card.title}
            href={card.href}
            target={card.external ? '_blank' : undefined}
            rel={card.external ? 'noopener noreferrer' : undefined}
            aria-label={card.cta + ' — ' + card.title}
            className="relative flex flex-col gap-5 p-10 no-underline text-accent
                       bg-white/60 border border-[rgba(60,55,48,0.12)] overflow-hidden
                       group cursor-pointer"
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(60,55,48,0.10)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          >
            {/* Gold left-border reveal on hover */}
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-[3px] bg-gold"
              initial={{ scaleY: 0, originY: 0 }}
              whileHover={{ scaleY: 1 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              aria-hidden="true"
            />

            {/* Icon */}
            <span className="text-gold">{card.icon}</span>

            {/* Title */}
            <h3 className="font-serif text-2xl font-normal text-accent">{card.title}</h3>

            {/* Description */}
            <p className="text-[0.82rem] text-muted leading-relaxed tracking-[0.02em]">
              {card.description}
            </p>

            {/* CTA */}
            <span className="mt-auto text-[0.68rem] tracking-[0.2em] uppercase text-gold
                             inline-flex items-center gap-1.5">
              {card.cta}
              <motion.span
                className="inline-block"
                animate={{ x: 0 }}
                whileHover={{ x: 4 }}
              >
                →
              </motion.span>
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  )
}

function PortfolioIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M12 18v-6m0 0l-3 3m3-3l3 3" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zm2-5a2 2 0 100 4 2 2 0 000-4z" />
    </svg>
  )
}

function ResumeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 7h8M8 11h8M8 15h5" />
    </svg>
  )
}
