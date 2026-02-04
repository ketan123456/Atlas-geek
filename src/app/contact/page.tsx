import React from 'react'
import ContactSection from '../../../component/ContactComponent/ContactSection'
import ContactHero from '../../../component/ContactComponent/ContactHero'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atlas Geek-Contact",
  description: "Latest articles, tutorials, and insights from Atlas Geek.",
  alternates: {
    canonical: "/contact",
  },
};
const ContactPage = () => {
  return (
      <>
          <ContactHero/>
          <main><ContactSection/></main>
      </>
  )
}

export default ContactPage