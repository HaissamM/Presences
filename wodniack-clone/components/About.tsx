"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold mb-12 tracking-wider"
        >
          ABOUT
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6 text-lg md:text-xl leading-relaxed"
        >
          <p className="text-2xl md:text-3xl font-light mb-8">
            I collaborate with agencies and designers to craft memorable user experiences, 
            bringing their vision to life with a nice touch of animation.
          </p>

          <p>
            My journey started with <strong>Dreamweaver</strong>, exploring the possibilities 
            of web creation. I then dove into <strong>Flash and ActionScript</strong>, 
            mastering interactive animations before transitioning to modern web technologies.
          </p>

          <p>
            I&apos;ve worked extensively with <strong>back-end development</strong> and various 
            <strong>CMS platforms</strong>, giving me a comprehensive understanding of the 
            full development stack.
          </p>

          <p>
            Today, I focus on <strong>creative development</strong>, having completed over 
            <strong> 140+ projects</strong>. I&apos;ve had the privilege of leading teams of 
            <strong> 10 designers and developers</strong>, and founded <strong>Waaark</strong> and 
            <strong> incredibles.dev</strong>.
          </p>

          <p>
            My work has been recognized with numerous <strong>awards</strong>, but what 
            drives me most is the <strong>continuous learning</strong> and pushing the 
            boundaries of what&apos;s possible on the web.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
