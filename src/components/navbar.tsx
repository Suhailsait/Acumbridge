"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Link } from "react-router"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "../lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#features" },
    { name: "Applications", href: "#applications" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()

    // Close mobile menu if open
    if (isOpen) {
      setIsOpen(false)
    }

    // Get the target element
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)

    if (element) {
      // Get the navbar height to offset the scroll position
      const navbarHeight = document.querySelector("nav")?.offsetHeight || 0

      // Calculate the element's position relative to the viewport
      const elementPosition = element.getBoundingClientRect().top

      // Calculate the offset position
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - 20

      // Scroll to the element
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-sky-600">Acumbridge</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-gray-700 hover:text-sky-600 transition-colors duration-300"
              onClick={(e) => scrollToSection(e, link.href)}
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-sky-600 hover:bg-sky-700 text-white">Get Started</Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white w-full py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-700 hover:text-sky-600 py-2 transition-colors duration-300"
                onClick={(e) => scrollToSection(e, link.href)}
              >
                {link.name}
              </Link>
            ))}
            <Button className="bg-sky-600 hover:bg-sky-700 text-white w-full">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  )
}

