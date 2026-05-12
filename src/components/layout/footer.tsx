import Link from "next/link";
import { Computer, Mail, MessageSquare, User } from "lucide-react";
import { footerLinks } from "@/lib/constants/footer-links";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-heading font-semibold text-sm">
              CODE
            </div>

            <span className="font-heading font-semibold text-foreground">
             byabdo
            </span>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            Front-End Web Developer specializing in React.js, Next.js,
            TypeScript, and scalable SaaS applications with modern frontend
            architecture.
          </p>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-medium text-foreground mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-medium text-foreground mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {footerLinks.social.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  aria-label={link.label}
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Abd El-Rahman Adel. All rights
            reserved.
          </p>

          <p className="text-sm text-muted-foreground">
            Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
