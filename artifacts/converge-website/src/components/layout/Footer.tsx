import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white py-16 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h4 className="font-sans font-semibold mb-4 tracking-wider text-sm text-white/70 uppercase">Platform</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link href="/platform/overview" className="hover:text-white transition-colors">Overview</Link></li>
              <li><Link href="/platform/triage" className="hover:text-white transition-colors">Triage</Link></li>
              <li><Link href="/platform/credit-intelligence" className="hover:text-white transition-colors">Credit Intelligence</Link></li>
              <li><Link href="/platform/policy-match" className="hover:text-white transition-colors">Policy Match</Link></li>
              <li><Link href="/platform/entity-review" className="hover:text-white transition-colors">Entity Review</Link></li>
              <li><Link href="/platform/background-report" className="hover:text-white transition-colors">Background Report</Link></li>
              <li><Link href="/platform/comps" className="hover:text-white transition-colors">Comps</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans font-semibold mb-4 tracking-wider text-sm text-white/70 uppercase">Solutions</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link href="/solutions/bridge-lending" className="hover:text-white transition-colors">Bridge Lending</Link></li>
              <li><Link href="/solutions/construction-lending" className="hover:text-white transition-colors">Construction Lending</Link></li>
              <li><Link href="/solutions/cre-term-lending" className="hover:text-white transition-colors">CRE Term Lending</Link></li>
              <li><Link href="/solutions/dscr-lending" className="hover:text-white transition-colors">DSCR Lending</Link></li>
              <li><Link href="/solutions/hard-money-lending" className="hover:text-white transition-colors">Hard Money Lending</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans font-semibold mb-4 tracking-wider text-sm text-white/70 uppercase">Resources</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/resources/guides" className="hover:text-white transition-colors">Guides</Link></li>
              <li><Link href="/resources/webinars" className="hover:text-white transition-colors">Webinars</Link></li>
              <li><Link href="/resources/reports" className="hover:text-white transition-colors">Reports</Link></li>
              <li><Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans font-semibold mb-4 tracking-wider text-sm text-white/70 uppercase">Company</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link href="/company/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/company/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/company/newsroom" className="hover:text-white transition-colors">Newsroom</Link></li>
              <li><Link href="/company/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/security" className="hover:text-white transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} Converge Finance. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/legal/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/legal/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <span>SOC 2 Type II Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
