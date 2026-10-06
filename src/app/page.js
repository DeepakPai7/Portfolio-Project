import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Deepak Pai | Portfolio - Software Developer & CSE Student",
  description:
    "Official portfolio of Deepak Pai — 2nd Year Computer Science & Engineering student at Sahyadri College of Engineering & Management. Explore my skills, projects, and journey.",
};

export default function Home() {
  const quickSkills = [
    { name: "C++ Programming", icon: "⚡", tag: "Core Language" },
    { name: "Python Development", icon: "🐍", tag: "CodeChef Certified" },
    { name: "Full-Stack Web Dev", icon: "🌐", tag: "React / Node / Express" },
    { name: "Data Structures & DSA", icon: "🧠", tag: "Problem Solving" },
    { name: "Git & Version Control", icon: "🌿", tag: "GitHub Workflow" },
    { name: "Modern CSS & UI/UX", icon: "🎨", tag: "Responsive Design" },
  ];

  return (
    <main className="main-wrapper">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      <div className="section-separator"></div>

      {/* Quick About Overview Section */}
      <section className="section-container">
        <div className="section-header">
          <span className="section-tag">OVERVIEW</span>
          <h2 className="section-title">
            Engineering Code with <span className="gradient-text">Precision &amp; Passion</span>
          </h2>
          <p className="section-subtitle">
            A quick glimpse into who I am, what I study at Sahyadri College, and my vision as a software developer.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-main-card content-card">
            <div className="about-intro-header">
              <div className="about-avatar-sm">
                <Image
                  src="/img.jpeg"
                  alt="Deepak Pai"
                  width={80}
                  height={80}
                  className="about-avatar-img"
                />
              </div>
              <div>
                <h3 className="about-name">Deepak Pai</h3>
                <p className="about-tagline">2nd Year B.Tech CSE @ Sahyadri College</p>
              </div>
            </div>

            <div className="about-bio">
              <p>
                I am an aspiring Software Developer currently pursuing my Bachelor of Technology in
                Computer Science and Engineering at Sahyadri College of Engineering and Management, Mangalore.
              </p>
              <p>
                Driven by curiosity, I focus on building robust software solutions, mastering
                Data Structures &amp; Algorithms in C++, and creating engaging web applications.
              </p>
            </div>

            <div className="about-quick-specs">
              <div className="spec-item">
                <span className="spec-label">Degree</span>
                <span className="spec-value">B.Tech CSE (2024–2028)</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">PUC Distinction</span>
                <span className="spec-value">94.83% Score</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Certifications</span>
                <span className="spec-value">CodeChef Python &amp; C++</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Location</span>
                <span className="spec-value">Mangalore, Karnataka</span>
              </div>
            </div>

            <div style={{ marginTop: "16px" }}>
              <Link href="/About" className="btn btn-primary">
                <span>View Full Profile &amp; Education</span>
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
            </div>
          </div>

          {/* Quick Skills Cards */}
          <div className="about-highlights-wrapper">
            <div className="content-card" style={{ padding: "26px" }}>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.25rem",
                  marginBottom: "16px",
                  color: "var(--text-primary)",
                }}
              >
                Core Competencies
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "10px",
                }}
              >
                {quickSkills.map((sk, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "10px 14px",
                      background: "#f8fafc",
                      borderRadius: "var(--radius-md)",
                      border: "1px solid var(--border-subtle)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ fontSize: "1.2rem" }}>{sk.icon}</span>
                      <span
                        style={{
                          fontWeight: "600",
                          fontSize: "0.92rem",
                          color: "var(--text-primary)",
                        }}
                      >
                        {sk.name}
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--accent-primary)",
                        background: "var(--bg-badge-blue)",
                        padding: "3px 8px",
                        borderRadius: "var(--radius-full)",
                        border: "1px solid var(--border-badge-blue)",
                        fontWeight: "600",
                      }}
                    >
                      {sk.tag}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: "20px" }}>
                <Link href="/About" className="btn btn-secondary-glow btn-full btn-sm">
                  <span>Explore All Skills &amp; Certifications</span>
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
        </div>
      </section>

      <div className="section-separator"></div>

      {/* Featured Projects Section */}
      <ProjectsSection />

      <div className="section-separator"></div>

      {/* CTA Section */}
      <section className="section-container" style={{ padding: "50px 24px" }}>
        <div
          className="content-card cta-card"
          style={{
            padding: "48px 32px",
            textAlign: "center",
          }}
        >
          <span className="section-tag">LET'S CONNECT</span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "2.2rem",
              fontWeight: "800",
              margin: "12px 0",
              color: "var(--text-primary)",
            }}
          >
            Have an Internship or <span className="gradient-text">Project in Mind?</span>
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              maxWidth: "580px",
              margin: "0 auto 26px",
              fontSize: "1.02rem",
            }}
          >
            I am always eager to learn, contribute to real-world software, and collaborate on exciting ideas.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/Contact" className="btn btn-primary">
              <span>Go to Contact Page</span>
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
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </Link>

            <Link href="/About" className="btn btn-glass">
              <span>Learn More About Me</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}