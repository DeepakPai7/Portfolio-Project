import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import CertificationsSection from "@/components/CertificationsSection";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "About Deepak Pai | Education, Skills & Certifications",
  description:
    "Learn all about Deepak Pai — 2nd Year Computer Science & Engineering student at Sahyadri College of Engineering & Management. Detailed education timeline, technical skills, and certifications.",
};

export default function AboutPage() {
  return (
    <main className="main-wrapper subpage-wrapper">
      <Navbar />

      {/* Page Title Header */}
      <div className="page-title-banner">
        <span className="section-tag">ABOUT ME</span>
        <h1>
          My Journey &amp; <span className="gradient-text">Qualifications</span>
        </h1>
        <p>
          Discover my academic background at Sahyadri College, technical competencies in C++ and Python,
          extracurricular leadership, and engineering achievements.
        </p>
      </div>

      <div className="section-separator"></div>

      {/* Main Bio & Highlights */}
      <AboutSection />

      <div className="section-separator"></div>

      {/* Education Timeline */}
      <EducationSection />

      <div className="section-separator"></div>

      {/* Skills Matrix */}
      <SkillsSection />

      <div className="section-separator"></div>

      {/* Certifications & Extracurriculars */}
      <CertificationsSection />

      <div className="section-separator"></div>

      {/* CTA Box */}
      <section className="section-container" style={{ padding: "50px 24px" }}>
        <div
          className="content-card cta-card"
          style={{
            padding: "44px 32px",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.75rem",
              fontWeight: "700",
              color: "var(--text-primary)",
              marginBottom: "10px",
            }}
          >
            Want to discuss a project or internship?
          </h3>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: "550px",
              margin: "0 auto 24px",
              fontSize: "1rem",
            }}
          >
            I am always open to new software development opportunities, mentorship, and creative engineering collaborations.
          </p>
          <Link href="/Contact" className="btn btn-primary">
            <span>Get in Touch via Contact Page</span>
            <svg
              width="16"
              height="16"
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
      </section>

      <Footer />
    </main>
  );
}