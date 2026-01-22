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
                    <span>+91 99143 81960</span>
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <MapPin className="mr-3 text-primary" size={18} />
                    <span>India</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 dark:text-white">Who I Am</h3>
              <div className="space-y-4">
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  I'm a machine learning and full-stack engineer passionate about solving complex problems through data science and intelligent systems. With expertise in deep learning, data pipelines, and backend architecture, I excel at building scalable solutions that drive measurable impact.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Accomplished a Bachelor in Computer Information Systems (CGPA: 3.87/4.33) from University of the Fraser Valley, I have hands-on experience with high-precision data science pipelines at Vero Ventures and full-stack development at Car Studio Corp. My skill set spans Python, Flask, Django, Node.js, deep learning frameworks, and data infrastructure.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  I'm driven by creating intelligent systems that leverage machine learning and optimize data workflows. From orchestrating data pipelines to building real-time applications, I focus on precision, performance, and delivering solutions that transform data into actionable insights.
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
                        September 2021 – June 2025
                      </span>
                      <span className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        University of the Fraser Valley
                      </span>
                    </div>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      CGPA: 3.87 / 4.33. Specialized in machine learning systems, data science pipelines, and full-stack development. Coursework in deep learning, data analytics, and scalable system architecture.
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
