"use client"

import { useEffect, useRef, useState } from "react"
import { Briefcase, Calendar, MapPin } from "lucide-react"

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Vero Ventures",
      location: "Abbotsford, BC",
      period: "Jan 2025 - Sep 2025",
      description:
        "Engineered high-precision backend data pipelines in Python for financial growth modeling, prioritizing Data Integrity (DBMS) and Object-Oriented (OOPS) principles to handle complex non-linear calculations. Architected RESTful APIs using Django/DRF to expose complex financial simulation results to a Next.js frontend, ensuring low-latency data retrieval.",
    },
    {
      title: "Full Stack Developer Intern",
      company: "Car Studio Corp",
      location: "BC, Canada",
      period: "Jan 2024 - Aug 2024",
      description:
        "Built a real-time verification and decision engine using Node.js, Python, and SQL, performing client ID matching, car availability checks, and rule-based consistency validation across dealership data. Designed an automated billing workflow with Python/NumPy, generating computed price breakdowns, producing PDF deal reports, and sending them to customers via Gmail SMTP.",
    },
  ]

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center dark:text-white">Experience</h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-primary pl-8 ml-4">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`mb-12 transition-all duration-1000 ${
                  isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[10px] border-4 border-white dark:border-gray-900"></div>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-1 dark:text-white">{exp.title}</h3>
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                      <Briefcase size={16} className="mr-1" />
                      {exp.company}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {exp.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {exp.period}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
