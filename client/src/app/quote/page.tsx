"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import spining from "../../../public/spinnigbg.png";
import Testimonial from "../components/Testimonial";
import GetAQuoteForm from "../components/GetAQuoteForm";
import PersonalInfo from "../components/PersonalInfo";


const formVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.4 } },
};

const Page = () => {
 
  const [currentForm, setCurrentForm] = useState("quote");

 
  const [formData, setFormData] = useState({
    quote: { tags: "", doc: "", description: "" },
    personal: {
      fullName: "",
      country: "",
      email: "",
      calendly: "",
      phoneNo: "",
      linkedIn: "",
      twitter: "",
    },
  });

  const updateQuoteData = (data) => {
    setFormData((prev) => ({ ...prev, quote: { ...prev.quote, ...data } }));
  };

  const updatePersonalData = (data) => {
    setFormData((prev) => ({ ...prev, personal: { ...prev.personal, ...data } }));
  };

  return (
    <main className="font-poppins justify-center relative pt-[50px]">
    
      <div className="absolute inset-0 -z-10">
        <div className="fixed right-[-20%] bottom-[-20%] w-[1000px] h-[1200px] custom-radial opacity-40 blur-3xl rounded-[50%]"></div>
      </div>

   
      <AnimatePresence mode="wait">
        {currentForm === "quote" && (
          <motion.div key="quote" variants={formVariants} initial="initial" animate="animate" exit="exit">
            <GetAQuoteForm
              initialData={formData.quote}
              updateData={updateQuoteData}
              onContinue={() => setCurrentForm("personal")}
            />
          </motion.div>
        )}

        {currentForm === "personal" && (
          <motion.div key="personal" variants={formVariants} initial="initial" animate="animate" exit="exit">
            <PersonalInfo
              initialData={formData.personal}
              updateData={updatePersonalData}
              onBack={() => setCurrentForm("quote")}
            />
          </motion.div>
        )}
      </AnimatePresence>

    
      <div className="w-full relative overflow-hidden">
        <Image
          src={spining}
          alt="Spinning background"
          className="absolute animate-spin [animation-duration:10s] top-[40px]"
        />
        <Testimonial />
      </div>
    </main>
  );
};

export default Page;
