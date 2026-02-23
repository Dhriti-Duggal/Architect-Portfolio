import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-16 py-6
                 bg-[rgba(247,244,239,0.85)] backdrop-blur-md border-b border-[rgba(60,55,48,0.10)]"
      role="banner"
    >
      <a
        href="#hero"
        aria-label="Back to top"
        className="font-serif text-base font-normal tracking-[0.14em] uppercase text-accent
                   no-underline transition-opacity hover:opacity-70"
      >
        Y.N.
      </a>
      <span className="text-[0.68rem] tracking-[0.22em] uppercase text-muted">
        Architect &nbsp;·&nbsp; Dubai
      </span>
    </motion.nav>
  )
}
