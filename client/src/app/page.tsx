"use client";
import Image from "next/image";
import Nav from "./components/Nav";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import Lottie from "lottie-react";
import ethAnimation from "./jsonData/main animation.json"
import Services from "./components/Services";


export default function Home() {
  return (
   <main className="h-screen justify-center relative pt-[50px] ">
  
  {/* Blur Background Container */}
  <div className="absolute inset-0 -z-10">
    <div className="fixed right-[-20%] bottom-[-2%] w-[1000px] h-[1000px] custom-radial opacity-40 blur-3xl rounded-[50%]"></div>
    <div className="fixed left-[3%] top-[-20%] w-[700px] h-[700px] custom-radial opacity-40 blur-3xl rounded-[50%]"></div>
  </div>

  {/* Other Components */}
  <div className="w-full">
    <Lottie className="w-full h-[700.63px]" animationData={ethAnimation} loop={true} />
  </div>
  <Hero />
  <Services />

  <div className="h-[500vh]">hi</div>
  <div className="h-[200px]"></div>

</main>

  );
}
