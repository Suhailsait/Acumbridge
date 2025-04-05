"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import { Brain, Shield, Lock } from "lucide-react"

export default function Future() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const pillars = [
    {
      title: "AI-Driven",
      description: "Predictive security that anticipates threats before they occur.",
      icon: <Brain className="h-10 w-10 text-sky-600" />,
      delay: 0,
    },
    {
      title: "Ethical Use",
      description: "Commitment to responsible AI deployment and transparency.",
      icon: <Shield className="h-10 w-10 text-sky-600" />,
      delay: 0.2,
    },
    {
      title: "Privacy",
      description: "Advanced encryption and data protection to safeguard sensitive information.",
      icon: <Lock className="h-10 w-10 text-sky-600" />,
      delay: 0.4,
    },
  ]

  return (
    <section className="py-20 bg-sky-50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Future of Intelligent Surveillance</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            We're committed to advancing surveillance technology while maintaining the highest standards of ethics and
            privacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: pillar.delay }}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="bg-sky-100 p-4 rounded-full inline-block mb-6">{pillar.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
              <p className="text-gray-600">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="bg-white rounded-xl overflow-hidden shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Join the Security Revolution</h3>
              <p className="text-gray-600 mb-8">
                Stay ahead of emerging threats with our cutting-edge AI surveillance technology. Our solutions are
                designed to evolve with the changing security landscape, providing you with peace of mind and protection
                for years to come.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="h-4 w-4 rounded-full bg-sky-600 mr-3"></div>
                  <p className="text-gray-700">Continuous AI learning and adaptation</p>
                </div>
                <div className="flex items-center">
                  <div className="h-4 w-4 rounded-full bg-sky-600 mr-3"></div>
                  <p className="text-gray-700">Regular updates and feature enhancements</p>
                </div>
                <div className="flex items-center">
                  <div className="h-4 w-4 rounded-full bg-sky-600 mr-3"></div>
                  <p className="text-gray-700">Dedicated support and consultation</p>
                </div>
              </div>

              <div className="mt-10">
                <button className="bg-sky-600 text-white hover:bg-sky-700 font-medium py-3 px-8 rounded-lg transition-colors duration-300">
                  Contact Us Today
                </button>
              </div>
            </div>

            <div className="relative h-[400px] lg:h-auto">
              <img
              src="src/assets/images/placeholder.svg" height="600" width="800"
              alt="Future of surveillance"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

