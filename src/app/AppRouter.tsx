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
