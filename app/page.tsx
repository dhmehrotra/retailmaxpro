import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WhoItsFor } from "@/components/who-its-for"
import { WhatItCanDo } from "@/components/what-it-can-do"
import { VisualsGallery } from "@/components/visuals-gallery"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <WhoItsFor />
      <WhatItCanDo />
      <VisualsGallery />
      <ContactForm />
      <Footer />
    </main>
  )
}
