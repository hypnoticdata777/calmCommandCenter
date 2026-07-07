// ── LAYOUT ─────────────────────────────────────────────────────────
// Wraps every page. Renders the Navbar once, then <Outlet /> swaps
// in whatever page matches the current URL. This means the Navbar
// never re-mounts as you navigate — it persists across all pages.
//
// El fondo animado (BeatingBrain + heptágonos) también vive aquí
// por la misma razón: si viviera dentro de cada página individual,
// se destruiría y recrearía cada vez que navegas — las animaciones
// reiniciarían desde cero en cada click. Al ponerlo aquí, el fondo
// corre sin interrupciones sin importar a qué página vayas.
// ───────────────────────────────────────────────────────────────────
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { BeatingBrain } from "./components/BeatingBrain";
import { RollingHeptagon } from "./components/RollingHeptagon";
// Fuente única de configuración — compartida con App.tsx y las sub-páginas
import { HEPTAGON_SLOW, HEPTAGON_FAST, HEPTAGON_MEDIUM } from "./constants/heptagons";

// PROJECT COMMAND STRUCTURE - Shared Layout
// 1. Why: Keeps navigation and ambient background mounted across every route.
// 2. Who: Every screen in the application.
// 3. Main modules: Navbar, BeatingBrain, RollingHeptagon trio, and Outlet.
// 4. Screens: Wraps all route screens defined in AppRouter.
// 5. Data stored: Imports static heptagon animation configuration.
// 6. State tracked: None here; children manage nav, theme, route, and animation state.
// 7. User actions: Indirectly supports navigation and theme changes through Navbar.
// 8. Rules: Background must stay behind content and must not intercept clicks.
// 9. Outside tools: React Router Outlet and Motion-powered visual components.
// 10. Smallest version: Navbar plus Outlet; background is visual polish.

export function Layout() {
  return (
    <>
      {/* ── FONDO ANIMADO ─────────────────────────────────────────── */}
      {/* Montado una sola vez para toda la app. Usa "fixed inset-0"
          internamente, así cubre el viewport sin importar qué página
          esté activa. Las animaciones corren continuamente sin reset. */}
      <BeatingBrain />
      <RollingHeptagon {...HEPTAGON_SLOW} />
      <RollingHeptagon {...HEPTAGON_FAST} />
      <RollingHeptagon {...HEPTAGON_MEDIUM} />
      {/* ──────────────────────────────────────────────────────────── */}

      {/* Navbar sits above all pages via fixed positioning */}
      <Navbar />

      {/* Outlet = the current page component, swapped by React Router */}
      <Outlet />
    </>
  );
}
