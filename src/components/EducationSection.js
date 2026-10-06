export default function EducationSection() {
  const educationData = [
    {
      institution: "Sahyadri College of Engineering & Management",
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science and Engineering",
      period: "2024 — 2028",
      status: "Currently in 2nd Year",
      location: "Mangalore, Karnataka",
      badge: "Undergraduate",
      badgeType: "primary",
      description:
        "Pursuing rigorous academic and practical training in computer science. Actively engaged in technical labs, programming workshops, and software development projects.",
      highlights: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming (C++ & Java)",
        "Database Management Systems",
        "Web Technologies & Frameworks",
        "Computer Organization & Architecture",
      ],
    },
    {
      institution: "SDPT PU College",
      degree: "Pre-University Course (12th Grade / 2nd PUC)",
      field: "Science Stream",
      period: "Completed",
      status: "Graduated with Distinction",
      location: "Karnataka, India",
      badge: "94.83% Distinction",
      badgeType: "success",
      description:
        "Achieved academic distinction in the State Pre-University Board examinations with 94.83%, demonstrating strong foundations in Mathematics, Physics, Chemistry, and Logical Reasoning.",
      highlights: [
        "Score: 94.83% (Distinction)",
        "Advanced Mathematics & Analytical Thinking",
        "State Level Quiz Representative",
        "Academic Excellence Recognition",
      ],
    },
  ];

  return (
    <section id="education" className="section-container">
      <div className="section-header">
        <span className="section-tag">ACADEMIC JOURNEY</span>
        <h2 className="section-title">
          Educational <span className="gradient-text">Background</span>
        </h2>
        <p className="section-subtitle">
          My academic pathway, milestones, and foundational learning in engineering and science.
        </p>
      </div>

      <div className="timeline-container">
        <div className="timeline-line"></div>

        {educationData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker">
              <span className="marker-dot"></span>
            </div>

            <div className="timeline-card glass-panel">
              <div className="timeline-card-header">
                <div className="institution-info">
                  <span className={`timeline-badge badge-${item.badgeType}`}>
                    {item.badge}
                  </span>
                  <h3 className="institution-name">{item.institution}</h3>
                  <h4 className="degree-title">{item.degree}</h4>
                  <p className="field-title">{item.field}</p>
                </div>

                <div className="period-info">
                  <span className="period-chip">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    {item.period}
                  </span>
                  <span className="location-chip">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {item.location}
                  </span>
                </div>
              </div>

              <p className="timeline-desc">{item.description}</p>

              <div className="timeline-highlights">
                <span className="highlights-label">Key Focus &amp; Achievements:</span>
                <div className="tags-container">
                  {item.highlights.map((h, hIdx) => (
                    <span key={hIdx} className="tech-tag">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
