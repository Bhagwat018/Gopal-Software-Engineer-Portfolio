'use client'

import Header from "@/components/Header";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";


export default function About() {
  const { theme } = useTheme();

  return (
    <div className={` transition-colors duration-300 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
      }`}>
      <Header />

      <main className="flex flex-col md:flex-row  w-full max-w-7xl mx-auto flex-col items-center justify-center py-10 px-6 md:px-16">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center gap-8 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-4"
          >
            <Image src="/images/aboutBoy.png" alt="Profile" width={500} height={500} className="rounded-full" />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center gap-8 text-center"
        >
          <h1 className="max-w-4xl text-lg md:text-3xl lg:text-5xl font-bold leading-tight">
            About Me
          </h1>
          <p className="max-w-4xl text-md md:text-xl lg:text-2xl text-left">
            I’m a React Native and Frontend Developer with 2+ years of hands-on experience building scalable, high-performance mobile applications and dynamic web platforms. I’ve worked extensively with React Native, JavaScript/TypeScript, Firebase, and REST APIs to deliver real-world, production-ready solutions.

            My experience includes developing responsive and reusable UI components, integrating APIs, handling media uploads, real-time chat, notifications, and live streaming, and implementing secure authentication and payment flows. I’ve worked with Firebase Auth, Firestore, FCM, Stripe, Agora SDK, and AWS IVS, and have experience managing app deployments on Google Play Console and Apple Developer accounts.

            I focus on clean, maintainable code, performance optimization, and modular architecture, ensuring smooth cross-platform experiences. I enjoy collaborating with cross-functional teams to translate business requirements into reliable, user-centric applications.

            I’m passionate about building intuitive digital experiences, continuously improving my technical skills, and adapting quickly to new technologies. Currently, I’m seeking a challenging opportunity where I can grow technically, contribute to impactful projects, and add value to a forward-thinking development team.</p>

        </motion.div>
      </main>
    </div>
  );
}
