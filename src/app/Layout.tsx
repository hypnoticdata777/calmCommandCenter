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
