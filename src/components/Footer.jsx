// src/components/Footer.jsx
const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="bg-[var(--card-bg)] text-[var(--text)] py-6 shadow-inner">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm md:text-base">
            Built with 💙 by{" "}
            <span className="text-[var(--accent)] font-semibold">Kavleen</span>
          </p>
          <p className="text-xs mt-2 text-[var(--muted)]">
            &copy; {currentYear} TechDigest. All rights reserved.
          </p>
  
          {/* Optional: Social Links */}
          <div className="mt-4 flex justify-center gap-4 text-[var(--accent)]">
            <a href="https://github.com/kavleencodes" target="_blank" className="hover:underline">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/kavleencodes/" target="_blank" className="hover:underline">
              LinkedIn
            </a>
            {/* <a href="mailto:kavleen@example.com" className="hover:underline">
              Contact
            </a> */}
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  