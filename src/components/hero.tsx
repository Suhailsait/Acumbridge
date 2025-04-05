"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "./ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    // Only try to play if video exists and browser supports autoplay
    const attemptAutoplay = async () => {
      if (videoRef.current) {
        try {
          // Check if browser allows autoplay
          const autoplayAllowed = await document.documentElement.requestFullscreen
            .call(document.documentElement)
            .then(() => {
              document.exitFullscreen()
              return true
            })
            .catch(() => false)

          if (autoplayAllowed) {
            await videoRef.current.play()
          }
        } catch (error) {
          console.log("Autoplay not allowed or video source issue:", error)
          setVideoError(true)
        }
      }
    }

    // Don't automatically attempt to play the video
    // This avoids the autoplay error
  }, [])

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background with fallback */}
      <div className="absolute inset-0 z-0">
        {!videoError ? (
          <div className="relative w-full h-full">
            {/* Use a static image as background instead of trying to play a video */}
            <img
              src="src/assets/images/placeholder.svg" height="1080" width="1920"
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-sky-900/60"></div>
          </div>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-sky-800 to-sky-600"></div>
        )}
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            AI-Powered Smart Surveillance: Revolutionizing Security
          </motion.h1>

          <motion.p
            className="text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Traditional surveillance systems are no longer sufficient. Our AI-Powered Smart Surveillance provides
            unmanned, intelligent, real-time AI monitoring and threat detection.
          </motion.p>

          <motion.p
            className="text-lg text-white/80 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Tapping into the projected $16.3B AI video surveillance market by 2028.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button className="bg-white text-sky-600 hover:bg-sky-50 text-lg py-6 px-8">Learn More</Button>
            <Button variant="outline" className="border-white text-sky-700 hover:bg-sky-50 text-lg py-6 px-8">
              Request Demo
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

