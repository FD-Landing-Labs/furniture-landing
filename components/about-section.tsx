"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutSection() {
  return (
    <section
      className="relative py-20 md:py-32 lg:py-40 overflow-hidden"
      style={{
        backgroundColor: "rgb(235, 225, 215)"
      }}
    >
      <div
        className="flex flex-col lg:flex-row items-start justify-center gap-[50px] mx-auto overflow-hidden"
        style={{
          maxWidth: "1920px",
          padding: "0 50px"
        }}
      >
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col items-start justify-center gap-[20px] flex-1 overflow-hidden"
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
              className="rounded-full"
              style={{
                backgroundColor: "rgb(141, 73, 58)",
                width: "8px",
                height: "8px"
              }}
            />
            <span
              style={{
                fontFamily: "Archivo, sans-serif",
                fontSize: "14px",
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
            style={{
              fontFamily: "Archivo, sans-serif",
              fontWeight: 400,
              fontSize: "64px",
              lineHeight: "1em",
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
              style={{
                fontFamily: "Archivo, sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "1.4em",
                color: "rgb(141, 73, 58)",
                maxWidth: "550px",
                width: "100%",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                wordWrap: "break-word",
                marginBottom: "20px"
              }}
            >
              At Troscán, we believe that every space has a story to tell. As a
              premier furniture design and room decorating agency.
            </p>

            <p
              style={{
                fontFamily: "Archivo, sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "1.4em",
                color: "rgb(141, 73, 58)",
                maxWidth: "550px",
                width: "100%",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                wordWrap: "break-word",
                marginBottom: "20px"
              }}
            >
              Our expert team blends timeless craftsmanship with innovative
              designs, ensuring each piece and layout reflects your unique taste
              and lifestyle. Whether you're looking to reimagine your living
              room.
            </p>

            {/* CTA Button */}
            <a
              href="./about"
              className="inline-flex items-center justify-center transition-all cursor-pointer"
              style={{
                fontFamily: "Archivo, sans-serif",
                fontWeight: 500,
                fontSize: "16px",
                backgroundColor: "rgb(141, 73, 58)",
                color: "rgb(248, 237, 227)",
                borderRadius: "5px",
                padding: "16px 26px",
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
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.2
          }}
          className="flex items-center justify-center flex-1 overflow-hidden"
          style={{
            borderRadius: "10px"
          }}
        >
          <div
            className="relative overflow-hidden"
            style={{
              aspectRatio: "1.148936170212766 / 1",
              width: "100%"
            }}
          >
            <Image
              src="/about.jpeg"
              alt="Classical wooden table"
              fill
              className="object-cover"
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
