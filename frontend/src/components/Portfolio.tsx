import React from "react";

const Portfolio: React.FC = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Name & title */}
        <div className="border-l-4 border-orange-500 pl-4 mb-6">
          <h1 className="text-4xl font-bold text-gray-800">John Doe</h1>
          <p className="text-xl text-orange-600">
            Full‑Stack Developer & AI Enthusiast
          </p>
        </div>

        {/* Contact links */}
        <div className="flex flex-wrap gap-6 mb-8 text-orange-600">
          <a
            href="mailto:john.doe@example.com"
            className="hover:underline flex items-center gap-1"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            John.Doe@example.com
          </a>
          <a
            href="https://linkedin.com/in/johndoe"
            target="_blank"
            rel="noopener"
            className="hover:underline flex items-center gap-1"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z" />
            </svg>
            LinkedIn
          </a>
          <a
            href="https://github.com/johndoe"
            target="_blank"
            rel="noopener"
            className="hover:underline flex items-center gap-1"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            GitHub
          </a>
        </div>

        {/* Content cards */}
        <div className="space-y-8">
          {/* Summary */}
          <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Experienced Full-Stack Developer with 5+ years of expertise in
              React, TypeScript, Python, and cloud technologies. Passionate
              about building scalable web applications and AI integrations.
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-orange-500 rounded-full"></span>
              Work Experience
            </h2>
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-medium text-gray-800">
                  Senior Full-Stack Developer @ TechCorp Inc.
                </h3>
                <p className="text-sm text-orange-600 mb-2">2022 – Present</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>
                    Led development of a microservices‑based e‑commerce platform
                    using FastAPI and React.
                  </li>
                  <li>
                    Integrated OpenAI APIs to provide personalized product
                    recommendations.
                  </li>
                  <li>
                    Improved CI/CD pipeline, reducing deployment time by 40%.
                  </li>
                </ul>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-medium text-gray-800">
                  Full-Stack Developer @ WebSolutions
                </h3>
                <p className="text-sm text-orange-600 mb-2">2019 – 2022</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>
                    Built responsive single‑page applications with React,
                    TypeScript, and Tailwind CSS.
                  </li>
                  <li>Designed RESTful APIs with Django and PostgreSQL.</li>
                  <li>Implemented real‑time chat features using WebSockets.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-orange-500 rounded-full"></span>
              Education
            </h2>
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
              <p className="text-gray-800">
                <span className="font-medium">B.Sc. in Computer Science</span> –
                University of Technology (2015–2019)
              </p>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-orange-500 rounded-full"></span>
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Next.js",
                "Python (FastAPI, Django)",
                "Node.js",
                "REST",
                "GraphQL",
                "PostgreSQL",
                "SQLite",
                "MongoDB",
                "Docker",
                "AWS",
                "CI/CD",
                "LangChain",
                "OpenRouter",
                "OpenAI API",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-orange-500 rounded-full"></span>
              Projects
            </h2>
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  <span className="font-medium">AI Chat Portfolio</span> – This
                  very website, built with FastAPI and React, using OpenRouter
                  for AI chat based on my resume.
                </li>
                <li>
                  <span className="font-medium">Task Manager App</span> – A
                  full‑stack task manager with JWT authentication and drag‑drop
                  UI.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
