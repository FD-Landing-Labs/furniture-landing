"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

export function ShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Initial fade in (images appear clustered)
  const initialOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])

  // Transform values for image positions (from center cluster to dispersed)
  // Start animation after images are visible (0.3 -> 0.7)
  const image1X = useTransform(scrollYProgress, [0.3, 0.7], [0, -450])
  const image1Y = useTransform(scrollYProgress, [0.3, 0.7], [0, -200])

  const image2X = useTransform(scrollYProgress, [0.3, 0.7], [0, 0])
  const image2Y = useTransform(scrollYProgress, [0.3, 0.7], [0, -280])

  const image3X = useTransform(scrollYProgress, [0.3, 0.7], [0, 450])
  const image3Y = useTransform(scrollYProgress, [0.3, 0.7], [0, -200])

  const image4X = useTransform(scrollYProgress, [0.3, 0.7], [0, -520])
  const image4Y = useTransform(scrollYProgress, [0.3, 0.7], [0, 150])

  const image5X = useTransform(scrollYProgress, [0.3, 0.7], [0, 0])
  const image5Y = useTransform(scrollYProgress, [0.3, 0.7], [0, 250])

  const image6X = useTransform(scrollYProgress, [0.3, 0.7], [0, 520])
  const image6Y = useTransform(scrollYProgress, [0.3, 0.7], [0, 150])

  const textOpacity = useTransform(scrollYProgress, [0.4, 0.7], [0, 1])
  const textScale = useTransform(scrollYProgress, [0.4, 0.7], [0.8, 1])

  const images = [
    { src: "/showcase1.jpeg", alt: "Modern dark interior", x: image1X, y: image1Y, width: 320, height: 400, rotate: -5, initialX: -80, initialY: -50 },
    { src: "/showcase2.jpeg", alt: "Minimalist light space", x: image2X, y: image2Y, width: 380, height: 220, rotate: 3, initialX: 100, initialY: -120 },
    { src: "/showcase3.jpeg", alt: "Contemporary living area", x: image3X, y: image3Y, width: 420, height: 260, rotate: 5, initialX: 150, initialY: 20 },
    { src: "/showcase4.jpeg", alt: "Abstract art seating", x: image4X, y: image4Y, width: 300, height: 280, rotate: -3, initialX: -150, initialY: 60 },
    { src: "/showcase5.jpeg", alt: "Elegant dining setup", x: image5X, y: image5Y, width: 340, height: 220, rotate: 2, initialX: 0, initialY: 120 },
    { src: "/showcase6.jpeg", alt: "Circular wall art", x: image6X, y: image6Y, width: 280, height: 180, rotate: -4, initialX: 180, initialY: 150 },
  ]

  return (
    <section
      ref={containerRef}
      className="relative py-32 md:py-48 lg:py-64 overflow-hidden"
      style={{
        backgroundColor: "rgb(235, 225, 215)",
        minHeight: "140vh",
      }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Image Gallery - Burst Effect */}
        <div className="relative h-[600px] md:h-[800px]">
          <motion.div style={{ opacity: initialOpacity }}>
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="absolute left-1/2 top-1/2"
                style={{
                  x: image.x,
                  y: image.y,
                  translateX: "-50%",
                  translateY: "-50%",
                  width: image.width,
                  height: image.height,
                  rotate: image.rotate,
                  zIndex: images.length - index,
                }}
                initial={{
                  x: image.initialX,
                  y: image.initialY,
                }}
              >
                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 400px"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Centered Text - Fades in as images disperse */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none"
            style={{
              opacity: textOpacity,
              scale: textScale,
            }}
          >
            <div className="max-w-3xl mx-auto text-center px-4">
              <h2
                style={{
                  fontFamily: "Archivo, sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  lineHeight: 1.3,
                  color: "rgb(141, 73, 58)",
                }}
              >
                Transforming spaces with style, through Troscán's exquisite design expertise.
              </h2>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
