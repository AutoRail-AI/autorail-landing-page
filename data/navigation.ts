import { SECTION_IDS } from "lib/constants"

export interface NavLink {
  label: string
  href: string
  comingSoon?: boolean
  external?: boolean
}

export const NAV_LINKS: NavLink[] = []

export interface FooterLink {
  label: string
  href: string
  comingSoon?: boolean
  external?: boolean
}

export interface FooterColumn {
  title: string
  links: FooterLink[]
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "unerr", href: "/unerr" },
      { label: "necroma", href: "/necroma" },
      { label: "Safety Rating", href: `#${SECTION_IDS.safetyRating}` },
      { label: "Ecosystem", href: `#${SECTION_IDS.ecosystem}` },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/docs", comingSoon: true },
      { label: "Status", href: "https://status.autorail.com", comingSoon: true, external: true },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/team" },
      { label: "Enterprise", href: "mailto:jaswanth@autorail.dev", external: true },
      { label: "Contact", href: "mailto:jaswanth@autorail.dev", external: true },
    ],
  },
]

/**
 * Footer columns for unerr.dev domain.
 * Focuses on unerr product, links back to autorail for company pages.
 */
export const UNERR_FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#capabilities" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/docs", comingSoon: true },
      { label: "autorail Platform", href: "https://autorail.dev", external: true },
      { label: "necroma", href: "https://autorail.dev/necroma", external: true },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "https://autorail.dev/team", external: true },
      { label: "Enterprise", href: "mailto:jaswanth@autorail.dev", external: true },
      { label: "Contact", href: "mailto:jaswanth@autorail.dev", external: true },
    ],
  },
]
