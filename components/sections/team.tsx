import { Github, Globe, Linkedin, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
  github: string
  linkedin?: string
  website?: string
  location: string
  skills: string[]
}

export function TeamSection() {
  const teamMembers: TeamMember[] = [
    {
      name: "Francisco Campos Diaz",
      role: "Full Stack Developer",
      bio: "Full Stack Developer specializing in HTML, CSS, JavaScript, ReactJS, NextJS, Cairo, and Web3 technologies.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fran-MyATmuUD98py9HnhRu3eAvNhzmoRhw.jpeg",
      github: "https://github.com/sasasamaes",
      linkedin: "https://linkedin.com/in/francamposdiaz",
      website: "http://francampos.me/",
      location: "Costa Rica",
      skills: ["React", "Next.js", "TypeScript", "Cairo", "Web3", "Blockchain"],
    },
    {
      name: "Anouk Rímola",
      role: "Blockchain Developer",
      bio: "Blockchain Developer passionate about building decentralized solutions and creating innovative Web3 applications.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/anouk-5V83ymg1PWem8kOMpiuqpxCf22d0be.png",
      github: "https://github.com/AnoukRImola",
      location: "Costa Rica",
      skills: ["Solidity", "Web3.js", "Smart Contracts", "DeFi", "Blockchain Architecture"],
    },
    {
      name: "Ruben Abarca",
      role: "Web3 Developer",
      bio: "Web3 Developer focused on creating seamless blockchain experiences and decentralized applications.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ruben-AekwL5DLBb5icxHC73J7AJBujqjQfJ.png",
      github: "https://github.com/espaciofuturoio",
      location: "Costa Rica",
      skills: ["Web3", "DApp Development", "Smart Contracts", "Blockchain", "Frontend"],
    },
    {
      name: "Juan Pablo Villaplana Corrales",
      role: "Backend Developer",
      bio: "Software Engineer 👨🏽‍💻 Web 3 Developer 👷🏽‍♂️ Member of Dojo Coding 🇨🇷.",
      image: "https://avatars.githubusercontent.com/u/35789725?v=4",
      github: "https://github.com/PabloVillaplana",
      location: "Costa Rica",
      skills: ["Web3", "Python", "Backend", "Solidity", "Php"],
    },
  ]

  return (
    <section
      id="team"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-50 via-white to-purple-50 scroll-mt-16"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700">Our Team</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet the Anunakis</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The talented team behind Naki, building the future of blockchain payments from Costa Rica.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group relative flex flex-col rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-xl ring-2 ring-purple-100">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-purple-600 font-medium text-sm">{member.role}</p>
                  <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {member.location}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-purple-700 bg-purple-50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 mt-auto pt-4 border-t">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <Link href={member.github} target="_blank">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Link>
                </Button>
                {member.linkedin && (
                  <Button variant="outline" size="icon" className="shrink-0" asChild>
                    <Link href={member.linkedin} target="_blank">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                )}
                {member.website && (
                  <Button variant="outline" size="icon" className="shrink-0" asChild>
                    <Link href={member.website} target="_blank">
                      <Globe className="h-4 w-4" />
                      <span className="sr-only">Website</span>
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

