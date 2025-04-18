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
      title: "Senior Data Analyst",
      company: "Tech Solutions Inc.",
      location: "New York, NY",
      period: "Jan 2023 - Present",
      description:
        "Led a team of analysts in developing predictive models for customer churn reduction, resulting in a 15% decrease in customer attrition. Implemented advanced data visualization dashboards using Tableau, improving decision-making processes across departments.",
    },
    {
      title: "Data Analyst",
      company: "DataDriven Corp",
      location: "Boston, MA",
      period: "Mar 2021 - Dec 2022",
      description:
        "Developed and maintained ETL processes for data warehousing. Created statistical models to forecast sales trends with 92% accuracy. Collaborated with cross-functional teams to implement data-driven solutions.",
    },
    {
      title: "Data Science Intern",
      company: "AI Innovations",
      location: "Remote",
      period: "Jun 2020 - Feb 2021",
      description:
        "Assisted in developing machine learning algorithms for image recognition. Performed data cleaning and preprocessing tasks. Contributed to research papers on neural network optimization techniques.",
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
