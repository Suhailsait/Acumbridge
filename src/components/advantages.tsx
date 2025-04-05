"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import { Zap, Target, Layers } from "lucide-react"

export default function Advantages() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const advantages = [
    {
      title: "Instant Detection",
      description: "Real-time threat detection with immediate response capabilities.",
      icon: <Zap className="h-12 w-12 text-sky-600" />,
      delay: 0,
    },
    {
      title: "Precise Identification",
      description: "99% identification accuracy in all lighting conditions.",
      icon: <Target className="h-12 w-12 text-sky-600" />,
      delay: 0.2,
    },
    {
      title: "Easy Integration",
      description: "Seamless integration with existing systems and continuous AI learning.",
      icon: <Layers className="h-12 w-12 text-sky-600" />,
      delay: 0.4,
    },
  ]

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Competitive Advantages</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Our AI-powered surveillance solutions offer unmatched capabilities that set us apart from traditional
            systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: advantage.delay }}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-sky-500"
            >
              <div className="bg-sky-100 p-4 rounded-full inline-block mb-6">{advantage.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 relative rounded-xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-sky-800 opacity-90 z-0"></div>
          <div className="relative z-10 p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-6">Experience the Future of Security Today</h3>
            <p className="text-white/90 max-w-3xl mx-auto mb-8 text-lg">
              Our AI-powered surveillance solutions are transforming how businesses approach security. Join the
              revolution and stay ahead of emerging threats with cutting-edge technology.
            </p>
            <button className="bg-white text-sky-700 hover:bg-sky-50 font-medium py-3 px-8 rounded-lg transition-colors duration-300">
              Schedule a Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

