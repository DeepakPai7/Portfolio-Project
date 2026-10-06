import Image from "next/image";

export default function AboutSection() {
  const highlights = [
    {
      icon: "💻",
      title: "Web Engineering",
      desc: "Building intuitive, responsive interfaces with HTML5, CSS3, JavaScript, React, and Next.js.",
    },
    {
      icon: "⚡",
      title: "Algorithmic Thinking",
      desc: "Solving computational problems and building strong foundations in Data Structures & C++.",
    },
    {
      icon: "🛠️",
      title: "Backend & Tooling",
      desc: "Developing APIs with Node.js & Express, and managing version control via Git & GitHub.",
    },
    {
      icon: "🤝",
      title: "Leadership & Impact",
      desc: "Active volunteer and participant in collegiate hackathons, tech fests, and state quizzes.",
    },
  ];

  return (
    <section id="about" className="section-container">
      <div className="section-header">
        <span className="section-tag">ABOUT ME</span>
        <h2 className="section-title">
          Passionate About <span className="gradient-text">Software &amp; Innovation</span>
        </h2>
        <p className="section-subtitle">
          A glimpse into my background, academic journey, and what drives my pursuit of software development.
        </p>
      </div>

      <div className="about-grid">
        {/* Left column: detailed bio */}
        <div className="about-main-card glass-panel">
          <div className="about-intro-header">
            <div className="about-avatar-sm">
              <Image
                src="/img.jpeg"
                alt="Deepak Pai avatar"
                width={80}
                height={80}
                className="about-avatar-img"
              />
            </div>
            <div>
              <h3 className="about-name">Deepak Pai</h3>
              <p className="about-tagline">2nd Year B.Tech CSE Student • Sahyadri College of Engg.</p>
            </div>
          </div>

          <div className="about-bio">
            <p>
              Hello! I am a dedicated 2nd-year Computer Science &amp; Engineering student at{" "}
              <strong>Sahyadri College of Engineering and Management</strong>, Mangalore. My ambition is to
              become a high-impact <strong>Software Developer</strong> who builds scalable, high-performance,
              and visually polished digital products.
            </p>
            <p>
              I thrive at the intersection of logical problem solving and creative web development.
              From competitive programming in <strong>C++</strong> and scripting in <strong>Python</strong> to
              building full-stack applications with <strong>Node.js, Express, and React</strong>, I constantly
              seek opportunities to learn modern technologies and expand my technical breadth.
            </p>
          </div>

          <div className="about-quick-specs">
            <div className="spec-item">
              <span className="spec-label">Education</span>
              <span className="spec-value">B.Tech in Computer Science</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Institution</span>
              <span className="spec-value">Sahyadri College (SCEM)</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Location</span>
              <span className="spec-value">Mangalore, Karnataka, India</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Core Focus</span>
              <span className="spec-value">Software Dev, DSA, Full-Stack</span>
            </div>
          </div>
        </div>

        {/* Right column: 4 highlight cards */}
        <div className="about-highlights-wrapper">
          {highlights.map((item, idx) => (
            <div key={idx} className="feature-card glass-panel">
              <div className="feature-icon-box">{item.icon}</div>
              <h4 className="feature-title">{item.title}</h4>
              <p className="feature-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
