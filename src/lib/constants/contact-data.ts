import { Clock, Mail, MapPin, User } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa6"
import { TbWorld } from "react-icons/tb"

export const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'abdelrahman.adel.js@gmail.com',
    href: 'mailto:abdelrahman.adel.js@gmail.com',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Beni Suef, Egypt',
    href: null,
  },
  {
    icon: Clock,
    title: 'Availability',
    value: 'Open for Freelance & Remote Opportunities',
    href: null,
  },
]

export const socialLinks = [
  {
    icon: FaGithub,
    href: 'https://github.com/codebyabdo',
    label: 'GitHub',
  },
  {
    icon: FaLinkedin,
    href: 'https://linkedin.com/in/codebyabdo',
    label: 'LinkedIn',
  },
  {
    icon: TbWorld,
    href: 'https://codebyabdo.vercel.app',
    label: 'Portfolio',
  },
]