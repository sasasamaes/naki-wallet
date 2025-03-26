import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { InvestmentContent } from "@/components/sections/investment-content"

export default function InvestPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <InvestmentContent />
      </main>
      <Footer />
    </div>
  )
}

