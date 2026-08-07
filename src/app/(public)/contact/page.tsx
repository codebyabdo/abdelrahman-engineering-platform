import { ContactSection } from '@/components/sections/contact/contact-section'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Frontend Engineering & SaaS Development',
  description:
    'Reach out for collaboration, frontend engineering projects, SaaS development, or building scalable React and Next.js applications.',
}

export default function ContactPage() {
  return (
    <>
        <ContactSection />
    </>
  )
}
