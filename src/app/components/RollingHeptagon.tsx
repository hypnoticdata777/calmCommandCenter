import { motion, useReducedMotion } from "motion/react";
import { HEPTAGON_SLOW } from "../constants/heptagons";

interface RollingHeptagonProps {
  delay?: number;
  duration?: number;
  xPath?: string[];
  yPath?: string[];
  rotatePath?: number[];
  opacity?: number;
}

// PROJECT BEACON
// Owned by Layout as ambient decoration behind every route.
// Config lives in constants/heptagons.ts so all three instances share one map.
// Hidden below md to keep mobile page copy readable.
export function RollingHeptagon({
  delay = HEPTAGON_SLOW.delay,
  duration = HEPTAGON_SLOW.duration,
  xPath = HEPTAGON_SLOW.xPath,
  yPath = HEPTAGON_SLOW.yPath,
  rotatePath = HEPTAGON_SLOW.rotatePath,
  opacity = HEPTAGON_SLOW.opacity,
}: RollingHeptagonProps) {
  const prefersReducedMotion = useReducedMotion();
  const size = 300;
  const sides = 7;

  const points = Array.from({ length: sides }, (_, i) => {
    const angle = (i * 2 * Math.PI) / sides - Math.PI / 2;
    const x = size / 2 + (size / 2) * Math.cos(angle);
    const y = size / 2 + (size / 2) * Math.sin(angle);
    return `${x},${y}`;
  }).join(" ");

  if (prefersReducedMotion) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] hidden md:block">
      <motion.div
        animate={{
          x: xPath,
          y: yPath,
          rotate: rotatePath,
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
        className="absolute top-1/2 left-1/2"
        style={{ width: size, height: size, willChange: "transform" }}
      >
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="absolute inset-0"
          style={{ filter: "drop-shadow(0 0 8px rgba(var(--blob-rgb), 0.3))" }}
        >
          <polygon
            points={points}
            fill="none"
            style={{ stroke: `rgba(var(--blob-rgb), ${opacity})` }}
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <motion.div
          className="absolute bg-brand rounded-full"
          style={{
            width: 20,
            height: 20,
            left: "50%",
            top: "50%",
            marginLeft: -10,
            marginTop: -10,
            willChange: "transform",
          }}
          animate={{
            x: [0, -80, 75, -85, 80, -70, 90, 0],
            y: [0, 85, -70, 80, -75, 70, -80, 0],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }}
        />
      </motion.div>
    </div>
  );
}
