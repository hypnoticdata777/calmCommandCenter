// ============================================================
// ARCHIVO: Spiral.tsx
//
// ¿QUÉ HACE ESTE COMPONENTE?
// Es un ícono de ojo pequeño (32x32 píxeles) dibujado con SVG.
// Se usa como elemento de interfaz — por ejemplo, para un botón
// de "ver" o "mostrar contraseña". Es estático: no se anima.
//
// ¿POR QUÉ SVG Y NO UNA IMAGEN (.png)?
// SVG es matemático — se ve perfecto a cualquier tamaño y
// hereda el color del texto que lo rodea (currentColor).
// ============================================================

// "export" significa que otros archivos pueden importar y usar este componente.
export function Spiral() {
  return (
    // <svg> es el contenedor del dibujo vectorial.
    // width/height = tamaño en píxeles en pantalla
    // viewBox = el "lienzo" interno de coordenadas (0,0 a 32,32)
    // fill="none" = sin relleno por defecto (cada forma define el suyo)
    // xmlns = declaración obligatoria del formato SVG
    // opacity-80 = visible al 80% (ligeramente transparente)
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-80"
    >
      {/* PARTE 1: La elipse exterior — representa el contorno del ojo.
          cx/cy = centro de la elipse (punto 16,16 = centro del canvas 32x32)
          rx = radio horizontal (12px = ancho del ojo)
          ry = radio vertical (7px = alto del ojo, más aplastado que ancho)
          stroke="currentColor" = usa el color del texto del elemento padre
          strokeWidth="2" = grosor del borde de 2px
          fill="none" = solo el contorno, sin relleno interior */}
      <ellipse
        cx="16"
        cy="16"
        rx="12"
        ry="7"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />

      {/* PARTE 2: El círculo interior — representa la pupila del ojo.
          cx/cy = centro en el mismo punto que la elipse (16,16)
          r = radio de 4px (más pequeño que la elipse)
          fill="currentColor" = relleno sólido del color del texto padre */}
      <circle
        cx="16"
        cy="16"
        r="4"
        fill="currentColor"
      />
    </svg>
  );
}

// ============================================================
// RESUMEN: Una elipse (contorno del ojo) + un círculo (pupila)
// centrados en el mismo punto = ícono de ojo simple y limpio.
// ============================================================