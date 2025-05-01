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
    { name: "Python", level: 100 },
    { name: "SQL", level: 100 },
    { name: "Machine Learning", level: 80 },
    { name: "Data Visualization", level: 100 },
    { name: "Statistical Analysis", level: 85 },
    { name: "Deep Learning", level: 80 },
  ]

  const toolsAndFrameworks = [
    { name: "TensorFlow/PyTorch", icon: Brain, description: "Deep learning frameworks for building neural networks" },
    { name: "Pandas/NumPy", icon: Layers, description: "Data manipulation and numerical computing libraries" },
    { name: "SQL/NoSQL", icon: Database, description: "Database query languages and systems" },
    { name: "Tableau/Power BI", icon: BarChart, description: "Data visualization tools" },
    { name: "Scikit-learn", icon: TrendingUp, description: "Machine learning library for classical algorithms" },
    { name: "Git/GitHub", icon: Code, description: "Version control systems" },
    { name: "AWS/Azure", icon: Server, description: "Cloud computing platforms" },
    { name: "Matplotlib/Seaborn", icon: LineChart, description: "Visualization libraries for Python" },
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
            <h3 className="text-2xl font-semibold mb-8 text-center dark:text-white">Technical Proficiency</h3>
            <div className="grid gap-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium dark:text-white">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-300">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                        transitionDelay: `${index * 100}ms`,
                      }}
                    ></div>
                  </div>
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
