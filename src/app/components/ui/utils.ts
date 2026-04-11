// ============================================================
// ARCHIVO: utils.ts
//
// ¿QUÉ HACE ESTE ARCHIVO?
// Define la función "cn()" — la utilidad más usada en todo el proyecto.
// Casi todos los componentes UI la importan. Su trabajo es combinar
// clases de Tailwind CSS de forma inteligente, resolviendo conflictos.
//
// PROBLEMA QUE RESUELVE:
// Si tienes "bg-red-500" y alguien pasa "bg-blue-500" desde afuera,
// sin cn() ambas clases coexisten y el resultado es impredecible.
// Con cn(), la segunda clase GANA y reemplaza a la primera.
//
// EJEMPLO DE USO:
//   cn("px-4 py-2", isLarge && "px-8", className)
//   → combina todas las clases, elimina duplicados/conflictos
// ============================================================

// "clsx" es una librería que combina múltiples strings de clases en uno.
// También maneja valores condicionales: si pasas false/undefined los ignora.
// "ClassValue" es el tipo TypeScript que acepta: string, array, objeto, boolean, etc.
import { clsx, type ClassValue } from "clsx";

// "twMerge" (Tailwind Merge) es una librería que resuelve CONFLICTOS
// entre clases de Tailwind. Sabe que "px-4" y "px-8" son la misma
// propiedad y que la última debe ganar.
import { twMerge } from "tailwind-merge";

// "...inputs" es un "rest parameter" — acepta CUALQUIER CANTIDAD de argumentos.
// cn("a", "b", "c") → inputs = ["a", "b", "c"]
// cn("a", false, undefined) → inputs = ["a", false, undefined]
export function cn(...inputs: ClassValue[]) {
  // Paso 1: clsx(inputs) → junta todos los inputs en un string de clases,
  //         filtrando los falsy (false, null, undefined, 0, "")
  // Paso 2: twMerge(...) → resuelve conflictos entre clases de Tailwind
  // El resultado es un string limpio de clases CSS listo para usar.
  return twMerge(clsx(inputs));
}

// ============================================================
// RESUMEN: cn() = clsx() + twMerge() trabajando juntos.
// clsx une y filtra. twMerge elimina conflictos de Tailwind.
// Una sola línea de código, pero es el pegamento de todos los
// componentes UI del proyecto.
// ============================================================
