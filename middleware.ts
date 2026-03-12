import { NextRequest, NextResponse } from "next/server"
import { DOMAINS } from "lib/constants"

/**
 * Multi-domain middleware.
 * When the request comes from unerr.dev, rewrites "/" to "/unerr"
 * and injects an x-site-domain header for downstream server components.
 */
export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host")?.split(":")[0] ?? ""
  const { pathname } = request.nextUrl

  const isUnerr =
    hostname === DOMAINS.unerr ||
    hostname === `www.${DOMAINS.unerr}`

  // Inject domain header for all requests (used by server components)
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set("x-site-domain", isUnerr ? "unerr" : "autorail")

  if (!isUnerr) {
    // autorail.dev — pass through normally with the header
    return NextResponse.next({
      request: { headers: requestHeaders },
    })
  }

  // ── unerr.dev domain handling ──────────────────────────────────────────

  // Redirect autorail-only pages to autorail.dev
  if (pathname === "/necroma" || pathname.startsWith("/necroma/")) {
    return NextResponse.redirect(new URL(pathname, `https://${DOMAINS.autorail}`))
  }
  if (pathname === "/team") {
    return NextResponse.redirect(new URL(pathname, `https://${DOMAINS.autorail}`))
  }

  // Rewrite root to /unerr (the product page)
  if (pathname === "/") {
    const url = request.nextUrl.clone()
    url.pathname = "/unerr"
    return NextResponse.rewrite(url, {
      request: { headers: requestHeaders },
    })
  }

  // All other paths (privacy, terms, api/*, _next/*, static assets) pass through
  return NextResponse.next({
    request: { headers: requestHeaders },
  })
}

export const config = {
  matcher: [
    /*
     * Match all paths except static files and Next.js internals:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico, icon-wordmark.svg, etc.
     */
    "/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|woff|woff2|ttf|eot|ico)$).*)",
  ],
}
