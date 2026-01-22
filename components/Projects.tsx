"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github, BarChart4, Brain, LineChart } from "lucide-react"
import Image from "next/image"

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
      title: "Immigration Storyboard",
      description:
        "Engineered a scalable web-scraping system in Python, transforming 10,000+ rows of unstructured IRCC data into MySQL. Integrated LLMs and embedding-based retrieval, boosting search relevance by 40% via refined ranking logic. Leveraged OOP principles to build modular parsing logic, decreasing code maintenance overhead by 15%.",
      image: "/images/immigration-storyboard.png",
      category: "machine-learning",
      technologies: ["Python", "BeautifulSoup", "LLM", "MySQL", "NLP"],
      links: {
        demo: "https://immigration-storyboard.vercel.app",
        github: "https://github.com/Krishnagoyal-13/immigration-storyboard",
      },
      icon: Brain,
    },
    {
      title: "Sign Language Recognition System",
      description:
        "Constructed a real-time translation system using CNNs that achieved 96.5% accuracy across 26 hand gestures. Streamlined model inference time using techniques such as quantization and pruning by 30%, enabling high-efficiency real-time performance on edge devices.",
      image: "/placeholder.svg?height=400&width=600",
      category: "machine-learning",
      technologies: ["TensorFlow", "CNN", "OpenCV", "Deep Learning", "Edge Computing"],
      links: {
        demo: "#",
        github: "https://github.com/Krishnagoyal-13/AmericanSignlanguageInterpreter",
      },
      icon: LineChart,
    },
    {
      title: "Real-time Verification Engine",
      description:
        "Deployed a verification engine using Node.js and Python that attained 98% accuracy in client ID matching. Automated end-to-end ETL pipelines with NumPy, reducing manual report generation time by 70%. Fine-tuned complex MySQL queries, resulting in a 25% surge in data retrieval speeds for large-scale inventory.",
      image: "/placeholder.svg?height=400&width=600",
      category: "backend-development",
      technologies: ["Node.js", "Python", "MySQL", "ETL", "NumPy"],
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
          <div className="inline-flex bg-white dark:bg-gray-900 p-1 rounded-lg shadow-md flex-wrap gap-1 justify-center">
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
              onClick={() => setFilter("backend-development")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "backend-development"
                  ? "bg-primary text-white"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              Backend Development
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg project-card transition-all duration-1000 ${
                isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                {project.image ? (
                  <div className="relative h-full w-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
                    <project.icon className="text-primary" size={64} />
                  </div>
                )}
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
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
