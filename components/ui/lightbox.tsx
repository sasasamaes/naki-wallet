"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface LightboxProps {
  slides: {
    title: string
    description: string
    image: string
  }[]
  initialSlide: number
  isOpen: boolean
  onClose: () => void
}

export function Lightbox({ slides, initialSlide, isOpen, onClose }: LightboxProps) {
  const [currentSlide, setCurrentSlide] = useState(initialSlide)

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      } else if (e.key === "ArrowLeft") {
        prevSlide()
      } else if (e.key === "ArrowRight") {
        nextSlide()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden"

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-0">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        aria-label="Close"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 z-50 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 z-50 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Current slide */}
      <div className="relative w-full h-full max-w-[100vw] max-h-[100vh] flex flex-col">
        <div className="relative flex-1 min-h-0 flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center p-0">
            <Image
              src={slides[currentSlide].image || "/placeholder.svg"}
              alt={slides[currentSlide].title}
              width={1920}
              height={1080}
              className="max-w-[98vw] max-h-[90vh] w-auto h-auto object-contain"
              priority
              quality={100}
              unoptimized
            />
          </div>
        </div>

        {/* Caption */}
        <div className="bg-black/70 p-3 text-white mt-1 rounded-lg max-w-[95vw] mx-auto">
          <h3 className="text-lg font-bold">{slides[currentSlide].title}</h3>
          <p className="text-sm text-gray-300">{slides[currentSlide].description}</p>
          <p className="text-xs text-gray-400 mt-1">
            Slide {currentSlide + 1} of {slides.length}
          </p>
        </div>
      </div>
    </div>
  )
}

