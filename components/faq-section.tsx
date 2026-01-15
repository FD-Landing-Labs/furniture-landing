"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "What is Koala and how does it work?",
    answer:
      "Koala is a premium furniture design and room decorating agency that specializes in creating timeless, luxurious spaces. We work closely with you to understand your vision, then design and craft bespoke furniture pieces and complete room layouts that perfectly match your style and needs.",
  },
  {
    id: 2,
    question: "How can I start a project with Koala?",
    answer:
      "Starting a project with Koala is easy! Simply reach out to us through our contact page or email. We'll schedule an initial consultation to discuss your vision, preferences, and budget. From there, we'll create a tailored design proposal and guide you through every step of the process.",
  },
  {
    id: 3,
    question: "What types of projects does Koala take on?",
    answer:
      "We handle a wide range of projects including residential spaces (living rooms, bedrooms, dining areas), commercial spaces (offices, restaurants, hotels), and custom furniture pieces. Whether you need a single statement piece or a complete room transformation, we're here to help.",
  },
  {
    id: 4,
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on scope and complexity. A custom furniture piece typically takes 4-8 weeks, while a full room design and decoration can take 8-12 weeks. We'll provide you with a detailed timeline during our initial consultation.",
  },
  {
    id: 5,
    question: "Do you offer custom furniture design?",
    answer:
      "Absolutely! Custom furniture design is one of our specialties. We create bespoke pieces tailored to your exact specifications, ensuring they fit perfectly in your space and match your aesthetic preferences. Each piece is crafted with meticulous attention to detail and quality.",
  },
  {
    id: 6,
    question: "What is your design process?",
    answer:
      "Our process begins with a consultation to understand your needs and vision. We then create design concepts and 3D renderings for your approval. Once finalized, we source materials, craft furniture pieces, and coordinate the complete installation and styling of your space.",
  },
];

function FAQAccordion({ faq }: { faq: FAQItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border-t py-5 md:py-6"
      style={{
        borderColor: "rgba(60, 60, 60, 0.15)",
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start justify-between gap-4 text-left transition-colors"
        aria-expanded={isOpen}
        onMouseEnter={(e) => {
          const span = e.currentTarget.querySelector("span");
          if (span) (span as HTMLElement).style.color = "rgb(40, 40, 40)";
        }}
        onMouseLeave={(e) => {
          const span = e.currentTarget.querySelector("span");
          if (span) (span as HTMLElement).style.color = "rgb(60, 60, 60)";
        }}
      >
        <span
          className="text-base md:text-lg flex-1 transition-colors"
          style={{
            fontFamily: "Archivo, sans-serif",
            fontWeight: 500,
            color: "rgb(60, 60, 60)",
          }}
        >
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgb(60, 60, 60)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p
              className="text-sm md:text-base pt-4 pr-8"
              style={{
                fontFamily: "Archivo, sans-serif",
                fontWeight: 400,
                lineHeight: "1.6em",
                color: "rgb(100, 100, 100)",
              }}
            >
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  return (
    <section
      className="relative py-16 md:py-20 lg:py-24 xl:py-28"
      style={{
        backgroundColor: "rgb(235, 225, 215)",
      }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Title and Category */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] mb-12 md:mb-16"
              style={{
                fontFamily: "Archivo, sans-serif",
                fontWeight: 400,
                lineHeight: "1.1em",
                color: "rgb(141, 73, 58)",
              }}
            >
              Questions?
            </h2>

            <h3
              className="text-xl md:text-2xl"
              style={{
                fontFamily: "Archivo, sans-serif",
                fontWeight: 500,
                color: "rgb(60, 60, 60)",
              }}
            >
              General questions
            </h3>
          </motion.div>

          {/* Right Column - Description and FAQs */}
          <div>
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 md:mb-10"
            >
              <p
                className="text-sm md:text-base mb-2"
                style={{
                  fontFamily: "Archivo, sans-serif",
                  fontWeight: 400,
                  lineHeight: "1.6em",
                  color: "rgb(80, 80, 80)",
                }}
              >
                If you have questions, we have answers for you here. In case we
                don't, please feel free to reach out to us at{" "}
                <a
                  href="mailto:contact@troscan.com"
                  className="transition-colors font-medium"
                  style={{
                    color: "rgb(60, 60, 60)",
                    textDecoration: "underline",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "rgb(40, 40, 40)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgb(60, 60, 60)";
                  }}
                >
                  contact@troscan.com
                </a>
              </p>
            </motion.div>

            {/* FAQ Accordion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {faqs.map((faq) => (
                <FAQAccordion key={faq.id} faq={faq} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
