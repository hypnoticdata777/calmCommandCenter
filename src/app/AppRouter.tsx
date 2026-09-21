import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import App from "./App";
import { Work } from "./pages/Work";
import { WorkCaseStudy } from "./pages/WorkCaseStudy";
import { Lab } from "./pages/Lab";
import { Journal } from "./pages/Journal";
import { JournalEntry } from "./pages/JournalEntry";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { SpanishHome } from "./pages/es/SpanishHome";
import { SpanishContact } from "./pages/es/SpanishContact";

// PROJECT BEACON
// Entry from main.tsx. Layout wraps every route with Navbar/background.
// Content loop: "/" introduces, "/journal" explains, "/lab" tests, "/work" proves.
// Dynamic routes read their slug inside JournalEntry and WorkCaseStudy.
// Spanish first-pass routes live under "/es" while the full ES content grows.
export function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:slug" element={<WorkCaseStudy />} />
        <Route path="/lab" element={<Lab />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/journal/:slug" element={<JournalEntry />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/es" element={<SpanishHome />} />
        <Route path="/es/contacto" element={<SpanishContact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
