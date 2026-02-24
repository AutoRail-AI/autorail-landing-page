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
