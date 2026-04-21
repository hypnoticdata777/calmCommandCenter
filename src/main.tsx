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

// AppRouter defines all the routes (which URL shows which page).
import { AppRouter } from "./app/AppRouter.tsx";

// Global styles — applied to the entire app automatically.
import "./styles/index.css";

// Mount the app. BrowserRouter → AppRouter → Layout → current page.
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);
