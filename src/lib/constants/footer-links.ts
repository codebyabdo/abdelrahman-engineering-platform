import { Computer, Mail, MessageSquare, User } from "lucide-react";

export const footerLinks = {
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Approach', href: '/approach' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],

  social: [
    {
      label: 'GitHub',
      href: 'https://github.com/codebyabdo',
      icon: Computer,
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/codebyabdo',
      icon: MessageSquare,
    },
    {
      label: 'Portfolio',
      href: 'https://codebyabdo.vercel.app',
      icon: User,
    },
    {
      label: 'Email',
      href: 'mailto:abdelrahman.adel.js@gmail.com',
      icon: Mail,
    },
  ],
}