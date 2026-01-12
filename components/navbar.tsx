"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-[10] w-full px-4"
      >
        <nav
          className="relative flex items-center justify-between max-w-[700px] mx-auto p-1.5 rounded-lg"
          style={{
            backgroundColor: "rgb(248, 237, 227)",
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 50px 0px"
          }}
        >
          {/* Brand/Logo */}
          <Link href="/" className="flex items-center">
            <span
              className="text-xl font-medium tracking-tight"
              style={{
                fontFamily: "Archivo, sans-serif",
                color: "rgb(141, 73, 58)"
              }}
            >
              Troscán
            </span>
          </Link>

          {/* Navigation Links - Desktop (Absolutely Centered) */}
          <ul className="hidden md:flex items-center gap-[30px] absolute left-[48%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] list-none m-0 p-0">
            {["About", "Projects", "News"].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
              >
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="text-base no-underline"
                  style={{
                    fontFamily: "Archivo, sans-serif",
                    fontWeight: 600,
                    lineHeight: "1em",
                    color: "var(--link-text-color, #8d493a)",
                    textDecoration: "none",
                    transition: "color 0.4s cubic-bezier(0.44, 0, 0.56, 1)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--link-hover-color, #b85842)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--link-text-color, #8d493a)";
                  }}
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Contact Button - Desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="hidden md:block relative flex-none"
          >
            <Link
              href="/contact"
              className="flex flex-col items-center justify-center cursor-pointer overflow-hidden text-base no-underline transition-all"
              style={{
                fontFamily: "Archivo, sans-serif",
                fontWeight: 600,
                lineHeight: "1em",
                padding: "16px 26px",
                backgroundColor: "var(--button-primary, rgb(64, 58, 52))",
                color: "#f6f1eb",
                borderRadius: "5px",
                willChange: "transform"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--button-primary-hover, rgb(54, 48, 42))";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--button-primary, rgb(64, 58, 52))";
              }}
            >
              Contact us
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex items-center justify-center p-2 rounded-lg transition-colors"
            aria-label="Toggle menu"
            style={{
              color: "rgb(64, 58, 52)",
              backgroundColor: "rgb(64, 58, 52)"
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgb(248, 237, 227)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
              onClick={toggleMobileMenu}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute top-5 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] rounded-lg"
              style={{
                backgroundColor: "rgb(248, 237, 227)",
                boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 50px 0px"
              }}
            >
              {/* Header with Logo and Close */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[rgb(141,73,58)]/10">
                <span
                  className="text-xl font-medium tracking-tight"
                  style={{
                    fontFamily: "Archivo, sans-serif",
                    color: "rgb(141, 73, 58)"
                  }}
                >
                  Troscán
                </span>

                <button
                  onClick={toggleMobileMenu}
                  className="flex items-center justify-center p-2 rounded-lg transition-colors"
                  aria-label="Close menu"
                  style={{
                    backgroundColor: "rgb(64, 58, 52)"
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgb(248, 237, 227)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex flex-col items-center py-12 px-6 space-y-8">
                {["About", "Projects", "News"].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                  >
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="text-xl no-underline"
                      style={{
                        fontFamily: "Archivo, sans-serif",
                        fontWeight: 600,
                        color: "var(--link-text-color, #8d493a)",
                        textDecoration: "none",
                        transition: "color 0.4s cubic-bezier(0.44, 0, 0.56, 1)"
                      }}
                      onClick={toggleMobileMenu}
                      onTouchStart={(e) => {
                        e.currentTarget.style.color = "var(--link-hover-color, #b85842)";
                      }}
                      onTouchEnd={(e) => {
                        e.currentTarget.style.color = "var(--link-text-color, #8d493a)";
                      }}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}

                {/* Contact Button */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="pt-4 relative flex-none h-auto w-auto"
                >
                  <Link
                    href="/contact"
                    className="flex flex-col items-center justify-center cursor-pointer overflow-hidden w-min h-min text-base no-underline transition-all"
                    style={{
                      fontFamily: "Archivo, sans-serif",
                      fontWeight: 600,
                      lineHeight: "1em",
                      padding: "16px 26px",
                      backgroundColor: "rgb(64, 58, 52)",
                      color: "#f6f1eb",
                      borderRadius: "5px",
                      willChange: "transform"
                    }}
                    onClick={toggleMobileMenu}
                  >
                    Contact us
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
