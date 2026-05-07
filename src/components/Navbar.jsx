import { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import { navLinks, personalInfo } from "../constants";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        {/* Logo */}
        <Link
          to="home"
          smooth
          duration={500}
          offset={-80}
          className="group relative cursor-pointer font-mono text-lg font-bold tracking-tight text-white"
        >
          <span className="text-slate-500 transition duration-300 group-hover:text-cyan-400">
            &lt;
          </span>

          <span className="mx-1 transition duration-300 group-hover:text-cyan-300">
            Gilbertus
          </span>

          <span className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
            .dev
          </span>

          <span className="ml-1 text-slate-500 transition duration-300 group-hover:text-cyan-400">
            /&gt;
          </span>

          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="ml-1 inline-block h-4 w-2 bg-cyan-300 align-middle"
          />
        </Link>

        {/* Desktop Menu */}
        <div
          onMouseLeave={() => setHoveredLink(null)}
          className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1 lg:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              offset={-80}
              spy
              activeClass="text-cyan-300"
              onMouseEnter={() => setHoveredLink(link.to)}
              className="relative cursor-pointer rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition duration-300 hover:text-white"
            >
              {hoveredLink === link.to && (
                <motion.span
                  layoutId="navbar-hover-pill"
                  className="absolute inset-0 rounded-full border border-cyan-400/20 bg-cyan-400/10"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 32,
                  }}
                />
              )}

              <span className="relative z-10">{link.label}</span>
            </Link>
          ))}
        </div>

        {/* Download CV */}
        <motion.a
          href={personalInfo.cv}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.96 }}
          className="hidden items-center gap-2 rounded-full border border-cyan-400/30 px-5 py-2 text-sm font-semibold text-cyan-300 transition duration-300 hover:bg-cyan-400 hover:text-slate-950 lg:inline-flex"
        >
          Download CV
          <FiDownload size={15} />
        </motion.a>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex rounded-xl border border-white/10 bg-white/[0.04] p-2 text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-300 lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.25 }}
            className="border-t border-white/10 bg-slate-950/95 px-5 py-5 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth
                  duration={500}
                  offset={-80}
                  onClick={closeMenu}
                  className="cursor-pointer rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-slate-300 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300"
                >
                  {link.label}
                </Link>
              ))}

              <a
                href={personalInfo.cv}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                Download CV
                <FiDownload size={15} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;