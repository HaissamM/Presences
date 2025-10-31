"use client";

export default function Footer() {
  return (
    <footer id="contact" className="py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Animated Marquee Text */}
        <div className="relative mb-12 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee">
            <span className="text-4xl md:text-6xl font-bold mx-8">
              Coding my way since 1987
            </span>
            <span className="text-4xl md:text-6xl font-bold mx-8">
              Coding my way since 1987
            </span>
            <span className="text-4xl md:text-6xl font-bold mx-8">
              Coding my way since 1987
            </span>
            <span className="text-4xl md:text-6xl font-bold mx-8">
              Coding my way since 1987
            </span>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-12">
          <div className="text-6xl md:text-8xl font-bold mb-8 tracking-wider">
            <span className="inline-block">L</span>
            <span className="inline-block">L</span>
            <span className="inline-block">L</span>
            <span className="inline-block">L</span>
            <span className="inline-block mx-2">e</span>
            <span className="inline-block">e</span>
            <span className="inline-block">e</span>
            <span className="inline-block">e</span>
            <span className="inline-block mx-2">t</span>
            <span className="inline-block">&apos;</span>
            <span className="inline-block">t</span>
            <span className="inline-block">&apos;</span>
            <span className="inline-block">t</span>
            <span className="inline-block">&apos;</span>
            <span className="inline-block mx-2">s</span>
            <span className="inline-block">s</span>
            <span className="inline-block">s</span>
            <span className="inline-block">s</span>
          </div>
          <div className="text-6xl md:text-8xl font-bold mb-8 tracking-wider">
            <span className="inline-block">R</span>
            <span className="inline-block">R</span>
            <span className="inline-block">R</span>
            <span className="inline-block">R</span>
            <span className="inline-block mx-2">o</span>
            <span className="inline-block">o</span>
            <span className="inline-block">o</span>
            <span className="inline-block">o</span>
            <span className="inline-block mx-2">c</span>
            <span className="inline-block">c</span>
            <span className="inline-block">c</span>
            <span className="inline-block">c</span>
            <span className="inline-block mx-2">k</span>
            <span className="inline-block">k</span>
            <span className="inline-block">k</span>
            <span className="inline-block">k</span>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center mb-12">
          <a
            href="mailto:hello@wodniack.dev"
            className="text-2xl md:text-3xl hover:opacity-60 transition-opacity"
          >
            hello@wodniack.dev
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm opacity-60">
          <p>© {new Date().getFullYear()} Antoine Wodniack</p>
        </div>
      </div>
    </footer>
  );
}
