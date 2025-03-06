import type React from "react"
export function smoothScroll(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
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

