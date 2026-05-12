import { ContactSection } from '@/components/sections/contact/contact-section'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Alex Chen',
  description: 'Get in touch for collaboration opportunities, consulting, or just to say hello.',
}

export default function ContactPage() {
  return (
    <>
        <ContactSection />
    </>
  )
}
