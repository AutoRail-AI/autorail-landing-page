"use client"

import { useState } from "react"
import { ArrowRight, Check, CheckCircle, Loader2 } from "lucide-react"
import posthog from "posthog-js"
import { cn } from "lib/utils"

type FormState = "idle" | "loading" | "success" | "error"

export function WaitlistForm({ showBenefits = false }: { showBenefits?: boolean }) {
  const [email, setEmail] = useState("")
  const [state, setState] = useState<FormState>("idle")
  const [errorMsg, setErrorMsg] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return

    setState("loading")
    setErrorMsg("")

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const data = (await res.json()) as { success?: boolean; error?: string }

      if (!res.ok) {
        setState("error")
        setErrorMsg(data.error || "Something went wrong.")

        // Track waitlist form error
        posthog.capture("waitlist_form_error", {
          error_message: data.error || "Something went wrong.",
          email_domain: email.split("@")[1],
        })
        return
      }

      setState("success")

      // Track successful waitlist submission and identify user
      posthog.capture("waitlist_form_submitted", {
        email_domain: email.split("@")[1],
        has_benefits_shown: showBenefits,
      })

      // Identify user by email for future tracking
      posthog.identify(email, {
        email: email,
        source: "waitlist",
      })
    } catch (error) {
      setState("error")
      setErrorMsg("Network error. Please try again.")

      // Track network error
      posthog.capture("waitlist_form_error", {
        error_message: "Network error",
        email_domain: email.split("@")[1],
      })
      posthog.captureException(error)
    }
  }

  return (
    <div>
      {state === "success" ? (
        <div className="flex flex-col items-center gap-3 py-4">
          <CheckCircle className="w-8 h-8 text-success" />
          <p className="text-white font-medium text-lg">
            You&apos;re on the list.
          </p>
          <p className="text-white/50 text-sm">
            We&apos;ll reach out when your seat is ready.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            required
            disabled={state === "loading"}
            className={cn(
              "flex-1 px-4 py-3 rounded-lg text-sm text-white placeholder:text-white/30 font-mono",
              "bg-white/[0.04] border border-white/[0.12]",
              "focus:outline-none focus:border-electric-cyan/40 focus:ring-1 focus:ring-electric-cyan/20",
              "transition-all duration-200",
              "disabled:opacity-50",
            )}
          />
          <button
            type="submit"
            disabled={state === "loading"}
            className={cn(
              "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-sm cursor-pointer shrink-0",
              "bg-transparent border border-electric-cyan/30 text-electric-cyan",
              "hover:glow-cyan hover:bg-electric-cyan/5",
              "transition-all duration-300",
              "disabled:opacity-50 disabled:cursor-not-allowed",
            )}
          >
            {state === "loading" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Joining...
              </>
            ) : (
              <>
                Join Waitlist
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}

      {state === "error" && (
        <p className="mt-3 text-sm text-red-400">{errorMsg}</p>
      )}

      {showBenefits && state !== "success" && (
        <div className="mt-6 pt-5 border-t border-white/[0.06]">
          <p className="text-xs font-mono uppercase tracking-wider text-white/30 mb-3">
            Why join early?
          </p>
          <ul className="flex flex-col gap-2">
            {[
              "Founding member pricing — locked in forever",
              "Personal onboarding call with the team",
              "Shape the product roadmap with direct access",
            ].map((benefit) => (
              <li key={benefit} className="flex items-center gap-2 text-sm text-white/50">
                <Check className="w-3.5 h-3.5 text-electric-cyan/60 shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
