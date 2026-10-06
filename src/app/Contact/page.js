import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact Deepak Pai | Let's Connect & Collaborate",
  description:
    "Get in touch with Deepak Pai — 2nd Year Computer Science & Engineering student at Sahyadri College. Inquire about internships, software development, and technical projects.",
};

export default function ContactPage() {
  const faqs = [
    {
      q: "Are you open to software engineering internships?",
      a: "Yes, I am actively seeking software development and engineering internships where I can contribute to real-world codebases, learn from experienced teams, and apply my skills in C++, Python, and full-stack web tech.",
    },
    {
      q: "What is the best way to contact you?",
      a: "You can send a message using the form on this page or email me directly. I typically respond within 24 hours.",
    },
    {
      q: "Where are you currently based?",
      a: "I am based in Mangalore, Karnataka, India, studying Computer Science & Engineering at Sahyadri College of Engineering and Management.",
    },
    {
      q: "Are you open to hackathons & collaborative projects?",
      a: "Absolutely! I love building creative solutions with enthusiastic teammates in hackathons and open-source initiatives.",
    },
  ];

  return (
    <main className="main-wrapper subpage-wrapper">
      <Navbar />

      {/* Page Title Header */}
      <div className="page-title-banner">
        <span className="section-tag">GET IN TOUCH</span>
        <h1>
          Let's Start a <span className="gradient-text">Conversation</span>
        </h1>
        <p>
          Whether you have an internship opportunity, a project to collaborate on, or just want to discuss software development, feel free to reach out.
        </p>
      </div>

      <div className="section-separator"></div>

      {/* Contact Form & Information */}
      <ContactSection />

      <div className="section-separator"></div>

      {/* FAQ Section */}
      <section className="section-container" style={{ paddingTop: "30px", paddingBottom: "60px" }}>
        <div className="section-header" style={{ marginBottom: "32px" }}>
          <span className="section-tag">COMMON INQUIRIES</span>
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "20px",
          }}
        >
          {faqs.map((faq, idx) => (
            <div key={idx} className="content-card" style={{ padding: "26px" }}>
              <h4
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.08rem",
                  fontWeight: "700",
                  color: "var(--text-primary)",
                  marginBottom: "8px",
                }}
              >
                {faq.q}
              </h4>
              <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
