import { SITE_CONFIG } from "lib/constants"

interface JsonLdProps {
  type: "organization" | "software" | "webpage"
}

export function JsonLd({ type }: JsonLdProps) {
  const schemas = {
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      logo: `${SITE_CONFIG.url}/icon-wordmark.svg`,
      description: SITE_CONFIG.description,
      foundingDate: "2024",
      email: "jaswanth@autorail.dev",
      contactPoint: {
        "@type": "ContactPoint",
        email: "jaswanth@autorail.dev",
        contactType: "Customer Support",
        availableLanguage: "English",
      },
      sameAs: [
        SITE_CONFIG.twitterUrl,
        SITE_CONFIG.linkedinUrl,
        SITE_CONFIG.githubUrl,
      ],
    },
    software: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "code-synapse",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Any",
      description: SITE_CONFIG.description,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Open source institutional memory layer for AI-assisted development",
      },
      featureList: [
        "Pattern Enforcement",
        "Self-Reinforcing Knowledge Graph",
        "Drift Prevention",
      ],
    },
    webpage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
      description: SITE_CONFIG.description,
      url: SITE_CONFIG.url,
      mainEntity: {
        "@type": "SoftwareApplication",
        name: SITE_CONFIG.name,
        applicationCategory: "DeveloperApplication",
      },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["#hero h1"],
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas[type]) }}
    />
  )
}
