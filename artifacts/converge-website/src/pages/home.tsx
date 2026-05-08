import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, CheckCircle, Shield, Building, BarChart3, Search } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32 px-4 md:px-8 lg:min-h-[80vh] flex items-center">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-8"
          >
            <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase">
              <div className="w-8 h-[2px] bg-primary"></div>
              <span>Platform</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-primary leading-[1.1] tracking-tight">
              AI Credit Intelligence for Commercial Real Estate.
            </h1>
            <p className="text-lg md:text-xl text-primary/80 max-w-lg leading-relaxed">
              Process complex loan documents in minutes, enforce policy instantly, and surface hidden risks. The institutional-grade platform for modern lenders.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/demo">
                <Button size="lg" className="bg-primary text-primary-foreground rounded-none px-8 h-14 text-base">
                  Book a Demo
                </Button>
              </Link>
              <Link href="/platform/overview">
                <Button size="lg" variant="outline" className="rounded-none px-8 h-14 text-base border-primary text-primary hover:bg-primary/5">
                  Explore Platform
                </Button>
              </Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] w-full rounded-none bg-white border border-border shadow-xl overflow-hidden flex items-center justify-center p-8"
          >
            {/* UI Mockup representation */}
            <div className="w-full h-full border border-border bg-background flex flex-col">
              <div className="h-12 border-b border-border bg-white flex items-center px-4 gap-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-border"></div>
                  <div className="w-3 h-3 rounded-full bg-border"></div>
                  <div className="w-3 h-3 rounded-full bg-border"></div>
                </div>
                <div className="flex-1 bg-background h-6 flex items-center px-2 text-xs text-muted-foreground font-mono">
                  converge.finance/intelligence/deal-1492
                </div>
              </div>
              <div className="flex-1 p-6 flex flex-col gap-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-xl font-bold">1492 Westside Boulevard</h3>
                    <p className="text-sm text-muted-foreground">Credit Memo Generation • 98% Confidence</p>
                  </div>
                  <div className="px-3 py-1 bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider">
                    Ready for Review
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white p-4 border border-border">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">DSCR</p>
                    <p className="font-mono text-xl">1.45x</p>
                  </div>
                  <div className="bg-white p-4 border border-border">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">LTV</p>
                    <p className="font-mono text-xl">62.5%</p>
                  </div>
                  <div className="bg-white p-4 border border-border">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Risk Flags</p>
                    <p className="font-mono text-xl text-amber-600">2 Issues</p>
                  </div>
                </div>
                <div className="flex-1 bg-white border border-border p-4">
                  <div className="w-full h-4 bg-muted mb-2"></div>
                  <div className="w-3/4 h-4 bg-muted mb-2"></div>
                  <div className="w-5/6 h-4 bg-muted"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 border-y border-border bg-white overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-8">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale">
            <div className="font-serif text-2xl font-bold">Citi</div>
            <div className="font-serif text-2xl font-bold">Goldman Sachs</div>
            <div className="font-serif text-2xl font-bold">Harvard</div>
            <div className="font-serif text-2xl font-bold">Brookfield</div>
            <div className="font-serif text-2xl font-bold">Palo Alto</div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-32 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase mb-12">
            <div className="w-8 h-[2px] bg-primary"></div>
            <span>The Challenge</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight mb-16">
            Real estate lending is trapped in documents. Manual extraction costs hours per deal, delays decisions, and obscures critical risk.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-border p-8 bg-white/50">
              <h4 className="font-bold text-xl mb-4">4-6 Hours per Memo</h4>
              <p className="text-primary/70 leading-relaxed">Analysts spend the majority of their time finding and keying data rather than analyzing risk and structuring deals.</p>
            </div>
            <div className="border border-border p-8 bg-white/50">
              <h4 className="font-bold text-xl mb-4">Inconsistent Policy</h4>
              <p className="text-primary/70 leading-relaxed">Credit guidelines are buried in PDFs. Enforcement relies on human memory, leading to compliance gaps and uneven risk.</p>
            </div>
            <div className="border border-border p-8 bg-white/50">
              <h4 className="font-bold text-xl mb-4">Hidden Entity Risk</h4>
              <p className="text-primary/70 leading-relaxed">Complex ownership structures and guarantor requirements are often missed in hundreds of pages of legal documents.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Agents Section */}
      <section className="py-32 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase mb-6">
                <div className="w-8 h-[2px] bg-primary"></div>
                <span>Our Agents</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-primary max-w-2xl">
                Six specialized AI agents working in concert.
              </h2>
            </div>
            <Link href="/platform/overview">
              <Button variant="outline" className="rounded-none border-primary text-primary mt-8 md:mt-0">
                View Platform Overview
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Triage", desc: "Classifies and extracts data from hundreds of loan document types automatically.", icon: FileText, link: "/platform/triage" },
              { title: "Credit Intelligence", desc: "Cross-references data to identify risks and generates complete credit memos.", icon: BarChart3, link: "/platform/credit-intelligence" },
              { title: "Policy Match", desc: "Compares loan metrics against your specific credit box and guidelines.", icon: CheckCircle, link: "/platform/policy-match" },
              { title: "Entity Review", desc: "Analyzes borrower entity structures and guarantor ownership chains.", icon: Building, link: "/platform/entity-review" },
              { title: "Background Report", desc: "Analyzes background checks for litigation and financial distress signals.", icon: Shield, link: "/platform/background-report" },
              { title: "Comps", desc: "Identifies comparable properties and validates appraisal assumptions.", icon: Search, link: "/platform/comps" }
            ].map((agent, i) => (
              <Link key={i} href={agent.link}>
                <div className="group border border-border p-8 hover:bg-background transition-colors cursor-pointer h-full flex flex-col">
                  <div className="w-12 h-12 bg-primary/5 flex items-center justify-center mb-6">
                    <agent.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-secondary transition-colors">{agent.title}</h3>
                  <p className="text-primary/70 leading-relaxed flex-1">{agent.desc}</p>
                  <div className="mt-8 flex items-center text-sm font-bold uppercase tracking-wider text-secondary">
                    Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 md:px-8 bg-[#0A0A0A] text-white text-center">
        <div className="container mx-auto max-w-3xl flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-8">Ready to transform your credit operations?</h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl leading-relaxed">
            Join the leading real estate lending institutions processing deals 200% faster with Converge Finance.
          </p>
          <Link href="/demo">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-none px-12 h-16 text-lg font-bold">
              See Converge in Action
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
