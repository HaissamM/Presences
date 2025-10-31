"use client";

import { motion } from "framer-motion";

const galleryItems = [
  { title: "Generative art poster concept", type: "art" },
  { title: "Generative art poster concept", type: "art" },
  { title: "Generative art poster concept", type: "art" },
  { title: "My first FOTD on FWA ♥ (2012)", type: "milestone" },
  { title: "Young me discovering the beauty of Grand Canyon Tetris (1997)", type: "personal" },
  { title: "Me abusing of remote work (2005)", type: "personal" },
  { title: "Roaaaar!", type: "fun" },
  { title: "Early age (2006) desk setup", type: "workspace" },
  { title: "2016 desk setup", type: "workspace" },
  { title: "2020 desk setup", type: "workspace" },
  { title: "Waaark Creative Robots", type: "project" },
  { title: "Portfolio 2011", type: "evolution" },
  { title: "Portfolio 2014", type: "evolution" },
  { title: "Portfolio 2017 (never released)", type: "evolution" },
  { title: "Portfolio 2021", type: "evolution" },
  { title: "Legos ♥♥♥", type: "hobby" },
];

export default function Gallery() {
  return (
    <section className="min-h-screen py-20 px-6 bg-[var(--foreground)] text-[var(--background)]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold mb-12 tracking-wider"
        >
          GALLERY
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="border border-[var(--background)] border-opacity-30 p-4 cursor-pointer hover:bg-[var(--background)] hover:text-[var(--foreground)] transition-all duration-300"
            >
              <div className="aspect-square bg-[var(--background)] bg-opacity-10 mb-3 flex items-center justify-center">
                <span className="text-3xl opacity-30">
                  {item.type === "art" && "◆"}
                  {item.type === "milestone" && "★"}
                  {item.type === "personal" && "●"}
                  {item.type === "fun" && "♦"}
                  {item.type === "workspace" && "■"}
                  {item.type === "project" && "▲"}
                  {item.type === "evolution" && "◇"}
                  {item.type === "hobby" && "♥"}
                </span>
              </div>
              <p className="text-sm leading-tight">{item.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
