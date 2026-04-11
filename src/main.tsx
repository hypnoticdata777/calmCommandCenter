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

// createRoot es la función de React 18 para iniciar la aplicación.
// Viene de "react-dom/client" — la parte de React que sabe dibujar
// en el navegador (DOM = Document Object Model, la estructura del HTML).
import { createRoot } from "react-dom/client";

// Importamos el componente raíz. Todos los demás componentes
// viven dentro de App, como ramas de un árbol.
import App from "./app/App.tsx";

// Importamos los estilos globales. Al importar el CSS aquí,
// se aplica a toda la aplicación automáticamente.
import "./styles/index.css";

// document.getElementById("root") busca <div id="root"> en index.html.
// El "!" le dice a TypeScript: "este elemento definitivamente existe,
// no me des error de que podría ser null."
// createRoot(...) prepara ese div para que React lo controle.
// .render(<App />) dibuja el componente App y todo su contenido.
createRoot(document.getElementById("root")!).render(<App />);
