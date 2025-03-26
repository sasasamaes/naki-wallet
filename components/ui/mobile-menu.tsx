"use client"

import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { NavigationLinks } from "./navigation-links"
import { usePathname } from "next/navigation"

interface MobileMenuProps {
  onClose: () => void
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  const GITHUB_URL = "https://github.com/AnunnakisLabs/nakiWallet"
  const pathname = usePathname()

  return (
    <div className="md:hidden border-t bg-background shadow-lg">
      <div className="container flex flex-col py-4 space-y-4">
        <NavigationLinks className="flex flex-col space-y-4" onClick={onClose} />
        <Link
          href={GITHUB_URL}
          target="_blank"
          className="text-sm font-medium transition-colors hover:text-primary px-4 py-2 hover:bg-gray-50 rounded-lg flex items-center gap-2"
          onClick={onClose}
        >
          <Github className="h-5 w-5" />
          GitHub
        </Link>
        <div className="px-4 space-y-2">
          <Button className="w-full" variant={pathname === "/invest" ? "secondary" : "default"} asChild>
            <Link href="/invest" onClick={onClose}>
              Invest
            </Link>
          </Button>
          <Button className="w-full" variant={pathname === "/presentation" ? "secondary" : "outline"} asChild>
            <Link href="/presentation" onClick={onClose}>
              Presentation
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

