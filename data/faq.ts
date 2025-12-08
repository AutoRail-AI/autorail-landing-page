export interface FAQItem {
  id: string
  question: string
  answer: string
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "app-types",
    question: "What types of apps does AutoRail support?",
    answer:
      "AutoRail works with any vibe-coded application—AI agents, SaaS dashboards, e-commerce platforms, internal tools, and more. If you can generate it with Bolt.new, Lovable, Replit, or write it yourself, AutoRail can provision the backend infrastructure it needs to run reliably in production.",
  },
  {
    id: "difference-from-baas",
    question: "How is AutoRail different from Supabase or Firebase?",
    answer:
      "Traditional BaaS platforms like Supabase and Firebase require you to manually configure databases, auth, and storage. AutoRail interprets your code and automatically provisions the specific infrastructure your app needs—including advanced patterns like workflow orchestration, circuit breakers, and stateful memory layers that traditional BaaS doesn't handle.",
  },
  {
    id: "code-changes",
    question: "Do I need to change my existing code?",
    answer:
      "No. AutoRail works with your code as-is. Simply connect your codebase—whether it's from Bolt.new, Lovable, Replit, or GitHub—and AutoRail analyzes it to provision the necessary backend infrastructure automatically.",
  },
  {
    id: "deploy-time",
    question: "How long does it take to deploy with AutoRail?",
    answer:
      "Initial infrastructure provisioning takes minutes. After that, any code changes you make trigger automatic infrastructure updates within seconds. There's no manual configuration or YAML files to manage.",
  },
  {
    id: "traffic-spikes",
    question: "What happens if my app traffic spikes?",
    answer:
      "AutoRail's auto-scale capability monitors your traffic patterns and provisions additional compute resources automatically. When traffic returns to normal, infrastructure scales down to optimize costs. You never over-provision or get surprise bills.",
  },
  {
    id: "ai-agents",
    question: "Can AutoRail handle AI agent workflows?",
    answer:
      "Yes. AutoRail is purpose-built to support AI agent architectures with specialized features like stateful memory for context persistence, workflow orchestration for multi-agent coordination, and guardrails for cost control and safety. It handles the unique scaling patterns of LLM-powered applications.",
  },
  {
    id: "security",
    question: "How does AutoRail handle security?",
    answer:
      "Security is built into every layer of AutoRail. Infrastructure is provisioned in isolated environments with encryption at rest and in transit. We implement principle of least privilege, automated vulnerability scanning, and SOC 2 compliance practices.",
  },
  {
    id: "self-host",
    question: "Can I self-host AutoRail?",
    answer:
      "Self-hosted and on-premise options are on our roadmap for enterprise customers. At launch, AutoRail will be available as a managed cloud service.",
  },
]

// Generate JSON-LD schema for FAQ
export function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}
