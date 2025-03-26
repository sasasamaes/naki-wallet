"use client"

import { useState, useEffect } from "react"
import { Github, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MobileMenu } from "@/components/ui/mobile-menu"
import { Logo } from "@/components/ui/logo"
import { NavigationLinks } from "@/components/ui/navigation-links"
import { usePathname } from "next/navigation"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const GITHUB_URL = "https://github.com/AnunnakisLabs/nakiWallet"

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!isMobileMenuOpen) return

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest(".mobile-menu-container") && !target.closest(".mobile-menu-button")) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isMobileMenuOpen])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center transition-opacity hover:opacity-80"
          aria-label="Naki Wallet - Home"
        >
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <NavigationLinks className="hidden md:flex gap-6" />

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href={GITHUB_URL}
            target="_blank"
            className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
          >
            <Github className="h-5 w-5" />
            <span>GitHub</span>
          </Link>

          <Button asChild variant="default">
            <Link href="/invest">Invest</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg mobile-menu-button"
          onClick={(e) => {
            e.stopPropagation()
            setIsMobileMenuOpen(!isMobileMenuOpen)
          }}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-container">
          <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
        </div>
      )}
    </header>
  )
}

