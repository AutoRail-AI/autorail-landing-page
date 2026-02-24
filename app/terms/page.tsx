import type { Metadata } from "next"
import Link from "next/link"
import { Footer, NavBar } from "components/layout"
import { Container } from "components/ui"
import { SITE_CONFIG } from "lib/constants"

export const metadata: Metadata = {
  title: `Terms of Service | ${SITE_CONFIG.name}`,
  description: `Terms of Service for ${SITE_CONFIG.name} — the rules governing your use of our platform.`,
}

export default function TermsPage() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-void-black">
        <Container size="narrow" className="py-24 md:py-32">
          <h1 className="font-[family-name:var(--font-grotesk)] text-4xl font-bold text-cloud-white md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-foreground-muted">
            Effective Date: February 2025
          </p>

          <div className="mt-12 space-y-10 text-gray-300 leading-relaxed">
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-cloud-white">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the autorail platform, including
                unerr and necroma services (collectively, the
                &quot;Services&quot;), you agree to be bound by these Terms of
                Service (&quot;Terms&quot;). If you are using the Services on
                behalf of an organization, you represent that you have authority
                to bind that organization to these Terms. If you do not agree,
                do not use the Services.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-cloud-white">
                2. Description of Services
              </h2>
              <p>AutoRail provides AI-powered developer tools:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-cloud-white">unerr</strong> —
                  The Institutional Memory Layer. Enforces coding patterns and
                  conventions so AI-assisted development stays consistent with
                  your established codebase architecture.
                </li>
                <li>
                  <strong className="text-cloud-white">necroma</strong> —
                  Autonomous Legacy Modernization. Verifies behavioral equivalence
                  when modernizing or refactoring legacy code, ensuring
                  functional integrity is preserved.
                </li>
              </ul>
              <p className="mt-4">
                We may modify, suspend, or discontinue any part of the Services
                at any time with reasonable notice.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-cloud-white">
                3. Account Registration &amp; Security
              </h2>
              <p>
                You must provide accurate and complete information when creating
                an account. You are responsible for maintaining the
                confidentiality of your account credentials and for all
                activities that occur under your account. You must notify us
                immediately at{" "}
                <a
                  href={`mailto:${SITE_CONFIG.contactEmail}`}
                  className="text-electric-cyan hover:underline"
                >
                  {SITE_CONFIG.contactEmail}
                </a>{" "}
                of any unauthorized use.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-cloud-white">
                4. Acceptable Use Policy
              </h2>
              <p>You agree not to:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  Reverse engineer, decompile, or disassemble any part of the
                  Services or their underlying AI models.
                </li>
                <li>
                  Abuse, exploit, or manipulate AI agents to perform actions
                  outside their intended scope or to circumvent platform safety
                  mechanisms.
                </li>
                <li>
                  Use the Services to develop, distribute, or deploy malicious
                  code, malware, or exploit code targeting other systems.
                </li>
                <li>
                  Attempt to extract, replicate, or redistribute the AI models,
                  training data, or proprietary algorithms used by the Services.
                </li>
                <li>
                  Use the Services in any manner that violates applicable laws or
                  regulations.
                </li>
                <li>
                  Interfere with the Services&apos; infrastructure, impose
                  unreasonable load, or attempt to gain unauthorized access to
                  our systems.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-cloud-white">
                5. Intellectual Property
              </h2>
              <h3 className="mb-2 text-lg font-medium text-cloud-white">
                Your Code
              </h3>
              <p>
                You retain all ownership rights to the source code, repository
                data, and other materials you provide to the Services. By using
                our Services, you grant AutoRail a limited, non-exclusive license
                to process your code solely to deliver the requested
                functionality.
              </p>
              <h3 className="mb-2 mt-6 text-lg font-medium text-cloud-white">
                AutoRail Platform
              </h3>
              <p>
                The Services, including all software, AI models, algorithms,
                interfaces, documentation, and branding, are the intellectual
                property of AutoRail Inc. These Terms do not grant you any rights
                to our intellectual property except the limited right to use the
                Services as described herein.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-cloud-white">
                6. AI-Generated Output &amp; Agentic Actions
              </h2>
              <p>
                The Services include AI-powered features that generate
                suggestions, code modifications, and automated actions. You
                acknowledge that:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  AI-generated outputs are{" "}
                  <strong className="text-cloud-white">suggestions</strong> and
                  may contain errors, inaccuracies, or unintended behaviors. You
                  are responsible for reviewing and validating all AI-generated
                  output before incorporating it into your codebase.
                </li>
                <li>
                  Autonomous agents (e.g., necroma modernization agents) operate
                  within user-defined boundaries and configurations. You are
                  responsible for setting appropriate scope and reviewing agent
                  actions.
                </li>
                <li>
                  AutoRail does not guarantee the correctness, completeness, or
                  fitness for purpose of any AI-generated output or agentic
                  action.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-cloud-white">
                7. Data &amp; Privacy
              </h2>
              <p>
                Your use of the Services is also governed by our{" "}
                <Link
                  href="/privacy"
                  className="text-electric-cyan hover:underline"
                >
                  Privacy Policy
                </Link>
                , which describes how we collect, use, and protect your data.
                By using the Services, you consent to the data practices
                described therein.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-cloud-white">
                8. Service Availability &amp; SLA
              </h2>
              <p>
                We strive to maintain high availability but do not guarantee
                uninterrupted or error-free service. Scheduled maintenance will
                be communicated in advance when possible. Specific service level
                agreements may be provided under separate enterprise agreements.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-cloud-white">
                9. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, AutoRail and its
                officers, directors, employees, and agents shall not be liable
                for any indirect, incidental, special, consequential, or punitive
                damages, including loss of profits, data, or business
                opportunities, arising out of or related to your use of the
                Services. Our total liability for any claims under these Terms
                shall not exceed the amount you paid us in the twelve (12) months
                preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-cloud-white">
                10. Indemnification
              </h2>
              <p>
                You agree to indemnify, defend, and hold harmless AutoRail and
                its affiliates from any claims, damages, losses, or expenses
                (including reasonable attorneys&apos; fees) arising from your use
                of the Services, violation of these Terms, or infringement of any
                third-party rights.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-cloud-white">
                11. Termination
              </h2>
              <p>
                Either party may terminate these Terms at any time. You may stop
                using the Services and delete your account. We may suspend or
                terminate your access if you violate these Terms or if we
                reasonably believe your use poses a risk to the Services or other
                users. Upon termination, your right to use the Services ceases
                immediately. Sections that by their nature should survive
                termination (e.g., Intellectual Property, Limitation of
                Liability, Indemnification) will remain in effect.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-cloud-white">
                12. Governing Law
              </h2>
              <p>
                These Terms are governed by and construed in accordance with the
                laws of the State of Delaware, United States, without regard to
                conflict of law principles. Any disputes arising under these
                Terms shall be resolved in the state or federal courts located in
                Delaware.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-cloud-white">
                13. Changes to Terms
              </h2>
              <p>
                We may update these Terms from time to time. We will notify you
                of material changes by posting the revised Terms on our website
                and updating the effective date. Continued use of the Services
                after changes are posted constitutes acceptance of the revised
                Terms.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-cloud-white">
                14. Contact Us
              </h2>
              <p>
                If you have questions about these Terms, contact us at:
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
                  href="/privacy"
                  className="text-electric-cyan hover:underline"
                >
                  Privacy Policy
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
