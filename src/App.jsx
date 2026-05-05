import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PortfolioLinks from './components/PortfolioLinks'

export default function App() {
  return (
    <>
      {/* Architectural grid background */}
      <div
        className="grid-bg fixed inset-0 pointer-events-none z-0 opacity-60"
        aria-hidden="true"
      />
      <Navbar />
      <main>
        <Hero />
        <PortfolioLinks />
      </main>
      <footer className="relative z-10 border-t border-[rgba(60,55,48,0.12)] px-16 py-10 flex items-center justify-between flex-wrap gap-4">
        <span className="font-serif text-sm text-muted tracking-widest">
          Jitika Duggal &nbsp;—&nbsp; Architect
        </span>
        <span className="text-xs tracking-widest text-muted opacity-60">

        </span>
      </footer>
    </>
  )
}
