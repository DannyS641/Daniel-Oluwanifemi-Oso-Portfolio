"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}

const services: Service[] = [
  {
    id: 1,
    title: "Application Management",
    description:
      "Owning the application lifecycle from intake and delivery to steady-state operations",
    icon: (
      <svg
        viewBox="0 0 120 72"
        className="w-20 h-12"
        aria-hidden="true"
      >
        <rect x="1" y="1" width="118" height="70" rx="8" fill="#0f1419" />
        <g opacity="0.18" stroke="#8a9ba8" strokeWidth="1">
          <path d="M16 18h88M16 30h88M16 42h88M16 54h88" />
          <path d="M28 10v52M52 10v52M76 10v52M100 10v52" />
        </g>
        <polyline
          points="16,46 28,38 40,44 52,30 64,34 76,22 88,26 100,18"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="2.5"
        />
        <rect x="18" y="50" width="6" height="12" fill="#22c55e" />
        <rect x="30" y="46" width="6" height="16" fill="#22c55e" />
        <rect x="42" y="40" width="6" height="22" fill="#22c55e" />
        <rect x="54" y="36" width="6" height="26" fill="#22c55e" />
        <rect x="66" y="44" width="6" height="18" fill="#22c55e" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "IT Support",
    description:
      "Troubleshooting, monitoring, and resolving issues to keep systems reliable",
    icon: (
      <svg viewBox="0 0 120 72" className="w-20 h-12" aria-hidden="true">
        <rect x="1" y="1" width="118" height="70" rx="8" fill="#0f1419" />
        <rect x="10" y="12" width="48" height="30" rx="4" fill="#1f2933" />
        <rect x="62" y="12" width="48" height="30" rx="4" fill="#1f2933" />
        <circle cx="32" cy="27" r="10" fill="#111827" />
        <circle cx="32" cy="27" r="6" fill="#22c55e" />
        <path
          d="M86 20l6 4-6 4m8-8l6 4-6 4"
          stroke="#f59e0b"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <rect x="18" y="50" width="84" height="10" rx="5" fill="#111827" />
        <rect x="22" y="52" width="40" height="6" rx="3" fill="#22c55e" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Web Development",
    description: "Building fast, responsive, and scalable web applications",
    icon: (
      <svg viewBox="0 0 120 72" className="w-20 h-12" aria-hidden="true">
        <rect x="1" y="1" width="118" height="70" rx="8" fill="#0f1419" />
        <rect x="10" y="12" width="100" height="48" rx="6" fill="#111827" />
        <rect x="14" y="16" width="92" height="6" rx="3" fill="#1f2933" />
        <circle cx="20" cy="19" r="2" fill="#ef4444" />
        <circle cx="28" cy="19" r="2" fill="#f59e0b" />
        <circle cx="36" cy="19" r="2" fill="#22c55e" />
        <path
          d="M36 40l-10 8 10 8M84 40l10 8-10 8M50 54l8-28"
          stroke="#e5e7eb"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Services() {
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

    const items = sectionRef.current?.querySelectorAll('[id^="service-"]');
    items?.forEach((item) => observer.observe(item));

    return () => {
      items?.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl lg:text-6xl font-bold text-black mb-4">
            My Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive range of services to bring your ideas to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={`service-${index}`}
              className={`group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ${
                visibleItems.has(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="mb-4 flex items-center text-black">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
