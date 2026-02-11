import { SECTION_IDS } from "lib/constants"

export interface NavLink {
  label: string
  href: string
  comingSoon?: boolean
  external?: boolean
}

export const NAV_LINKS: NavLink[] = [
  {
    label: "code-synapse",
    href: `#${SECTION_IDS.codeSynapse}`,
  },
  {
    label: "necroma",
    href: `#${SECTION_IDS.necroma}`,
  },
  {
    label: "docs",
    href: "/docs",
    comingSoon: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/AutoRail-AI/code-synapse",
    external: true,
  },
]

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
      { label: "code-synapse", href: "/code-synapse" },
      { label: "necroma", href: "/necroma" },
      { label: "Safety Rating", href: `#${SECTION_IDS.safetyRating}` },
      { label: "Ecosystem", href: `#${SECTION_IDS.ecosystem}` },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/docs", comingSoon: true },
      { label: "GitHub", href: "https://github.com/AutoRail-AI/code-synapse", external: true },
      { label: "Status", href: "https://status.autorail.com", comingSoon: true, external: true },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about", comingSoon: true },
      { label: "Enterprise", href: "mailto:enterprise@autorail.dev", external: true },
      { label: "Contact", href: "mailto:jaswanth@autorail.dev", external: true },
    ],
  },
]
