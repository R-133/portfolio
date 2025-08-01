// components/TiltImage.tsx
"use client";
import { useState } from "react";

export default function ExplodingImage() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -30;
    setRotate({ x, y });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-[300px] h-[300px] transition-transform duration-300"
      style={{
        perspective: "1000px",
      }}
    >
      <img
        src="/logo.png"
        alt="3D Tilt Logo"
        className="w-full h-full object-cover rounded-xl shadow-xl"
        style={{
          transform: `rotateX(${rotate.y}deg) rotateY(${rotate.x}deg)`,
          transformStyle: "preserve-3d",
        }}
      />
    </div>
  );
}
