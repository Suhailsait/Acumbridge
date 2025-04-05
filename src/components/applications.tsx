"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import { ShoppingBag, Building2, Heart, AlertTriangle, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export default function Applications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const applications = [
    {
      title: "Retail",
      description: "Theft prevention, customer behavior analysis, and store optimization.",
      icon: <ShoppingBag className="h-10 w-10 text-sky-600" />,
      delay: 0,
    },
    {
      title: "Banking",
      description: "Security alerts, fraud detection, and customer service enhancement.",
      icon: <Building2 className="h-10 w-10 text-sky-600" />,
      delay: 0.2,
    },
    {
      title: "Healthcare",
      description: "Patient safety, access control, and medical equipment monitoring.",
      icon: <Heart className="h-10 w-10 text-sky-600" />,
      delay: 0.4,
    },
  ]

  const securityFeatures = [
    {
      title: "Security Breach Detection",
      description:
        "Real-time anomaly recognition and instant alerts. Machine learning improves detection accuracy. Reduces response time by up to 70%.",
      icon: <AlertTriangle className="h-10 w-10 text-white" />,
      points: ["Real-Time Analysis", "Instant Alerts", "Continuous Improvement"],
      delay: 0,
    },
    {
      title: "Unauthorized Access Prevention",
      description:
        "Facial recognition identifies individuals. Detects unauthorized activity. Sends instant notifications to security. Works in darkness and harsh conditions.",
      icon: <Clock className="h-10 w-10 text-white" />,
      points: ["Facial Recognition", "Instant Notifications", "All-Condition Operation"],
      delay: 0.3,
    },
  ]

  return (
    <section id="applications" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Market Potential and Applications</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Our AI-powered surveillance solutions are ideal for various industries, supporting critical infrastructure
            and smart building integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {applications.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: app.delay }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-sky-500">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-sky-100 p-3 rounded-full">{app.icon}</div>
                    <CardTitle className="text-xl">{app.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{app.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.7, delay: feature.delay }}
              className="relative overflow-hidden rounded-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-sky-800 z-0"></div>
              <div className="relative z-10 p-8">
                <div className="bg-white/20 p-3 rounded-full inline-block mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/90 mb-6">{feature.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {feature.points.map((point, i) => (
                    <div key={i} className="bg-white/10 rounded-lg p-4 text-center">
                      <p className="text-white font-medium">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 bg-sky-50 rounded-xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Technical Capabilities</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-sky-100 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-sky-600 font-bold text-xl">AI</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">AI Analytics</h4>
              <p className="text-gray-600">AI-powered video analytics for intelligent monitoring</p>
            </div>

            <div className="text-center">
              <div className="bg-sky-100 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-sky-600 font-bold text-xl">S</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Scalability</h4>
              <p className="text-gray-600">Cloud-based storage and processing for unlimited scalability</p>
            </div>

            <div className="text-center">
              <div className="bg-sky-100 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-sky-600 font-bold text-xl">C</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Compatibility</h4>
              <p className="text-gray-600">Seamless compatibility with existing CCTV systems</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

