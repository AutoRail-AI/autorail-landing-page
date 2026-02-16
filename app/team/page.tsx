import type { Metadata } from "next"
import { Linkedin, Twitter } from "lucide-react"
import { Footer, NavBar } from "components/layout"
import { Container } from "components/ui"
import { SITE_CONFIG } from "lib/constants"

export const metadata: Metadata = {
  title: `Team | ${SITE_CONFIG.name}`,
  description: `Meet the team behind ${SITE_CONFIG.name} — building autonomous engineering infrastructure.`,
}

const TEAM = [
  {
    name: "Vamsee Koneru",
    role: "CEO & Co-founder",
    linkedin: "https://www.linkedin.com/in/vamsee-koneru/",
    color: "cyan" as const,
  },
  {
    name: "Jaswanth Reddy Ganapa",
    role: "CTO & Co-founder",
    linkedin: "https://www.linkedin.com/in/jaswanth-reddy-ganapa/",
    color: "purple" as const,
  },
] as const

const COLOR_STYLES = {
  cyan: {
    border: "border-electric-cyan/20",
    hoverBorder: "hover:border-electric-cyan/35",
    avatarBg: "bg-electric-cyan/[0.08]",
    avatarBorder: "border-electric-cyan/25",
    avatarText: "text-electric-cyan/80",
    linkText: "text-electric-cyan/70 hover:text-electric-cyan",
    shadow: "0 12px 40px -10px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,229,255,0.06), 0 0 30px rgba(0,229,255,0.04)",
  },
  purple: {
    border: "border-rail-purple/20",
    hoverBorder: "hover:border-rail-purple/35",
    avatarBg: "bg-rail-purple/[0.08]",
    avatarBorder: "border-rail-purple/25",
    avatarText: "text-rail-purple/80",
    linkText: "text-rail-purple/70 hover:text-rail-purple",
    shadow: "0 12px 40px -10px rgba(0,0,0,0.4), 0 0 0 1px rgba(110,24,179,0.06), 0 0 30px rgba(110,24,179,0.04)",
  },
} as const

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/autorail-ai/",
    icon: Linkedin,
  },
  {
    label: "Twitter / X",
    href: "https://x.com/autorail_ai",
    icon: Twitter,
  },
] as const

export default function TeamPage() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-void-black">
        <Container size="narrow" className="py-24 md:py-32">
          {/* Header */}
          <h1 className="font-[family-name:var(--font-grotesk)] text-4xl font-bold text-cloud-white md:text-5xl">
            About Us
          </h1>
          <p className="mt-4 text-lg text-foreground-secondary leading-relaxed max-w-2xl">
            We&apos;re building the infrastructure layer for autonomous
            engineering — so AI-generated code ships with the same rigor as
            human-written code.
          </p>

          {/* Team */}
          <section className="mt-16">
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-electric-cyan/50 mb-8">
              Team
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {TEAM.map((member) => {
                const s = COLOR_STYLES[member.color]
                return (
                  <div
                    key={member.name}
                    className={`rounded-xl bg-white/[0.03] border ${s.border} ${s.hoverBorder} backdrop-blur-[12px] p-6 transition-all duration-300`}
                    style={{ boxShadow: s.shadow }}
                  >
                    {/* Initials avatar */}
                    <div className={`w-12 h-12 rounded-lg ${s.avatarBg} border ${s.avatarBorder} flex items-center justify-center mb-4`}>
                      <span className={`text-sm font-mono font-bold ${s.avatarText}`}>
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white font-[family-name:var(--font-grotesk)]">
                      {member.name}
                    </h3>
                    <p className="text-sm text-white/50 mt-1">{member.role}</p>

                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 mt-4 text-sm ${s.linkText} transition-colors`}
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Company */}
          <section className="mt-16">
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-electric-cyan/50 mb-8">
              Company
            </h2>
            <div className="flex flex-wrap gap-4">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/[0.03] border border-white/10 text-sm text-white/70 hover:text-white hover:border-white/20 transition-all"
                >
                  <social.icon className="w-4 h-4" />
                  {social.label}
                </a>
              ))}
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  )
}
