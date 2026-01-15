"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    title: "Homeowner",
    quote:
      "Koala completely transformed our living room into a warm, inviting space. Their custom furniture pieces are not only beautiful but incredibly comfortable. We couldn't be happier with the result.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "James Anderson",
    title: "Boutique Hotel Owner",
    quote:
      "The bespoke furniture and room designs Koala created for our hotel have elevated our guest experience tremendously. Every piece tells a story and adds character to our spaces.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Emily Chen",
    title: "Interior Designer",
    quote:
      "Working with Koala has been a dream. Their attention to detail and understanding of both aesthetics and functionality is exceptional. They bring ideas to life beautifully.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Michael Roberts",
    title: "Restaurant Owner",
    quote:
      "The dining furniture and ambiance Koala designed for our restaurant has become the talk of the town. Guests specifically mention how comfortable and stylish the space feels.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    name: "David Martinez",
    title: "Property Developer",
    quote:
      "Koala furnished multiple luxury apartments for our development. Their timeless designs and quality craftsmanship have significantly enhanced the appeal and value of our properties.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    name: "Rachel Thompson",
    title: "Homeowner",
    quote:
      "From concept to completion, Koala made our bedroom redesign effortless. The custom headboard and wardrobe are stunning pieces that we'll treasure for years to come.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
  },
  {
    id: 7,
    name: "Thomas Wilson",
    title: "Office Manager",
    quote:
      "Koala transformed our corporate office into a modern, productive workspace. The ergonomic furniture and thoughtful layout have improved both aesthetics and employee satisfaction.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
  },
  {
    id: 8,
    name: "Lisa Patterson",
    title: "Café Owner",
    quote:
      "The cozy, welcoming atmosphere Koala created with their furniture selection has made our café a favorite neighborhood spot. Their design perfectly captures our brand's essence.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop",
  },
];

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  const { name, title, quote, image } = testimonial;

  return (
    <div
      className="flex flex-col flex-shrink-0 w-[280px] md:w-[320px] rounded-xl p-6 md:p-8"
      style={{
        backgroundColor: "rgb(255, 255, 255)",
        border: "none",
        minHeight: "380px",
      }}
    >
      {/* Profile Image */}
      <div className="mb-6">
        <div
          className="relative rounded-full overflow-hidden border-2"
          style={{
            width: "60px",
            height: "60px",
            borderColor: "rgb(141, 73, 58)",
          }}
        >
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="60px"
          />
        </div>
      </div>

      {/* Quote */}
      <p
        className="text-sm md:text-base mb-6 flex-grow"
        style={{
          fontFamily: "Archivo, sans-serif",
          fontWeight: 400,
          lineHeight: "1.6em",
          color: "rgb(60, 60, 60)",
        }}
      >
        "{quote}"
      </p>

      {/* Name and Title */}
      <div className="mt-auto">
        <h4
          className="text-lg md:text-xl mb-1"
          style={{
            fontFamily: "Archivo, sans-serif",
            fontWeight: 500,
            color: "rgb(141, 73, 58)",
          }}
        >
          {name}
        </h4>
        <p
          className="text-sm"
          style={{
            fontFamily: "Archivo, sans-serif",
            fontWeight: 400,
            color: "rgb(120, 120, 120)",
          }}
        >
          {title}
        </p>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const x = useMotionValue(0);
  const springX = useSpring(x, {
    stiffness: 400,
    damping: 50,
    mass: 0.8,
    restSpeed: 0.01,
    restDelta: 0.01,
  });

  // Calculate card width + gap (320px card + 32px gap on desktop, 280px + 24px on mobile)
  const cardWidth = typeof window !== 'undefined' && window.innerWidth >= 768 ? 352 : 304;

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const scrollLeft = () => {
    const newIndex = Math.max(0, currentIndex - 1);
    setCurrentIndex(newIndex);
    const targetX = -newIndex * cardWidth;
    x.set(targetX);
  };

  const scrollRight = () => {
    const maxIndex = Math.max(0, testimonials.length - Math.floor(containerWidth / cardWidth));
    const newIndex = Math.min(maxIndex, currentIndex + 1);
    setCurrentIndex(newIndex);
    const targetX = -newIndex * cardWidth;
    x.set(targetX);
  };

  return (
    <section
      className="relative py-16 md:py-20 lg:py-24 xl:py-28"
      style={{
        backgroundColor: "rgb(235, 225, 215)",
      }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4 md:mb-5">
            <span
              className="rounded-full w-2 h-2"
              style={{
                backgroundColor: "rgb(141, 73, 58)",
              }}
            />
            <span
              className="text-[0.8125rem] md:text-sm"
              style={{
                fontFamily: "Archivo, sans-serif",
                fontWeight: 400,
                color: "rgb(141, 73, 58)",
              }}
            >
              Testimonials
            </span>
          </div>

          {/* Main Heading and Navigation */}
          <div className="flex items-end justify-between gap-4">
            <h2
              className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] max-w-4xl"
              style={{
                fontFamily: "Archivo, sans-serif",
                fontWeight: 400,
                lineHeight: "1.2em",
                color: "rgb(141, 73, 58)",
              }}
            >
              Don't take our word for it!
              <br />
              Hear it from our partners.
            </h2>

            {/* Navigation Buttons */}
            <div className="hidden md:flex items-center gap-3 flex-shrink-0">
              <button
                onClick={scrollLeft}
                className="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid rgb(141, 73, 58)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgb(255, 255, 255)";
                  const svg = e.currentTarget.querySelector("svg");
                  if (svg) svg.setAttribute("stroke", "rgb(141, 73, 58)");
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  const svg = e.currentTarget.querySelector("svg");
                  if (svg) svg.setAttribute("stroke", "rgb(141, 73, 58)");
                }}
                aria-label="Previous testimonials"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgb(141, 73, 58)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-colors duration-300"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <button
                onClick={scrollRight}
                className="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid rgb(141, 73, 58)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgb(255, 255, 255)";
                  const svg = e.currentTarget.querySelector("svg");
                  if (svg) svg.setAttribute("stroke", "rgb(141, 73, 58)");
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  const svg = e.currentTarget.querySelector("svg");
                  if (svg) svg.setAttribute("stroke", "rgb(141, 73, 58)");
                }}
                aria-label="Next testimonials"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgb(141, 73, 58)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-colors duration-300"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Testimonials Horizontal Scroll */}
      <div
        ref={containerRef}
        className="overflow-hidden"
      >
        <motion.div
          className="flex gap-6 md:gap-8 px-4 md:px-6 lg:px-8 pb-4 cursor-grab active:cursor-grabbing"
          style={{
            x: springX,
            userSelect: "none",
          }}
          drag="x"
          dragConstraints={{
            left: -((testimonials.length - 1) * cardWidth),
            right: 0,
          }}
          dragElastic={0.05}
          dragTransition={{
            bounceStiffness: 400,
            bounceDamping: 50,
            power: 0.3,
            timeConstant: 300,
          }}
          whileTap={{ cursor: "grabbing" }}
          onDragEnd={(_, info) => {
            const offset = info.offset.x;
            const velocity = info.velocity.x;

            // Calculate how many cards we've moved
            const swipeThreshold = cardWidth / 3;
            const velocityThreshold = 500;

            if (Math.abs(velocity) > velocityThreshold) {
              // Fast swipe - move by velocity direction
              if (velocity > 0) {
                scrollLeft();
              } else {
                scrollRight();
              }
            } else if (Math.abs(offset) > swipeThreshold) {
              // Slow drag past threshold - snap to next/prev
              if (offset > 0) {
                scrollLeft();
              } else {
                scrollRight();
              }
            } else {
              // Snap back to current position
              const targetX = -currentIndex * cardWidth;
              x.set(targetX);
            }
          }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
