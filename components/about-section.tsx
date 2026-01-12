"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function AboutSection() {
  return (
    <section
      className="relative py-20 md:py-32 lg:py-40 overflow-hidden"
      style={{
        backgroundColor: "rgb(235, 225, 215)",
      }}
    >
      <div className="container px-4 md:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-8 order-1"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-2"
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "rgb(141, 73, 58)" }}
              />
              <span
                className="text-sm font-normal"
                style={{
                  fontFamily: "Archivo, sans-serif",
                  color: "rgb(141, 73, 58)",
                }}
              >
                About us
              </span>
            </motion.div>

            {/* Main Heading - Single block, natural wrapping */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h2
                className="max-w-xl"
                style={{
                  fontFamily: "Archivo, sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(2rem, 5.5vw, 4rem)",
                  lineHeight: 1.15,
                  color: "rgb(141, 73, 58)",
                }}
              >
                Where Spaces Inspire, and Design Comes Alive
              </h2>
            </motion.div>

            {/* Text Container - Both paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-6"
            >
              <p
                className="text-base leading-relaxed"
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "rgb(141, 73, 58)",
                  opacity: 0.9,
                }}
              >
                At Troscán, we believe that every space has a story to tell. As a premier
                furniture design and room decorating agency.
              </p>

              <p
                className="text-base leading-relaxed"
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "rgb(141, 73, 58)",
                  opacity: 0.9,
                }}
              >
                Our expert team blends timeless craftsmanship with innovative designs,
                ensuring each piece and layout reflects your unique taste and lifestyle.
                Whether you're looking to reimagine your living room.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <button
                className="px-8 py-3.5 text-base font-normal transition-all"
                style={{
                  fontFamily: "Archivo, sans-serif",
                  backgroundColor: "rgb(64, 58, 52)",
                  color: "rgb(248, 237, 227)",
                  borderRadius: "5px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgb(54, 48, 42)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgb(64, 58, 52)"
                }}
              >
                More About us
              </button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            className="relative order-2"
          >
            <div className="relative aspect-[4/3] lg:aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/about.jpeg"
                alt="Modern interior design with sculptural furniture and natural lighting"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
