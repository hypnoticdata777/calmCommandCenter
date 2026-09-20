import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { AppRouter } from "./app/AppRouter.tsx";
import "./styles/index.css";

// PROJECT BEACON
// Browser entry: index.html loads this file.
// Provider chain: ThemeProvider -> BrowserRouter -> AppRouter.
// Next stop: AppRouter chooses the page; Layout wraps every page.
createRoot(document.getElementById("root")!).render(
  <ThemeProvider
    attribute="class"
    defaultTheme="dark"
    enableSystem={false}
    storageKey="h777-theme"
  >
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </ThemeProvider>
);
