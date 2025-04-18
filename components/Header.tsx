"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-primary transition-colors duration-300">
          DS Portfolio
        </a>
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition duration-300"
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </nav>
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <button className="ml-4" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-900 py-4 animate-in">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block py-2 px-4 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={toggleMenu}
            >
              {item.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Header
