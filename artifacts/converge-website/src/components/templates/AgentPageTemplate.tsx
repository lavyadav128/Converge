import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, BarChart3, CheckCircle, Building, Shield, Search } from "lucide-react";
import type { AgentData } from "@/data/agents";

const iconMap: Record<string, React.ElementType> = {
  FileText, BarChart3, CheckCircle, Building, Shield, Search
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } })
};

interface Props {
  agent: AgentData;
}

export default function AgentPageTemplate({ agent }: Props) {
  const Icon = iconMap[agent.icon] || FileText;

  return (
    <div className="flex flex-col w-full">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 md:px-8 pt-8 text-sm text-muted-foreground flex items-center gap-2">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/platform/overview" className="hover:text-foreground transition-colors">Platform</Link>
        <span>/</span>
        <span className="text-foreground">{agent.name}</span>
      </div>

      {/* Hero */}
      <section className="pt-16 pb-24 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col gap-8">
            <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase">
              <div className="w-8 h-[2px] bg-foreground" />
              <span>Agent</span>
              <span className="px-2 py-0.5 border border-secondary text-secondary text-xs uppercase tracking-widest">Available Now</span>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-foreground/5 border border-border flex items-center justify-center flex-shrink-0">
                <Icon className="w-8 h-8 text-foreground" />
              </div>
              <div>
                <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] tracking-tight">{agent.name}</h1>
                <p className="text-xl text-muted-foreground mt-3 font-medium">{agent.tagline}</p>
              </div>
            </div>
            <p className="text-xl leading-relaxed max-w-3xl text-foreground/80">{agent.description}</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/demo">
                <Button size="lg" className="rounded-none px-8 h-14 text-base">Book a Demo</Button>
              </Link>
              <Link href="/platform/overview">
                <Button size="lg" variant="outline" className="rounded-none px-8 h-14 text-base">Back to Platform Overview</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase mb-12">
            <div className="w-8 h-[2px] bg-foreground" />
            <span>The Problem</span>
          </div>
          <div className="space-y-6">
            {agent.problemStatement.map((p, i) => (
              <motion.p key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-lg leading-relaxed text-foreground/80 max-w-4xl">
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase mb-16">
            <div className="w-8 h-[2px] bg-foreground" />
            <span>How It Works</span>
          </div>
          <div className="space-y-0">
            {agent.steps.map((step, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="grid grid-cols-12 gap-8 border-t border-border py-10 last:border-b">
                <div className="col-span-1">
                  <span className="text-4xl font-serif text-muted-foreground/40 font-bold">0{i + 1}</span>
                </div>
                <div className="col-span-11 md:col-span-4">
                  <h3 className="text-xl font-serif font-bold">{step.title}</h3>
                </div>
                <div className="col-span-11 md:col-span-7 md:col-start-6">
                  <p className="text-foreground/70 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase mb-16">
            <div className="w-8 h-[2px] bg-foreground" />
            <span>Key Capabilities</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {agent.capabilities.map((cap, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="border border-border p-8">
                <h3 className="text-xl font-serif font-bold mb-4">{cap.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Output */}
      <section className="py-24 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase mb-12">
            <div className="w-8 h-[2px] bg-foreground" />
            <span>Example Output</span>
          </div>
          <div className="border border-border bg-white p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border">
              <Icon className="w-5 h-5 text-secondary" />
              <span className="text-sm font-semibold uppercase tracking-widest text-secondary">{agent.name} Output — Synthetic Example</span>
            </div>
            <p className="font-mono text-sm leading-relaxed text-foreground/80">{agent.exampleOutput}</p>
            <p className="mt-6 text-xs text-muted-foreground">All data shown is synthetic. Generated for illustration purposes only.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase mb-16">
            <div className="w-8 h-[2px] bg-foreground" />
            <span>Frequently Asked Questions</span>
          </div>
          <div className="space-y-0">
            {agent.faqs.map((faq, i) => (
              <div key={i} className="border-t border-border py-8 last:border-b">
                <h3 className="text-xl font-serif font-bold mb-4">{faq.question}</h3>
                <p className="text-foreground/70 leading-relaxed max-w-3xl">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Agents */}
      <section className="py-24 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase mb-12">
            <div className="w-8 h-[2px] bg-foreground" />
            <span>Works Alongside</span>
          </div>
          <div className="flex flex-wrap gap-4">
            {agent.relatedAgents.map((slug) => (
              <Link key={slug} href={`/platform/${slug}`}>
                <div className="border border-border px-6 py-4 hover:bg-foreground hover:text-background transition-colors group flex items-center gap-3">
                  <span className="font-medium capitalize">{slug.replace(/-/g, ' ')}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 md:px-8 bg-[#0A0A0A] text-white text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">See {agent.name} in Action</h2>
          <p className="text-white/60 text-lg mb-10">Watch {agent.name} process a real loan file — live, with your documents.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/demo">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-none px-10 h-14">Book a Demo</Button>
            </Link>
            <Link href="/platform/overview">
              <Button size="lg" variant="outline" className="rounded-none px-10 h-14 border-white/30 text-white hover:bg-white/10">Platform Overview</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
