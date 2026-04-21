"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import {
  Leaf,
  Truck,
  ShieldCheck,
  Recycle,
  
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function About() {
  return (
  <>  <Header/>
    <div className="bg-white text-gray-800 flex flex-col items-center justify-center gap-10 w-full font-[Poppins]">

      {/* ================= HERO ================= */}
      <section className="relative h-screen min-h-[600px] flex w-full items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/fruits-hero.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-orange-100" />

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 opacity-20 text-green-300 animate-pulse">
          <Leaf size={100} />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20 text-green-300 animate-pulse delay-300">
          <Leaf size={80} />
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative z-10 text-white flex flex-col items-center justify-center gap-4 max-w-4xl px-6 mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-black mb-6">
           <strong className=" p-3 text-green/50"> Fresh Fruits,</strong> Straight From Nature
          </h1>
          <p className="text-xl md:text-2xl text-black mb-8 max-w-2xl ">
            At Farmnest, we bring handpicked, farm-fresh fruits directly to your
            doorstep with care, quality, and freshness you can trust.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full  justify-center items-center">
            <button className="bg-green-500 text-white px-8 py-7 w-[30%] rounded-full  hover:bg-green-600 transition-all duration-300 font-semibold">
              Shop Fresh Fruits
            </button>
            <button className="bg-black text-white px-8 py-4 w-[30%] rounded-full  hover:bg-white hover:text-[#2E7D32] transition-all duration-300 font-semibold">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Wave SVG */}
        <div className="absolute bottom-0 w-full">
          <svg viewBox="0 0 1440 120" className="w-full h-20 md:h-32">
            <path
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              className="fill-white"
            />
          </svg>
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section className="py-20 md:py-32 px-6   ">
        <div className=" flex flex-col w-full lg:gap-20 items-center">
          

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl text-center font-bold text-[#2E7D32] leading-tight">
              Our Story
            </h2>
            <p className="text-gray-600  max-w-3xl text-center leading-relaxed text-lg">
              Farmnest was created with one simple goal: to make fresh, healthy
              fruits easy to access for everyone. We partner with trusted farms and
              carefully select every fruit so families can enjoy natural goodness
              every day.
            </p>
            <p className="text-gray-600 max-w-3xl text-center leading-relaxed text-lg">
              Every piece of fruit tells a story of dedication, care, and commitment
              to quality that you can taste in every bite.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="bg-[#2E7D32] flex  gap-10   ">
        <div className="w-full flex flex-col  gap-15 items-center justify-center mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center flex flex-col gap-5  mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Why Choose Us
            </h2>
            <p className="text-white text-lg mx-auto">
              We're committed to bringing you the best quality fruits with exceptional service
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex  gap-8"
          >
            {[
              {
                icon: <Leaf size={40} />,
                title: "Farm Fresh Daily",
                desc: "Fresh fruits sourced directly from trusted farms every morning.",
              },
              {
                icon: <Truck size={40} />,
                title: "Fast Delivery",
                desc: "Reliable same-day delivery straight to your doorstep.",
              },
              {
                icon: <ShieldCheck size={40} />,
                title: "Quality Guaranteed",
                desc: "Carefully hand-selected for freshness, taste, and nutrition.",
              },
              {
                icon: <Recycle size={40} />,
                title: "Eco-Friendly",
                desc: "100% sustainable packaging for a healthier planet.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white p-8  hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="text-[#F57C00]  mb-4 group-hover:scale-90 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-bold text-xl mb-3 text-[#2E7D32]">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
     

      {/* ================= CTA ================= */}
      <section className="relative py-24 md:py-32 text-center h-100 w-full flex flex-col items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-orange-500" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10"><Leaf size={100} /></div>
          <div className="absolute bottom-10 right-10"><Leaf size={120} /></div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative z-10 px-6 max-w-4xl flex flex-col items-center justify-center gap-10 mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Ready to enjoy farm-fresh fruits?
          </h2>
          <p className="mb-8 text-xl md:text-2xl text-center text-gray-100  mx-auto">
            Explore our collection and bring freshness home today.
          </p>
          <button className="bg-white w-[80%] text-[#2E7D32] px-10 py-4 rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 font-bold text-lg">
            Start Shopping
          </button>
        </motion.div>
      </section>
      <Footer/>
    </div>
    </>
  );
}
