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
      title: "Data Analyst",
      company: "Vero Ventures",
      location: "Abbotsford, BC",
      period: "Jan 2023 - Present",
      description:
        "Built a comprehensive comparison system analyzing whole life participating insurance policies from leading Canadian providers like Canada Life, Sun Life, Equitable Life, and Manulife. Focused on reverse-engineering product structures including Guaranteed Cash Value (GCV), Total Cash Value (TCV), Premium Patterns, and Death Benefit Growth. Developed data-driven models and visualizations to compare policies across multiple scenarios, helping financial advisors understand product behaviors and recommend optimized solutions to clients.",
    },
    {
      title: "NLP Engineer",
      company: "University Project",
      location: "Abbotsford, BC",
      period: "Jan 2023 - Present",
      description:
        "Designed and developed a real-time AI-powered Immigration Storyboard Web Application using Next.js, TypeScript, and Resend API. This project enables users to explore complex Canadian immigration processes like Study Permit, PR, PGWP, and Citizenship through dynamically generated step-by-step storyboards powered by LLM (Large Language Models). Integrated a passwordless login system using OTP email authentication for enhanced security and user experience. Deployed the full-stack application on Vercel with optimized serverless architecture and dynamic API routing",
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
