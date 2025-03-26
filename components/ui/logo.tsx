import Image from "next/image"

export function Logo() {
  return (
    <div className="flex items-center gap-2 font-bold text-xl transition-colors hover:text-primary">
      <Image src="/images/naki-logo.png" alt="Naki Wallet Logo" width={40} height={40} className="h-10 w-auto" />
      <span className="hidden sm:inline">Naki Wallet</span>
    </div>
  )
}

