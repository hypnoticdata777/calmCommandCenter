import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";

// PROJECT BEACON
// Owned by Layout, visible on every route, and routes back through AppRouter.
// Link loop: Home -> Journal -> Lab -> Work -> About -> Contact.
// Theme state is global through ThemeProvider in main.tsx.
const links = [
  { label: "Journal", to: "/journal" },
  { label: "Lab", to: "/lab" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 80;
      setScrolled(isScrolled);
      if (!isScrolled) setHovered(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const ThemeIcon = mounted ? (theme === "dark" ? Sun : Moon) : null;

  return (
    <>
      <div className="hidden md:block">
        <AnimatePresence mode="wait">
          {!scrolled ? (
            <motion.nav
              key="top"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
            >
              <Link
                to="/"
                className="font-display text-lg text-foreground/80 tracking-wider hover:text-foreground transition-colors"
              >
                h777
              </Link>

              <div className="flex items-center gap-8">
                {links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`text-sm tracking-wider transition-colors ${
                      location.pathname === link.to
                        ? "text-brand"
                        : "text-foreground/60 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                {ThemeIcon && (
                  <button
                    type="button"
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                    className="text-foreground/60 hover:text-foreground transition-colors"
                  >
                    <ThemeIcon size={16} />
                  </button>
                )}
              </div>
            </motion.nav>
          ) : (
            <motion.nav
              key="side"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: hovered ? 1 : 0.35, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onHoverStart={() => setHovered(true)}
              onHoverEnd={() => setHovered(false)}
              className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-4 bg-foreground/5 backdrop-blur-sm border border-foreground/10 rounded-2xl px-5 py-6"
            >
              <Link
                to="/"
                className="font-display text-sm text-foreground/80 tracking-wider hover:text-foreground transition-colors mb-1"
              >
                h777
              </Link>

              <div className="h-px bg-foreground/10 w-full" />

              <div className="flex flex-col items-end gap-4 pt-1">
                {links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`text-sm tracking-wider transition-colors ${
                      location.pathname === link.to
                        ? "text-brand"
                        : "text-foreground/60 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {ThemeIcon && (
                <button
                  type="button"
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  className="text-foreground/40 hover:text-foreground transition-colors mt-1"
                >
                  <ThemeIcon size={14} />
                </button>
              )}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      <div className="md:hidden">
        {!menuOpen && (
          <motion.button
            onClick={() => setMenuOpen(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="fixed right-4 top-4 z-50 flex items-center justify-center w-10 h-10 bg-foreground/5 border border-foreground/10 rounded-lg text-foreground/60 hover:text-foreground hover:bg-foreground/10 transition-colors"
            aria-label="Open menu"
          >
            <Menu size={18} />
          </motion.button>
        )}

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 min-h-dvh overflow-y-auto overscroll-contain bg-background/96 px-6 py-16 backdrop-blur-sm flex flex-col items-center justify-start gap-5 sm:justify-center sm:gap-10 sm:py-20"
            >
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-foreground/60 hover:text-foreground transition-colors"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>

              {ThemeIcon && (
                <button
                  type="button"
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center text-foreground/60 hover:text-foreground transition-colors"
                >
                  <ThemeIcon size={20} />
                </button>
              )}

              <Link
                to="/"
                className="font-display text-2xl text-foreground/80 mb-1 sm:mb-2"
              >
                h777
              </Link>

              {links.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                >
                  <Link
                    to={link.to}
                    className={`text-xl tracking-wider transition-colors sm:text-2xl ${
                      location.pathname === link.to
                        ? "text-brand"
                        : "text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
