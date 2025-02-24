"use client";

import { useState, useRef, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { motion } from "framer-motion";
import { RiHome6Line } from "react-icons/ri";
import { HiCog } from "react-icons/hi";
import { PiFolderFill } from "react-icons/pi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Handle clicks outside the sidebar to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div
      ref={sidebarRef}
      className="h-[932px] w-[932px] fixed right-[-800px] top-[-30px] z-10"
    >
      <motion.div
        className={`w-full h-full bg-[#000000] rounded-full shadow-lg flex items-center justify-start pl-[50px] relative transition-all duration-500 ${
          isOpen ? "border-none" : "border-[1px]"
        }`}
      >
        {/* Outer circle blurred background (only visible when modal is open) */}
        {isOpen && (
          <div className="absolute inset-0 rounded-full bg-[#000000] blur-lg"></div>
        )}

        {/* Outer circle content layer */}
        <div className="relative z-10 flex items-center">
          <HiMenuAlt3
            className="text-[50px] text-[#FC7C13] cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />

          {/* Inner circle */}
          <motion.div
            initial={{ x: -200, scale: 0, opacity: 0 }}
            animate={{
              x: isOpen ? -500 : -200,
              scale: isOpen ? 1 : 0,
              opacity: isOpen ? 1 : 0,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className="w-[635px] h-[582px] rounded-full bg-[#000000] absolute left-[-80px] shadow-lg flex items-center justify-center relative"
          >
            {/* Inner circle blurred background */}
            <div className="absolute inset-0 rounded-full bg-[#000000] blur-lg"></div>
            {/* Inner circle content layer */}
            <nav className="relative z-10 w-full h-full rounded-full flex items-center justify-start px-[37px] gap-[112px]">
              <HiMenuAlt3
                className="text-[50px] text-[#FC7C13] cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              />
              <div className="w-[302px] text-[22px] font-bold font-poppins text-[#FC7C13] flex flex-col gap-[75px]">
                <div className="w-full flex items-center justify-between">
                  <p>Home</p>
                  <RiHome6Line />
                </div>
                <div className="w-full flex items-center justify-between">
                  <p>Services</p>
                  <HiCog />
                </div>
                <div className="w-full flex items-center justify-between">
                  <p>Portfolio</p>
                  <PiFolderFill />
                </div>
              </div>
            </nav>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
