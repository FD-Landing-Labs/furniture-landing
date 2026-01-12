"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-image.png"
          alt="Luxury interior with curved chair and arched alcove"
          fill
          priority
          quality={100}
          className="object-cover"
          sizes="100vw"
        />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-5xl mx-auto text-center space-y-8"
        >
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-white"
            style={{
              fontFamily: "Archivo, sans-serif",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "clamp(2.5rem, 8vw, 96px)",
              lineHeight: "clamp(2.5rem, 8vw, 96px)",
              color: "rgb(255, 255, 255)",
            }}
          >
            Timeless Comfort &<br />Endless Luxury
          </motion.h1>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col lg:flex-row justify-center gap-4 pt-4 w-full max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-full"
            >
              <button
                className="w-full px-10 py-4 text-base hover:opacity-90 transition-all"
                style={{
                  fontFamily: "Archivo, sans-serif",
                  fontWeight: 500,
                  backgroundColor: "rgb(248, 237, 227)",
                  color: "rgb(141, 73, 58)",
                  borderRadius: "5px",
                  border: "none",
                }}
              >
                Our Vision
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-full"
            >
              <button
                className="w-full px-10 py-4 text-base transition-all group"
                style={{
                  fontFamily: "Archivo, sans-serif",
                  fontWeight: 500,
                  backgroundColor: "transparent",
                  color: "rgb(248, 237, 227)",
                  borderRadius: "5px",
                  border: "1px solid rgb(248, 237, 227)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgb(248, 237, 227)"
                  e.currentTarget.style.color = "rgb(141, 73, 58)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent"
                  e.currentTarget.style.color = "rgb(248, 237, 227)"
                }}
              >
                Explore Expertise
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
