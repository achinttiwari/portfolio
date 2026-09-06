'use client';

import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-12 text-center">About</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm aspect-square bg-gray-200 rounded-lg flex items-center justify-center border-2 border-gray-300">
              <p className="text-gray-500 text-center px-4">
                Professional headshot will be displayed here
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I'm a Software Engineer and AI developer passionate about building intelligent systems and secure, scalable applications. Currently exploring the intersection of Google Cloud, generative AI, and developer tools—including building projects like <span className="font-semibold">Achintisalive</span> (a Socratic AI tutor for secure coding).
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              When I'm not shipping projects, you'll find me solving algorithmic challenges on <span className="font-semibold">LeetCode</span>, competing on <span className="font-semibold">Kaggle</span>, or writing technical breakdowns on <span className="font-semibold">DEV Community</span>. Always open to collaborating on open-source tools, AI challenges, and impactful software.
            </p>

            {/* Social Links */}
            <div className="space-y-3 text-base">
              <p className="text-gray-600">
                <span className="font-semibold">Connect with me:</span>
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://github.com/achinttiwari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:opacity-60 transition font-medium underline"
                >
                  GitHub
                </Link>
                <Link
                  href="https://www.linkedin.com/in/achinttiwari/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:opacity-60 transition font-medium underline"
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://dev.to/achinttiwari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:opacity-60 transition font-medium underline"
                >
                  Dev.to
                </Link>
                <Link
                  href="https://www.kaggle.com/achinttiwari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:opacity-60 transition font-medium underline"
                >
                  Kaggle
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
