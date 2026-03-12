import { headers } from "next/headers"
import { DOMAINS, SITE_CONFIG, UNERR_SITE_CONFIG } from "./constants"

export type SiteDomain = "autorail" | "unerr"

/**
 * Detect the active domain from middleware-injected header.
 * Use in server components / generateMetadata only.
 */
export async function getActiveDomain(): Promise<SiteDomain> {
  const headersList = await headers()
  const domain = headersList.get("x-site-domain")
  return domain === "unerr" ? "unerr" : "autorail"
}

/**
 * Returns the correct site config based on the active domain.
 */
export async function getActiveSiteConfig() {
  const domain = await getActiveDomain()
  return domain === "unerr" ? UNERR_SITE_CONFIG : SITE_CONFIG
}

/**
 * Check if a hostname belongs to unerr.dev
 */
export function isUnerrDomain(hostname: string): boolean {
  const h = hostname.toLowerCase()
  return h === DOMAINS.unerr || h === `www.${DOMAINS.unerr}`
}
