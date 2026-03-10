"use client";

import { useEffect, useMemo, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isCvOpen, setIsCvOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const cvContent = useMemo(
    () => `DANIEL OLUWANIFEMI OSO
APPLICATION MANAGER

SUMMARY
Technically proficient and diligent graduate with practical experience in IT operations, application support, and web development. competent in resolving software/application problems, offering first-level technical support, and guaranteeing the best possible user experience. demonstrated aptitude for managing incident resolution, supporting legacy system migrations, and working in cross-functional teams. adept with front-end technologies and keen to pursue a career in IT operations and application support. Excellent communication skills, quick learning curve, and solution-oriented team player.

EXPERIENCE
Application Manager
FMDQ Group | August 2024 – Present
• Provide application and technical support, including system monitoring, troubleshooting, and issue resolution.
• Digitize legacy records into a central database with a focus on data accuracy and integrity.
• Test models for validating property ownership, supporting internal systems.
• Document workflows and support knowledge base development for internal use.

Adhoc Digitizing Officer
Detamainingu Limited | October 2023 – April 2024
• Supported database migration through large-scale document digitization and data entry.
• Conducted quality checks, error tracking, and ensured adherence to digitization protocols.
• Assisted in building simple verification models using internal platforms.
• Maintained digital file accuracy and followed best practices in information management.

Website Developer
Idea Consult | October 2023 – February 2024
• Designed and maintained scalable websites with user-centric design in mind.
• Collaborated with internal teams to troubleshoot user experience (UX) and browser compatibility issues.
• Conducted basic testing and documentation for feedback loops.

Student Intern, Management Information Center
Office of the Governor, Oyo State | September 2022 – February 2023
• Developed and maintained internal web platforms for state use.
• Supported the Smart Card project for civil servants including user data collection and upload.
• Worked alongside application support staff to improve system accessibility and performance.
• Assisted in SEO optimization, front-end debugging, and system reporting.

EDUCATION
B.Sc. Computer Science
Kwara State University | Malete, Kwara State | August 2018 – September 2023

CERTIFICATIONS
Front-End Web Development
META (Coursera) | 2024
• Gained skills in web application structure and styling.

Git & GitHub for Version Control – Coursera (GOOGLE)
Google (Coursera) | 2022
• Learned version control fundamentals and collaborative workflows using Git and GitHub.

SKILLS
Front-End Development (HTML, CSS, JavaScript), Version Control (Git & GitHub), Microsoft Excel, SQL (Basic) & Data Entry, VS Code, Windows OS, Web Servers, File Management Systems, System Documentation, Software Testing (Functional & UI Testing), Performance Monitoring, User & Client Support, Application Support & Troubleshooting, Incident & Ticket Management.
Problem Solving, Critical Thinking, Communication, Team Collaboration, Fast Learning`,
    [],
  );

  const cvDownloadHref =
    "/placeholders/DANIEL%20OLUWANIFEMI%20OSO%27s%20Resume.pdf";

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Stats */}
            <div className="flex gap-8 mb-8">
              <div className="animate-fade-in-up">
                <h3 className="text-4xl font-bold text-black">+30</h3>
                <p className="text-gray-600">Systems/websites managed</p>
              </div>
              <div className="animate-fade-in-up animation-delay-200">
                <h3 className="text-4xl font-bold text-black">+2</h3>
                <p className="text-gray-600">Web applications completed</p>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl lg:text-7xl font-bold text-black mb-4 leading-tight animate-fade-in-up animation-delay-400">
              Hello
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 mb-8 animate-fade-in-up animation-delay-600">
              — I'm Daniel Oluwanifemi Oso, an Application Manager & Web Developer
            </p>

            {/* CTA Button */}
            <div className="flex gap-4 animate-fade-in-up animation-delay-800">
              <button
                className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
                onClick={() => setIsCvOpen(true)}
              >
                View CV
              </button>
              <a
                href="#portfolio"
                className="border-2 border-black text-black px-8 py-3 rounded-lg hover:bg-black hover:text-white transition-colors font-medium inline-flex items-center justify-center"
              >
                View Portfolio
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-16 animate-bounce">
              <p className="text-gray-600 text-sm">Scroll down ↓</p>
            </div>
          </div>

          {/* Right - Profile Image Placeholder */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              <div className="bg-white rounded-2xl aspect-square flex items-center justify-center overflow-hidden">
                <img
                  src="/placeholders/Profile%20Image.png"
                  alt="Daniel Oluwanifemi Oso"
                  className="w-full h-full object-cover object-[50%_20%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isCvOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="bg-white max-w-3xl w-full rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <h3 className="text-xl font-bold text-black">CV</h3>
              <button
                className="text-gray-600 hover:text-black"
                onClick={() => setIsCvOpen(false)}
              >
                Close
              </button>
            </div>
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              <pre className="whitespace-pre-wrap text-sm text-gray-800 leading-relaxed">
                {cvContent}
              </pre>
            </div>
            <div className="px-6 py-4 border-t flex justify-end gap-3">
              <a
                href={cvDownloadHref}
                download
                className="border-2 border-black text-black px-6 py-2 rounded-lg hover:bg-black hover:text-white transition-colors font-medium"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
