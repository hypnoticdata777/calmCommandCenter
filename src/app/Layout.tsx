// ── LAYOUT ─────────────────────────────────────────────────────────
// Wraps every page. Renders the Navbar once, then <Outlet /> swaps
// in whatever page matches the current URL. This means the Navbar
// never re-mounts as you navigate — it persists across all pages.
// ───────────────────────────────────────────────────────────────────
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";

export function Layout() {
  return (
    <>
      {/* Navbar sits above all pages via fixed positioning */}
      <Navbar />
      {/* Outlet = the current page component, swapped by React Router */}
      <Outlet />
    </>
  );
}
