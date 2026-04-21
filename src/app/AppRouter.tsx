// ── APPROUTER ──────────────────────────────────────────────────────
// Defines every URL route and which component to render for it.
// Layout wraps all routes so Navbar appears on every page.
// ───────────────────────────────────────────────────────────────────
import { Routes, Route } from "react-router-dom";
import { Layout }  from "./Layout";
import App         from "./App";
import { Work }    from "./pages/Work";
import { Lab }     from "./pages/Lab";
import { Journal } from "./pages/Journal";
import { About }   from "./pages/About";
import { Contact } from "./pages/Contact";

export function AppRouter() {
  return (
    <Routes>
      {/* Layout is the parent — all child routes get the Navbar */}
      <Route element={<Layout />}>
        <Route path="/"        element={<App />}     />
        <Route path="/work"    element={<Work />}    />
        <Route path="/lab"     element={<Lab />}     />
        <Route path="/journal" element={<Journal />} />
        <Route path="/about"   element={<About />}   />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
