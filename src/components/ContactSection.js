"use client";

import { useState } from "react";

/* =========================================================================
   ✏️ CONTACT DETAILS CONFIGURATION
   ========================================================================= */
const CONTACT_CONFIG = {
  // 1. Email Address (Clickable mailto link)
  email: "deepakpai1528@gmail.com",

  // 2. Phone / WhatsApp
  phone: "+91 80886 78391",

  // 3. College / Location
  location: "Sahyadri College of Engg. & Mgmt, Mangalore, Karnataka, India",

  // 4. LinkedIn Profile
  linkedinUrl: "https://www.linkedin.com/in/deepak-pai-652059389/",
  linkedinDisplay: "linkedin.com/in/deepak-pai-652059389",

  // 5. GitHub Profile
  githubUrl: "https://github.com/DeepakPai7",
  githubDisplay: "github.com/DeepakPai7",
};

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        state: "error",
        message: "Please fill in all required fields (Name, Email, Message).",
      });
      return;
    }

    setStatus({ state: "submitting", message: "Sending your message..." });

    // Simulated feedback response
    setTimeout(() => {
      setStatus({
        state: "success",
        message: `Thank you ${formData.name}! Your message has been sent. Deepak will respond to you at ${formData.email} shortly.`,
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 800);
  };

  return (
    <section id="contact" className="section-container">
      <div className="section-header">
        <span className="section-tag">GET IN TOUCH</span>
        <h2 className="section-title">
          Let's Build Something <span className="gradient-text">Great Together</span>
        </h2>
        <p className="section-subtitle">
          Have an internship opportunity, a software project, or want to connect? My inbox is always open.
        </p>
      </div>

      <div className="contact-grid">
        {/* Left column: Contact Info Cards */}
        <div className="contact-info-panel content-card">
          <h3 className="contact-panel-title">Contact Information</h3>
          <p className="contact-panel-desc">
            Feel free to reach out directly via email, phone, LinkedIn, or check out my repositories on GitHub.
          </p>

          <div className="contact-cards-list">
            {/* Email Card */}
            <div className="contact-detail-card">
              <div className="contact-detail-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="contact-detail-text">
                <span className="contact-label">Email Address</span>
                <a
                  href={`mailto:${CONTACT_CONFIG.email}`}
                  className="contact-value-link"
                >
                  {CONTACT_CONFIG.email}
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="contact-detail-card">
              <div className="contact-detail-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="contact-detail-text">
                <span className="contact-label">Phone / WhatsApp</span>
                <a
                  href={`tel:${CONTACT_CONFIG.phone.replace(/\s+/g, "")}`}
                  className="contact-value-link"
                >
                  {CONTACT_CONFIG.phone}
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="contact-detail-card">
              <div className="contact-detail-icon">
                <svg
                  width="20"
                  height="20"
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
              </div>
              <div className="contact-detail-text">
                <span className="contact-label">Location / Institution</span>
                <span className="contact-value">{CONTACT_CONFIG.location}</span>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="contact-detail-card">
              <div className="contact-detail-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <div className="contact-detail-text">
                <span className="contact-label">LinkedIn</span>
                <a
                  href={CONTACT_CONFIG.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-value-link"
                >
                  {CONTACT_CONFIG.linkedinDisplay}
                </a>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="contact-detail-card">
              <div className="contact-detail-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>
              <div className="contact-detail-text">
                <span className="contact-label">GitHub</span>
                <a
                  href={CONTACT_CONFIG.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-value-link"
                >
                  {CONTACT_CONFIG.githubDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Interactive Message Form */}
        <div className="contact-form-panel content-card">
          <h3 className="contact-panel-title">Send a Direct Message</h3>
          <p className="contact-panel-desc" style={{ marginBottom: "20px" }}>
            Fill out the details below and I will get back to you as soon as possible.
          </p>

          {status.message && (
            <div
              className={`status-message-alert ${
                status.state === "success"
                  ? "alert-success"
                  : status.state === "error"
                  ? "alert-error"
                  : "alert-info"
              }`}
            >
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. rahul@example.com"
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g. Internship Opportunity / Web Project"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Hi Deepak, I'd like to discuss an opportunity..."
                className="form-textarea"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status.state === "submitting"}
              className="btn btn-primary btn-full submit-btn"
            >
              {status.state === "submitting" ? (
                <span>Sending Message...</span>
              ) : (
                <>
                  <span>Send Message</span>
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
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
