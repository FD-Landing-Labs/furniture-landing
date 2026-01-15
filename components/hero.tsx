"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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
          className="max-w-5xl mx-auto text-center space-y-2"
        >
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="text-white text-5xl lg:text-7xl xl:text-8xl"
            style={{
              fontFamily: "Archivo, sans-serif",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "1em",
              color: "rgb(255, 255, 255)"
            }}
          >
            Timeless Comfort &<br />
            Endless Luxury
          </motion.h1>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="flex flex-col md:flex-row justify-center items-center gap-[10px] pt-4 w-full max-w-md mx-auto"
          >
            <motion.a
              href="#about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="inline-flex items-center justify-center px-[26px] py-3 text-base hover:opacity-90 transition-all cursor-pointer w-full md:w-auto"
              style={{
                fontFamily: "Archivo, sans-serif",
                fontWeight: 500,
                backgroundColor: "rgb(248, 237, 227)",
                color: "rgb(141, 73, 58)",
                borderRadius: "5px",
                border: "none",
                textDecoration: "none"
              }}
            >
              Our Vision
            </motion.a>

            <motion.a
              href="#projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="inline-flex items-center justify-center px-[26px] py-3 text-base transition-all cursor-pointer w-full md:w-auto"
              style={{
                fontFamily: "Archivo, sans-serif",
                fontWeight: 500,
                backgroundColor: "transparent",
                color: "rgb(248, 237, 227)",
                borderRadius: "5px",
                border: "1px solid rgb(248, 237, 227)",
                textDecoration: "none"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgb(248, 237, 227)";
                e.currentTarget.style.color = "rgb(141, 73, 58)";
                e.currentTarget.style.borderColor = "rgb(248, 237, 227)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "rgb(248, 237, 227)";
                e.currentTarget.style.borderColor = "rgb(248, 237, 227)";
              }}
            >
              Explore Expertise
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
