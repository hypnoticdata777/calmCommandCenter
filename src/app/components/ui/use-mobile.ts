// ============================================================
// ARCHIVO: use-mobile.ts
//
// ¿QUÉ HACE ESTE ARCHIVO?
// Define un "custom hook" llamado useIsMobile().
// Un hook es una función especial de React que puedes llamar
// dentro de cualquier componente para obtener información
// o comportamiento reutilizable.
//
// useIsMobile() devuelve "true" si la pantalla del usuario
// es menor a 768px (tamaño móvil), o "false" si es más grande
// (tablet o escritorio). Se actualiza automáticamente si el
// usuario redimensiona la ventana.
//
// ¿CUÁNDO SE USA?
// En componentes que necesitan comportarse diferente en móvil:
// mostrar/ocultar elementos, cambiar layouts, etc.
// ============================================================

// Importamos React completo con "* as React" para poder usar
// React.useState y React.useEffect con el prefijo "React."
import * as React from "react";

// El "breakpoint" (punto de quiebre) que define el límite entre
// móvil y escritorio. 768px es el estándar de la industria —
// es el ancho de una tablet iPad en modo vertical.
const MOBILE_BREAKPOINT = 768;

// Convención de nombres: los hooks siempre empiezan con "use".
// Esto es una regla de React — si no empieza con "use", React
// no lo trata como hook y algunas cosas no funcionan correctamente.
export function useIsMobile() {

  // Estado interno: ¿es móvil? Empieza como "undefined" (no sabemos aún)
  // porque al inicio no hemos medido la pantalla todavía.
  // "<boolean | undefined>" es TypeScript diciendo: puede ser true, false, o undefined.
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined,
  );

  // useEffect ejecuta código "después" de que el componente se muestra.
  // El array vacío [] al final significa: "ejecuta esto solo UNA vez,
  // cuando el componente aparece por primera vez."
  React.useEffect(() => {

    // window.matchMedia crea un "media query listener" — exactamente
    // como las media queries de CSS pero desde JavaScript.
    // Nos avisa cuando la pantalla cruza el límite de 767px.
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    // Esta función se llama cada vez que el tamaño de pantalla
    // cruza el breakpoint (de móvil a escritorio o viceversa).
    const onChange = () => {
      // window.innerWidth = ancho actual de la ventana en píxeles
      // Si es menor a 768, isMobile = true; si no, isMobile = false
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // Registramos el listener: "cuando cambie el tamaño, llama a onChange"
    mql.addEventListener("change", onChange);

    // Medimos el tamaño AHORA (al cargar) para tener el valor inicial
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

    // "return" dentro de useEffect = función de limpieza.
    // Se ejecuta cuando el componente desaparece de la pantalla.
    // Es importante remover el listener para no desperdiciar memoria.
    return () => mql.removeEventListener("change", onChange);

  }, []); // [] = solo correr al montar el componente, no en cada re-render

  // "!!" convierte cualquier valor a boolean estricto:
  // !!undefined → false, !!true → true, !!false → false
  // Así siempre devolvemos true o false, nunca undefined.
  return !!isMobile;
}

// ============================================================
// RESUMEN: Mide el ancho de pantalla al cargar y escucha cambios.
// Devuelve true (móvil) o false (escritorio/tablet).
// Es reutilizable: cualquier componente puede llamar useIsMobile()
// y obtener esa información sin repetir la lógica.
// ============================================================
