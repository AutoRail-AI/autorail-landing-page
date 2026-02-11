"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Github, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Container } from "components/ui/Container"
import { NAV_LINKS } from "data/navigation"
import { SECTION_IDS, SITE_CONFIG } from "lib/constants"
import { calTriggerProps } from "components/providers"
import { cn } from "lib/utils"

/** Nav link config — glowing at rest, clean glass on hover */
const LINK_CONFIG: Record<
  string,
  { restClass: string; borderColor: string }
> = {
  [`#${SECTION_IDS.codeSynapse}`]: {
    restClass:
      "bg-electric-cyan/10 border-electric-cyan/50 text-white shadow-[0_0_20px_rgba(0,229,255,0.3)]",
    borderColor: "border-l-electric-cyan",
  },
  [`#${SECTION_IDS.necroma}`]: {
    restClass:
      "bg-rail-purple/25 border-rail-purple/60 text-white shadow-[0_0_25px_rgba(110,24,179,0.4)]",
    borderColor: "border-l-rail-purple",
  },
}

/** Docs — green glow at rest */
const DEFAULT_LINK: (typeof LINK_CONFIG)[string] = {
  restClass:
    "bg-success/10 border-success/50 text-white shadow-[0_0_20px_rgba(0,255,136,0.3)]",
  borderColor: "",
}

export function NavBar() {
  const [scrollY, setScrollY] = useState(0)
  const isScrolled = scrollY > 20

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY ?? 0)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const firstFocusableElementRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
      setTimeout(() => firstFocusableElementRef.current?.focus(), 100)
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  const centerLinks = NAV_LINKS.filter((l) => !l.external)
  const mobileLinks = NAV_LINKS.filter((l) => !l.external)

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#0A0A0F]/85 backdrop-blur-xl border-b border-white/[0.08] py-3"
          : "bg-transparent py-5"
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo — radial glow pedestal, no visible edges */}
          <Link
            href="/"
            className="flex items-center px-4 py-2 rounded-xl transition-opacity hover:opacity-80"
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

          {/* Desktop Center Navigation — glow boxes */}
          <nav className="hidden md:flex items-center gap-4">
            {centerLinks.map((link) => {
              const config = LINK_CONFIG[link.href] ?? DEFAULT_LINK
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-sm font-medium tracking-wide transition-all duration-200",
                    config.restClass,
                    "hover:bg-white/[0.02] hover:border-white/[0.08] hover:text-white/70 hover:shadow-none"
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Desktop Right Flank — GitHub glass button + CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* GitHub — Industrial Glass square with yellow glow */}
            <Link
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-md bg-white/[0.02] glow-yellow transition-all duration-200 text-warning hover:text-electric-cyan hover:border-electric-cyan/50 hover:shadow-[0_0_15px_rgba(0,229,255,0.2)]"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </Link>

            {/* CTA — Cal.com booking trigger */}
            <button
              {...calTriggerProps}
              className="inline-flex items-center justify-center h-9 px-4 rounded-lg text-sm font-medium font-[family-name:var(--font-grotesk)] bg-transparent border border-electric-cyan/30 text-electric-cyan transition-all duration-200 hover:glow-yellow hover:text-warning hover:border-warning/50 hover:bg-warning/5 active:scale-[0.98] cursor-pointer"
            >
              Get Early Access
            </button>
          </div>

          {/* Mobile Menu Toggle */}
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 top-[60px] z-40 bg-void-black/95 backdrop-blur-xl flex flex-col pt-8 px-6 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              {mobileLinks.map((link, i) => {
                const config = LINK_CONFIG[link.href] ?? DEFAULT_LINK
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.05 * i,
                      duration: 0.25,
                      ease: "easeOut",
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMobileMenu}
                      className={cn(
                        "text-lg font-medium text-white/90 tracking-wide border-b border-white/10 py-4 flex items-center gap-2",
                        config.borderColor
                          ? cn("border-l-2 pl-3", config.borderColor)
                          : "pl-3"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}

              {/* Bottom actions: GitHub + CTA */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.05 * mobileLinks.length,
                  duration: 0.25,
                  ease: "easeOut",
                }}
                className="flex items-center gap-3 mt-6"
              >
                <Link
                  href={SITE_CONFIG.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center w-11 h-11 rounded-md bg-white/[0.02] glow-yellow transition-all text-warning hover:text-electric-cyan hover:border-electric-cyan/50 hover:shadow-[0_0_15px_rgba(0,229,255,0.2)]"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </Link>

                <button
                  {...calTriggerProps}
                  onClick={closeMobileMenu}
                  className="flex-1 inline-flex items-center justify-center h-11 px-4 rounded-lg text-sm font-medium font-[family-name:var(--font-grotesk)] bg-transparent border border-electric-cyan/30 text-electric-cyan transition-all duration-200 hover:glow-yellow hover:text-warning hover:border-warning/50 hover:bg-warning/5 active:scale-[0.98] cursor-pointer"
                >
                  Get Early Access
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
