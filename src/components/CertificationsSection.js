export default function CertificationsSection() {
  const items = [
    {
      type: "Certification",
      typeBadge: "badge-primary",
      icon: "📜",
      title: "Python Programming",
      issuer: "CodeChef",
      date: "May 2026",
      summary:
        "Comprehensive certification in Python covering core syntax, control flow, functions, object-oriented principles, data structures, and algorithmic problem solving on the CodeChef platform.",
      tags: ["Python", "Algorithms", "CodeChef Certified", "Problem Solving"],
      status: "Verified Credential",
    },
    {
      type: "Certification",
      typeBadge: "badge-primary",
      icon: "⚡",
      title: "Learn C++ Programming",
      issuer: "CodeChef",
      date: "July 2026",
      summary:
        "In-depth certification validating proficiency in C++ language fundamentals, Object-Oriented Programming (OOP), STL libraries, pointers, and computational complexity.",
      tags: ["C++", "OOP", "STL", "CodeChef Certified"],
      status: "Verified Credential",
    },
    {
      type: "Volunteering & Leadership",
      typeBadge: "badge-success",
      icon: "🤝",
      title: "Synergia Fest (SSTH) — Logistics & Hospitality",
      issuer: "Sahyadri College of Engineering & Management",
      date: "November 2025",
      summary:
        "Facilitated seamless accommodation, transport, and event-day logistical coordination for hundreds of visiting students, mentors, and delegates during Sahyadri's flagship fest (SSTH).",
      tags: ["Event Logistics", "Student Hospitality", "Team Leadership", "Campus Operations"],
      status: "Event Volunteer",
    },
    {
      type: "Honors & Competitions",
      typeBadge: "badge-warning",
      icon: "🏆",
      title: "State-Level General Knowledge Quiz",
      issuer: "Prathibha Karanji (Govt of Karnataka)",
      date: "January 2023 • Shivamogga",
      summary:
        "Earned selection to represent at the prestigious State-Level Quiz Competition held in Shivamogga, testing rapid knowledge across Science, Technology, Current Affairs, and General Awareness.",
      tags: ["State Participant", "GK Quiz", "Analytical Speed", "Prathibha Karanji"],
      status: "State Representative",
    },
  ];

  return (
    <section id="certifications" className="section-container">
      <div className="section-header">
        <span className="section-tag">CREDENTIALS &amp; ACTIVITIES</span>
        <h2 className="section-title">
          Certifications &amp; <span className="gradient-text">Leadership</span>
        </h2>
        <p className="section-subtitle">
          Verified platform certifications, campus leadership contributions, and competitive accolades.
        </p>
      </div>

      <div className="cert-grid">
        {items.map((item, index) => (
          <div key={index} className="cert-card glass-panel">
            <div className="cert-header">
              <div className="cert-type-wrap">
                <span className={`badge ${item.typeBadge}`}>{item.type}</span>
                <span className="cert-status-tag">
                  <span className="status-indicator-dot"></span>
                  {item.status}
                </span>
              </div>
              <span className="cert-icon">{item.icon}</span>
            </div>

            <div className="cert-body">
              <h3 className="cert-title">{item.title}</h3>
              <div className="cert-issuer-row">
                <span className="cert-issuer">{item.issuer}</span>
                <span className="cert-dot">•</span>
                <span className="cert-date">{item.date}</span>
              </div>
              <p className="cert-summary">{item.summary}</p>
            </div>

            <div className="cert-footer">
              <div className="tags-container">
                {item.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
