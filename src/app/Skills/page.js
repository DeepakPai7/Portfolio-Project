import Navbar from "@/components/Navbar";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Technical Skills | Deepak Pai Portfolio",
  description: "Technical skills, programming languages (C++, Python, JS), web frameworks, and tools used by Deepak Pai.",
};

export default function SkillsPage() {
  return (
    <main className="main-wrapper subpage-wrapper">
      <Navbar />
      <div className="subpage-hero">
        <div className="subpage-hero-content">
          <Link href="/" className="back-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Back to Full Portfolio</span>
          </Link>
        </div>
      </div>
      <SkillsSection />
      <Footer />
    </main>
  );
}