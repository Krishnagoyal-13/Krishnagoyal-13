"use client"

import { useEffect, useRef, useState } from "react"
import { FileText, Award, Briefcase, MapPin, Calendar, User, Mail, Phone } from "lucide-react"
import Image from "next/image"

const About = () => {
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

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center dark:text-white">About Me</h2>
        <div
          className={`max-w-5xl mx-auto grid md:grid-cols-3 gap-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <div className="relative w-full aspect-square max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg mb-6">
                <Image src="/images/profile.png" alt="Krishna Goyal" fill className="object-cover object-top" />
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-4 dark:text-white">Personal Info</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <User className="mr-3 text-primary" size={18} />
                    <span>Krishna Goyal</span>
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <Mail className="mr-3 text-primary" size={18} />
                    <span>krishnagoyal203@gmail.com</span>
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <Phone className="mr-3 text-primary" size={18} />
                    <span>+1 (555) 123-4567</span>
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <MapPin className="mr-3 text-primary" size={18} />
                    <span>New York, NY</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-full bg-primary text-white font-bold py-2 px-4 rounded-md hover:bg-primary/80 transition duration-300"
                  >
                    <FileText className="mr-2" size={18} />
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 dark:text-white">Who I Am</h3>
              <div className="space-y-4">
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  I'm a passionate Data Analyst with 2+ years of experience in machine learning, statistical analysis,
                  and data visualization. My expertise lies in developing predictive models and extracting meaningful
                  insights from complex datasets.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  With a pursuing Bachelor in Computer Information System and a strong background in mathematics, I've
                  successfully led data Analyzing projects across various industries, including finance, and healthcare.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  My goal is to leverage data to solve real-world problems and help organizations make data-driven
                  decisions that lead to measurable improvements in performance and outcomes.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 dark:text-white">Education</h3>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <Award className="text-primary mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-lg dark:text-white">Bachelor in Computer Information System</h4>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mt-1">
                      <span className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        2022-2024
                      </span>
                      <span className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        University of the Cumberlands
                      </span>
                    </div>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      Focused on data science, machine learning, and statistical analysis. Completed projects in
                      predictive modeling and data visualization.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 dark:text-white">Experience</h3>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <Briefcase className="text-primary mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-lg dark:text-white">Data Analyst</h4>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mt-1">
                      <span className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        2021-Present
                      </span>
                      <span className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        Tech Solutions Inc.
                      </span>
                    </div>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      Analyze complex datasets to identify trends and patterns. Develop predictive models using machine
                      learning algorithms. Create interactive dashboards for data visualization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
