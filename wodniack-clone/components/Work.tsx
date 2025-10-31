"use client";

import { motion } from "framer-motion";

const projects = [
  { name: "Generous Branding", id: "#3vva-0000/34" },
  { name: "Hunter Farmer", id: "#dbq8-0001/34" },
  { name: "Nod Coding Bootcamp", id: "#xk2p-0002/34" },
  { name: "Rudl und Schwarm", id: "#mn7t-0003/34" },
  { name: "24/7 Artists", id: "#yw4r-0004/34" },
  { name: "Duten", id: "#pl9s-0005/34" },
  { name: "Vanguart", id: "#qz3m-0006/34" },
  { name: "Pantoufle Hôtel", id: "#rt8n-0007/34" },
  { name: "CodePen", id: "#vb2k-0008/34" },
  { name: "QBIT Capital", id: "#wc5j-0009/34" },
  { name: "Tissot", id: "#xd6h-0010/34" },
  { name: "Deside Recrutement", id: "#ye7g-0011/34" },
  { name: "Honor Society Films", id: "#zf8f-0012/34" },
  { name: "Waaark Studio", id: "#ag9e-0013/34" },
  { name: "incredibles.dev", id: "#bh0d-0014/34" },
  { name: "Personal Portfolio", id: "#ci1c-0015/34" },
];

export default function Work() {
  return (
    <section id="work" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold mb-12 tracking-[0.3em] text-center"
        >
          W O R K
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="border border-[var(--foreground)] p-6 cursor-pointer hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all duration-300"
            >
              <div className="aspect-video bg-[var(--foreground)] bg-opacity-10 mb-4 flex items-center justify-center">
                <span className="text-4xl opacity-20">◆</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              <p className="text-sm opacity-60 font-mono">{project.id}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
