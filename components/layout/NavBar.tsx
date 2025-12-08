"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ExternalLink, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"
import { Button } from "components/ui"
import { NAV_LINKS } from "data/navigation"
import { CTA_TEXT, SITE_CONFIG } from "lib/constants"
import { cn } from "lib/utils"

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Focus trap and keyboard handling for mobile menu
  useEffect(() => {
    if (!isMobileMenuOpen) return

    const menuElement = mobileMenuRef.current
    if (!menuElement) return

    // Get all focusable elements within the menu
    const focusableElements = menuElement.querySelectorAll<HTMLElement>(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    // Focus first element when menu opens
    firstElement?.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false)
        menuButtonRef.current?.focus()
        return
      }

      if (e.key !== "Tab") return

      // Trap focus within the menu
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement?.focus()
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement?.focus()
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isMobileMenuOpen])

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "transition-all duration-200",
        isScrolled
          ? "bg-void-black/80 backdrop-blur-lg border-b border-border-default"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 font-[family-name:var(--font-grotesk)] text-3xl font-bold text-cloud-white"
          >
            <Image
              src="/logos/autorail.svg"
              alt="AutoRail - Infrastructure on Autopilot for AI Agents"
              width={48}
              height={48}
              className="h-12 w-12"
              priority
            />
            <span className="text-gradient">{SITE_CONFIG.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.label} {...link} />
            ))}
            <Button href="#cta" size="sm">
              {CTA_TEXT.primary}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex size-10 items-center justify-center text-cloud-white md:hidden"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-b border-border-default bg-void-black/95 backdrop-blur-lg md:hidden"
          >
            <nav className="flex flex-col gap-4 px-6 py-6" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.label}
                  {...link}
                  onClick={closeMobileMenu}
                />
              ))}
              <Button href="#cta" className="mt-2 w-full" onClick={closeMobileMenu}>
                {CTA_TEXT.primary}
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

interface NavLinkProps {
  label: string
  href: string
  comingSoon?: boolean
  external?: boolean
  onClick?: () => void
}

function NavLink({ label, href, comingSoon, external, onClick }: NavLinkProps) {
  const isGitHub = label.toLowerCase() === "github"

  if (comingSoon) {
    return (
      <span className="flex items-center gap-1 text-sm font-medium text-foreground-muted cursor-not-allowed font-[family-name:var(--font-grotesk)]">
        {label}
        <span className="text-xs text-quantum-violet">(Soon)</span>
      </span>
    )
  }

  return (
    <a
      href={href}
      onClick={onClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "flex items-center gap-2 text-sm font-medium font-[family-name:var(--font-grotesk)]",
        "text-cloud-white/80 transition-colors hover:text-cloud-white"
      )}
    >
      {isGitHub && (
        <Image
          src="/icons/github.png"
          alt="GitHub"
          width={20}
          height={20}
          className="h-5 w-5"
        />
      )}
      {label}
      {external && !isGitHub && <ExternalLink size={14} className="text-foreground-secondary" />}
    </a>
  )
}
