"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", isActive: pathname === "/" },
    {
      name: "About",
      href: "/About",
      isActive: pathname.toLowerCase().startsWith("/about"),
    },
    {
      name: "Contact",
      href: "/Contact",
      isActive: pathname.toLowerCase().startsWith("/contact"),
    },
  ];

  return (
    <header className={`navbar-header ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <Link href="/" className="navbar-brand">
          <span className="brand-badge">DP</span>
          <div className="brand-text">
            <span className="brand-name">Deepak Pai</span>
            <span className="brand-subtitle">CSE • Software Dev</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`nav-link ${link.isActive ? "active-link" : ""}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <Link href="/Contact" className="btn btn-secondary-glow btn-sm">
            <span>Let's Talk</span>
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
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </Link>

          <button
            className={`mobile-menu-btn ${mobileMenuOpen ? "is-active" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? "is-open" : ""}`}>
        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`mobile-nav-link ${
                  link.isActive ? "mobile-active-link" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="mobile-cta-item">
            <Link
              href="/Contact"
              className="btn btn-primary btn-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get In Touch
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
