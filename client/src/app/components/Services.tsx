"use client"; // Required for animations in Next.js
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import software from "../../../public/software.png";
import blockchain from "../../../public/blockchain.png";
import content from "../../../public/content.png";
import mobile from "../../../public/mobileways.png";
import websit from "../../../public/website.png";
import dlt from "../../../public/dlt-color.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Services = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { amount: 0.3, once: false }); // Triggers both ways

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <section
      ref={ref}
      className="w-full flex flex-col pt-[62px] px-[50px] gap-[51px]"
    >
      {/* Header */}
      <motion.div
        className="w-full flex flex-col items-center text-center gap-[25px]"
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
      >
        <p className="text-[#FEA650] font-medium text-[16px] ">What we do</p>
        <p className="text-[#F7FCFE] font-semibold text-[40px] capitalize">
          PROJECTS WE WORK ON
        </p>
      </motion.div>

      {/* Projects */}
      <div className="flex flex-col items-center w-full">
        <div className="w-full flex flex-col items-center gap-[125px]">
          {/* First Row */}
          <motion.div
            className="flex relative items-center gap-[300px]"
            animate={controls}
            variants={fadeInUp}
          >
            <motion.div
              className="relative bottom-[-100px] flex flex-col items-start w-[271px]"
              whileHover={{ scale: 1.05 }}
            >
              <Image src={software} width={271} height={296.66} />
              <p className="font-medium text-[24px] text-[#F7FCFE]">
                Software Development
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col items-start w-[349px]"
              whileHover={{ scale: 1.05 }}
            >
              <Image src={blockchain} width={349} height={382.05} />
              <p className="font-medium text-[35px] text-[#F7FCFE]">
                Blockchain Development
              </p>
            </motion.div>

            <motion.div
              className="relative bottom-[-100px] flex flex-col items-start w-[271px]"
              whileHover={{ scale: 1.05 }}
            >
              <Image src={content} width={271} height={296.66} />
              <p className="font-medium text-[24px] text-[#F7FCFE]">
                Content Writing
              </p>
            </motion.div>
          </motion.div>

          {/* Second Row */}
          <motion.div
            className="flex relative items-center gap-[300px]"
            animate={controls}
            variants={fadeInUp}
          >
            <motion.div
              className="relative bottom-[-100px] flex flex-col items-start w-[349px]"
              whileHover={{ scale: 1.05 }}
            >
              <Image src={mobile} width={349} height={382.05} />
              <p className="font-medium text-[35px] text-[#F7FCFE]">
                Mobile App Development
              </p>
            </motion.div>

            {/* Center Animated DLT Image */}
            <motion.div className="relative flex items-center justify-center">
              {/* Soft Glow Effect Behind the Image */}
              <div className="absolute w-[500px] h-[500px] bg-custom-radial opacity-50 blur-2xl rounded-full -z-10"></div>

              {/* DLT Image - No Blur Effect Directly Applied */}
              <motion.div
                whileHover={{ rotate: 10 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="relative"
              >
                <Image src={dlt} width={349} height={382.05} alt="DLT Logo" />
              </motion.div>
            </motion.div>

            <motion.div
              className="relative bottom-[-100px] flex flex-col items-start w-[349px]"
              whileHover={{ scale: 1.05 }}
            >
              <Image src={websit} width={349} height={382.05} />
              <p className="font-medium text-[37px] text-[#F7FCFE]">
                Website Development
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
