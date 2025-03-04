"use client"

import type React from "react"

import { Button } from "@/public/components/ui/button"
import { Github, Linkedin } from "lucide-react"
import { ThemeToggle } from "@/public/components/theme-toggle"
import { MobileMenu } from "@/public/components/mobile-menu"

export function Navigation() {
  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const href = e.currentTarget.href
    const targetId = href.replace(/.*#/, "")
    const elem = document.getElementById(targetId)
    if (elem) {
      const header = document.querySelector("header")
      const headerOffset = header ? header.offsetHeight : 0
      const elementPosition = elem.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <>
      <nav className="hidden md:flex items-center gap-6">
        <a href="#inicio" className="text-sm font-medium hover:text-primary transition-colors" onClick={smoothScroll}>
          Inicio
        </a>
        <a href="#sobre-mi" className="text-sm font-medium hover:text-primary transition-colors" onClick={smoothScroll}>
          Sobre mí
        </a>
        <a
          href="#habilidades"
          className="text-sm font-medium hover:text-primary transition-colors"
          onClick={smoothScroll}
        >
          Habilidades
        </a>
        <a
          href="#proyectos"
          className="text-sm font-medium hover:text-primary transition-colors"
          onClick={smoothScroll}
        >
          Proyectos
        </a>
        <a
          href="#educacion"
          className="text-sm font-medium hover:text-primary transition-colors"
          onClick={smoothScroll}
        >
          Educación
        </a>
        <a
          href="#certificados"
          className="text-sm font-medium hover:text-primary transition-colors"
          onClick={smoothScroll}
        >
          Certificados
        </a>
        <a href="#contacto" className="text-sm font-medium hover:text-primary transition-colors" onClick={smoothScroll}>
          Contacto
        </a>
      </nav>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <a href="https://github.com/JBE10" target="_blank" rel="noopener noreferrer" className="hidden md:flex">
          <Button variant="outline" size="icon">
          <Github className="h-4 w-4" />
          <span className="sr-only">GitHub</span>
        </Button>
        </a>
        <a href="https://www.linkedin.com/in/jbespino/" target="_blank" rel="noopener noreferrer" className="hidden md:flex">


        <Button variant="outline" size="icon" className="hidden md:flex">
          <Linkedin className="h-4 w-4" />
          <span className="sr-only">LinkedIn</span>
        </Button> </a>
        <MobileMenu />
      </div>
    </>
  )
}

