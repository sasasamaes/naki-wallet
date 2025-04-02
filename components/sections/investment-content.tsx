"use client"

import {
  ChevronRight,
  DollarSign,
  BarChart3,
  Users,
  Rocket,
  Calendar,
  CheckCircle2,
  Send,
  Code2,
  CreditCard,
} from "lucide-react"

export function InvestmentContent() {
  return (
    <div className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Naki Wallet Fundraising Summary</h1>
            <div className="inline-flex items-center justify-center rounded-full bg-purple-100 px-6 py-3">
              <DollarSign className="mr-2 h-5 w-5 text-purple-700" />
              <span className="text-xl font-bold text-purple-700">Funding Needed: $750,000</span>
            </div>
          </div>

          <section className="space-y-4 rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold">What We've Built So Far</h2>
            <p className="text-muted-foreground">
              Our team has developed a fully functional MVP of Naki Wallet that demonstrates our core value proposition:
              making cryptocurrency transactions as user-friendly as traditional payment apps. We've created:
            </p>
            <ul className="space-y-2 pl-6">
              <li className="flex items-start">
                <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span>A complete mobile wallet application with seamless user authentication</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span>Peer-to-peer USDC payments</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span>Multiple funding options (debit cards, bank transfers, PayPal, cryptocurrency)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span>Social features for connecting with friends and viewing transaction history</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span>QR code and NFC payment capabilities</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span>Secure wallet creation and management via Privy SDK</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span>Base Testnet integration (ready for mainnet deployment)</span>
              </li>
            </ul>
          </section>

          <section className="space-y-4 rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold">Funding Allocation</h2>
            <p className="text-muted-foreground">The $350,000 we're raising will be allocated as follows:</p>

            <div className="space-y-6 mt-6">
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                    <Rocket className="h-5 w-5 text-purple-700" />
                  </div>
                  <h3 className="ml-3 text-xl font-bold">Product Development ($350,000)</h3>
                </div>
                <ul className="space-y-1 pl-14 text-muted-foreground">
                  <li>• Expand engineering team (3 additional developers)</li>
                  <li>• Mainnet launch and security audits</li>
                  <li>• Multi-chain support beyond Base (Ethereum, Optimism, Arbitrum)</li>
                  <li>• Stellar integration for USDC payments</li>
                  <li>• SINPE Móvil integration for Costa Rica on/off ramps</li>
                  <li>• MoneyGram/Stellar USDC on/off ramp integration</li>
                  <li>• Advanced security features (transaction limits, multi-sig support)</li>
                </ul>
              </div>

              {/* <div className="space-y-3">
                <div className="flex items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                    <BarChart3 className="h-5 w-5 text-purple-700" />
                  </div>
                  <h3 className="ml-3 text-xl font-bold">Business Operations ($200,000)</h3>
                </div>
                <ul className="space-y-1 pl-14 text-muted-foreground">
                  <li>• Company formation and legal structure establishment</li>
                  <li>• User acquisition initiatives</li>
                  <li>• Strategic partnerships with merchants and service providers</li>
                  <li>• Compliance and regulatory requirements</li>
                  <li>• Operational expenses for 12 months</li>
                </ul>
              </div> */}

              {/* <div className="space-y-3">
                <div className="flex items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                    <Users className="h-5 w-5 text-purple-700" />
                  </div>
                  <h3 className="ml-3 text-xl font-bold">Marketing & User Growth ($200,000)</h3>
                </div>
                <ul className="space-y-1 pl-14 text-muted-foreground">
                  <li>• Targeted marketing campaigns</li>
                  <li>• Community building and engagement</li>
                  <li>• Educational content to drive adoption</li>
                  <li>• Referral program implementation</li>
                </ul>
              </div> */}
              
            </div>
          </section>

          <section className="space-y-4 rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold">Business Model</h2>

            <div className="space-y-6 mt-4">
              <div className="space-y-3">
                <h3 className="text-xl font-bold">Primary Revenue Streams</h3>
                <ul className="space-y-2 pl-6 text-muted-foreground">
                  <li className="flex items-start">
                    <CreditCard className="mr-2 h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Transaction fees:</strong> 0.5% on P2P transfers above $200, generating estimated revenue
                      of $1-2 per monthly active user
                    </span>
                  </li>
                  <li className="flex items-start">
                    <DollarSign className="mr-2 h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Fiat-to-crypto conversion margin:</strong> 1% spread on USDC purchases/sales, representing
                      $2-3 for every $300 in conversions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Users className="mr-2 h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Premium subscription:</strong> $4.99 monthly plan offering benefits such as fee-free
                      transactions, advanced analytics, and priority support
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold">Phased Monetization Strategy</h3>
                <ul className="space-y-2 pl-6 text-muted-foreground">
                  <li className="flex items-start">
                    <Calendar className="mr-2 h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Initial Phase (1-12 months):</strong> Focus on user acquisition with no fees, establishing
                      user base and transaction volume
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Calendar className="mr-2 h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Monetization Phase (12-24 months):</strong> Gradual introduction of fees and launch of
                      premium tier
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Calendar className="mr-2 h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Expansion Phase (24+ months):</strong> Diversification with additional financial services
                      and merchant partnerships
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4 rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold">Product Roadmap</h2>

            <div className="space-y-6 mt-4">
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                    <Calendar className="h-5 w-5 text-purple-700" />
                  </div>
                  <h3 className="ml-3 text-xl font-bold">Q2 2025 (Months 1-3)</h3>
                </div>
                <ul className="space-y-1 pl-14 text-muted-foreground">
                  <li>• Company incorporation and legal structure setup</li>
                  <li>• Mainnet launch on Base</li>
                  <li>• Multi-chain support expansion</li>
                  <li>• Enhanced security features</li>
                  <li>• Merchant payment integrations</li>
                </ul>
              </div>

              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                    <Calendar className="h-5 w-5 text-purple-700" />
                  </div>
                  <h3 className="ml-3 text-xl font-bold">Q3 2025 (Months 4-6)</h3>
                </div>
                <ul className="space-y-1 pl-14 text-muted-foreground">
                  <li>• Launch referral program</li>
                  <li>• Stellar USDC integration for faster, lower-cost transactions</li>
                  <li>• SINPE Móvil integration for Costa Rican market</li>
                  <li>• MoneyGram integration for global cash-to-crypto access points</li>
                  <li>• Implement recurring payments</li>
                  <li>• Release web application</li>
                </ul>
              </div>

              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                    <Calendar className="h-5 w-5 text-purple-700" />
                  </div>
                  <h3 className="ml-3 text-xl font-bold">Q4 2025 (Months 7-9)</h3>
                </div>
                <ul className="space-y-1 pl-14 text-muted-foreground">
                  <li>• Introduce yield-generating features</li>
                  <li>• Add cross-chain swaps</li>
                  <li>• Expand merchant partnership network</li>
                  <li>• Implement advanced analytics for users</li>
                </ul>
              </div>

              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                    <Calendar className="h-5 w-5 text-purple-700" />
                  </div>
                  <h3 className="ml-3 text-xl font-bold">Q1 2026 (Months 10-12)</h3>
                </div>
                <ul className="space-y-1 pl-14 text-muted-foreground">
                  <li>• Launch corporate accounts</li>
                  <li>• Expand local payment integrations to other Central American countries</li>
                  <li>• Implement group payment splitting</li>
                  <li>• Develop direct banking integrations</li>
                  <li>• Release desktop application</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4 rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold">Funding Details</h2>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-gray-50 p-4">
                <h3 className="font-medium text-muted-foreground">Previous Funding</h3>
                <p className="text-xl font-bold">$0 (This is our first funding round)</p>
              </div>
              <div className="rounded-lg bg-purple-50 p-4">
                <h3 className="font-medium text-muted-foreground">Current Round Target</h3>
                <p className="text-xl font-bold">$750,000 in pre-seed funding</p>
                <p className="text-sm text-muted-foreground">Valuation cap: $7.5M</p>
              </div>
            </div>
          </section>

          <section className="space-y-4 rounded-xl border bg-gradient-to-br from-purple-50 to-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold">Our Vision</h2>
            <p className="text-muted-foreground">
              Our team is positioned to capitalize on the growing demand for user-friendly crypto payment solutions.
              With Naki Wallet, we're bringing the simplicity of traditional payment apps to cryptocurrency
              transactions, making digital assets accessible to everyday users. By integrating Stellar USDC support,
              local payment systems like SINPE Móvil in Costa Rica, and global services like MoneyGram's Stellar USDC
              integration, we'll offer users efficient and cost-effective transactions with seamless on/off ramps that
              connect traditional banking and cash access points with blockchain technologies worldwide.
            </p>
          </section>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8 flex-wrap">
            <a
              href="mailto:hey@francampos.me"
              className="inline-flex items-center justify-center rounded-md bg-purple-600 px-8 py-3 text-lg font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Contact Us About Investing
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>

            <a
              href="https://t.me/aurumWallet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-[#0088cc] px-8 py-3 text-lg font-medium text-white shadow-sm hover:bg-[#0077b5] focus:outline-none focus:ring-2 focus:ring-[#0088cc] focus:ring-offset-2"
            >
              <Send className="mr-2 h-5 w-5" />
              Join Us on Telegram
            </a>

            <a
              href="https://app.onlydust.com/projects/aurum-wallet/overview"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-[#1a1a1a] px-8 py-3 text-lg font-medium text-white shadow-sm hover:bg-[#333333] focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] focus:ring-offset-2"
            >
              <Code2 className="mr-2 h-5 w-5" />
              View on OnlyDust
            </a>
          </div>

          <section className="space-y-4 rounded-xl border bg-white p-6 shadow-sm mt-8">
            <h2 className="text-2xl font-bold">Support Our Project</h2>
            <p className="text-muted-foreground">
              If you believe in our vision but aren't ready for a full investment, you can still support Naki Wallet's
              development through donations.
            </p>

            <div className="grid gap-6 mt-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-4 rounded-lg border p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#08B5E5]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 12h8" />
                      <path d="M12 8v8" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">USDC on Stellar</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Send USDC directly to our Stellar wallet address. Fast, secure, and low fees.
                </p>
                <div className="mt-2 p-3 bg-gray-50 rounded-md overflow-hidden">
                  <p className="text-xs font-mono break-all select-all">
                    GAMNA2Q6NTZSUBLMEXLTIXYORE7OXJJBMEGIX7T2OXDAKIA7CCKN4RJV
                  </p>
                  <p className="text-xs mt-2 text-muted-foreground">
                    <span className="font-semibold">Memo (required):</span> 584115363
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-muted-foreground">Click to copy</span>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText("GAMNA2Q6NTZSUBLMEXLTIXYORE7OXJJBMEGIX7T2OXDAKIA7CCKN4RJV")
                        alert("Stellar address copied to clipboard!")
                      }}
                      className="text-xs text-purple-600 hover:text-purple-800"
                    >
                      Copy Address
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-center p-2 bg-gray-50 rounded-md">
                  <div className="relative h-32 w-32">
                    <img
                      src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=GAMNA2Q6NTZSUBLMEXLTIXYORE7OXJJBMEGIX7T2OXDAKIA7CCKN4RJV"
                      alt="Stellar USDC QR Code"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4 rounded-lg border p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F7931A]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M11.767 19.089c4.924.868 9.593-2.535 10.461-7.659.868-5.124-2.535-9.993-7.459-10.861-4.924-.868-9.593 2.535-10.461 7.659-.868 5.124 2.535 9.993 7.459 10.861z" />
                      <path d="M15.5 13.5l-3.5 2-3.5-2" />
                      <path d="M12 15.5v-8" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Bitcoin</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Support us with Bitcoin, the original cryptocurrency. Secure and globally recognized.
                </p>
                <div className="mt-2 p-3 bg-gray-50 rounded-md overflow-hidden">
                  <p className="text-xs font-mono break-all select-all">bc1qeqg89cvxfamky674578yfseljwsxeajd5ka4ry</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-muted-foreground">Click to copy</span>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText("bc1qeqg89cvxfamky674578yfseljwsxeajd5ka4ry")
                        alert("Bitcoin address copied to clipboard!")
                      }}
                      className="text-xs text-purple-600 hover:text-purple-800"
                    >
                      Copy Address
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-center p-2 bg-gray-50 rounded-md">
                  <div className="relative h-32 w-32">
                    <img
                      src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=bc1qeqg89cvxfamky674578yfseljwsxeajd5ka4ry"
                      alt="Bitcoin QR Code"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4 rounded-lg border p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#627EEA]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                      <path d="M12 22v-6.5" />
                      <path d="M12 2v6.5" />
                      <path d="M4.5 10L12 17.5 19.5 10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Ethereum</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Donate with Ethereum, the leading smart contract platform. Support our development efforts.
                </p>
                <div className="mt-2 p-3 bg-gray-50 rounded-md overflow-hidden">
                  <p className="text-xs font-mono break-all select-all">0xAC2e22B5a99F0123319644A9bF0DF4FD72c9b001</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-muted-foreground">Click to copy</span>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText("0xAC2e22B5a99F0123319644A9bF0DF4FD72c9b001")
                        alert("Ethereum address copied to clipboard!")
                      }}
                      className="text-xs text-purple-600 hover:text-purple-800"
                    >
                      Copy Address
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-center p-2 bg-gray-50 rounded-md">
                  <div className="relative h-32 w-32">
                    <img
                      src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=0xAC2e22B5a99F0123319644A9bF0DF4FD72c9b001"
                      alt="Ethereum QR Code"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4 rounded-lg border p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1B365D]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Starknet</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Support us with Starknet, the Ethereum Layer 2 scaling solution with low fees and high throughput.
                </p>
                <div className="mt-2 p-3 bg-gray-50 rounded-md overflow-hidden">
                  <p className="text-xs font-mono break-all select-all">
                    0x03442ca9779411e4ca0e12f8fc53b80a893289509e9672f7d009386a3fd98e85
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-muted-foreground">Click to copy</span>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(
                          "0x03442ca9779411e4ca0e12f8fc53b80a893289509e9672f7d009386a3fd98e85",
                        )
                        alert("Starknet address copied to clipboard!")
                      }}
                      className="text-xs text-purple-600 hover:text-purple-800"
                    >
                      Copy Address
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-center p-2 bg-gray-50 rounded-md">
                  <div className="relative h-32 w-32">
                    <img
                      src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=0x03442ca9779411e4ca0e12f8fc53b80a893289509e9672f7d009386a3fd98e85"
                      alt="Starknet QR Code"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-purple-50 rounded-lg">
              <h3 className="font-bold text-purple-800">Why Donate?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Your donations help us accelerate development, improve our infrastructure, and bring Naki Wallet to more
                users across Latin America. Every contribution, no matter how small, makes a difference in our mission
                to democratize access to cryptocurrency payments.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

