"use client"

import { Card, CardContent, CardFooter } from "@/public/components/ui/card"
import { Badge } from "@/public/components/ui/badge"
import { Button } from "@/public/components/ui/button"
import { Github } from "lucide-react"

export function Projects() {
    const projects = [
        {
            title: "Gestión de Minimercado en Java",
            description:
                "Aplicación Java para gestionar el catálogo de productos de un minimercado. Incluye interfaz gráfica, persistencia de datos y manejo de excepciones personalizadas.",
            tags: ["Java", "Swing", "Serialización", "Excepciones", "JDialog"],
            github: "https://github.com/JBE10/Practica-FInal",
        },
        {
            title: "Página Web",
            description:
                "Página web personal creada con React, TypeScript y JavaScript. Incluye secciones de presentación, habilidades, proyectos y contacto.",
            tags: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
            github: "https://github.com/JBE10/CV",
        },
        {
            title: "Gestión y Análisis de Datos de Camiones",
            description:
                "Programa en Python para gestionar y analizar datos de camiones, incluyendo tiempos de viaje, distancias y cargas. Incluye cálculo de promedios, ordenamiento y generación de informes.",
            tags: ["Python", "Algoritmos", "Análisis de Datos", "Insertion Sort"],
            github: "https://github.com/JBE10/tp_obligatorio_uade",
        },
        {
            title: "Manipulación y Análisis de Grafos",
            description:
                "Implementación y análisis de estructuras de datos de grafos en Java. Incluye operaciones avanzadas, colas de prioridad personalizadas y optimización de recursos.",
            tags: ["Java", "Grafos", "Algoritmos", "Estructuras de Datos"],
            github: "https://github.com/JBE10/tpProgra",
        },
        {
            title: "Gestión de Alojamientos Turísticos",
            description:
                "Aplicación Java para gestionar ubicaciones, alojamientos y clientes en el sector turístico. Incluye manejo de listas, validaciones y persistencia de datos.",
            tags: ["Java", "POO", "ArrayList", "Gestión de Datos", "Turismo"],
            githubUrl: "https://github.com/JBE10/turismo", // Reemplaza con tu enlace
        },
    ]

    return (
        <section id="proyectos" className="pt-20 py-12 md:py-24">
            <div className="space-y-4 text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Proyectos</h2>
                <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
                <p className="text-muted-foreground">Una selección de proyectos en los que he trabajado recientemente.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <Card
                        key={project.title}
                        className={`flex flex-col ${
                            projects.length === 4 && index === 3
                                ? "md:col-start-2 md:col-span-1"
                                : projects.length === 5 && index >= 3
                                    ? (index === 3 ? "md:col-start-1" : "md:col-start-3")
                                    : ""
                        }`}
                    >
                        <CardContent className="flex-grow p-6">
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-muted-foreground mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="px-6 pb-6 pt-0">
                            <Button
                                variant="outline"
                                size="sm"
                                className="w-full"
                                onClick={() => window.open(project.github, "_blank")}
                            >
                                <Github className="mr-2 h-4 w-4" />
                                Ver Código
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    )
}

