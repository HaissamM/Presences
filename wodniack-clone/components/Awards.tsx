"use client";

import { motion } from "framer-motion";

const awards = [
  { platform: "awwwards", achievement: "SOTD x 16, Honors x 1" },
  { platform: "FWA", achievement: "SOTD x 4, MOTD x 2" },
  { platform: "CSSDA", achievement: "WOTD x 18, WOTM x 1" },
  { platform: "2025 Webby Awards", achievement: "Winner - Best Home Page" },
  { platform: "Comm Arts Mag", achievement: "Interactive Annual Competition Winner 2017" },
  { platform: "Net Mag", achievement: "SOTM Summer 2016" },
  { platform: "GSAP", achievement: "SOTM October 2024, SOTM November 2024" },
  { platform: "CSSDA Best Front-End Developer", achievement: "2016, 2015" },
];

export default function Awards() {
  return (
    <section className="min-h-screen py-20 px-6 bg-[var(--foreground)] text-[var(--background)]">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold mb-12 tracking-wider"
        >
          AWARDS
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-b border-[var(--background)] border-opacity-20 pb-6"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                {award.platform}
              </h3>
              <p className="text-lg opacity-80">{award.achievement}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
