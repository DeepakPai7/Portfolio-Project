"use client";

import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-brand-col">
            <div className="footer-logo">
              <span className="brand-badge">DP</span>
              <span className="footer-brand-title">Deepak Pai</span>
            </div>
            <p className="footer-bio">
              2nd Year Computer Science &amp; Engineering Undergraduate at Sahyadri College of Engineering &amp; Management. Passionate about software craftsmanship, algorithms, and web tech.
            </p>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-heading">Pages</h4>
            <ul className="footer-links-list">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/About">About &amp; Qualifications</Link></li>
              <li><Link href="/About#education">Education Timeline</Link></li>
              <li><Link href="/About#skills">Technical Skills</Link></li>
              <li><Link href="/About#certifications">Certifications</Link></li>
              <li><Link href="/Contact">Contact Deepak</Link></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-heading">Connect</h4>
            <ul className="footer-links-list">
              <li>
                <a href="https://github.com/DeepakPai7" target="_blank" rel="noopener noreferrer">
                  GitHub Profile
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/deepak-pai-652059389/" target="_blank" rel="noopener noreferrer">
                  LinkedIn Network
                </a>
              </li>
              <li>
                <a href="mailto:deepakpai1528@gmail.com">
                  deepakpai1528@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+918088678391">
                  +91 80886 78391
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Deepak Pai. Designed &amp; Developed with Modern Web Standards.
          </p>

          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
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
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
