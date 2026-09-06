'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
          AI/ML Developer & Software Engineer
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-4 leading-relaxed">
          Building intelligent systems and secure, scalable applications at the intersection of 
          <span className="font-semibold text-black"> Google Cloud</span>, 
          <span className="font-semibold text-black"> Generative AI</span>, and 
          <span className="font-semibold text-black"> Developer Tools</span>.
        </p>
        <p className="text-base sm:text-lg text-gray-700 mb-8">
          Passionate about solving complex problems with AI, shipping production-grade code, and contributing to open-source innovation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            href="#projects"
            className="px-8 py-3 bg-black text-white rounded hover:opacity-80 transition font-medium"
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3 border-2 border-black text-black rounded hover:bg-black hover:text-white transition font-medium"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
