import { motion } from "framer-motion";
import { Code2, Menu, X } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchDialog from "./SearchDialog";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/skills", label: "Skills" },
  { path: "/experience", label: "Experience" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Handle click outside to close mobile menu
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="relative">
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="flex items-center gap-3 group"
                aria-label="Rajeev - Home"
              >
                <span className="text-2xl font-bold tracking-tight text-white">
                  RAJEEV
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1.5
                    ${
                      location.pathname === link.path
                        ? "bg-white/15 text-white backdrop-blur-sm"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                  aria-current={location.pathname === link.path ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}

              {/* Search for md to lg */}
              <div className="lg:hidden ml-2">
                <SearchDialog iconOnly />
              </div>
            </div>

            {/* Search Bar - Large screens only */}
            <div className="hidden lg:flex flex-1 justify-center max-w-md mx-8">
              <SearchDialog />
            </div>

            {/* Mobile Controls */}
            <div className="flex md:hidden items-center gap-1">
              <SearchDialog iconOnly />
              <button
                onClick={toggleMenu}
                className="p-2.5 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/10"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden border-t border-white/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-4 py-3 bg-black/80 backdrop-blur-xl">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={closeMenu}
                    className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all
                      ${
                        location.pathname === link.path
                          ? "bg-white/15 text-white"
                          : "text-gray-300 hover:bg-white/10 hover:text-white"
                      }`}
                    aria-current={location.pathname === link.path ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;