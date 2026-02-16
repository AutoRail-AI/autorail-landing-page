"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCallback, useEffect, useRef, useState } from "react"
import { calTriggerProps } from "components/providers"
import { Container } from "components/ui/Container"
import { SECTION_IDS } from "lib/constants"
import { cn } from "lib/utils"

/* ─────────────────────────────────────────────────────────────────────────────
   NavBar — Context-Aware Sticky Navigation

   Home @ Top:      Left: Logo   Center: (hidden)      Right: Join Waitlist + Contact Us
   Home @ Scrolled: Left: Logo   Center: "Products"   Right: Join Waitlist + Contact Us
   Sub-pages:       Left: Logo → /   Center: (empty)   Right: Join Waitlist + Contact Us
   ───────────────────────────────────────────────────────────────────────────── */

const HERO_THRESHOLD = 600

/* ── Hook: useScrollPosition ─────────────────────────────────────────────── */

function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    onScroll() // seed initial value
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return scrollY
}

/* ── Component ───────────────────────────────────────────────────────────── */

export function NavBar() {
  const pathname = usePathname()
  const scrollY = useScrollPosition()

  // Derived state
  const isHome = pathname === "/"
  const isScrolled = scrollY > 20
  const showCenterLink = isHome && scrollY >= HERO_THRESHOLD

  /* ── Mobile menu ─────────────────────────────────────────────────────── */

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const firstFocusRef = useRef<HTMLAnchorElement>(null)

  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), [])
  const toggleMobileMenu = useCallback(
    () => setIsMobileMenuOpen((prev) => !prev),
    [],
  )

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : ""
    if (isMobileMenuOpen) {
      setTimeout(() => firstFocusRef.current?.focus(), 100)
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  // Close on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false)
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false)
    }
    if (isMobileMenuOpen) {
      window.addEventListener("keydown", onKey)
      return () => window.removeEventListener("keydown", onKey)
    }
  }, [isMobileMenuOpen])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#0A0A0F]/85 backdrop-blur-xl border-b border-white/[0.08] py-3"
          : "bg-transparent py-5",
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* ── Left: Logo ─────────────────────────────────────────────── */}
          <Link
            href="/"
            className="flex items-center px-4 py-2 -ml-8 rounded-xl transition-opacity hover:opacity-80"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(255,255,255,0.08) 0%, transparent 70%)",
            }}
            onClick={closeMobileMenu}
          >
            <Image
              src="/icon-wordmark.svg"
              alt="autorail"
              width={233}
              height={77}
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* ── Center: "Products" — fades in after scrolling past hero ── */}
          <nav className="hidden md:flex items-center">
            <a
              href={`#${SECTION_IDS.twoBrains}`}
              className={cn(
                "px-4 py-1.5 rounded-md text-sm font-medium tracking-wide",
                "transition-all duration-300 ease-out",
                showCenterLink
                  ? "opacity-100 translate-y-0 pointer-events-auto text-white/80 hover:text-white"
                  : "opacity-0 -translate-y-2 pointer-events-none",
              )}
            >
              Products
            </a>
          </nav>

          {/* ── Right: CTA ────────────────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center h-9 px-4 rounded-lg text-sm font-medium font-[family-name:var(--font-grotesk)] bg-transparent border border-electric-cyan/30 text-electric-cyan transition-all duration-200 hover:glow-cyan hover:bg-electric-cyan/5 active:scale-[0.98]"
            >
              Join Waitlist
            </a>
            <button
              {...calTriggerProps}
              className="inline-flex items-center justify-center h-9 px-4 rounded-lg text-sm font-medium font-[family-name:var(--font-grotesk)] bg-transparent border border-warning/30 text-warning transition-all duration-200 hover:glow-yellow hover:bg-warning/5 active:scale-[0.98] cursor-pointer"
            >
              Contact Us
            </button>
          </div>

          {/* ── Mobile hamburger ───────────────────────────────────────── */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white p-2"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </Container>

      {/* ── Mobile overlay ──────────────────────────────────────────────── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 top-[60px] z-40 bg-void-black/95 backdrop-blur-xl flex flex-col pt-8 px-6 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              {/* Products link — only on home */}
              {isHome && (
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05, duration: 0.25, ease: "easeOut" }}
                >
                  <a
                    href={`#${SECTION_IDS.twoBrains}`}
                    onClick={closeMobileMenu}
                    className="text-lg font-medium text-white/90 tracking-wide border-b border-white/10 py-4 flex items-center pl-3"
                  >
                    Products
                  </a>
                </motion.div>
              )}

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: isHome ? 0.1 : 0.05,
                  duration: 0.25,
                  ease: "easeOut",
                }}
                className="flex flex-col gap-3 mt-6"
              >
                <a
                  ref={firstFocusRef}
                  href="#waitlist"
                  onClick={closeMobileMenu}
                  className="flex-1 inline-flex items-center justify-center h-11 px-4 rounded-lg text-sm font-medium font-[family-name:var(--font-grotesk)] bg-transparent border border-electric-cyan/30 text-electric-cyan transition-all duration-200 hover:glow-cyan hover:bg-electric-cyan/5 active:scale-[0.98]"
                >
                  Join Waitlist
                </a>
                <button
                  {...calTriggerProps}
                  onClick={closeMobileMenu}
                  className="flex-1 inline-flex items-center justify-center h-11 px-4 rounded-lg text-sm font-medium font-[family-name:var(--font-grotesk)] bg-transparent border border-warning/30 text-warning transition-all duration-200 hover:glow-yellow hover:bg-warning/5 active:scale-[0.98] cursor-pointer"
                >
                  Contact Us
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
