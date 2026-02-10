"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Button } from "components/ui/Button"
import { Container } from "components/ui/Container"
import { cn } from "lib/utils"

import { SITE_CONFIG, SECTION_IDS } from "lib/constants"
import { NAV_LINKS } from "data/navigation"

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

  // Close mobile menu on resize (if switching to desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
      // Focus trap logic could be enhanced here
      setTimeout(() => firstFocusableElementRef.current?.focus(), 100)
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  // Handle escape key to close menu
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

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-void-black/80 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-5"
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 font-[family-name:var(--font-grotesk)] text-2xl font-bold text-white group"
            onClick={closeMobileMenu}
          >
            <Image
              src="/autorail.svg"
              alt="autorail"
              width={32}
              height={32}
              className="h-8 w-8 transition-transform group-hover:scale-110"
              priority
            />
            <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
              {SITE_CONFIG.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.filter((l) => !l.external).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium text-white/70 hover:text-white transition-colors",
                  link.href === `#${SECTION_IDS.codeSynapse}` && "hover:text-electric-cyan",
                  link.href === `#${SECTION_IDS.necroma}` && "hover:text-rail-purple"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="https://github.com/AutoRail-AI/code-synapse"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Button
              href={`#${SECTION_IDS.cta}`}
              variant="primary"
              size="sm"
              className="bg-electric-cyan/20 hover:bg-electric-cyan/30 text-electric-cyan border border-electric-cyan/30 glow-cyan"
            >
              Get the Safety Kit
            </Button>
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
            className="fixed inset-0 top-[60px] z-40 bg-void-black flex flex-col pt-8 px-6 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="text-lg font-medium text-white/90 border-b border-white/10 pb-4 flex items-center gap-2"
                  {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                >
                  {link.label}
                  {link.external && <Github className="w-4 h-4" />}
                </Link>
              ))}

              <Button href={`#${SECTION_IDS.cta}`} className="mt-4 w-full justify-center">
                Get the Safety Kit
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
