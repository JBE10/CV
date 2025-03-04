import { Card, CardContent } from "@/public/components/ui/card"
import { Badge } from "@/public/components/ui/badge"

export function Skills() {
  const skillCategories = [
    {
      name: "Lenguajes de Programación",
      skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL"],
    },
    {
      name: "Frameworks & Librerías",
      skills: ["Django", "Flask", "Swing","Spring Boot", "Node.js", "Express"],
    },
    {
      name: "Bases de Datos",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    },
    {
      name: "DevOps & Herramientas",
      skills: ["Docker", "Git", "CI/CD", "AWS", "Linux"],
    },
    {
      name: "Ciberseguridad",
      skills: ["OWASP", "Análisis de Vulnerabilidades", "Autenticación & Autorización", "Encriptación"],
    },
  ]

  return (
    <section id="habilidades" className="pt-20 py-12 md:py-24">
      <div className="space-y-4 text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Habilidades</h2>
        <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        <p className="text-muted-foreground">
          Estas son las tecnologías y habilidades con las que trabajo regularmente.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <Card key={category.name} className="overflow-hidden hover:shadow-lg transition-all">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

