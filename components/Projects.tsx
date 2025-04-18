"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github, BarChart4, Brain } from "lucide-react"

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [filter, setFilter] = useState("all")
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

  const projectList = [
    {
      title: "American Sign Language Interpreter",
      description:
        "Developed a machine learning model to predict American Sign language, converting Sign to Text using Mobile Deployed System in Real Time.",
      image: "/placeholder.svg?height=400&width=600",
      category: "machine-learning",
      technologies: ["TensorFlow", "OpenCV", "Python", "Flutter"],
      links: {
        demo: "#",
        github: "#",
      },
      icon: Brain,
    },
    {
      title: "Insurance Analysis Dashboard",
      description:
        "Created a model to predict the Key features of policy for Visualization for better Comparision in Differet Companies.",
      image: "/placeholder.svg?height=400&width=600",
      category: "data-visualization",
      technologies: ["Tableau", "Python", "SQL", "R"],
      links: {
        demo: "#",
        github: "#",
      },
      icon: BarChart4,
    },
    {
      title: "Customer Churn Prediction",
      description:
        'Built a predictive model to identify customers at risk of churning, enabling proactive retention "Built a predictive model to identify customers at risk of churning, enabling proactive retention strategies and increasing customer lifetime value.',
      image: "/placeholder.svg?height=400&width=600",
      category: "machine-learning",
      technologies: ["Scikit-learn", "Pandas", "SQL", "Power BI"],
      links: {
        demo: "#",
        github: "#",
      },
      icon: Brain,
    },
    {
      title: "Sales Forecasting System",
      description:
        "Developed a time-series forecasting system to predict sales trends across multiple product categories with high accuracy.",
      image: "/placeholder.svg?height=400&width=600",
      category: "data-analysis",
      technologies: ["Prophet", "Python", "AWS", "Matplotlib"],
      links: {
        demo: "#",
        github: "#",
      },
      icon: BarChart4,
    },
  ]

  const filteredProjects = filter === "all" ? projectList : projectList.filter((project) => project.category === filter)

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center dark:text-white">Projects</h2>

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white dark:bg-gray-900 p-1 rounded-lg shadow-md">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "all"
                  ? "bg-primary text-white"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("machine-learning")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "machine-learning"
                  ? "bg-primary text-white"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              Machine Learning
            </button>
            <button
              onClick={() => setFilter("data-visualization")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "data-visualization"
                  ? "bg-primary text-white"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              Data Visualization
            </button>
            <button
              onClick={() => setFilter("data-analysis")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "data-analysis"
                  ? "bg-primary text-white"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              Data Analysis
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg project-card transition-all duration-1000 ${
                isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
                  <project.icon className="text-primary" size={64} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.links.demo}
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                  <a
                    href={project.links.github}
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    <Github size={16} className="mr-1" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
