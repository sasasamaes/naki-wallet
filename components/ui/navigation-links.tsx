"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useCallback } from "react"

interface NavigationLinksProps {
  className?: string
  onClick?: () => void
}

export function NavigationLinks({ className, onClick }: NavigationLinksProps) {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path.startsWith("#")) return false
    return pathname === path
  }

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()

    // Handle the onClick callback if provided (for mobile menu closing)
    if (onClick) onClick()

    // Get the section element
    const section = document.querySelector(sectionId)

    if (section) {
      // Scroll to the section with smooth animation
      window.scrollTo({
        top: section.getBoundingClientRect().top + window.scrollY - 80, // Offset for header
        behavior: "smooth",
      })

      // Update URL without causing a page reload
      window.history.pushState({}, "", sectionId)
    }
  }, [])

  // Handle initial hash in URL
  useEffect(() => {
    if (window.location.hash) {
      const section = document.querySelector(window.location.hash)
      if (section) {
        // Add a small delay to ensure the page is fully loaded
        setTimeout(() => {
          window.scrollTo({
            top: section.getBoundingClientRect().top + window.scrollY - 80,
            behavior: "smooth",
          })
        }, 100)
      }
    }
  }, [])

  return (
    <nav className={className}>
      <Link
        href="#features"
        className={`text-sm font-medium transition-colors hover:text-primary ${isActive("#features") ? "text-primary" : ""}`}
        onClick={(e) => scrollToSection(e, "#features")}
      >
        Features
      </Link>
      <Link
        href="#how-it-works"
        className={`text-sm font-medium transition-colors hover:text-primary ${isActive("#how-it-works") ? "text-primary" : ""}`}
        onClick={(e) => scrollToSection(e, "#how-it-works")}
      >
        How It Works
      </Link>
      <Link
        href="#team"
        className={`text-sm font-medium transition-colors hover:text-primary ${isActive("#team") ? "text-primary" : ""}`}
        onClick={(e) => scrollToSection(e, "#team")}
      >
        Team
      </Link>
      <Link
        href="/presentation"
        className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/presentation") ? "text-primary font-semibold" : ""}`}
        onClick={onClick}
      >
        Presentation
      </Link>
      <Link
        href="#faq"
        className={`text-sm font-medium transition-colors hover:text-primary ${isActive("#faq") ? "text-primary" : ""}`}
        onClick={(e) => scrollToSection(e, "#faq")}
      >
        FAQ
      </Link>
      <Link
        href="https://nakis-organization.gitbook.io/nakis-organization-docs"
        target="_blank"
        className="text-sm font-medium transition-colors hover:text-primary"
        onClick={onClick}
      >
        Docs
      </Link>
    </nav>
  )
}

