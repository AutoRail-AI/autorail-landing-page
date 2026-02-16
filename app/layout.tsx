import type { Metadata, Viewport } from "next"
import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/600.css"
import "@fontsource/jetbrains-mono/400.css"
import "@fontsource/space-grotesk/400.css"
import "@fontsource/space-grotesk/500.css"
import "@fontsource/space-grotesk/600.css"
import "@fontsource/space-grotesk/700.css"
import { CalProvider, MotionProvider } from "components/providers"
import { JsonLd } from "components/shared"
import { SITE_CONFIG } from "lib/constants"
import "styles/tailwind.css"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "autorail — Automated Code Review & Governance for AI Coding Tools",
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    "autorail makes AI-powered development safe for production. kap10 is an automated code review tool that supervises Cursor, Claude Code, and Windsurf — enforcing patterns, reviewing code, preventing regressions. necroma automates legacy migration with behavioral verification.",
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: "autorail — Automated Code Review for AI Coding Tools",
    description:
      "Your AI coding agent is fast but unsupervised. autorail reviews every line automatically. Pattern enforcement, code review, regression prevention — all on the MCP channel.",
    images: [
      {
        url: `${SITE_CONFIG.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "autorail — Automated Code Review & Governance for AI Coding Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: SITE_CONFIG.twitterHandle,
    title: "autorail — Automated Code Review for AI Coding Tools",
    description:
      "Stop babysitting your AI. kap10 automatically reviews every line Cursor, Claude Code, and Windsurf write — enforcing your architecture in real time.",
    images: [`${SITE_CONFIG.url}/twitter-card.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
}

export const viewport: Viewport = {
  themeColor: "#0A0A0F",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd type="organization" />
        <JsonLd type="software-kap10" />
        <JsonLd type="software-necroma" />
        <JsonLd type="webpage" />
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <CalProvider>
          <MotionProvider>{children}</MotionProvider>
        </CalProvider>
      </body>
    </html>
  )
}
