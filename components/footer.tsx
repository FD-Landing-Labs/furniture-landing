"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer
      className="relative py-16 md:py-20 lg:py-24"
      style={{
        backgroundColor: "rgb(166, 107, 91)",
      }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            style={{
              fontFamily: "Archivo, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
              color: "rgb(248, 237, 227)",
            }}
          >
            Troscán
          </h2>
        </motion.div>

        {/* Footer Links - Three Columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 mb-16 max-w-4xl mx-auto"
        >
          {/* Sitemap Column */}
          <div className="text-center">
            <h3
              className="mb-6"
              style={{
                fontFamily: "Archivo, sans-serif",
                fontWeight: 400,
                fontSize: "1rem",
                color: "rgba(248, 237, 227, 0.7)",
              }}
            >
              Sitemap
            </h3>
            <ul className="space-y-3">
              {["About", "Projects", "News", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="transition-colors"
                    style={{
                      fontFamily: "Archivo, sans-serif",
                      fontWeight: 400,
                      fontSize: "1.25rem",
                      color: "rgb(248, 237, 227)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "rgba(248, 237, 227, 0.7)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgb(248, 237, 227)"
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials Column */}
          <div className="text-center">
            <h3
              className="mb-6"
              style={{
                fontFamily: "Archivo, sans-serif",
                fontWeight: 400,
                fontSize: "1rem",
                color: "rgba(248, 237, 227, 0.7)",
              }}
            >
              Socials
            </h3>
            <ul className="space-y-3">
              {["Facebook", "Instagram", "LinkedIn", "Twitter"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="transition-colors"
                    style={{
                      fontFamily: "Archivo, sans-serif",
                      fontWeight: 400,
                      fontSize: "1.25rem",
                      color: "rgb(248, 237, 227)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "rgba(248, 237, 227, 0.7)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgb(248, 237, 227)"
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Column */}
          <div className="text-center">
            <h3
              className="mb-6"
              style={{
                fontFamily: "Archivo, sans-serif",
                fontWeight: 400,
                fontSize: "1rem",
                color: "rgba(248, 237, 227, 0.7)",
              }}
            >
              More
            </h3>
            <ul className="space-y-3">
              {["License", "Grainient", "Inspirux", "Store"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="transition-colors"
                    style={{
                      fontFamily: "Archivo, sans-serif",
                      fontWeight: 400,
                      fontSize: "1.25rem",
                      color: "rgb(248, 237, 227)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "rgba(248, 237, 227, 0.7)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgb(248, 237, 227)"
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Divider Line */}
        <div
          className="w-full h-px mb-8"
          style={{
            backgroundColor: "rgba(248, 237, 227, 0.3)",
          }}
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <p
            style={{
              fontFamily: "Archivo, sans-serif",
              fontWeight: 400,
              fontSize: "0.875rem",
              color: "rgba(248, 237, 227, 0.8)",
            }}
          >
            © 2025, All rights reserved
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
