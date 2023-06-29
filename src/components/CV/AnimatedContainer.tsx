"use client";
import React from "react";
import { motion } from "framer-motion";

export function AnimatedContainer({ children }: { children: React.ReactNode }) {
  const initialValues = {
    opacity: 0,
    scale: 0.9,
  };

  const animateValues = {
    opacity: 1,
    scale: 1,
  };

  const transitionValues = {
    duration: 0.8,
  };

  return (
    <motion.div
      initial={initialValues}
      animate={animateValues}
      transition={transitionValues}
    >
      {children}
    </motion.div>
  );
}
