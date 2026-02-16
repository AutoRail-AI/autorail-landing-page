# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the autorail landing page. This integration includes:

- **Client-side tracking** using `instrumentation-client.ts` (Next.js 16 recommended approach)
- **Server-side tracking** for API routes via `posthog-node`
- **Reverse proxy configuration** to avoid ad blockers and improve reliability
- **User identification** when users sign up for the waitlist
- **Exception capture** for automatic error tracking

## Environment Variables

PostHog credentials have been configured in `.env.local`:
- `NEXT_PUBLIC_POSTHOG_KEY` - Your PostHog project API key
- `NEXT_PUBLIC_POSTHOG_HOST` - PostHog host URL

## Files Modified/Created

| File | Change |
|------|--------|
| `instrumentation-client.ts` | Created - Client-side PostHog initialization |
| `lib/posthog-server.ts` | Created - Server-side PostHog client utility |
| `next.config.ts` | Modified - Added PostHog reverse proxy rewrites |
| `.env.local` | Created/Updated - PostHog environment variables |

## Events Implemented

| Event Name | Description | File |
|------------|-------------|------|
| `waitlist_form_submitted` | Tracks when a user successfully submits the waitlist form (conversion event) | `components/shared/WaitlistForm.tsx` |
| `waitlist_form_error` | Tracks when the waitlist form submission fails with an error | `components/shared/WaitlistForm.tsx` |
| `waitlist_signup_completed` | Server-side event when waitlist signup is successfully recorded | `app/api/waitlist/route.ts` |
| `waitlist_signup_failed` | Server-side event when waitlist signup fails | `app/api/waitlist/route.ts` |
| `cta_clicked` | Tracks clicks on primary CTA buttons (Join Waitlist) in hero | `components/landing/HeroSphere.tsx` |
| `contact_us_clicked` | Tracks clicks on Contact Us button that opens Cal.com booking modal | `components/layout/NavBar.tsx` |
| `product_page_cta_clicked` | Tracks CTA clicks on kap10 product page (Join Waitlist button) | `app/kap10/kap10-product-page.tsx` |
| `necroma_demo_requested` | Tracks when user clicks to request a necroma demo via Cal.com | `app/necroma/necroma-product-page.tsx` |
| `product_explored` | Tracks when user clicks to explore a product (kap10 or necroma) from the BentoGrid | `components/landing/BentoGrid.tsx` |
| `mobile_menu_opened` | Tracks when user opens the mobile navigation menu | `components/layout/NavBar.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

### Dashboard
- [Analytics basics](https://us.posthog.com/project/315466/dashboard/1283773) - Core analytics dashboard for autorail landing page

### Insights
- [Waitlist Signups Trend](https://us.posthog.com/project/315466/insights/cGdcsmv2) - Daily trend of waitlist form submissions
- [CTA to Waitlist Conversion Funnel](https://us.posthog.com/project/315466/insights/tmw9dkZg) - Conversion funnel from CTA click to signup
- [Product Interest by Type](https://us.posthog.com/project/315466/insights/B3mIdvtR) - Breakdown of product exploration (kap10 vs necroma)
- [Necroma Demo Requests](https://us.posthog.com/project/315466/insights/JKqaAGSW) - Daily trend of necroma demo requests
- [Waitlist Success vs Errors](https://us.posthog.com/project/315466/insights/EjOMku4f) - Compare successful signups against form errors

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/posthog-integration-nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
