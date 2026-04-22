// ============================================================
// ARCHIVO: main.tsx
//
// ¿QUÉ HACE ESTE ARCHIVO?
// Es el puente entre el HTML y React. Su único trabajo es arrancar
// la aplicación: encuentra el div#root en index.html y monta
// el componente App dentro de él. Desde ese momento, React
// controla toda la interfaz de usuario.
//
// FLUJO: index.html carga este archivo → este archivo monta App
// → App renderiza BeatingBrain + RollingHeptagon + el contenido
// ============================================================

// createRoot is React 18's function for mounting the app into the DOM.
import { createRoot } from "react-dom/client";

// BrowserRouter enables URL-based navigation (React Router).
// It must wrap the entire app so every component can use routing hooks.
import { BrowserRouter } from "react-router-dom";

// ThemeProvider gestiona el modo claro/oscuro.
// attribute="class" → agrega class="dark" al <html> cuando el modo es oscuro.
// defaultTheme="dark" → arranca en modo oscuro (el diseño original).
// enableSystem=false → NO detecta la preferencia del sistema operativo;
//   el usuario elige manualmente con el botón de toggle.
// storageKey → guarda la preferencia del usuario en localStorage con esta clave.
import { ThemeProvider } from "next-themes";

// AppRouter defines all the routes (which URL shows which page).
import { AppRouter } from "./app/AppRouter.tsx";

// Global styles — applied to the entire app automatically.
import "./styles/index.css";

// Orden del árbol: ThemeProvider (tema) → BrowserRouter (rutas) → AppRouter (páginas)
createRoot(document.getElementById("root")!).render(
  <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey="h777-theme">
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </ThemeProvider>
);
