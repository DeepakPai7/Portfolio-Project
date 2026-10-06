import "./globals.css";

export const metadata = {
  title: "Deepak Pai | Software Developer & CSE Student",
  description:
    "Portfolio of Deepak Pai — 2nd Year Computer Science & Engineering student at Sahyadri College of Engineering & Management. Skilled in C++, Python, Data Structures, and Modern Web Development.",
  keywords: [
    "Deepak Pai",
    "Portfolio",
    "Software Developer",
    "Computer Science Engineer",
    "Sahyadri College",
    "C++ Developer",
    "Python",
    "Web Developer",
  ],
  authors: [{ name: "Deepak Pai" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="subtle-background-pattern"></div>
        {children}
      </body>
    </html>
  );
}
