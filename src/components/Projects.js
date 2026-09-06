'use client';

import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'A.C.H.I.N.T.',
    subtitle: 'Adaptive Cyber Heuristics for Intelligent Network Tracking',
    description: 'A hybrid cybersecurity framework combining adaptive heuristics and machine learning to detect and classify malicious network activity in real-time.',
    techStack: ['Python', 'Machine Learning', 'Deep Learning', 'Network Security', 'Data Pipeline'],
    repo: 'https://github.com/achinttiwari/A.C.H.I.N.T.-Adaptive-Cyber-Heuristics-for-Intelligent-Network-Tracking',
  },
  {
    id: 2,
    title: 'Chinta Free Tea',
    subtitle: 'Premium E-Commerce Landing Page',
    description: 'A production-grade e-commerce landing page showcasing modern web technologies: React, Tailwind CSS, GSAP animations, and 3D product visualization.',
    techStack: ['React', 'Tailwind CSS', 'GSAP', 'React Three Fiber', 'Zustand', 'Vite'],
    repo: 'https://github.com/achinttiwari/Chinta-free-tea',
    live: 'https://chintafreevideo.vercel.app',
  },
  {
    id: 3,
    title: 'Workforce Retention & Attrition Profiler',
    subtitle: 'Employee Analytics & Insights',
    description: 'Data analytics project leveraging exploratory analysis and statistical methods to uncover employee attrition patterns and predict workforce retention risks.',
    techStack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Data Analysis'],
    repo: 'https://github.com/achinttiwari/Workforce-Retention-Attrition-Profiler',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-12 text-center">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
            >
              {/* Title */}
              <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
              <p className="text-sm text-gray-500 mb-4 italic">{project.subtitle}</p>

              {/* Description */}
              <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-gray-600 mb-2 uppercase">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <Link
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 bg-black text-white text-center rounded text-sm font-medium hover:opacity-80 transition"
                >
                  Repository
                </Link>
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 border border-black text-black text-center rounded text-sm font-medium hover:bg-black hover:text-white transition"
                  >
                    Live
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
