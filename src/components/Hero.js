import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          {/* Status Pill */}
          <div className="hero-badge-wrapper">
            <span className="hero-status-pill">
              <span className="pulse-dot"></span>
              <span>Available for Internships & Projects</span>
            </span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Deepak Pai</span>
          </h1>

          <h2 className="hero-subtitle">
            Aspiring Software Developer &amp; CSE Undergraduate
          </h2>

          <p className="hero-description">
            2nd year Computer Science student at{" "}
            <span className="text-highlight">Sahyadri College of Engineering &amp; Management</span>.
            Passionate about crafting responsive web applications, mastering Data Structures &amp; Algorithms,
            and engineering clean, scalable solutions in C++, Python, and modern JavaScript.
          </p>

          {/* CTAs */}
          <div className="hero-actions">
            <Link href="/About" className="btn btn-primary">
              <span>Explore My Journey</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>

            <Link href="/About#skills" className="btn btn-glass">
              <span>Technical Skills</span>
            </Link>

            <Link href="/Contact" className="btn btn-outline">
              <span>Contact Me</span>
            </Link>
          </div>

          {/* Quick Info Badges */}
          <div className="hero-highlights-grid">
            <div className="highlight-item">
              <span className="highlight-val">94.8%</span>
              <span className="highlight-label">PUC Distinction</span>
            </div>
            <div className="highlight-divider"></div>
            <div className="highlight-item">
              <span className="highlight-val">2+</span>
              <span className="highlight-label">Certifications</span>
            </div>
            <div className="highlight-divider"></div>
            <div className="highlight-item">
              <span className="highlight-val">10+</span>
              <span className="highlight-label">Technologies</span>
            </div>
            <div className="highlight-divider"></div>
            <div className="highlight-item">
              <span className="highlight-val">2028</span>
              <span className="highlight-label">B.Tech CSE</span>
            </div>
          </div>
        </div>

        {/* Profile Visual Showcase */}
        <div className="hero-visual">
          <div className="hero-card-glow"></div>
          <div className="hero-profile-card">
            <div className="profile-image-container">
              <div className="profile-image-ring">
                <Image
                  src="/img.jpeg"
                  alt="Deepak Pai - Software Developer"
                  width={280}
                  height={280}
                  priority
                  className="profile-photo"
                />
              </div>
            </div>

            <div className="profile-card-footer">
              <div className="profile-card-title">Deepak Pai</div>
              <div className="profile-card-role">B.Tech CSE @ Sahyadri College</div>
              <div className="profile-card-location">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Mangalore, Karnataka, India</span>
              </div>
            </div>

            {/* Floating Tech Chips */}
            <div className="floating-chip chip-1">
              <span className="chip-icon">⚡</span>
              <span>C++ &amp; DSA</span>
            </div>
            <div className="floating-chip chip-2">
              <span className="chip-icon">🐍</span>
              <span>Python</span>
            </div>
            <div className="floating-chip chip-3">
              <span className="chip-icon">🌐</span>
              <span>Full-Stack Web</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
