import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

export function Certificates() {
  const certificates = [
    {
      name: "Python Data Structures",
      issuer: "University of Michigan",
      date: "2024",
      link: "https://coursera.org/share/b5f0845d7d96835236763f39e70d0eb5",
    },
    {
      name: "Automate Cybersecurity Tasks with Python",
      issuer: "Google",
      date: "2024",
      link: "https://coursera.org/share/586dcab40aed23180e94e58bd16ce829",
    },
    {
      name: "Assets, Threats, and Vulnerabilities",
      issuer: "Google",
      date: "2024",
      link: "https://coursera.org/share/98c7f51848949f31e2d15f9219e637d2",
    },
    {
      name: "Linux and SQL",
      issuer: "Google",
      date: "2024",
      link: "https://coursera.org/share/9cb323ddc385c28be4bd7ce30bc9fd37",
    },
    {
      name: "Networks and Network Security",
      issuer: "Google",
      date: "2024",
      link: "https://coursera.org/share/95f74cc8575b9b7a8cfc0aeda372b4d2",
    },
    {
      name: "Play It Safe: Manage Security Risks",
      issuer: "Coursera",
      date: "2023",
      link: "https://coursera.org/share/71f45b7b9216b2cc95e555812bffdae9",
    },
    {
      name: "Foundations of Cybersecurity",
      issuer: "Google",
      date: "2023",
      link: "https://coursera.org/share/9479a2307915509ca33a7a7034da5e03",
    },
    {
      name: "English UK - B2",
      issuer: "British Council",
      date: "2022",
      link: "#inicio"

    }
  ]

  return (
    <section id="certificados" className="pt-20 py-12 md:py-24">
      <div className="space-y-4 text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Certificados</h2>
        <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        <p className="text-muted-foreground">Certificaciones profesionales que he obtenido.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {certificates.map((cert) => (
          <Card key={cert.name} className="overflow-hidden hover:shadow-lg transition-all">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold">{cert.name}</h3>
                  <p className="text-muted-foreground">{cert.issuer}</p>
                  <Badge variant="outline" className="mt-2">
                    {cert.date}
                  </Badge>
                </div>
                <a href={cert.link} className="text-primary hover:text-primary/80 transition-colors">
                  <ExternalLink className="h-5 w-5" />
                  <span className="sr-only">Ver certificado</span>
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

