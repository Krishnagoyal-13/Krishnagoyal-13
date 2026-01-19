"use client"

import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const roles = ["Software Engineer", "Machine Learning Engineer"]
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    if (!currentRole) return

    const handleTyping = () => {
      setDisplayText((prev) => {
        if (!isDeleting) {
          // Typing
          const updatedText = currentRole.substring(0, prev.length + 1)
          if (updatedText === currentRole) {
            setTimeout(() => setIsDeleting(true), 1500)
            return updatedText
          }
          return updatedText
        } else {
          // Deleting
          const updatedText = currentRole.substring(0, prev.length - 1)
          if (updatedText === "") {
            setIsDeleting(false)
            setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length)
            return updatedText
          }
          return updatedText
        }
      })
    }

    const typingTimer = setTimeout(handleTyping, isDeleting ? 100 : typingSpeed)
    return () => clearTimeout(typingTimer)
  }, [currentRoleIndex, displayText, isDeleting, roles, typingSpeed])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]"></div>
      <div
        className={`container mx-auto px-4 z-10 transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Krishna Goyal</h1>
            <div className="h-16">
              <p className="text-2xl md:text-4xl mb-8 inline-block">
                <span>I am a </span>
                <span className="font-bold text-yellow-300">{displayText}</span>
                <span className="animate-blink">|</span>
              </p>
            </div>
            <p className="text-xl max-w-2xl mx-auto md:mx-0 mb-10 text-gray-200">
              Building robust backend systems and full-stack solutions. Specializing in system design, data architecture, and API development to solve real-world problems at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center bg-white text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-blue-100 transition duration-300 transform hover:scale-105"
              >
                View Projects
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-full hover:bg-white/10 transition duration-300 transform hover:scale-105"
              >
                Get in touch
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-white/20 backdrop-blur-sm transform -rotate-6"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 transform rotate-3"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white">
                <Image
                  src="/images/profile.png"
                  alt="Krishna Goyal"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Hero
