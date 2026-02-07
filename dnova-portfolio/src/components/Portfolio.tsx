"use client";

import { useEffect, useRef, useState } from "react";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image?: string;
  url?: string;
  role: string;
  responsibilities: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Dolphins Rental",
    category: "Web Application",
    description:
      "Property rental platform focused on fast discovery, clear listings, and smooth booking flows.",
    image: "/placeholders/Dolphins%20Rental.png",
    url: "https://dolphins-rental.vercel.app/",
    role: "Application Manager & Web Developer",
    responsibilities: [
      "Tracked availability, and performance",
      "Implemented responsive UI and booking flows",
    ],
  },
  {
    id: 2,
    title: "Adrenale5",
    category: "Web Application",
    description:
      "Marketing and product experience site with a strong visual identity and conversion-first layout.",
    image: "/placeholders/Adrenale5.png",
    url: "https://adrenale5.vercel.app",
    role: "Application Manager & Web Developer",
    responsibilities: [
      "Monitored analytics and optimized engagement",
      "Built and maintained UI components",
    ],
  },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.id.split("-")[1]);
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2 },
    );

    const items = sectionRef.current?.querySelectorAll('[id^="project-"]');
    items?.forEach((item) => observer.observe(item));

    return () => {
      items?.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Projects Done
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              id={`project-${index}`}
              className={`group cursor-pointer transition-all duration-700 transform ${
                visibleItems.has(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* Project Card */}
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-video mb-4 group-hover:shadow-2xl transition-shadow">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-gray-500 font-semibold">
                      {project.title}
                    </span>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="group-hover:translate-x-2 transition-transform">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  {project.category}
                </p>
                <h3 className="text-2xl font-bold text-black mt-2 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
                <p className="text-sm font-semibold text-black mt-4">
                  {project.role}
                </p>
                <ul className="text-gray-600 text-sm mt-3 space-y-1 list-disc list-inside">
                  {project.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-black mt-4"
                  >
                    Visit Live Site &rarr;
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16 animate-fade-in-up">
          <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium inline-flex items-center gap-2">
            View All Projects &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}




