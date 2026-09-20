import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { BeatingBrain } from "./components/BeatingBrain";
import { RollingHeptagon } from "./components/RollingHeptagon";
import {
  HEPTAGON_FAST,
  HEPTAGON_MEDIUM,
  HEPTAGON_SLOW,
} from "./constants/heptagons";

// PROJECT BEACON
// Parent for every AppRouter page.
// Persistent pieces: Navbar, BeatingBrain, and RollingHeptagon stay mounted.
// Page content enters through Outlet, so route changes do not reset the shell.
export function Layout() {
  return (
    <>
      <BeatingBrain />
      <RollingHeptagon {...HEPTAGON_SLOW} />
      <RollingHeptagon {...HEPTAGON_FAST} />
      <RollingHeptagon {...HEPTAGON_MEDIUM} />
      <Navbar />
      <Outlet />
    </>
  );
}
