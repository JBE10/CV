// Datos de proyectos
const projects = [
  {
    title: "Sistema de Gestión de Ventas",
    description: "Sistema de seguimiento de stock y ventas, utilizando Java y Swing.",
    technologies: ["Java", "Swing"],
    link: "https://github.com/JBE10/POOTP.git",
  },
  {
    title: "Programacion Orientada a Objetos",
    description: "Proyecto de Programación Orientada a Objetos, utilizando Java.",
    technologies: ["Java"],
    link: "https://github.com/JBE10/PracticaParcial2do.git",
  },
  {
    title: "Optimizacion de Rutas",
    description: "Proyecto utilizado para gestionar los recursos de forma util.",
    technologies: ["Java", "Dijkstra", "Grafos"],
    link: "https://github.com/JBE10/tpProgra.git",
  },
  {
    title: "Portfolio Website",
    description: "Sitio web personal responsivo desarrollado con HTML, CSS y JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
    link: "#",
  },
]

// Datos de certificados
const certifications = [
  {
    title: "Foundations of Cybersecurity",
    issuer: "Google",
    date: "2023",

  },
  {
    title: "Linux and SQL",
    issuer: "Google",
    date: "2023",
  },
  {
    title: "Automate Cybersecurity Tasks with Python",
    issuer: "Google",
    date: "2023",
  },
  {
    title: "English UK - B2",
    issuer: "British Council",
    date: "2022",
  },
]

// Función para renderizar proyectos
function renderProjects() {
  const projectsContainer = document.getElementById("projectsContainer")
  if (projectsContainer) {
    projects.forEach((project, index) => {
      const projectCard = document.createElement("div")
      projectCard.className = "project-card fade-in"
      projectCard.style.animationDelay = `${index * 0.2}s`

      projectCard.innerHTML = `
        <div class="project-content">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="tech-tags">
            ${project.technologies.map((tech) => `<span class="tech-tag">${tech}</span>`).join("")}
          </div>
          ${project.link ? `<a href="${project.link}" class="project-link">Ver Proyecto</a>` : ""}
        </div>
      `

      projectsContainer.appendChild(projectCard)
    })
  }
}

// Función para renderizar certificados
function renderCertifications() {
  const certificationsContainer = document.getElementById("certificationsContainer")
  if (certificationsContainer) {
    certifications.forEach((cert, index) => {
      const certCard = document.createElement("div")
      certCard.className = "certification-card fade-in"
      certCard.style.animationDelay = `${index * 0.2}s`

      certCard.innerHTML = `
        <h3>${cert.title}</h3>
        <p><strong>Emisor:</strong> ${cert.issuer}</p>
        <p><strong>Fecha:</strong> ${cert.date}</p>
      `

      certificationsContainer.appendChild(certCard)
    })
  }
}

// Función para manejar el tema oscuro
function setupThemeToggle() {
  const themeToggle = document.getElementById("themeToggle")
  const body = document.body

  // Cargar tema guardado
  const savedTheme = localStorage.getItem("theme") || "light"
  body.setAttribute("data-theme", savedTheme)

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = body.getAttribute("data-theme")
      const newTheme = currentTheme === "light" ? "dark" : "light"

      body.setAttribute("data-theme", newTheme)
      localStorage.setItem("theme", newTheme)
    })
  }
}

// Función para manejar el menú móvil
function setupMobileMenu() {
  const hamburger = document.querySelector(".hamburger")
  const navLinks = document.querySelector(".nav-links")

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active")
      hamburger.classList.toggle("active")
    })

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active")
        hamburger.classList.remove("active")
      })
    })
  }
}

// Función para manejar el formulario de contacto
function setupContactForm() {
  const contactForm = document.getElementById("contactForm")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      }

      // Aquí se podría implementar el envío real del formulario
      console.log("Mensaje enviado:", formData)

      // Mostrar mensaje de éxito
      alert("¡Mensaje enviado con éxito!")
      contactForm.reset()
    })
  }
}

// Función para animar elementos al hacer scroll
function setupScrollAnimations() {
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(
      ".section-title, .skill-item, .timeline-item, .project-card, .certification-card",
    )

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.2

      if (elementPosition < screenPosition) {
        element.classList.add("fade-in")
      }
    })
  }

  window.addEventListener("scroll", animateOnScroll)
  // Ejecutar una vez al cargar la página
  setTimeout(animateOnScroll, 100)
}

// Inicializar todas las funciones cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
  setupThemeToggle()
  renderProjects()
  renderCertifications()
  setupMobileMenu()
  setupContactForm()
  setupScrollAnimations()

  // Añadir clases de animación a elementos específicos
  document.querySelectorAll(".timeline-item:nth-child(odd)").forEach((item) => {
    item.classList.add("slide-in-left")
  })

  document.querySelectorAll(".timeline-item:nth-child(even)").forEach((item) => {
    item.classList.add("slide-in-right")
  })
})

function renderProjects() {
  const projectsContainer = document.getElementById("projectsContainer")
  if (projectsContainer) {
    projects.forEach((project, index) => {
      const projectCard = document.createElement("div")
      projectCard.className = "project-card fade-in"
      projectCard.style.animationDelay = `${index * 0.2}s`

      projectCard.innerHTML = `
        <div class="project-content">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="tech-tags">
            ${project.technologies.map((tech) => `<span class="tech-tag">${tech}</span>`).join("")}
          </div>
          ${project.link ? `<a href="${project.link}" class="project-link" target="_blank" rel="noopener noreferrer">Ver Proyecto</a>` : ""}
        </div>
      `

      projectsContainer.appendChild(projectCard)
    })
  }
}
document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("3rH3IsQcTSxGcQshg"); // Reemplaza con tu Public Key

  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs
          .sendForm("service_lkjsqmh", "template_o75jee6", this)
          .then(
              function (response) {
                alert("¡Mensaje enviado con éxito!");
                contactForm.reset();
              },
              function (error) {
                alert("Hubo un error al enviar el mensaje.");
                console.error("Error:", error);
              }
          );
    });
  }
});

