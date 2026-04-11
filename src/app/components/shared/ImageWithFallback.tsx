// ============================================================
// ARCHIVO: ImageWithFallback.tsx
//
// ¿QUÉ HACE ESTE COMPONENTE?
// Es un componente de imagen "inteligente". Intenta mostrar
// una imagen normal, pero si esa imagen falla (la URL está rota,
// no hay internet, el archivo no existe), en vez de mostrar
// el ícono roto del navegador, muestra un placeholder gris
// con un ícono de imagen de error — limpio y profesional.
//
// ¿CUÁNDO SE USA?
// Cualquier vez que muestres imágenes que podrían no cargar:
// fotos de perfil, imágenes de productos, contenido externo.
// ============================================================

// React es la librería base. "useState" es un hook que permite
// guardar y actualizar datos dentro del componente.
import React, { useState } from 'react'

// Esta es la imagen de fallback codificada en Base64.
// Base64 convierte un archivo binario (la imagen SVG) en texto puro
// para que pueda vivir directamente en el código sin necesitar
// un archivo separado. Es un SVG pequeño que muestra el ícono
// clásico de "imagen rota" (un rectángulo con una montaña y un círculo).
const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

// "React.ImgHTMLAttributes<HTMLImageElement>" significa que este componente
// acepta TODAS las propiedades que acepta una etiqueta <img> normal:
// src, alt, width, height, className, style, etc.
export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {

  // "useState(false)" crea una variable "didError" que empieza en false.
  // Cuando cambia a true, React re-renderiza el componente automáticamente.
  // "setDidError" es la función para cambiar ese valor.
  const [didError, setDidError] = useState(false)

  // Esta función se llama cuando la imagen falla al cargar.
  // Cambia "didError" a true, lo que provoca que el componente
  // muestre el placeholder en vez de la imagen rota.
  const handleError = () => {
    setDidError(true)
  }

  // Desestructuración: sacamos las props que necesitamos manejar
  // especialmente (src, alt, style, className) del objeto "props".
  // "...rest" captura TODAS las demás props (width, height, id, etc.)
  // para pasarlas directamente al <img> sin tener que nombrarlas.
  const { src, alt, style, className, ...rest } = props

  // Operador ternario: si "didError" es true, muestra el placeholder;
  // si es false, muestra la imagen normal.
  // Formato: condicion ? (si_verdadero) : (si_falso)
  return didError ? (
    // CASO ERROR: Muestra un div gris centrado con el ícono de error
    <div
      // className ?? '' = si className es undefined/null, usa string vacío
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style} // mantiene el mismo tamaño/estilo que la imagen original tendría
    >
      <div className="flex items-center justify-center w-full h-full">
        {/* Mostramos el SVG de error codificado en base64.
            data-original-url guarda la URL original que falló,
            útil para debugging (ver en DevTools qué URL rompió). */}
        <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
      </div>
    </div>
  ) : (
    // CASO NORMAL: Muestra la imagen real.
    // onError={handleError} = si esta imagen falla, llama a handleError
    // {...rest} = pasa todas las props extra (width, height, etc.)
    <img src={src} alt={alt} className={className} style={style} {...rest} onError={handleError} />
  )
}

// ============================================================
// RESUMEN: Muestra <img> normal → si falla onError → setDidError(true)
// → React re-renderiza → ahora muestra el placeholder de error.
// El truco es que useState "recuerda" que hubo un error entre renders.
// ============================================================
