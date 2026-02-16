import { NextResponse } from "next/server"
import { z } from "zod"
import { GoogleAuth } from "google-auth-library"
import { env } from "../../../env.mjs"
import { getPostHogClient } from "lib/posthog-server"

const bodySchema = z.object({
  email: z.string().email(),
})

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"]

export async function POST(request: Request) {
  try {
    const json = await request.json()
    const parsed = bodySchema.safeParse(json)

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 },
      )
    }

    const { email } = parsed.data

    const privateKey = env.GOOGLE_SHEETS_PRIVATE_KEY
    const clientEmail = env.GOOGLE_SHEETS_CLIENT_EMAIL
    const spreadsheetId = env.GOOGLE_SHEETS_SPREADSHEET_ID

    if (!privateKey || !clientEmail || !spreadsheetId) {
      console.error("Google Sheets env vars not configured")
      return NextResponse.json(
        { error: "Waitlist is temporarily unavailable." },
        { status: 500 },
      )
    }

    const auth = new GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey.replace(/\\n/g, "\n"),
      },
      scopes: SCOPES,
    })

    const client = await auth.getClient()
    const token = await client.getAccessToken()

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet1!A:C:append?valueInputOption=USER_ENTERED`

    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        values: [[email, new Date().toISOString(), "kap10"]],
      }),
    })

    if (!res.ok) {
      const text = await res.text()
      console.error("Google Sheets API error:", text)

      // Track server-side signup failure
      const posthog = getPostHogClient()
      posthog.capture({
        distinctId: email,
        event: "waitlist_signup_failed",
        properties: {
          email_domain: email.split("@")[1],
          error_type: "google_sheets_api_error",
          source: "server",
        },
      })
      await posthog.shutdown()

      return NextResponse.json(
        { error: "Failed to join waitlist. Please try again." },
        { status: 500 },
      )
    }

    // Track successful server-side signup and identify user
    const posthog = getPostHogClient()
    posthog.capture({
      distinctId: email,
      event: "waitlist_signup_completed",
      properties: {
        email_domain: email.split("@")[1],
        product: "kap10",
        source: "server",
      },
    })
    posthog.identify({
      distinctId: email,
      properties: {
        email: email,
        waitlist_joined_at: new Date().toISOString(),
        product_interest: "kap10",
      },
    })
    await posthog.shutdown()

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Waitlist error:", err)

    // Track unexpected server error
    const posthog = getPostHogClient()
    posthog.capture({
      distinctId: "anonymous",
      event: "waitlist_signup_failed",
      properties: {
        error_type: "unexpected_error",
        error_message: err instanceof Error ? err.message : "Unknown error",
        source: "server",
      },
    })
    await posthog.shutdown()

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    )
  }
}
