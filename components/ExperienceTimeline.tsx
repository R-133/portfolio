"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Intern",
    company: "Tab Solution Co.,Ltd",
    period: "2024 jan - 2022 feb",
    description: "Next.js, Prisma, GraphQL ашиглан веб хөгжүүлэлтэд оролцсон.",
  },
  {
    title: "Intern",
    company: "Chimege Systems",
    period: "2024 Nov - 2024 Dec",
    description: "Бэлэн API ашиглан бичлэгт хадмал хийдэг веб хийсэн.(Бодит төсөлд оролцоогүй.)",
  },
  {
    title: "Дараагийнх...",
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="contact" className="py-16 px-4 bg-black">
      <h2 className="text-3xl font-bold text-center mb-12">Ажлын туршлага</h2>

      <div className="relative border-l-2 border-blue-500 pl-6 space-y-12 max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-stone-950 p-6 rounded-xl shadow-md relative"
          >
            <div className="absolute -left-[38px] top-10 w-6 h-6 bg-blue-500 rounded-full border-4 border-white" />
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-sm text-gray-500">{exp.company} — {exp.period}</p>
            <p className="mt-2 text-gray-700">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
