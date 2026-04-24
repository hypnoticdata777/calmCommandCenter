// ╔══════════════════════════════════════════════════════════════════╗
// ║  TAGS TABLE — Navbar.tsx                                        ║
// ╠══════════════════════════════╦═══════════════════════════════════╣
// ║  Tag / Concept               ║  Purpose                         ║
// ╠══════════════════════════════╬═══════════════════════════════════╣
// ║  useState                    ║  Holds values that change over   ║
// ║                              ║  time (scroll position, hover)   ║
// ║  useEffect                   ║  Runs code when something changes║
// ║                              ║  (sets up the scroll listener)   ║
// ║  AnimatePresence             ║  Lets motion elements animate    ║
// ║                              ║  OUT before being removed        ║
// ║  motion.nav                  ║  <nav> that can animate          ║
// ║  motion.div / motion.button  ║  Animatable HTML elements        ║
// ║  Link                        ║  React Router's <a> tag —        ║
// ║                              ║  navigates without page reload   ║
// ║  useLocation                 ║  Tells you the current URL path  ║
// ║                              ║  so you can highlight active link║
// ║  useTheme                    ║  Hook de next-themes — lee y     ║
// ║                              ║  cambia el tema activo           ║
// ║  Sun / Moon                  ║  Íconos de Lucide para el toggle ║
// ║  Menu / X                    ║  Lucide icons: hamburger + close ║
// ║  scrolled                    ║  true when user scrolled > 80px  ║
// ║  hovered                     ║  true when mouse is on side pill ║
// ║  menuOpen                    ║  true when mobile menu is open   ║
// ╚══════════════════════════════╩═══════════════════════════════════╝

// ╔══════════════════════════════════════════════════════════════════╗
// ║  COMPONENT DESCRIPTION                                          ║
// ╠══════════════════════════════════════════════════════════════════╣
// ║  What the user sees:                                            ║
// ║    Desktop — a transparent top bar at page load. Once scrolled, ║
// ║    it slides to the right as a vertical pill that fades until   ║
// ║    hovered. Mobile — a small ☰ tab on the right; tapping it    ║
// ║    opens a full-screen overlay with all links.                  ║
// ║    All states include a Sun/Moon button to toggle dark/light.   ║
// ╠══════════════════════════════════════════════════════════════════╣
// ║  Structure:                                                     ║
// ║    1. Desktop top bar  (fixed, horizontal, shown when at top)   ║
// ║    2. Desktop side pill (fixed, vertical, shown when scrolled)  ║
// ║    3. Mobile hamburger button (always visible on small screens) ║
// ║    4. Mobile overlay menu (full-screen, triggered by ☰)         ║
// ╚══════════════════════════════════════════════════════════════════╝

// ── IMPORTS ────────────────────────────────────────────────────────
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
// useTheme da acceso a { theme, setTheme } para leer y cambiar el tema activo
import { useTheme } from "next-themes";
// ──────────────────────────────────────────────────────────────────

// ── NAV LINKS CONFIG ───────────────────────────────────────────────
// Defined outside the component so this array is never recreated
// on re-renders — it's a fixed list that never changes.
const links = [
  { label: "Work",    to: "/work"    },
  { label: "Lab",     to: "/lab"     },
  { label: "Journal", to: "/journal" },
  { label: "About",   to: "/about"   },
  { label: "Contact", to: "/contact" },
];
// ──────────────────────────────────────────────────────────────────

export function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [hovered,   setHovered]   = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const location = useLocation(); // current URL path

  // useTheme devuelve el tema activo y la función para cambiarlo.
  // "mounted" evita un flash de contenido incorrecto (hydration mismatch):
  // next-themes lee localStorage solo en el cliente, así que esperamos
  // a que el componente esté montado antes de mostrar el ícono correcto.
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Alterna entre "dark" y "light" con un solo clic
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  // ── SCROLL LISTENER ─────────────────────────────────────────────
  // Adds an event listener when the component mounts.
  // Returns a cleanup function that removes it when the component
  // unmounts — prevents memory leaks.
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 80;
      setScrolled(isScrolled);
      // Bug fix: cuando el usuario sube de vuelta al tope, reseteamos
      // "hovered" a false. Sin esto, el pill reaparecería al 100% de
      // opacidad la próxima vez que el usuario baje aunque no haya
      // movido el mouse — porque el estado quedó pegado en true.
      if (!isScrolled) setHovered(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // empty array = run once on mount only
  // ─────────────────────────────────────────────────────────────────

  // Close mobile menu automatically when the user navigates to a new page.
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Ícono del toggle: Sol = modo claro activo, Luna = modo oscuro activo.
  // Antes de montar, renderiza null para evitar el flash.
  const ThemeIcon = mounted
    ? theme === "dark" ? Sun : Moon
    : null;

  return (
    <>
      {/* ── DESKTOP NAV ─────────────────────────────────────────── */}
      {/* hidden on mobile (md:block = visible only on medium+ screens) */}
      <div className="hidden md:block">
        <AnimatePresence mode="wait">

          {!scrolled ? (
            // ── TOP BAR STATE ──────────────────────────────────────
            // Shown when the user is at the top of the page.
            // Spans full width, transparent background, horizontal links.
            <motion.nav
              key="top"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
            >
              {/* Logo — links back to home */}
              <Link
                to="/"
                className="font-display text-lg text-foreground/80 tracking-wider hover:text-foreground transition-colors"
              >
                h777
              </Link>

              {/* Nav links + theme toggle — right side of top bar */}
              <div className="flex items-center gap-8">
                {links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    // Active link uses brand color; inactive is subtle foreground
                    className={`text-sm tracking-wider transition-colors ${
                      location.pathname === link.to
                        ? "text-brand"
                        : "text-foreground/60 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Botón de toggle dark/light — ícono cambia según el tema */}
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
            // ─────────────────────────────────────────────────────

          ) : (
            // ── SIDE PILL STATE ────────────────────────────────────
            // Shown when the user has scrolled down.
            // Floats on the right side, vertically centered.
            // Fades to 35% opacity when not hovered — reappears on hover.
            <motion.nav
              key="side"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: hovered ? 1 : 0.35, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onHoverStart={() => setHovered(true)}
              onHoverEnd={() => setHovered(false)}
              // translate-y-[-50%] centers it vertically on the right edge
              className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-4 bg-foreground/5 backdrop-blur-sm border border-foreground/10 rounded-2xl px-5 py-6"
            >
              {/* Logo at the top of the pill */}
              <Link
                to="/"
                className="font-display text-sm text-foreground/80 tracking-wider hover:text-foreground transition-colors mb-1"
              >
                h777
              </Link>

              {/* Thin divider line between logo and links */}
              <div className="h-px bg-foreground/10 w-full" />

              {/* Vertical link list */}
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

              {/* Toggle al fondo del pill */}
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
            // ─────────────────────────────────────────────────────
          )}

        </AnimatePresence>
      </div>
      {/* ─────────────────────────────────────────────────────────── */}

      {/* ── MOBILE NAV ──────────────────────────────────────────── */}
      {/* md:hidden = visible only on screens smaller than 768px */}
      <div className="md:hidden">

        {/* Small ☰ tab anchored to top-right corner */}
        <motion.button
          onClick={() => setMenuOpen(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }} // appears after the page fades in
          className="fixed right-4 top-4 z-50 flex items-center justify-center w-10 h-10 bg-foreground/5 border border-foreground/10 rounded-lg text-foreground/60 hover:text-foreground hover:bg-foreground/10 transition-colors"
          aria-label="Open menu"
        >
          <Menu size={18} />
        </motion.button>

        {/* ── MOBILE OVERLAY MENU ───────────────────────────────── */}
        {/* Full-screen overlay that slides in when ☰ is tapped */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-background/96 backdrop-blur-sm flex flex-col items-center justify-center gap-10"
            >
              {/* X close button */}
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-foreground/60 hover:text-foreground transition-colors"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>

              {/* Toggle de tema — arriba a la izquierda del overlay */}
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

              {/* Logo */}
              <Link to="/" className="font-display text-2xl text-foreground/80 mb-2">
                h777
              </Link>

              {/* Links — stagger in one by one */}
              {links.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                >
                  <Link
                    to={link.to}
                    className={`text-2xl tracking-wider transition-colors ${
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
        {/* ─────────────────────────────────────────────────────── */}

      </div>
      {/* ─────────────────────────────────────────────────────────── */}
    </>
  );
}
