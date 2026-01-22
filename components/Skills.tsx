"use client"

import { useEffect, useRef, useState } from "react"
import { BarChart, Database, Brain, TrendingUp, Code, LineChart, Server, Layers } from "lucide-react"

const Skills = () => {
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

  const technicalSkills = [
    { name: "Python" },
    { name: "Deep Learning" },
    { name: "SQL & Data Engineering" },
    { name: "Machine Learning" },
    { name: "JavaScript/TypeScript" },
    { name: "Flask/Django" },
    { name: "Data Visualization" },
    { name: "Java / C++" },
  ]

  const toolsAndFrameworks = [
    { name: "TensorFlow & PyTorch", icon: Brain, description: "Deep learning frameworks for neural networks" },
    { name: "Flask & Django/DRF", icon: Server, description: "Backend frameworks for scalable API development" },
    { name: "Scikit-Learn", icon: BarChart, description: "Machine learning algorithms and data modeling" },
    { name: "Pandas & NumPy", icon: Layers, description: "Data manipulation, ETL pipelines, and analytics" },
    { name: "MySQL & PostgreSQL", icon: Database, description: "Relational databases and query optimization" },
    { name: "Node.js & Python", icon: Code, description: "Full-stack development with JavaScript and Python" },
    { name: "Hadoop & Spark", icon: TrendingUp, description: "Big data processing and distributed computing" },
    { name: "Docker & Git", icon: Server, description: "Containerization and version control" },
  ]

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center dark:text-white">Skills</h2>

        <div
          className={`max-w-5xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center dark:text-white">Technical Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
                  style={{
                    transitionDelay: `${index * 50}ms`,
                  }}
                >
                  <span className="font-medium dark:text-white text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-8 text-center dark:text-white">Tools & Frameworks</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {toolsAndFrameworks.map((tool, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                <tool.icon className="mx-auto mb-4 text-primary" size={40} />
                <h3 className="text-xl font-semibold text-center mb-2 dark:text-white">{tool.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center text-sm">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
