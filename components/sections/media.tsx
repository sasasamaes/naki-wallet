import { ArrowRight, Newspaper } from "lucide-react"
import Link from "next/link"

export function MediaSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700">
              Featured Media
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">In the News</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Learn more about our journey and impact in Costa Rica&apos;s tech ecosystem
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl py-12">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Video Section */}
            <div className="space-y-4">
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <iframe
                  src="https://www.youtube.com/embed/udd9jejnoBs"
                  title="Privy-Annouknakis Billetera de Stablecoin Innovadora | Mammothon de Celestia"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
              <h3 className="text-xl font-bold">Privy-Annouknakis: Innovative Stablecoin Wallet</h3>
              <p className="text-muted-foreground">
                Watch our presentation at the Celestia Mammothon Hacker House in Costa Rica
              </p>
            </div>

            {/* News Article Section */}
            <div className="space-y-4">
              <div className="rounded-xl border bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <Newspaper className="h-8 w-8 text-purple-600" />
                  <div>
                    <h3 className="font-bold">ElMundo.cr</h3>
                    <p className="text-sm text-muted-foreground">Featured Article</p>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-xl font-bold">Costa Rica tiene talento y la Hacker House lo comprueba</h4>
                  <p className="mt-2 text-muted-foreground">
                    El talento costarricense brilla en el ecosistema blockchain, demostrando innovación y capacidad
                    técnica durante el Hacker House de Celestia.
                  </p>
                  <Link
                    href="https://elmundo.cr/cienciaytecnologia/costa-rica-tiene-talento-y-la-hacker-house-lo-comprueba/"
                    target="_blank"
                    className="mt-4 inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-700"
                  >
                    Read full article
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="rounded-xl border bg-purple-50 p-6">
                <h4 className="font-bold">About Hacker House</h4>
                <p className="mt-2 text-muted-foreground">
                  The Celestia Mammothon Hacker House brought together talented developers from Costa Rica to build
                  innovative blockchain solutions, showcasing the country&apos;s growing tech ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

