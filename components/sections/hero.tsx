import { Github, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function HeroSection() {
  const GITHUB_URL = "https://github.com/AnunnakisLabs/nakiWallet"

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-700 to-purple-900 text-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Send Money Instantly with Blockchain Technology
              </h1>
              <p className="max-w-[600px] text-white/90 md:text-xl">
                A Venmo-style payment app powered by blockchain, with embedded wallets and seamless fiat-to-USDC
                conversion. Created by team Anunakis.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <Button size="lg" className="bg-white text-purple-700 hover:bg-white/90 w-full sm:w-auto">
                  <Github className="mr-2 h-4 w-4 shrink-0" />
                  <Link href={GITHUB_URL} target="_blank">
                    View on GitHub
                  </Link>
                </Button>
              </div>

              {/* QR Code and Download Instructions */}
              <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="grid sm:grid-cols-[1fr_auto] gap-6 items-center">
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold">Try Naki Now</h2>
                    <div className="space-y-2">
                      <p className="text-sm text-white/90">1. Download Expo Go:</p>
                      <div className="flex flex-wrap gap-2">
                        <Link
                          href="https://apps.apple.com/app/apple-store/id982107779"
                          target="_blank"
                          className={cn(
                            "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
                            "h-9 px-4 py-2",
                            "bg-white text-purple-700",
                            "hover:bg-white/90 hover:text-purple-700",
                            "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white",
                            "disabled:pointer-events-none disabled:opacity-50",
                          )}
                        >
                          <Phone className="mr-2 h-4 w-4" />
                          App Store
                        </Link>
                        <Link
                          href="https://play.google.com/store/apps/details?id=host.exp.exponent"
                          target="_blank"
                          className={cn(
                            "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
                            "h-9 px-4 py-2",
                            "bg-white text-purple-700",
                            "hover:bg-white/90 hover:text-purple-700",
                            "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white",
                            "disabled:pointer-events-none disabled:opacity-50",
                          )}
                        >
                          <Phone className="mr-2 h-4 w-4" />
                          Play Store
                        </Link>
                      </div>
                      <p className="text-sm text-white/90">2. Scan the QR code with Expo Go</p>
                    </div>
                  </div>
                  <div className="relative aspect-square w-full max-w-[140px] sm:w-[140px] overflow-hidden rounded-lg bg-white p-2">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-01%20at%206.29.07%E2%80%AFAM-Aos4OLIb7rxk2IhzgyA7e6uhW6ck90.png"
                      alt="Naki App QR Code"
                      width={200}
                      height={200}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-8 lg:mt-0">
            <div className="relative h-[500px] w-[250px] sm:h-[600px] sm:w-[300px] overflow-hidden rounded-[40px] border-[8px] border-black bg-black shadow-xl">
              <div className="absolute inset-0 overflow-hidden rounded-[32px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0201.PNG-rNPnt0BmiC7NIhuwAaC1o7miX9rQAF.png"
                  alt="App Home Screen"
                  width={300}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute top-0 inset-x-0 h-6 w-40 mx-auto rounded-b-2xl bg-black" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

