"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar"; // зөв замаа тохируулна уу
import Image from "next/image";
import SkillsSection from "@/components/SkillsSection";

const text = "Дашдорж Гэлэгжамц";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="">
        <section id="home" className="h-screen bg-black flex items-center justify-evenly">
          <div>
            <motion.h1
              className="text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Сайн уу? Би бол
            </motion.h1>

            {/* Утгийг үсэг үсгээр нь анимэйт хийх хэсэг */}
            <motion.div className="flex">
              {text.split("").map((char, index) => (
                <motion.span
                  key={index}
                  className="text-4xl font-bold text-cyan-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>

            <motion.h2
              className="text-sm font-bold text-gray-300 mt-2"
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
              src="/profile.png"
              alt="profile"
              height={250}
              width={250}
              className="rounded-full border-2 border-cyan-600 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]"
            />
          </motion.div>
        </section>

       <motion.section
          id="about"
          className="h-screen bg-black flex items-center justify-evenly scroll-mt-20"
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
              alt="profile"
              height={250}
              width={250}
              className="drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]"
            />
            {/* <ExplodingImage/> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
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
              className="text-sm font-bold text-gray-300 mt-2 max-w-[40vw] text-justify"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              Би ШУТИС-ийг 2025 онд Программ хангамжийн чиглэлээр төгссөн. Дипломын ажлын хүрээнд хиймэл оюун ухаанд суурилсан мал илрүүлэх систем хөгжүүлсэн бөгөөд YOLOv8n object detection, Flask (Python) backend, React Native, SQLite зэрэг технологиудыг ашигласан. Мөн React, Next.js, Tailwind CSS зэрэг орчин үеийн веб хөгжүүлэлтийн технологиудын мэдлэгтэй.

              Миний зорилго бол тасралтгүй суралцаж, ур чадвараа хөгжүүлэн, бодит хэрэгцээтэй, нийгэмд үр өгөөжтэй программ хангамж бүтээх.
            </motion.h2>
          </motion.div>
        </motion.section>

        <SkillsSection/>

        <section id="contact" className="h-screen bg-black flex items-center justify-evenly">

          <motion.h1
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Github
          </motion.h1>

          <motion.h1
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            E-mail
          </motion.h1>
        </section>

      </main>
    </>
  );
}
