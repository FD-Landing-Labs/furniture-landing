"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutSection() {
  return (
    <section
      className="relative py-12 md:py-20 lg:py-32 xl:py-40 overflow-hidden"
      style={{
        backgroundColor: "rgb(235, 225, 215)"
      }}
    >
      <div
        className="flex flex-col lg:flex-row items-start justify-center gap-8 md:gap-12 lg:gap-[50px] mx-auto overflow-hidden px-4 md:px-8 lg:px-12"
        style={{
          maxWidth: "1920px"
        }}
      >
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col items-start justify-center flex-1 overflow-hidden"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-2 mb-4 md:mb-5"
          >
            <span
              className="rounded-full w-2 h-2"
              style={{
                backgroundColor: "rgb(141, 73, 58)"
              }}
            />
            <span
              className="text-[0.8125rem] md:text-sm"
              style={{
                fontFamily: "Archivo, sans-serif",
                fontWeight: 400,
                color: "rgb(141, 73, 58)"
              }}
            >
              About us
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] mb-8 md:mb-10 lg:mb-12"
            style={{
              fontFamily: "Archivo, sans-serif",
              fontWeight: 400,
              lineHeight: "1.1em",
              letterSpacing: "-0.03em",
              color: "rgb(141, 73, 58)",
              maxWidth: "550px",
              width: "100%",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              wordWrap: "break-word"
            }}
          >
            Where Spaces Inspire, and Design Comes Alive
          </motion.h2>

          {/* Text Container - wraps paragraphs and button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col"
          >
            <p
              className="text-[0.9375rem] md:text-base mb-5 md:mb-6 lg:mb-7"
              style={{
                fontFamily: "Archivo, sans-serif",
                fontWeight: 400,
                lineHeight: "1.5em",
                color: "rgb(141, 73, 58)",
                maxWidth: "550px",
                width: "100%",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                wordWrap: "break-word"
              }}
            >
              At Troscán, we believe that every space has a story to tell. As a
              premier furniture design and room decorating agency.
            </p>

            <p
              className="text-[0.9375rem] md:text-base mb-7 md:mb-8 lg:mb-10"
              style={{
                fontFamily: "Archivo, sans-serif",
                fontWeight: 400,
                lineHeight: "1.5em",
                color: "rgb(141, 73, 58)",
                maxWidth: "550px",
                width: "100%",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                wordWrap: "break-word"
              }}
            >
              Our expert team blends timeless craftsmanship with innovative
              designs, ensuring each piece and layout reflects your unique taste
              and lifestyle. Whether you're looking to reimagine your living
              room.
            </p>

            {/* CTA Button */}
            <a
              href="#about"
              className="inline-flex items-center justify-center transition-all cursor-pointer text-[0.9375rem] md:text-base px-6 py-3 md:px-7 md:py-4"
              style={{
                fontFamily: "Archivo, sans-serif",
                fontWeight: 500,
                backgroundColor: "rgb(141, 73, 58)",
                color: "rgb(248, 237, 227)",
                borderRadius: "5px",
                textDecoration: "none",
                border: "none",
                width: "fit-content"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgb(121, 63, 48)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgb(141, 73, 58)";
              }}
            >
              More About us
            </a>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.2
          }}
          className="flex items-center justify-center flex-1 overflow-hidden w-full rounded-lg md:rounded-xl"
        >
          <div
            className="relative overflow-hidden w-full rounded-lg md:rounded-xl"
            style={{
              aspectRatio: "1.148936170212766 / 1"
            }}
          >
            <Image
              src="/about.jpeg"
              alt="Classical wooden table"
              fill
              className="object-cover rounded-lg md:rounded-xl"
              style={{
                objectPosition: "center center"
              }}
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
