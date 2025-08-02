"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function ContactSection() {
  const [radius, setRadius] = useState(200);
  const [svgWidth, setSvgWidth] = useState(500);
  const [svgHeight, setSvgHeight] = useState(120);
  const [imageScale, setImageScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        // sm дэлгэц
        setRadius(100);
        setSvgWidth(300);
        setSvgHeight(80);
        setImageScale(0.5);
      } else if (window.innerWidth < 1024) {
        // md дэлгэц
        setRadius(150);
        setSvgWidth(400);
        setSvgHeight(100);
        setImageScale(0.75);
      } else {
        // lg ба түүнээс дээш
        setRadius(200);
        setSvgWidth(500);
        setSvgHeight(120);
        setImageScale(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [duration, setDuration] = useState(20);

  const techs = [
    { src: "/next.png", size: 100 },
    { src: "/react.png", size: 100 },
    { src: "/nodejs.png", size: 100 },
    { src: "/React-native.png", size: 150 },
    { src: "/flask.png", size: 150 },
    { src: "/postgres.png", size: 100 },
    { src: "/mysql.png", size: 50 },
  ];

  const cx = svgWidth / 2;
  const cy = svgHeight - 10;
  const arcRadiusX = cx - 50;
  const arcRadiusY = 30;
  const startX = cx - arcRadiusX;
  const endX = cx + arcRadiusX;

  const arcD = `
    M ${startX},${cy}
    A ${arcRadiusX},${arcRadiusY} 0 0 1 ${endX},${cy}
  `.trim();

  return (
    <motion.section
      id="skill"
      className="h-screen bg-black flex items-center justify-center relative overflow-hidden scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="absolute rounded-full flex items-center justify-center"
        style={{ width: radius * 2, height: radius * 2 }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: duration,
        }}
      >
        {techs.map((tech, i) => {
          const angle = (360 / techs.length) * i;
          const rad = (angle * Math.PI) / 180;
          const x = radius * Math.cos(rad);
          const y = radius * Math.sin(rad);
          const size = tech.size * imageScale;

          return (
            <Image
              key={i}
              src={tech.src}
              alt={`tech-${i}`}
              height={size}
              width={size}
              className="absolute"
              style={{ transform: `translate(${x}px, ${y}px)` }}
            />
          );
        })}
      </motion.div>

      <motion.div
        className="relative flex flex-col items-center justify-center z-10"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
      <svg
        width={svgWidth}
        height={svgHeight}
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 pointer-events-none"
      >
        <defs>
          <path id="skillArc" d={arcD} />
        </defs>
        <text
          className="text-[14px] md:text-[28px]" 
          fill="#22D3EE"
          fontWeight="bold"
          textAnchor="middle"
        >
          <textPath xlinkHref="#skillArc" startOffset="50%">
            Ур чадвар
          </textPath>
        </text>
      </svg>


      <div className="drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]">
        <Image
          src="/brain.png"
          alt="brain"
          height={0}
          width={0}
          sizes="(max-width: 768px) 150px, 300px"
          className="w-[150px] md:w-[300px] h-auto" 
        />
      </div>

      </motion.div>
    </motion.section>
  );
}
