import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { SolutionData } from "@/data/solutions";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } })
};

interface Props {
  solution: SolutionData;
}

export default function SolutionPageTemplate({ solution }: Props) {
  return (
    <div className="flex flex-col w-full">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 md:px-8 pt-8 text-sm text-muted-foreground flex items-center gap-2">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/platform/overview" className="hover:text-foreground transition-colors">Solutions</Link>
        <span>/</span>
        <span className="text-foreground">{solution.name}</span>
      </div>

      {/* Hero */}
      <section className="pt-16 pb-24 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col gap-8 max-w-3xl">
            <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase">
              <div className="w-8 h-[2px] bg-foreground" />
              <span>Solution</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif leading-[1.1] tracking-tight">{solution.headline}</h1>
            <p className="text-xl leading-relaxed text-foreground/80">{solution.subheadline}</p>
            <div className="flex flex-wrap gap-4">
              <Link href={`/demo?type=${solution.slug}`}>
                <Button size="lg" className="rounded-none px-8 h-14 text-base">See a Demo for {solution.name}</Button>
              </Link>
              <Link href="/platform/overview">
                <Button size="lg" variant="outline" className="rounded-none px-8 h-14 text-base">Compare All Solutions</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase mb-16">
            <div className="w-8 h-[2px] bg-foreground" />
            <span>The Challenge</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solution.painPoints.map((pain, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="border border-border p-8">
                <h3 className="text-xl font-serif font-bold mb-4">{pain.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{pain.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Agents */}
      <section className="py-24 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase mb-6">
            <div className="w-8 h-[2px] bg-foreground" />
            <span>Agent Relevance Map</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif mb-12 max-w-2xl">
            The agents that matter most for {solution.name.toLowerCase()}.
          </h2>
          <div className="space-y-0">
            {solution.keyAgents.map((agent, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="grid grid-cols-12 gap-6 border-t border-border py-8 last:border-b group">
                <div className="col-span-12 md:col-span-3">
                  <Link href={`/platform/${agent.slug}`} className="text-xl font-serif font-bold hover:text-secondary transition-colors flex items-center gap-2">
                    {agent.name} <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <p className="text-foreground/70 leading-relaxed">{agent.relevance}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase mb-16">
            <div className="w-8 h-[2px] bg-foreground" />
            <span>Workflow Walkthrough</span>
          </div>
          <div className="space-y-0">
            {solution.workflowSteps.map((step, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="grid grid-cols-12 gap-8 border-t border-border py-10 last:border-b">
                <div className="col-span-12 md:col-span-1">
                  <span className="text-3xl font-serif text-muted-foreground/30 font-bold">{step.step}</span>
                </div>
                <div className="col-span-12 md:col-span-3">
                  <h3 className="text-xl font-serif font-bold">{step.title}</h3>
                </div>
                <div className="col-span-12 md:col-span-8">
                  <p className="text-foreground/70 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-24 px-4 md:px-8 bg-[#0A0A0A] text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase mb-16">
            <div className="w-8 h-[2px] bg-white" />
            <span className="text-white/70">Metrics & Outcomes</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {solution.metrics.map((metric, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="border-t border-white/10 pt-8 pb-8 md:border-t-0 md:border-l first:border-l-0 md:pl-8 first:pl-0">
                <div className="text-5xl md:text-6xl font-serif font-bold text-white mb-3">{metric.value}</div>
                <div className="text-lg font-medium text-white/90 mb-2">{metric.label}</div>
                <div className="text-sm text-white/50">{metric.context}</div>
              </motion.div>
            ))}
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
            {solution.faqs.map((faq, i) => (
              <div key={i} className="border-t border-border py-8 last:border-b">
                <h3 className="text-xl font-serif font-bold mb-4">{faq.question}</h3>
                <p className="text-foreground/70 leading-relaxed max-w-3xl">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 md:px-8 bg-background text-center">
        <div className="container mx-auto max-w-3xl">
          <div className="flex items-center justify-center gap-4 text-sm font-semibold tracking-widest uppercase mb-8">
            <div className="w-8 h-[2px] bg-foreground" />
            <span>Get Started</span>
            <div className="w-8 h-[2px] bg-foreground" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            See How Converge Works for {solution.name}
          </h2>
          <p className="text-foreground/70 text-lg mb-10 max-w-xl mx-auto">
            A 30-minute walkthrough tailored to your lending type, with your own sample documents.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/demo">
              <Button size="lg" className="rounded-none px-10 h-14">Book a Demo</Button>
            </Link>
            <Link href="/platform/overview">
              <Button size="lg" variant="outline" className="rounded-none px-10 h-14">Platform Overview</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
