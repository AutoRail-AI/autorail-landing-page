import { generateFAQSchema } from "data/faq"
import { SITE_CONFIG } from "lib/constants"

interface JsonLdProps {
  type: "organization" | "software" | "webpage" | "faq"
}

export function JsonLd({ type }: JsonLdProps) {
  const schemas = {
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      logo: `${SITE_CONFIG.url}/logos/autorail.svg`,
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
      name: SITE_CONFIG.name,
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Cloud",
      description:
        "Infrastructure platform that automatically provisions backend primitives for AI agents and agentic systems",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free tier available for indie developers",
      },
      featureList: [
        "Stateful Memory",
        "Workflow Orchestration",
        "Production Guardrails",
        "Deploy Engine",
        "Observability",
        "Auto-Scale",
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
        cssSelector: [
          "#hero h1",
          "#faq .faq-question",
          "#faq .faq-answer",
        ],
      },
    },
    faq: generateFAQSchema(),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas[type]) }}
    />
  )
}
