import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FileText, CheckCircle, Shield, Building, BarChart3, Search, ArrowRight, Layers, Lock, Zap } from "lucide-react";

export default function PlatformOverview() {
  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 md:px-8 border-b border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-4 text-sm font-semibold tracking-widest uppercase mb-8">
            <div className="w-8 h-[2px] bg-primary"></div>
            <span>Platform Overview</span>
            <div className="w-8 h-[2px] bg-primary"></div>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-primary leading-[1.1] tracking-tight mb-8">
            The architecture of modern credit intelligence.
          </h1>
          <p className="text-xl text-primary/80 leading-relaxed mb-12">
            A cohesive system of specialized AI agents designed to transform unstructured loan documents into structured, policy-compliant credit decisions.
          </p>
        </div>
      </section>

      {/* Architecture Visual */}
      <section className="py-24 px-4 md:px-8 bg-white border-b border-border">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <h3 className="font-serif text-3xl font-bold mb-12 text-center">Workflow Architecture</h3>
            
            <div className="relative border border-border p-8 md:p-16 bg-background">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
                <div className="w-full md:w-1/3 text-right">
                  <h4 className="font-bold text-xl mb-2">1. Ingestion</h4>
                  <p className="text-sm text-primary/70">Unstructured documents enter the system via API or secure upload.</p>
                </div>
                <div className="w-16 h-16 shrink-0 bg-white border border-border flex items-center justify-center rotate-45">
                  <Layers className="-rotate-45 text-primary" />
                </div>
                <div className="w-full md:w-1/3">
                  <div className="flex flex-col gap-2">
                    <div className="bg-white border border-border px-4 py-2 text-sm font-mono">Appraisal.pdf</div>
                    <div className="bg-white border border-border px-4 py-2 text-sm font-mono">Operating_Statement.xlsx</div>
                    <div className="bg-white border border-border px-4 py-2 text-sm font-mono">Title_Report.pdf</div>
                  </div>
                </div>
              </div>

              <div className="w-[2px] h-16 bg-primary mx-auto my-[-2rem] relative z-10 hidden md:block"></div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-center gap-8 mb-16 relative z-20">
                <div className="w-full md:w-1/3 text-right">
                  <h4 className="font-bold text-xl mb-2">2. Processing Engine</h4>
                  <p className="text-sm text-primary/70">Specialized agents extract, cross-reference, and analyze data.</p>
                </div>
                <div className="w-16 h-16 shrink-0 bg-secondary text-white flex items-center justify-center rotate-45">
                  <Zap className="-rotate-45" />
                </div>
                <div className="w-full md:w-1/3">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white border border-border p-2 text-center text-xs font-bold uppercase">Triage</div>
                    <div className="bg-white border border-border p-2 text-center text-xs font-bold uppercase">Policy Match</div>
                    <div className="bg-white border border-border p-2 text-center text-xs font-bold uppercase">Entity Review</div>
                    <div className="bg-white border border-border p-2 text-center text-xs font-bold uppercase">Comps</div>
                  </div>
                </div>
              </div>

              <div className="w-[2px] h-16 bg-primary mx-auto my-[-2rem] relative z-10 hidden md:block"></div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center gap-8 relative z-20">
                <div className="w-full md:w-1/3 text-right">
                  <h4 className="font-bold text-xl mb-2">3. Intelligence Output</h4>
                  <p className="text-sm text-primary/70">Structured credit memos, risk alerts, and compliance scorecards.</p>
                </div>
                <div className="w-16 h-16 shrink-0 bg-primary text-white flex items-center justify-center rotate-45">
                  <CheckCircle className="-rotate-45" />
                </div>
                <div className="w-full md:w-1/3">
                  <div className="bg-white border border-border p-4">
                    <div className="flex items-center justify-between mb-4 border-b border-border pb-2">
                      <span className="font-serif font-bold">Credit Memo</span>
                      <span className="text-xs uppercase tracking-wider text-green-600 font-bold">Approved</span>
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-2 bg-muted"></div>
                      <div className="w-4/5 h-2 bg-muted"></div>
                      <div className="w-5/6 h-2 bg-muted"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="py-24 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase mb-12">
            <div className="w-8 h-[2px] bg-primary"></div>
            <span>The 6 Agents</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Triage", desc: "Classifies and extracts data from hundreds of loan document types automatically.", icon: FileText, link: "/platform/triage" },
              { title: "Credit Intelligence", desc: "Cross-references data to identify risks and generates complete credit memos.", icon: BarChart3, link: "/platform/credit-intelligence" },
              { title: "Policy Match", desc: "Compares loan metrics against your specific credit box and guidelines.", icon: CheckCircle, link: "/platform/policy-match" },
              { title: "Entity Review", desc: "Analyzes borrower entity structures and guarantor ownership chains.", icon: Building, link: "/platform/entity-review" },
              { title: "Background Report", desc: "Analyzes background checks for litigation and financial distress signals.", icon: Shield, link: "/platform/background-report" },
              { title: "Comps", desc: "Identifies comparable properties and validates appraisal assumptions.", icon: Search, link: "/platform/comps" }
            ].map((agent, i) => (
              <Link key={i} href={agent.link}>
                <div className="group bg-white border border-border p-8 hover:border-secondary transition-colors cursor-pointer h-full flex flex-col">
                  <div className="w-12 h-12 bg-background flex items-center justify-center mb-6">
                    <agent.icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-4">{agent.title}</h3>
                  <p className="text-primary/70 leading-relaxed flex-1">{agent.desc}</p>
                  <div className="mt-8 flex items-center text-sm font-bold uppercase tracking-wider text-secondary">
                    Explore capabilities <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Integration CTA */}
      <section className="py-24 px-4 md:px-8 bg-[#0A0A0A] text-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase mb-6 text-white/50">
              <div className="w-8 h-[2px] bg-white/30"></div>
              <span>Integration</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Connects seamlessly with your LOS.</h2>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Converge isn't another silo. Our robust API integrates directly with your existing Loan Origination System, pulling documents and pushing structured data back into your workflow.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 border border-white/20">
                <Lock className="w-4 h-4" />
                <span className="text-sm font-mono">SOC 2 Type II</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 border border-white/20">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-mono">REST API</span>
              </div>
            </div>
          </div>
          <div className="border border-white/20 p-8 bg-white/5 font-mono text-sm text-white/80 overflow-hidden">
            <pre><code>{`POST /v1/loans/process
{
  "loan_id": "L-84920",
  "documents": [
    "s3://bucket/appraisal.pdf",
    "s3://bucket/rent_roll.xlsx"
  ],
  "agents": ["triage", "credit-intelligence"]
}

// Response
{
  "status": "processing",
  "job_id": "job_99x821",
  "estimated_completion": "120s"
}`}</code></pre>
          </div>
        </div>
      </section>
    </div>
  );
}
