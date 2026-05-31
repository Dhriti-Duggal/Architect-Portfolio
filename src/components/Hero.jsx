import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] },
})

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-screen flex flex-col items-center justify-center
                 text-center px-6 pt-32 pb-24 overflow-hidden z-10"
    >
      {/* Animated radial orb */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(184,154,106,0.10) 0%, rgba(247,244,239,0) 70%)',
          top: '50%', left: '50%', x: '-50%', y: '-50%',
        }}
        animate={{ scale: [1, 1.22, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />

      {/* Eyebrow */}
      <motion.p
        className="text-[0.66rem] tracking-[0.38em] uppercase text-gold mb-8"
        {...fadeUp(0.2)}
      >

      </motion.p>

      {/* Name */}
      <motion.h1
        className="font-serif font-light leading-none tracking-tight text-accent mb-4"
        style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)' }}
        {...fadeUp(0.4)}
      >
        Jitika <em className="italic text-gold not-italic" style={{ fontStyle: 'italic' }}>Duggal</em>
      </motion.h1>

      {/* Title */}
      <motion.p
        className="font-serif font-light tracking-[0.22em] uppercase text-muted mb-8"
        style={{ fontSize: 'clamp(0.9rem, 2vw, 1.4rem)' }}
        {...fadeUp(0.6)}
      >
        Architect
      </motion.p>

      {/* Gold divider */}
      <motion.div
        className="h-px bg-gold mx-auto mb-8"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 60, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
        aria-hidden="true"
      />

      {/* Tagline */}
      <motion.p
        className="text-muted leading-relaxed tracking-wide max-w-md mb-14"
        style={{ fontSize: 'clamp(0.82rem, 1.4vw, 0.98rem)', letterSpacing: '0.04em' }}
        {...fadeUp(1.0)}
      >
        Designing functional spaces with precision and clarity.
      </motion.p>

      {/* CTAs */}
      <motion.div
        className="flex gap- justify-center flex-wrap"
        {...fadeUp(1.2)}
      >
        <motion.a
          href="https://drive.google.com/file/d/1RNrfq841BMHhsLdkE10RgxqIZ0YbSdiY/view?usp=share_link"
          aria-label="Download Portfolio PDF"
          className="inline-flex items-center gap-2 px-9 py-3.5 bg-accent text-bg
                     text-[0.72rem] font-sans font-normal tracking-[0.18em] uppercase
                     border border-accent no-underline cursor-pointer"
          whileHover={{ scale: 1.03, y: -2 }}
          transition={{ duration: 0.25 }}
          style={{ boxShadow: 'none' }}
          whileTap={{ scale: 0.98 }}
        >
          <DownloadIcon />
          View Portfolio
        </motion.a>
        <motion.a
          href="https://drive.google.com/file/d/1RNrfq841BMHhsLdkE10RgxqIZ0YbSdiY/view?usp=share_link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Thesis Document"
          className="inline-flex items-center gap-2 px-9 py-3.5 bg-transparent text-accent
                     text-[0.72rem] font-sans font-normal tracking-[0.18em] uppercase
                     border border-[rgba(60,55,48,0.20)] no-underline cursor-pointer"
          whileHover={{ scale: 1.03, y: -2, borderColor: 'rgba(184,154,106,0.6)' }}
          transition={{ duration: 0.25 }}
          whileTap={{ scale: 0.98 }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 2h9l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8 1.5V8h4.5L14 3.5zM8 12h8v1.5H8V12zm0 3h8v1.5H8V15zm0 3h5v1.5H8V18z"/>
          </svg>
          Thesis
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/jitika-duggal-a4105b199/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="inline-flex items-center gap-2 px-9 py-3.5 bg-transparent text-accent
                     text-[0.72rem] font-sans font-normal tracking-[0.18em] uppercase
                     border border-[rgba(60,55,48,0.20)] no-underline cursor-pointer"
          whileHover={{ scale: 1.03, y: -2, borderColor: 'rgba(184,154,106,0.6)' }}
          transition={{ duration: 0.25 }}
          whileTap={{ scale: 0.98 }}
        >
          <LinkedInIcon />
          LinkedIn
        </motion.a>
        <motion.a
          href="/Users/jitikaduggal/Downloads/BIM POhttps://drive.google.com/file/d/14IKk_UFX4L-0_BRa6XE6dIgphlJyVXRd/view?usp=share_linkRTFOLIO _ JITIKA.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="BIM Portfolio"
          className="inline-flex items-center gap-2 px-9 py-3.5 bg-transparent text-accent
                     text-[0.72rem] font-sans font-normal tracking-[0.18em] uppercase
                     border border-[rgba(60,55,48,0.20)] no-underline cursor-pointer"
          whileHover={{ scale: 1.03, y: -2, borderColor: 'rgba(184,154,106,0.6)' }}
          transition={{ duration: 0.25 }}
          whileTap={{ scale: 0.98 }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
          </svg>
          BIM Portfolio
        </motion.a>
      </motion.div>


      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        {...fadeUp(1.6)}
        aria-hidden="true"
      >

        <motion.div
          className="w-px h-10 bg-gradient-to-b from-gold to-transparent"
          animate={{ y: [0, 6, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}

function DownloadIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 3v12m0 0l-4-4m4 4l4-4M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zm2-5a2 2 0 100 4 2 2 0 000-4z" />
    </svg>
  )
}
