"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

export function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Card slides up from bottom (vh units) to center (0)
  const cardY = useTransform(scrollYProgress, [0, 0.5], ["50vh", "0vh"])

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{
        height: "200vh",
      }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/cta.jpeg"
            alt="Interior design with warm lighting"
            fill
            className="object-cover"
            sizes="100vw"
          />
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* CTA Card - Slides up from bottom */}
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <motion.div
            style={{
              y: cardY,
            }}
            className="w-full max-w-3xl mx-auto"
          >
            <div
              className="px-8 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20 rounded-2xl"
              style={{
                backgroundColor: "rgb(248, 237, 227)",
              }}
            >
              {/* CTA Text */}
              <p
                className="text-lg md:text-xl lg:text-2xl leading-relaxed text-center mb-8"
                style={{
                  fontFamily: "Archivo, sans-serif",
                  fontWeight: 400,
                  color: "rgb(141, 73, 58)",
                }}
              >
                Ready to reimagine your space? Connect with us at Koala to bring your vision to life with our expertise in design and decoration.
              </p>

              {/* CTA Button */}
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="px-8 py-3.5 text-base font-normal transition-all cursor-pointer inline-flex items-center justify-center"
                  style={{
                    fontFamily: "Archivo, sans-serif",
                    backgroundColor: "rgb(141, 73, 58)",
                    color: "rgb(248, 237, 227)",
                    borderRadius: "5px",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgb(121, 63, 48)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgb(141, 73, 58)"
                  }}
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
