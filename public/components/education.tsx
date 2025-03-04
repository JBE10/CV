import { Card, CardContent } from "@/public/components/ui/card"
import { Badge } from "@/public/components/ui/badge"

export function Education() {
  const education = [
    {
      degree: "Ingeniería en Informatica",
      institution: "Universidad Argentina de la Empresa (UADE)",
      period: "2023 - Presente",
      description:
        "Cursando actualmente con enfoque en desarrollo de software y sistemas computacionales.",
    },
    {
      degree: "Bachillerato",
      institution: "Instituto Nuestra Señora Del Sagrado Corazón",
      period: "2014 - 2020",
      description: "Formación académica con orientación en Economia.",
    },
  ]

  return (
    <section id="educacion" className="pt-20 py-12 md:py-24">
      <div className="space-y-4 text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Educación</h2>
        <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        <p className="text-muted-foreground">Mi formación académica y profesional.</p>
      </div>

      <div className="space-y-6 max-w-3xl mx-auto">
        {education.map((item) => (
          <Card key={item.degree} className="overflow-hidden hover:shadow-lg transition-all">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">{item.degree}</h3>
                  <p className="text-muted-foreground">{item.institution}</p>
                </div>
                <Badge variant="outline" className="mt-2 md:mt-0">
                  {item.period}
                </Badge>
              </div>
              <p className="text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

