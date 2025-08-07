"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar"; 
import Image from "next/image";
import SkillsSection from "@/components/SkillsSection";
import ExperienceTimeline  from "@/components/ExperienceTimeline";

const text = "Дашдорж Гэлэгжамц";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="">
        <section
          id="home"
          className="min-h-screen bg-black flex flex-col-reverse md:flex-row items-center justify-around gap-10 px-6 py-20"
        >
          <div className="text-center md:text-left max-w-xl">
            <motion.h1
              className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Сайн уу? Би бол
            </motion.h1>

            <motion.div className="flex justify-center md:justify-start flex-wrap">
              {text.split("").map((char, index) => (
                <motion.span
                  key={index}
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>

            <motion.h2
              className="text-xs sm:text-sm md:text-base font-bold text-gray-300 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: text.length * 0.05 + 0.2 }}
            >
              Хөгжүүлэгч
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Image
              src="/profile2.jpg"
              alt="profile"
              height={250}
              width={250}
              className="rounded-full border-2 border-cyan-600 shadow-xl"
            />
          </motion.div>
        </section>


       <motion.section
  id="about"
  className="min-h-screen bg-black flex flex-col md:flex-row items-center justify-evenly px-4 py-10 scroll-mt-20 gap-8"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true, amount: 0.3 }}
>
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    viewport={{ once: true }}
  >
    <Image
      src="/logo.png"
      alt="logo"
      height={250}
      width={250}
      className="drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]"
    />
  </motion.div>

  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.5 }}
    viewport={{ once: true }}
    className="max-w-lg w-full text-center md:text-left"
  >
    <motion.h1
      className="text-4xl font-bold mb-4 text-cyan-400"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      Миний тухай
    </motion.h1>

    <motion.h2
      className="text-sm font-bold text-gray-300 mt-2 text-justify"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      viewport={{ once: true }}
    >
      Би ШУТИС-ийг 2025 онд Программ хангамжийн чиглэлээр төгссөн. Дипломын ажлын хүрээнд хиймэл оюун ухаанд суурилсан мал илрүүлэх систем хөгжүүлсэн бөгөөд YOLOv8n object detection, Flask (Python) backend, React Native, SQLite зэрэг технологиудыг ашигласан. Мөн React, Next.js, Tailwind CSS зэрэг орчин үеийн веб хөгжүүлэлтийн технологиудын мэдлэгтэй.
      <br /><br />
      Миний зорилго бол тасралтгүй суралцаж, ур чадвараа хөгжүүлэн, бодит хэрэгцээтэй, нийгэмд үр өгөөжтэй программ хангамж бүтээх.
    </motion.h2>
  </motion.div>
</motion.section>


        <SkillsSection/>

        <ExperienceTimeline/>

      </main>
<footer className="flex flex-col md:flex-row items-center justify-around py-8 bg-black text-white border-t border-cyan-400 space-y-4 md:space-y-0">
  <div className="text-md font-semibold hover:text-cyan-300 transition">
    <a
      href="https://github.com/R-133"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <path d="M12 .5C5.6.5.5 5.6.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.3-3.9-1.3-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.6 1.2 1.6 1.2 1 .1 2.3.6 2.9.7.2-.7.4-1.3.6-1.6-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.3a11.4 11.4 0 0 1 6 0c2.3-1.6 3.3-1.3 3.3-1.3.6 1.7.2 3 .1 3.3.8.8 1.2 1.8 1.2 3.1 0 4.6-2.8 5.6-5.4 5.9.4.3.7.9.7 1.8v2.7c0 .3.2.7.8.6A10.7 10.7 0 0 0 23.5 12C23.5 5.6 18.4.5 12 .5z" />
      </svg>
      GitHub
    </a>
  </div>

  <div className="text-md font-semibold select-text">
    <div className="flex items-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-white" viewBox="0 0 24 24">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
      glegeee0@gmail.com
    </div>
  </div>

  <div className="text-md font-semibold">
    <div className="flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <path d="M12 2C8.13 2 5 5.13 5 9c0 7 7 13 7 13s7-6 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5z" />
      </svg>
      Ulaanbaatar, Mongolia
    </div>
  </div>
</footer>


    </>
  );
}
