import { Link } from "wouter";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2">
          {/* Logo Orbital SVG */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
            <circle cx="12" cy="12" r="4" fill="currentColor" />
          </svg>
          <span className="font-sans font-semibold text-lg tracking-tight">Converge</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/platform/overview" className="hover:text-secondary transition-colors">Platform</Link>
          <Link href="/solutions/cre-term-lending" className="hover:text-secondary transition-colors">Solutions</Link>
          <Link href="/customers" className="hover:text-secondary transition-colors">Customers</Link>
          <Link href="/resources" className="hover:text-secondary transition-colors">Resources</Link>
          <Link href="/pricing" className="hover:text-secondary transition-colors">Pricing</Link>
        </nav>

        {/* Auth / CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-secondary hover:underline">Log In</Link>
          <Link href="/demo">
            <Button className="bg-primary text-primary-foreground rounded-none px-6">Book a Demo</Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
}
