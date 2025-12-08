export interface NavLink {
  label: string
  href: string
  comingSoon?: boolean
  external?: boolean
}

export const NAV_LINKS: NavLink[] = [
  {
    label: "Product",
    href: "#capabilities",
  },
  {
    label: "Docs",
    href: "/docs",
    comingSoon: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/AutoRail-AI",
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
      { label: "Features", href: "#capabilities" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Pricing", href: "/pricing", comingSoon: true },
      { label: "Roadmap", href: "/roadmap", comingSoon: true },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/docs", comingSoon: true },
      { label: "Blog", href: "/blog", comingSoon: true },
      { label: "Changelog", href: "/changelog", comingSoon: true },
      { label: "Status", href: "https://status.autorail.com", comingSoon: true, external: true },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about", comingSoon: true },
      { label: "X", href: "https://x.com/autorail_ai", external: true },
      { label: "LinkedIn", href: "https://linkedin.com/company/autorail_ai", external: true },
      { label: "GitHub", href: "https://github.com/AutoRail-AI", external: true },
      { label: "Contact", href: "mailto:jaswanth@autorail.dev", external: true },
    ],
  },
]
