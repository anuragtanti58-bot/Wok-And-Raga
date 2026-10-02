import React, { useRef, useState, useEffect, useCallback } from "react";
import { cn } from "../../lib/utils";

export type GlowColor = "orange" | "gold" | "amber" | "neutral";

export interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: GlowColor;
  size?: number;
  width?: string | number;
  height?: string | number;
  customSize?: boolean;
  as?: React.ElementType;
}

const colorMap: Record<GlowColor, { spot: string; border: string; bgHighlight: string }> = {
  orange: {
    spot: "rgba(241, 100, 62, 0.18)",
    border: "rgba(241, 100, 62, 0.45)",
    bgHighlight: "rgba(241, 100, 62, 0.04)"
  },
  gold: {
    spot: "rgba(250, 188, 77, 0.18)",
    border: "rgba(250, 188, 77, 0.45)",
    bgHighlight: "rgba(250, 188, 77, 0.04)"
  },
  amber: {
    spot: "rgba(230, 140, 30, 0.18)",
    border: "rgba(230, 140, 30, 0.45)",
    bgHighlight: "rgba(230, 140, 30, 0.04)"
  },
  neutral: {
    spot: "rgba(255, 255, 255, 0.08)",
    border: "rgba(255, 255, 255, 0.22)",
    bgHighlight: "rgba(255, 255, 255, 0.02)"
  }
};

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className,
  glowColor = "orange",
  size = 350,
  width,
  height,
  customSize = false,
  as: Component = "div",
  style,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);
  const rafId = useRef<number | null>(null);

  const colors = colorMap[glowColor] || colorMap.orange;

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    // Only track fine pointer (mouse/trackpad), do not hijack touch/pen gestures
    if (e.pointerType === "touch") return;

    const card = cardRef.current;
    if (!card) return;

    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
    }

    rafId.current = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    });
  }, []);

  const handlePointerEnter = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch") return;
    setIsHovered(true);
  }, []);

  const handlePointerLeave = useCallback(() => {
    setIsHovered(false);
    setPosition({ x: -1000, y: -1000 });
    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
  }, []);

  useEffect(() => {
    return () => {
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  const dimensionStyles: React.CSSProperties = {};
  if (!customSize) {
    if (width) dimensionStyles.width = typeof width === "number" ? `${width}px` : width;
    if (height) dimensionStyles.height = typeof height === "number" ? `${height}px` : height;
  }

  return (
    <Component
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      className={cn(
        "group relative overflow-hidden rounded-xl bg-surface-container transition-all duration-300",
        "border border-outline-variant/15 hover:border-transparent",
        "touch-manipulation", // Crucial: Allows natural vertical scrolling on mobile touchscreens
        className
      )}
      style={{
        ...dimensionStyles,
        ...style
      }}
      {...props}
    >
      {/* Dynamic Pointer Spotlight Glow Layer */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(${size}px circle at ${position.x}px ${position.y}px, ${colors.spot}, transparent 80%)`
        }}
        aria-hidden="true"
      />

      {/* Dynamic Border Illumination Layer */}
      <div
        className="pointer-events-none absolute inset-0 z-0 rounded-xl transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          padding: "1px",
          background: `radial-gradient(${size * 0.75}px circle at ${position.x}px ${position.y}px, ${colors.border}, transparent 70%)`,
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude"
        }}
        aria-hidden="true"
      />

      {/* Card Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </Component>
  );
};

export default SpotlightCard;
