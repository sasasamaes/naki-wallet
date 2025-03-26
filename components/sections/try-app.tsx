import Image from "next/image"
import { Phone, QrCode, ArrowRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function TryAppSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white border-t">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700">Try the App</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Experience Naki Today</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Follow these simple steps to try out Naki on your mobile device
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl mt-12">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">1. Download Expo Go</h3>
                <p className="text-muted-foreground">
                  First, install the Expo Go app on your mobile device. It's available for both iOS and Android.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="https://apps.apple.com/app/apple-store/id982107779"
                    target="_blank"
                    className={cn(
                      "flex-1 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
                      "h-10 px-4 py-2",
                      "bg-purple-600 text-white",
                      "hover:bg-purple-700",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500",
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
                      "flex-1 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
                      "h-10 px-4 py-2",
                      "bg-purple-600 text-white",
                      "hover:bg-purple-700",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500",
                      "disabled:pointer-events-none disabled:opacity-50",
                    )}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Play Store
                  </Link>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">2. Scan the QR Code</h3>
                <p className="text-muted-foreground">
                  Open Expo Go and scan this QR code to instantly access the Naki app on your device.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative aspect-square w-full max-w-[280px] overflow-hidden rounded-2xl border-8 border-white shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-01%20at%206.29.07%E2%80%AFAM-Aos4OLIb7rxk2IhzgyA7e6uhW6ck90.png"
                  alt="Naki App QR Code"
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              Having trouble? You can also open the app directly through Expo Go using our project URL
            </p>
            <Link
              href="exp://u.expo.dev/update/0c3b730d-a565-4c58-810b-e280de3c3a55"
              target="_blank"
              className={cn(
                "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
                "h-10 px-4 py-2",
                "border border-purple-200 bg-white text-purple-600",
                "hover:bg-purple-50 hover:text-purple-700",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500",
                "disabled:pointer-events-none disabled:opacity-50",
              )}
            >
              <QrCode className="mr-2 h-4 w-4" />
              Open in Expo Go
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Mobile View Enhancement */}
        <div className="mt-8 pt-8 border-t md:hidden">
          <div className="space-y-4 text-center">
            <p className="text-sm font-medium">Download Expo Go now:</p>
            <div className="flex justify-center gap-4">
              <Link
                href="https://apps.apple.com/app/apple-store/id982107779"
                target="_blank"
                className="text-muted-foreground hover:text-purple-600 transition-colors"
                aria-label="Download on App Store"
              >
                <Phone className="h-6 w-6" />
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=host.exp.exponent"
                target="_blank"
                className="text-muted-foreground hover:text-purple-600 transition-colors"
                aria-label="Get it on Play Store"
              >
                <Phone className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

