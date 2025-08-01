"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function ContactSection() {
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

  return (
    <motion.section
      id="skill"
      className="h-screen bg-black flex items-center justify-center relative overflow-hidden scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Гол зураг */}
      <motion.div
        className="z-10"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image
          src="/brain.png"
          alt="brain"
          height={300}
          width={300}
          className="drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]"
        />
      </motion.div>

      {/* Эргэлдэх тойрог */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: duration,
        }}
        onMouseEnter={() => setDuration(60)} // удаашруулна
        onMouseLeave={() => setDuration(20)} // эргээд хурдна
      >
        {techs.map((tech, i) => {
          const angle = (360 / techs.length) * i;
          const radius = 200;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);
          return (
            <Image
              key={i}
              src={tech.src}
              alt="tech"
              height={tech.size}
              width={tech.size}
              className="absolute"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            />
          );
        })}
      </motion.div>
    </motion.section>
  );
}
