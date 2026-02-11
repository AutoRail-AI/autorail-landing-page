"use client"

import { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"

const CAL_NAMESPACE = "autorail.dev"
const CAL_LINK = "jaswanthr/autorail.dev"

/**
 * Initializes Cal.com embed globally.
 * Any element with data-cal-namespace="autorail.dev" + data-cal-link
 * will open the booking modal on click.
 */
export function CalProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    ;(async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE })
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#6E18B3" },
          dark: { "cal-brand": "#00E5FF" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      })
    })()
  }, [])

  return <>{children}</>
}

/** Shared data attributes for any Cal.com trigger button */
export const calTriggerProps = {
  "data-cal-namespace": CAL_NAMESPACE,
  "data-cal-link": CAL_LINK,
  "data-cal-config": '{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}',
} as const
