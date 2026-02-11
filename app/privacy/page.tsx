import type { Metadata } from "next"
import Link from "next/link"
import { Footer, NavBar } from "components/layout"
import { Container } from "components/ui"
import { SITE_CONFIG } from "lib/constants"

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_CONFIG.name}`,
  description: `Privacy Policy for ${SITE_CONFIG.name} — how we collect, use, and protect your data.`,
}

export default function PrivacyPage() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-void-black">
        <Container size="narrow" className="py-24 md:py-32">
          <h1 className="font-[family-name:var(--font-grotesk)] text-4xl font-bold text-cloud-white md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-foreground-muted">
            Effective Date: February 2025
          </p>

          <div className="mt-12 space-y-10 text-gray-300 leading-relaxed">
            <p>
              AutoRail Inc. (&quot;AutoRail,&quot; &quot;we,&quot;
              &quot;us,&quot; or &quot;our&quot;) operates the autorail platform,
              including code-synapse and necroma services. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you use our services.
            </p>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-cloud-white">
                1. Information We Collect
              </h2>
              <h3 className="mb-2 text-lg font-medium text-cloud-white">
                Account Data
              </h3>
              <p>
                When you create an account, we collect your name, email address,
                organization name, and authentication credentials. If you sign up
                through a third-party provider (e.g., GitHub, Google), we receive
                profile information from that provider.
              </p>
              <h3 className="mb-2 mt-6 text-lg font-medium text-cloud-white">
                Usage Data
              </h3>
              <p>
                We automatically collect information about how you interact with
                our services, including pages visited, features used, session
                duration, browser type, device information, and IP address.
              </p>
              <h3 className="mb-2 mt-6 text-lg font-medium text-cloud-white">
                AI Interaction Data
              </h3>
              <p>
                When you use code-synapse or necroma, we collect data about your
                interactions with our AI agents, including queries, configuration
                preferences, and feedback you provide on AI-generated outputs.
              </p>
              <h3 className="mb-2 mt-6 text-lg font-medium text-cloud-white">
                Code &amp; Repository Data
              </h3>
              <p>
                To provide our services, we may access and process source code,
                repository metadata, commit history, and related project files
                that you explicitly connect to our platform.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-cloud-white">
                2. How We Use Your Information
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-cloud-white">
                    Provide &amp; improve services:
                  </strong>{" "}
                  Deliver code-synapse pattern enforcement, necroma legacy
                  reclamation, and continuously improve the accuracy and
                  usefulness of our AI agents.
                </li>
                <li>
                  <strong className="text-cloud-white">
                    Security &amp; fraud prevention:
                  </strong>{" "}
                  Detect and prevent unauthorized access, abuse, and security
                  incidents.
                </li>
                <li>
                  <strong className="text-cloud-white">Communications:</strong>{" "}
                  Send service updates, security alerts, and (with your consent)
                  product announcements.
                </li>
                <li>
                  <strong className="text-cloud-white">
                    Analytics &amp; research:
                  </strong>{" "}
                  Understand usage patterns to improve platform performance and
                  develop new features.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-cloud-white">
                3. Data Processing for AI Services
              </h2>
              <p>
                Our AI-powered services process your code and repository data to
                deliver functionality:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-cloud-white">code-synapse</strong>{" "}
                  analyzes your codebase to build an institutional memory layer,
                  enforcing patterns and preventing AI from writing code that
                  deviates from your established conventions.
                </li>
                <li>
                  <strong className="text-cloud-white">necroma</strong> processes
                  legacy codebases to verify behavioral equivalence during
                  reclamation, ensuring functional integrity is preserved.
                </li>
              </ul>
              <p className="mt-4 rounded-lg border border-electric-cyan/20 bg-white/[0.03] px-4 py-3 text-sm">
                Your code is processed solely to provide the services you
                requested. We do not use your proprietary code to train
                third-party AI models, and we do not share your code with other
                customers.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-cloud-white">
                4. Data Sharing &amp; Third Parties
              </h2>
              <p>We may share your information with:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-cloud-white">
                    Service providers:
                  </strong>{" "}
                  Cloud hosting, analytics, and infrastructure providers who
                  process data on our behalf under strict contractual
                  obligations.
                </li>
                <li>
                  <strong className="text-cloud-white">
                    Legal requirements:
                  </strong>{" "}
                  When required by law, subpoena, or government request, or to
                  protect our rights, safety, or property.
                </li>
                <li>
                  <strong className="text-cloud-white">
                    Business transfers:
                  </strong>{" "}
                  In connection with a merger, acquisition, or sale of assets,
                  your data may be transferred as part of that transaction.
                </li>
              </ul>
              <p className="mt-4">
                We do not sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-cloud-white">
                5. Data Retention
              </h2>
              <p>
                We retain your data for as long as your account is active or as
                needed to provide our services. When you delete your account, we
                remove your personal data and code within 30 days, except where
                retention is required by law or for legitimate business purposes
                (e.g., resolving disputes, enforcing agreements).
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-cloud-white">
                6. Data Security
              </h2>
              <p>
                We implement industry-standard security measures including
                encryption in transit (TLS 1.2+) and at rest (AES-256), access
                controls, regular security audits, and incident response
                procedures. However, no method of transmission or storage is 100%
                secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-cloud-white">
                7. Your Rights
              </h2>
              <p>Depending on your jurisdiction, you may have the right to:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-cloud-white">Access</strong> the
                  personal data we hold about you.
                </li>
                <li>
                  <strong className="text-cloud-white">Correct</strong>{" "}
                  inaccurate or incomplete data.
                </li>
                <li>
                  <strong className="text-cloud-white">Delete</strong> your
                  personal data and associated code.
                </li>
                <li>
                  <strong className="text-cloud-white">Export</strong> your data
                  in a portable format.
                </li>
                <li>
                  <strong className="text-cloud-white">Opt out</strong> of
                  non-essential communications and certain data processing
                  activities.
                </li>
              </ul>
              <p className="mt-4">
                To exercise these rights, contact us at{" "}
                <a
                  href={`mailto:${SITE_CONFIG.contactEmail}`}
                  className="text-electric-cyan hover:underline"
                >
                  {SITE_CONFIG.contactEmail}
                </a>
                . We will respond within 30 days.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-cloud-white">
                8. International Data Transfers
              </h2>
              <p>
                Your information may be transferred to and processed in countries
                other than your country of residence. We ensure appropriate
                safeguards are in place, including standard contractual clauses
                and compliance with applicable data protection frameworks.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-cloud-white">
                9. Children&apos;s Privacy
              </h2>
              <p>
                Our services are not directed to individuals under the age of 16.
                We do not knowingly collect personal information from children. If
                we become aware that we have collected data from a child, we will
                take steps to delete it promptly.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-cloud-white">
                10. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of material changes by posting the updated policy on
                our website and updating the effective date. Your continued use of
                our services after changes are posted constitutes acceptance of
                the revised policy.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-cloud-white">
                11. Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy or our data
                practices, contact us at:
              </p>
              <p className="mt-4">
                <strong className="text-cloud-white">AutoRail Inc.</strong>
                <br />
                Email:{" "}
                <a
                  href={`mailto:${SITE_CONFIG.contactEmail}`}
                  className="text-electric-cyan hover:underline"
                >
                  {SITE_CONFIG.contactEmail}
                </a>
              </p>
            </section>

            <div className="border-t border-border-default pt-8">
              <p className="text-sm text-foreground-muted">
                See also our{" "}
                <Link
                  href="/terms"
                  className="text-electric-cyan hover:underline"
                >
                  Terms of Service
                </Link>
                .
              </p>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
