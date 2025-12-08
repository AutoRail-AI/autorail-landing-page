import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Container } from "components/ui"
import { FOOTER_COLUMNS } from "data/navigation"
import { SITE_CONFIG } from "lib/constants"
import { cn } from "lib/utils"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border-default bg-void-black">
      <Container className="py-12 md:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-3 font-[family-name:var(--font-grotesk)] text-3xl font-bold"
            >
              <Image
                src="/logos/autorail.svg"
                alt="AutoRail - Infrastructure on Autopilot for AI Agents"
                width={48}
                height={48}
                className="h-12 w-12"
              />
              <span className="text-gradient">{SITE_CONFIG.name}</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-foreground-secondary leading-relaxed">
              {SITE_CONFIG.tagline}. Bridge the gap from prototype to production.
            </p>
          </div>

          {/* Link Columns */}
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h4 className="mb-4 text-sm font-semibold text-cloud-white font-[family-name:var(--font-grotesk)]">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink {...link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border-default pt-8 md:flex-row">
          <p className="text-xs text-foreground-muted">
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              className="text-xs text-foreground-muted transition-colors hover:text-cloud-white"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="text-xs text-foreground-muted transition-colors hover:text-cloud-white"
            >
              Terms
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

interface FooterLinkProps {
  label: string
  href: string
  comingSoon?: boolean
  external?: boolean
}

function FooterLink({ label, href, comingSoon, external }: FooterLinkProps) {
  if (comingSoon) {
    return (
      <span className="flex items-center gap-1 text-sm text-foreground-muted cursor-not-allowed">
        {label}
        <span className="text-[10px] text-quantum-violet uppercase tracking-wider">(Soon)</span>
      </span>
    )
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "flex items-center gap-1 text-sm",
        "text-foreground-secondary transition-colors hover:text-cloud-white"
      )}
    >
      {label}
      {external && <ExternalLink size={12} className="text-foreground-muted" />}
    </a>
  )
}
