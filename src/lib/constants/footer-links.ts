import { GitCommitVertical, Mail, MessageSquare, User, Globe,  GitGraph, Link } from 'lucide-react';

import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

import { MdEmail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

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
      icon: FaGithub,
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/codebyabdo',
      icon: FaLinkedin,
    },
    {
      label: 'Portfolio',
      href: 'https://codebyabdo.vercel.app',
      icon: TbWorld,
    },
    {
      label: 'Email',
      href: 'mailto:abdelrahman.adel.js@gmail.com',
      icon: MdEmail,
    },
  ],
}