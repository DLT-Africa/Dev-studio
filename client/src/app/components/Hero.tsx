"use client"; // Required for Next.js App Router

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // Opacity decreases as the user scrolls past
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Slight scale shrink effect
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <motion.section
      ref={ref}
      style={{ opacity, scale }}
      className="w-full flex flex-col items-center gap-[25px] py-20"
    >
      {/* Title and Description */}
      <motion.div
        className="w-full flex flex-col items-center gap-[15px]"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="font-semibold text-[64px] text-[#FC7C13] text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          DLT HUB
        </motion.h1>

        <motion.p
          className="font-medium text-[18px] text-[#F7FCFE] text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          A full-service digital agency focused on creativity and result-driven solutions.
        </motion.p>
      </motion.div>

      {/* Secondary Heading */}
      <motion.h1
        className="font-semibold text-[64px] text-[#F7FCFE] text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        Bringing Ideas to Life
      </motion.h1>

      {/* Animated Button */}
      <motion.button
        className="relative overflow-hidden bg-[#FC7C13] px-[46.5px] py-[18px] rounded-[10px] font-medium text-[16px] text-[#F7FCFE] text-center"
        whileHover={{
          scale: 1.1,
          backgroundImage:
            "linear-gradient(45deg, #FC7C13, #FF9800, #FFC107, #FC7C13)",
          backgroundSize: "300% 300%",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        Grow with us
      </motion.button>
    </motion.section>
  );
};

export default Hero;
