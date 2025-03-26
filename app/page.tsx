"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero"
import { FeaturesSection } from "@/components/sections/features"
import { AppPreviewSection } from "@/components/sections/app-preview"
import { HowItWorksSection } from "@/components/sections/how-it-works"
import { FAQSection } from "@/components/sections/faq"
import { HackathonSection } from "@/components/sections/hackathon"
import { PartnersSection } from "@/components/sections/partners"
import { TeamSection } from "@/components/sections/team"
import { TryAppSection } from "@/components/sections/try-app"
import { MediaSection } from "@/components/sections/media"
import { useEffect } from "react"

export default function Page() {
  // Handle smooth scrolling for hash links when page loads
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash
      const element = document.querySelector(id)

      if (element) {
        // Add a small delay to ensure the page is fully loaded
        setTimeout(() => {
          const headerOffset = 80
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.scrollY - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }, 300)
      }
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AppPreviewSection />
        <HowItWorksSection />
        <TeamSection />
        <TryAppSection />
        <FAQSection />
        <MediaSection />
        <HackathonSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  )
}

