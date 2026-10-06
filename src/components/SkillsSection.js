"use client";

import { useState } from "react";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Skills" },
    { id: "languages", label: "Languages" },
    { id: "web", label: "Web Tech" },
    { id: "tools", label: "Tools & Platforms" },
    { id: "core", label: "Core CS & DSA" },
  ];

  const skillsData = [
    // Languages
    {
      name: "C++",
      category: "languages",
      level: "Proficient",
      percentage: 85,
      icon: "⚡",
      color: "#6366f1",
      description: "OOP, STL containers, memory pointers, competitive problem solving & algorithms.",
    },
    {
      name: "C",
      category: "languages",
      level: "Proficient",
      percentage: 80,
      icon: "⚙️",
      color: "#3b82f6",
      description: "Pointers, dynamic memory allocation, foundational low-level programming.",
    },
    {
      name: "Python",
      category: "languages",
      level: "Proficient",
      percentage: 85,
      icon: "🐍",
      color: "#38bdf8",
      description: "CodeChef certified, scripting, automation, algorithm implementations & data parsing.",
    },
    {
      name: "JavaScript (ES6+)",
      category: "languages",
      level: "Intermediate",
      percentage: 80,
      icon: "✨",
      color: "#f59e0b",
      description: "Async/await, closures, promises, modern DOM manipulation, ES Modules.",
    },

    // Web Technologies
    {
      name: "HTML5 & Semantic Web",
      category: "web",
      level: "Advanced",
      percentage: 90,
      icon: "🌐",
      color: "#f97316",
      description: "Semantic markup, SEO optimization, accessibility, and modern page structuring.",
    },
    {
      name: "CSS3 & Modern Layouts",
      category: "web",
      level: "Advanced",
      percentage: 88,
      icon: "🎨",
      color: "#06b6d4",
      description: "Flexbox, CSS Grid, custom properties, responsive design, keyframe animations.",
    },
    {
      name: "Node.js",
      category: "web",
      level: "Intermediate",
      percentage: 75,
      icon: "🟢",
      color: "#10b981",
      description: "Event-driven runtime, building servers, RESTful services, npm ecosystems.",
    },
    {
      name: "Express.js",
      category: "web",
      level: "Intermediate",
      percentage: 75,
      icon: "🚀",
      color: "#a855f7",
      description: "Routing, middleware creation, JSON API endpoints, error handling.",
    },
    {
      name: "React & Next.js",
      category: "web",
      level: "Intermediate",
      percentage: 78,
      icon: "⚛️",
      color: "#60a5fa",
      description: "Component lifecycle, state management, hooks, SSR & App Router architecture.",
    },

    // Tools & Platforms
    {
      name: "Git",
      category: "tools",
      level: "Proficient",
      percentage: 82,
      icon: "🌿",
      color: "#f43f5e",
      description: "Branching workflows, merge conflicts, commits, rebasing, version management.",
    },
    {
      name: "GitHub",
      category: "tools",
      level: "Proficient",
      percentage: 85,
      icon: "🐙",
      color: "#94a3b8",
      description: "Repository management, open-source collaboration, pull requests, project tracking.",
    },
    {
      name: "VS Code",
      category: "tools",
      level: "Advanced",
      percentage: 92,
      icon: "💻",
      color: "#3b82f6",
      description: "Debugging, extensions, integrated terminal, efficient shortcuts, productivity setups.",
    },
    {
      name: "Postman",
      category: "tools",
      level: "Intermediate",
      percentage: 78,
      icon: "📫",
      color: "#fb923c",
      description: "API testing, inspecting headers, simulating REST payloads, automated requests.",
    },

    // Core CS
    {
      name: "Data Structures & Algorithms",
      category: "core",
      level: "Active Learning",
      percentage: 80,
      icon: "🧠",
      color: "#a855f7",
      description: "Arrays, Linked Lists, Stacks, Queues, Trees, Recursion, Sorting, Searching.",
    },
    {
      name: "Problem Solving",
      category: "core",
      level: "Proficient",
      percentage: 85,
      icon: "🧩",
      color: "#ec4899",
      description: "Breaking down complex logic, edge case handling, computational efficiency.",
    },
    {
      name: "Object-Oriented Programming",
      category: "core",
      level: "Proficient",
      percentage: 84,
      icon: "📐",
      color: "#14b8a6",
      description: "Encapsulation, Inheritance, Polymorphism, Abstraction, Clean code patterns.",
    },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="section-container">
      <div className="section-header">
        <span className="section-tag">TECHNICAL ARSENAL</span>
        <h2 className="section-title">
          Skills &amp; <span className="gradient-text">Technologies</span>
        </h2>
        <p className="section-subtitle">
          A comprehensive breakdown of programming languages, web technologies, and developer tools I leverage.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="filter-tabs">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`filter-tab-btn ${
              activeCategory === cat.id ? "is-active" : ""
            }`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {filteredSkills.map((skill, index) => (
          <div key={index} className="skill-card glass-panel">
            <div className="skill-card-top">
              <div
                className="skill-icon-wrap"
                style={{
                  background: `radial-gradient(circle at top left, ${skill.color}33, transparent)`,
                  borderColor: `${skill.color}44`,
                }}
              >
                <span className="skill-emoji">{skill.icon}</span>
              </div>
              <div className="skill-badge-wrap">
                <span
                  className="skill-level-badge"
                  style={{
                    color: skill.color,
                    borderColor: `${skill.color}44`,
                    background: `${skill.color}15`,
                  }}
                >
                  {skill.level}
                </span>
              </div>
            </div>

            <h3 className="skill-title">{skill.name}</h3>
            <p className="skill-description">{skill.description}</p>

            <div className="skill-progress-wrap">
              <div className="skill-progress-bar">
                <div
                  className="skill-progress-fill"
                  style={{
                    width: `${skill.percentage}%`,
                    background: `linear-gradient(90deg, ${skill.color}bb, ${skill.color})`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Competency Summary Box */}
      <div className="skills-summary-box glass-panel">
        <div className="summary-col">
          <div className="summary-icon">🎯</div>
          <div>
            <h4>Continuous Improvement</h4>
            <p>Constantly solving algorithmic challenges and expanding my tech stack daily.</p>
          </div>
        </div>
        <div className="summary-divider"></div>
        <div className="summary-col">
          <div className="summary-icon">⚡</div>
          <div>
            <h4>Clean Architecture</h4>
            <p>Focusing on readable, maintainable, and well-documented code across all projects.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
