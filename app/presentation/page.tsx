import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PresentationContent } from "@/components/sections/presentation-content"

export default function PresentationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PresentationContent />
      </main>
      <Footer />
    </div>
  )
}

