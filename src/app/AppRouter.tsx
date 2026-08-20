// ── APPROUTER ──────────────────────────────────────────────────────
// Define todas las rutas de la app y qué componente renderizar en cada una.
// Layout envuelve todas las rutas para que Navbar y el fondo animado
// estén presentes en todas las páginas.
//
// El "*" al final es la ruta catch-all: atrapa cualquier URL que no
// coincida con las rutas definidas arriba y muestra la página 404.
// Sin esto, una URL inválida mostraría pantalla en blanco.
// ───────────────────────────────────────────────────────────────────
import { Routes, Route } from "react-router-dom";
import { Layout }     from "./Layout";
import App            from "./App";
import { Work }       from "./pages/Work";
import { Lab }        from "./pages/Lab";
import { Journal }    from "./pages/Journal";
import { About }      from "./pages/About";
import { Contact }    from "./pages/Contact";
import { NotFound }   from "./pages/NotFound";

// PROJECT COMMAND STRUCTURE - Routing
// 1. Why: Maps URLs to the correct screen so the SPA has predictable navigation.
// 2. Who: Every visitor and every internal Link in the project.
// 3. Main modules: Layout route wrapper, six content pages, and the 404 fallback.
// 4. Screens: Home, Journal, Lab, Work, About, Contact, NotFound.
// 5. Data stored: No data; this file stores the route table as code.
// 6. State tracked: React Router tracks the current location.
// 7. User actions: Navigate by clicking links or loading a direct URL.
// 8. Rules: Keep "*" last; keep every public nav link backed by a route.
// 9. Outside tools: react-router-dom Routes and Route.
// 10. Smallest version: Layout plus "/", one secondary route, and "*".

export function AppRouter() {
  return (
    <Routes>
      {/* Layout is the parent — all child routes get the Navbar and animated background */}
      <Route element={<Layout />}>
        <Route path="/"        element={<App />}      />
        <Route path="/work"    element={<Work />}     />
        <Route path="/lab"     element={<Lab />}      />
        <Route path="/journal" element={<Journal />}  />
        <Route path="/about"   element={<About />}    />
        <Route path="/contact" element={<Contact />}  />
        {/* Catch-all: cualquier ruta no reconocida muestra NotFound */}
        <Route path="*"        element={<NotFound />} />
      </Route>
    </Routes>
  );
}
