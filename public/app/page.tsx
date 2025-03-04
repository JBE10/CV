import Image from "next/image"
import Head from 'next/head';

import { Button } from "@/public/components/ui/button"
import { Card } from "@/public/components/ui/card"
import { Badge } from "@/public/components/ui/badge"
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react"
import { Skills } from "@/public/components/skills"
import { Projects } from "@/public/components/projects"
import { Education } from "@/public/components/education"
import { Certificates } from "@/public/components/certificates"
import { Navigation } from "@/public/components/Navigation"

export default function Home() {
  return (
      <div className="min-h-screen bg-background">
          <Head>
              <meta charSet="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <meta name="description" content="Portafolio profesional de Juan Bautista Espino - Desarrollador Backend" />
              <meta name="keywords" content="desarrollo backend, Python, Java, SQL, cybersecurity" />
              <meta property="og:image" content="public/Hacker Icon (1).png" />
              <title>Juan Bautista Espino - Portfolio</title>
              <link rel="icon" href="/Hacker%20Icon%20(1).png" sizes="any" />
              <link rel="apple-touch-icon" href="public/Hacker Icon (1).png" />
              <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
          </Head>
        <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center">

            <div className="font-bold text-xl text-primary ml-2"><a href="#inicio">JBE</a></div>
            </div>
            <Navigation />
          </div>
        </header>

      <main className="container py-12">
        <section id="inicio" className="pt-20 py-12 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4" variant="outline">
                Backend Developer
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">JUAN BAUTISTA ESPINO</h1>
              <p className="text-xl text-primary font-medium mb-4">Backend Software Developer</p>
              <p className="text-muted-foreground mb-8 max-w-[600px]">
                Especializado en desarrollo backend con Python y Java, con interés en ciberseguridad y análisis de
                datos. Creando soluciones eficientes y seguras para problemas complejos.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button>
                  <a href={"#contacto"} className="flex items-center">
                    <Mail className="mr-2 h-4 w-4" />
                    Contactar
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#proyectos">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Ver Proyectos
                  </a>
                </Button>
                  <Button variant="secondary" asChild>
                  <a
                      href="/pdf/JuanBautistaEspino.pdf"
                      download="JuanBautistaEspino_CV.pdf"
                      className="inline-flex items-center justify-center"
                  >
                      <Download className="mr-2 h-4 w-4" />
                      Descargar CV
                  </a>
              </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
                <Image
                  src="/images/juan-bautista-espino.jpg"
                  alt="Juan Bautista Espino"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 256px, 320px"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="sobre-mi" className="pt-20 py-12 md:py-24">
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sobre Mí</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground leading-relaxed">
              Soy un desarrollador backend apasionado por crear soluciones eficientes y seguras. Con experiencia en
              Python y Java, me especializo en el desarrollo de aplicaciones robustas y escalables. Mi interés en
              ciberseguridad me impulsa a implementar las mejores prácticas de seguridad en todos mis proyectos.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Actualmente estoy cursando Ingeniería en Computación en UADE, donde continúo expandiendo mis conocimientos
              técnicos y habilidades de resolución de problemas.
            </p>
          </div>
        </section>

        <Skills />
        <Projects />
        <Education />
        <Certificates />

          <section id="contacto" className="pt-20 py-12 md:py-24">
              <div className="space-y-4 text-center max-w-3xl mx-auto">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contacto</h2>
                  <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
                  <p className="text-muted-foreground mb-8">
                      ¿Interesado en trabajar juntos? Contáctame a través de cualquiera de estos canales.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                          <Card className="p-6 text-center hover:shadow-lg transition-all h-full flex flex-col justify-center items-center">
                              <Mail className="h-8 w-8 mb-2 text-primary" />
                              <h3 className="font-medium">Enviar Email</h3>
                              <p className="text-sm text-muted-foreground">bautiespino@icloud.com</p>
                          </Card>


                      <a
                          href="https://www.linkedin.com/in/juan-bautista-espino"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                      >
                          <Card className="p-6 text-center hover:shadow-lg transition-all h-full flex flex-col justify-center items-center">
                              <Linkedin className="h-8 w-8 mb-2 text-primary" />
                              <h3 className="font-medium">LinkedIn</h3>
                              <p className="text-sm text-muted-foreground">Juan Bautista Espino</p>
                          </Card>
                      </a>

                      <a href="https://github.com/JBE10" target="_blank" rel="noopener noreferrer" className="block">
                          <Card className="p-6 text-center hover:shadow-lg transition-all h-full flex flex-col justify-center items-center">
                              <Github className="h-8 w-8 mb-2 text-primary" />
                              <h3 className="font-medium">GitHub</h3>
                              <p className="text-sm text-muted-foreground">github.com/JBE10</p>
                          </Card>
                      </a>
                  </div>
              </div>
          </section>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
          <p className="text-sm text-muted-foreground">© 2025 Juan Bautista Espino. Todos los derechos reservados.</p>
            <div className="flex gap-4">
                <a href="https://github.com/JBE10" target={"_blank"} className="text-primary hover:text-primary/80 transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/juan-bautista-espino" target={"_blank"} className="text-primary hover:text-primary/80 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
                </a>
              </div>
        </div>
      </footer>
    </div>
  )
}

