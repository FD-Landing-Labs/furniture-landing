"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface ShowcaseCard {
  id: number;
  src: string;
  alt: string;
  // Start position (clustered in center)
  startX: number;
  startY: number;
  // End position (spread outward)
  endX: number;
  endY: number;
  startRotate: number;
  endRotate: number;
  startScale: number;
  endScale: number;
  width: number;
  height: number;
  zIndex: number;
}

// Cards configuration - start clustered, spread outward on scroll
const showcaseCards: ShowcaseCard[] = [
  {
    id: 1,
    src: "/showcase1.jpeg",
    alt: "Modern dark interior",
    startX: -60,
    startY: -30,
    endX: -450,
    endY: -200,
    startRotate: -3,
    endRotate: -5,
    startScale: 0.92,
    endScale: 1,
    width: 320,
    height: 400,
    zIndex: 3
  },
  {
    id: 2,
    src: "/showcase2.jpeg",
    alt: "Minimalist light space",
    startX: 0,
    startY: -70,
    endX: 0,
    endY: -280,
    startRotate: 2,
    endRotate: 3,
    startScale: 0.88,
    endScale: 0.98,
    width: 380,
    height: 220,
    zIndex: 1
  },
  {
    id: 3,
    src: "/showcase3.jpeg",
    alt: "Contemporary living area",
    startX: 70,
    startY: -25,
    endX: 450,
    endY: -200,
    startRotate: 3,
    endRotate: 5,
    startScale: 0.92,
    endScale: 1,
    width: 420,
    height: 260,
    zIndex: 3
  },
  {
    id: 4,
    src: "/showcase4.jpeg",
    alt: "Abstract art seating",
    startX: -80,
    startY: 50,
    endX: -520,
    endY: 150,
    startRotate: -2,
    endRotate: -3,
    startScale: 0.88,
    endScale: 0.95,
    width: 300,
    height: 280,
    zIndex: 2
  },
  {
    id: 5,
    src: "/showcase5.jpeg",
    alt: "Elegant dining setup",
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0,
    startRotate: 0,
    endRotate: 0,
    startScale: 1,
    endScale: 1.05,
    width: 340,
    height: 220,
    zIndex: 5
  },
  {
    id: 6,
    src: "/showcase6.jpeg",
    alt: "Circular wall art",
    startX: 90,
    startY: 60,
    endX: 520,
    endY: 150,
    startRotate: 2,
    endRotate: 4,
    startScale: 0.88,
    endScale: 0.95,
    width: 280,
    height: 180,
    zIndex: 2
  }
];

function AnimatedShowcaseCard({
  card,
  scrollYProgress
}: {
  card: ShowcaseCard;
  scrollYProgress: MotionValue<number>;
}) {
  const x = useTransform(scrollYProgress, [0, 0.6], [card.startX, card.endX]);
  const y = useTransform(scrollYProgress, [0, 0.6], [card.startY, card.endY]);
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.6],
    [card.startRotate, card.endRotate]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.6],
    [card.startScale, card.endScale]
  );

  return (
    <motion.div
      className="absolute"
      style={{
        x,
        y,
        rotate,
        scale,
        width: card.width,
        height: card.height,
        zIndex: card.zIndex,
        left: "50%",
        top: "50%",
        marginLeft: -card.width / 2,
        marginTop: -card.height / 2
      }}
    >
      <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
        <Image
          src={card.src}
          alt={card.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 400px"
        />
      </div>
    </motion.div>
  );
}

export function ShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Text appears AFTER scatter animation completes
  const textOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const textScale = useTransform(scrollYProgress, [0.6, 0.8], [0.9, 1]);

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{
        backgroundColor: "rgb(235, 225, 215)",
        height: "200vh" // Extended height for scroll-triggered animation
      }}
    >
      {/* Sticky container - section stops, only cards move */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Image Gallery - Burst Effect */}
        <div className="relative w-full h-full">
          {showcaseCards.map((card) => (
            <AnimatedShowcaseCard
              key={card.id}
              card={card}
              scrollYProgress={scrollYProgress}
            />
          ))}

          {/* Centered Text - Fades in after images scatter */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none"
            style={{
              opacity: textOpacity,
              scale: textScale
            }}
          >
            <div className="max-w-3xl mx-auto text-center px-4">
              <h2
                style={{
                  fontFamily: "Archivo, sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  lineHeight: 1.3,
                  color: "rgb(141, 73, 58)"
                }}
              >
                Transforming spaces with style, through Troscán's exquisite
                design expertise.
              </h2>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
