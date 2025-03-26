"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ExternalLink, Presentation, FileSlidersIcon as Slideshow } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Lightbox } from "@/components/ui/lightbox"

export function PresentationContent() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentSlide(index)
    setLightboxOpen(true)
  }

  const slides = [
    {
      title: "Naki Wallet",
      description: "Logo and branding",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-21%20at%209.10.14%E2%80%AFPM-QKUTkAPbrHF0r0jTg0k0MPamBkJopb.png",
    },
    {
      title: "Introduction to Naki Wallet",
      description: "Overview of key features and value proposition",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-21%20at%209.10.21%E2%80%AFPM-AHlvnObKlY9juR5Bg4JDkPQM0MZshG.png",
    },
    {
      title: "El Problema",
      description: "The challenges with current crypto wallets",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-21%20at%209.10.38%E2%80%AFPM-6QJ3okCElKuw0OS7eN9kTujpXl0aYG.png",
    },
    {
      title: "La Solución",
      description: "How Naki solves these problems",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-21%20at%209.10.46%E2%80%AFPM-Qr1vc91HsQez0oXjmhUPwc5mxFZKLL.png",
    },
    {
      title: "Visión",
      description: "Democratizing cryptocurrencies for everyone",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-21%20at%209.10.56%E2%80%AFPM-UpeWIggzlQIhVw6wZsxDZ1n3pvVLCN.png",
    },
    {
      title: "Market Landscape",
      description: "Crypto adoption in Latin America",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-21%20at%209.11.13%E2%80%AFPM-7ySOtrU3FOIlD95Ve8VdpUd5ePhnNL.png",
    },
    {
      title: "Panorama del Mercado",
      description: "Competition, trends, and differentiation",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-21%20at%209.11.26%E2%80%AFPM-wbJAHQtGx3PGLcK9aGDNjSUxqUqqQH.png",
    },
    {
      title: "Estado Actual",
      description: "Current status, strengths, and upcoming milestones",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-21%20at%209.11.03%E2%80%AFPM-BL3kOas9mA0zELYu1f7b29nXO6Eafv.png",
    },
    {
      title: "Team",
      description: "Meet the team behind Naki Wallet",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-21%20at%209.11.33%E2%80%AFPM-L0Jhx9oDzxIqCrhRwcekSnJlWKXoZC.png",
    },
    {
      title: "Business Model",
      description: "Revenue streams and monetization strategy",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-21%20at%209.11.20%E2%80%AFPM-q3IQRt8JM0ZXTzTCbWf1U9bhixo8sE.png",
    },
  ]

  const CANVA_URL =
    "https://www.canva.com/design/DAGiPIzEj24/Yb-8FkiHEvFILu7Ae-EqDA/edit?utm_content=DAGiPIzEj24&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"

  return (
    <div className="w-full py-12 md:py-24 bg-gradient-to-br from-purple-900 via-black to-purple-900 text-white">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl space-y-10">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Naki Wallet Presentation</h1>
            <p className="text-xl text-purple-200 max-w-[700px] mx-auto">
              Explore our investor presentation showcasing Naki Wallet's vision, market opportunity, and business model.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button asChild variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Link href="/invest" className="flex items-center">
                  <Presentation className="mr-2 h-4 w-4" />
                  View Investment Details
                </Link>
              </Button>
              <Button asChild className="bg-purple-600 hover:bg-purple-700">
                <a href="#slides" className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4" />
                  View Slides
                </a>
              </Button>
              <Button asChild className="bg-[#00C4CC] hover:bg-[#00B2B9] text-white">
                <a href={CANVA_URL} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Slideshow className="mr-2 h-4 w-4" />
                  View in Canva
                </a>
              </Button>
            </div>
          </div>

          <div id="slides" className="space-y-16 pt-8">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Interactive Presentation</h2>
                <p className="text-purple-200 mb-6">
                  Browse through our presentation slides to learn more about Naki Wallet, our market opportunity, and
                  our vision for the future of cryptocurrency payments in Latin America.
                </p>
                <div className="space-y-2">
                  <p className="flex items-center text-sm">
                    <span className="inline-block w-3 h-3 rounded-full bg-purple-500 mr-2"></span>
                    Click on any slide to view it in full screen
                  </p>
                  <p className="flex items-center text-sm">
                    <span className="inline-block w-3 h-3 rounded-full bg-purple-500 mr-2"></span>
                    Use arrow keys or navigation buttons to browse slides
                  </p>
                  <p className="flex items-center text-sm">
                    <span className="inline-block w-3 h-3 rounded-full bg-purple-500 mr-2"></span>
                    Press ESC or click the X to exit fullscreen view
                  </p>
                </div>
              </div>
              <div
                className="relative aspect-video overflow-hidden rounded-xl border-2 border-purple-500/50 shadow-xl shadow-purple-500/20 cursor-pointer"
                onClick={() => openLightbox(0)}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-21%20at%209.10.14%E2%80%AFPM-QKUTkAPbrHF0r0jTg0k0MPamBkJopb.png"
                  alt="Naki Wallet Logo"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <p className="text-white font-medium">Naki Wallet Presentation</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {slides.map((slide, index) => (
                <div key={index} className="group relative cursor-pointer" onClick={() => openLightbox(index)}>
                  <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-white/10 transition-all duration-300 group-hover:border-purple-500/50 group-hover:shadow-lg">
                    <Image
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div>
                        <h3 className="font-bold text-white">{slide.title}</h3>
                        <p className="text-sm text-purple-200">{slide.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4">View Full Presentation</h2>
              <p className="text-purple-200 mb-6">
                Interested in learning more? View the full presentation on Canva or check out our investment details.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-[#00C4CC] hover:bg-[#00B2B9] text-white">
                  <a href={CANVA_URL} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <Slideshow className="mr-2 h-4 w-4" />
                    View in Canva
                  </a>
                </Button>
                <Button asChild variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <Link href="/invest" className="flex items-center">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Investment Details
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox component */}
      <Lightbox
        slides={slides}
        initialSlide={currentSlide}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  )
}

