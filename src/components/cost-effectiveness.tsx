"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import { DollarSign, BellOff, BarChart3 } from "lucide-react"

export default function CostEffectiveness() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const benefits = [
    {
      title: "40% Reduced Costs",
      description: "Reduces need for manual security personnel.",
      icon: <DollarSign className="h-10 w-10 text-sky-600" />,
      delay: 0,
    },
    {
      title: "90% Fewer False Alarms",
      description: "Minimizes false alarms and unnecessary responses.",
      icon: <BellOff className="h-10 w-10 text-sky-600" />,
      delay: 0.2,
    },
    {
      title: "Quick ROI",
      description: "Flexible pricing with rapid return on investment.",
      icon: <BarChart3 className="h-10 w-10 text-sky-600" />,
      delay: 0.4,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-sky-50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cost-Effectiveness</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Our AI-powered surveillance solutions deliver significant cost savings while enhancing security
            capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src="src/assets/images/placeholder.svg" height="600" width="800"
              alt="Cost-effective surveillance solution"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: benefit.delay }}
                  className="flex items-start"
                >
                  <div className="bg-sky-100 p-4 rounded-full mr-6">{benefit.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 bg-white rounded-xl p-8 md:p-12 shadow-lg"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">See the Difference in Numbers</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our clients have experienced significant improvements in security efficiency and cost reduction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-sky-50 rounded-lg p-6 text-center">
              <h4 className="text-4xl font-bold text-sky-600 mb-2">40%</h4>
              <p className="text-gray-700">Reduction in security costs</p>
            </div>

            <div className="bg-sky-50 rounded-lg p-6 text-center">
              <h4 className="text-4xl font-bold text-sky-600 mb-2">90%</h4>
              <p className="text-gray-700">Fewer false alarms</p>
            </div>

            <div className="bg-sky-50 rounded-lg p-6 text-center">
              <h4 className="text-4xl font-bold text-sky-600 mb-2">70%</h4>
              <p className="text-gray-700">Faster response time</p>
            </div>

            <div className="bg-sky-50 rounded-lg p-6 text-center">
              <h4 className="text-4xl font-bold text-sky-600 mb-2">99%</h4>
              <p className="text-gray-700">Identification accuracy</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

