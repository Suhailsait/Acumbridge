"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import { Shield, Bell, UserCheck } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    {
      title: "Proactive Monitoring",
      description: "AI identifies threats in real-time, enabling quick response.",
      icon: <Shield className="h-12 w-12 text-sky-600" />,
      delay: 0,
    },
    {
      title: "Reduced False Alarms",
      description: "Machine learning minimizes unnecessary alerts.",
      icon: <Bell className="h-12 w-12 text-sky-600" />,
      delay: 0.2,
    },
    {
      title: "Enhanced Security",
      description: "Advanced algorithms adapt to new threats.",
      icon: <UserCheck className="h-12 w-12 text-sky-600" />,
      delay: 0.4,
    },
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
      },
    }),
  }

  return (
    <section id="features" className="py-20 bg-sky-50">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Growing Need for Intelligent Security
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            35% of adults express security concerns. Traditional systems are reactive; AI enables proactive, intelligent
            monitoring. Capitalize on 23.7% annual market growth in AI surveillance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={feature.delay}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="h-full"
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex items-center justify-center pt-8">{feature.icon}</CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="text-xl mb-3 text-gray-800">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Key Feature: Attendance Tracking</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-sky-100 p-2 rounded-full mr-4 mt-1">
                    <div className="h-2 w-2 bg-sky-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800">Automated</h4>
                    <p className="text-gray-600">Automated employee identification with 100% accuracy.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-sky-100 p-2 rounded-full mr-4 mt-1">
                    <div className="h-2 w-2 bg-sky-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800">Accurate</h4>
                    <p className="text-gray-600">Eliminates manual tracking errors.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-sky-100 p-2 rounded-full mr-4 mt-1">
                    <div className="h-2 w-2 bg-sky-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800">Integrated</h4>
                    <p className="text-gray-600">Integrates with HR systems for efficient, data-driven processes.</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
            >
              <img
              src="src/assets/images/placeholder.svg" height="600" width="800"
              alt="Attendance tracking system"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

