"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import illustration from "../../../public/travel _ travelling, airplane, aeroplane, plane, flight, choose, choice, man, people.png";

const YourIdea = () => {
  // Animation variants
  const formFieldVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const illustrationVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="flex items-center justify-start gap-[400px] pt-[100px] font-poppins relative overflow-hidden pb-[47px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Ambient background effects */}
      <motion.div 
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full"
        animate={{
          background: [
            "radial-gradient(circle, rgba(254, 166, 80, 0.1) 0%, transparent 70%)",
            "radial-gradient(circle, rgba(254, 166, 80, 0.15) 10%, transparent 70%)",
            "radial-gradient(circle, rgba(254, 166, 80, 0.1) 0%, transparent 70%)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          filter: "blur(40px)",
          zIndex: 0,
        }}
      />

      {/* Form Section */}
      <motion.div 
        className="pl-[50px] flex flex-col items-start justify-center gap-[20px] relative "
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        <motion.div 
          className="flex flex-col items-start gap-[25px]"
          variants={formFieldVariants}
        >
          <motion.h1 
            className="font-semibold text-[48px] text-[#F7FCFE] max-w-[570px]"
            whileHover={{
              textShadow: "0 0 8px rgba(247, 252, 254, 0.3)"
            }}
          >
            Got ideas? We've got the skill. Let's team up!
          </motion.h1>

          <motion.p 
            className="font-regular text-[18px] text-[#FEA650] max-w-[350px]"
            variants={formFieldVariants}
          >
            Kindly fill out the form and our representative will get back to you.
          </motion.p>
        </motion.div>

        <motion.form 
          className="flex flex-col items-start gap-[20px]"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          <motion.div className="flex flex-col items-start gap-[10px]">
            {/* Full Name Field */}
            <motion.div 
              className="flex flex-col items-start gap-[20px]"
              variants={formFieldVariants}
            >
              <label htmlFor="fullName" className="text-left text-[#F7FCFE] cursor-pointer font-semibold text-[22px] tracking-[2px]">
                Full name
              </label>
              <motion.input
                name="full name"
                id="fullName"
                placeholder="enter your full name"
                type="text"
                className="font-normal text-[#7B8B76] text-[16px] input-radial p-[10px] cursor-pointer rounded-[10px] w-[471px] h-[55px] border-[#464646] border-[1px]"
                whileFocus={{ scale: 1.02 }}
              />
            </motion.div>

            {/* Email Field */}
            <motion.div 
              className="flex flex-col items-start gap-[20px]"
              variants={formFieldVariants}
            >
              <label htmlFor="email" className="text-left text-[#F7FCFE] cursor-pointer font-semibold text-[22px] tracking-[2px]">
                Email address
              </label>
              <motion.input
                name="email"
                id="email"
                placeholder="enter your email address"
                type="text"
                className="font-normal text-[#7B8B76] text-[16px] input-radial p-[10px] cursor-pointer rounded-[10px] w-[471px] h-[55px] border-[#464646] border-[1px]"
                whileFocus={{ scale: 1.02 }}
              />
            </motion.div>

            {/* Message Field */}
            <motion.div 
              className="flex flex-col items-start gap-[20px]"
              variants={formFieldVariants}
            >
              <label htmlFor="reason" className="text-left text-[#F7FCFE] cursor-pointer font-semibold text-[22px] tracking-[2px]">
                Why are you reaching out to us?
              </label>
              <motion.textarea
                name="reason"
                id="reason"
                placeholder="message..."
                rows={2}
                className="font-normal text-[#7B8B76] text-[16px] input-radial p-[10px] cursor-pointer rounded-[10px] w-[471px] h-[55px] border-[#464646] border-[1px]"
                whileFocus={{ scale: 1.02 }}
              />
            </motion.div>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="bg-buttonOrange w-[196px] h-[55px] rounded-[10px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={formFieldVariants}
          >
            Send
          </motion.button>
        </motion.form>
      </motion.div>

      {/* Illustration Section */}
      <motion.div 
        className="flex items-center justify-start gap-[300px] pt-[100px] font-poppins"
        variants={illustrationVariants}
      >
        <motion.div
          whileHover={{ 
            scale: 1.02,
            rotate: 2
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10
          }}
        >
          <Image 
            src={illustration || "/placeholder.svg"}
            width={600}
            height={600}
            alt="Illustration"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default YourIdea;