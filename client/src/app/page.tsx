"use client";
import Image from "next/image";
import Nav from "./components/Nav";
import { motion } from "framer-motion";
import Hero from "./components/Hero";

import Services from "./components/Services";
import Partners from "./components/Partners";
import YourIdea from "./components/YourIdea";
import Testimonial from "./components/Testimonial";



export default function Home() {
  return (
   <main className=" font-poppins justify-center relative pt-[50px] ">
  
 
  <div className="absolute inset-0 -z-10">
    <div className="fixed right-[-20%] bottom-[-2%] w-[1000px] h-[1000px] custom-radial opacity-40 blur-3xl rounded-[50%]"></div>
    <div className="fixed left-[3%] top-[-20%] w-[700px] h-[700px] custom-radial opacity-40 blur-3xl rounded-[50%]"></div>
  </div>

  
  <Hero />
  <Services />
  <Partners/>
  <YourIdea/>
  <Testimonial/>
 

</main>

  );
}
