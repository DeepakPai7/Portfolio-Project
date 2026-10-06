import Link from "next/link";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Interactive Developer Portfolio",
      category: "Full-Stack / Frontend",
      description:
        "A high-performance modern personal portfolio website built with Next.js App Router, custom Vanilla CSS glassmorphism, responsive UI, micro-animations, and dynamic section navigation.",
      tags: ["Next.js 16", "React 19", "Vanilla CSS", "Responsive Design", "SEO"],
      icon: "✨",
      gradient: "linear-gradient(135deg, #6366f1, #a855f7)",
      metrics: "Sub-second load times & 100% responsive",
    },
    {
      title: "Algorithm Visualizer & DSA Sandbox",
      category: "C++ & JavaScript / Algorithms",
      description:
        "An educational problem-solving platform illustrating step-by-step executions of core sorting algorithms (Merge Sort, Quick Sort), binary trees, and graph search traversals.",
      tags: ["C++", "JavaScript", "DSA", "Data Visualization", "Algorithms"],
      icon: "⚡",
      gradient: "linear-gradient(135deg, #06b6d4, #3b82f6)",
      metrics: "Interactive Step-by-Step execution",
    },
    {
      title: "Campus Fest & Logistics Management System",
      category: "Node.js & Express / Web Application",
      description:
        "A full-stack prototype designed to streamline participant registration, room allocations, and event schedule logistics for collegiate fests like Synergia / SSTH.",
      tags: ["Node.js", "Express.js", "REST APIs", "Postman", "HTML5/CSS3"],
      icon: "🏢",
      gradient: "linear-gradient(135deg, #10b981, #06b6d4)",
      metrics: "RESTful Architecture & Modular Routes",
    },
  ];

  return (
    <section id="projects" className="section-container">
      <div className="section-header">
        <span className="section-tag">SHOWCASE &amp; WORK</span>
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subtitle">
          Hands-on software projects demonstrating problem solving, full-stack development, and architectural design.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div key={index} className="project-card glass-panel">
            <div className="project-card-banner" style={{ background: proj.gradient }}>
              <div className="project-card-header-inner">
                <span className="project-icon-badge">{proj.icon}</span>
                <span className="project-cat-pill">{proj.category}</span>
              </div>
            </div>

            <div className="project-content">
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-description">{proj.description}</p>

              <div className="project-metrics">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
                <span>{proj.metrics}</span>
              </div>

              <div className="project-tags">
                {proj.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                <Link
                  href="/Contact"
                  className="btn btn-secondary-glow btn-sm btn-full"
                >
                  <span>Inquire / View Details</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
