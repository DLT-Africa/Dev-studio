"use client";

import { IoArrowBack } from "react-icons/io5";
import { motion } from "framer-motion";

const PersonalInfo = ({ initialData, updateData, onBack }) => {
  return (
    <section className="flex flex-col gap-[95px] w-full items-center relative justify-center pt-[78px] pb-[65px] select-none">
      <div className="flex flex-col items-center gap-[15px]">
        <h1 className="text-[#FC7C13] text-[64px] font-semibold">Personal Information</h1>
        <p className="text-[#F7FCFE] font-medium text-[18px]">Let’s get to know you better.</p>
      </div>

      <form
        className="flex flex-col w-full items-center gap-[50px]"
        onSubmit={(e) => {
          e.preventDefault();
        
        }}
      >
        <div className="w-[60%] grid grid-cols-2 gap-x-[151px] gap-y-[25px] items-center justify-center">
          <div className="w-full flex flex-col gap-[20px] justify-start items-stretch">
            <label htmlFor="fullName" className="text-left text-[#F7FCFE] cursor-pointer font-semibold text-[22px] tracking-[2px]">
              Full name
            </label>
            <input
              placeholder="DLT Hub"
              id="fullName"
              type="text"
              value={initialData.fullName}
              onChange={(e) => updateData({ fullName: e.target.value })}
              className="font-normal text-[#7B8B76] text-[16px] input-radial p-[10px] rounded-[10px] outline-none h-[55px] border-[#464646] border-[1px]"
            />
          </div>

          <div className="w-full flex flex-col gap-[20px] justify-start items-stretch">
            <label htmlFor="country" className="text-left text-[#F7FCFE] cursor-pointer font-semibold text-[22px] tracking-[2px]">
              Country
            </label>
            <input
              placeholder="USA"
              id="country"
              type="text"
              value={initialData.country}
              onChange={(e) => updateData({ country: e.target.value })}
              className="font-normal text-[#7B8B76] text-[16px] input-radial p-[10px] rounded-[10px] outline-none h-[55px] border-[#464646] border-[1px]"
            />
          </div>

          <div className="w-full flex flex-col gap-[20px] justify-start items-stretch">
            <label htmlFor="email" className="text-left text-[#F7FCFE] cursor-pointer font-semibold text-[22px] tracking-[2px]">
              Email Address
            </label>
            <input
              placeholder="dlt@hub.com"
              id="email"
              type="text"
              value={initialData.email}
              onChange={(e) => updateData({ email: e.target.value })}
              className="font-normal text-[#7B8B76] text-[16px] input-radial p-[10px] rounded-[10px] outline-none h-[55px] border-[#464646] border-[1px]"
            />
          </div>

          <div className="w-full flex flex-col gap-[20px] justify-start items-stretch">
            <label htmlFor="calendly" className="text-left text-[#F7FCFE] cursor-pointer font-semibold text-[22px] tracking-[2px]">
              Calendly link
            </label>
            <input
              placeholder="https://..."
              id="calendly"
              type="text"
              value={initialData.calendly}
              onChange={(e) => updateData({ calendly: e.target.value })}
              className="font-normal text-[#7B8B76] text-[16px] input-radial p-[10px] rounded-[10px] outline-none h-[55px] border-[#464646] border-[1px]"
            />
          </div>

          <div className="w-full flex flex-col gap-[20px] justify-start items-stretch">
            <label htmlFor="phoneNo" className="text-left text-[#F7FCFE] cursor-pointer font-semibold text-[22px] tracking-[2px]">
              Phone number
            </label>
            <input
              placeholder="000 000 000"
              id="phoneNo"
              type="text"
              value={initialData.phoneNo}
              onChange={(e) => updateData({ phoneNo: e.target.value })}
              className="font-normal text-[#7B8B76] text-[16px] input-radial p-[10px] rounded-[10px] outline-none h-[55px] border-[#464646] border-[1px]"
            />
          </div>

          <div className="w-full flex flex-col gap-[20px] justify-start items-stretch">
            <label htmlFor="linkedIn" className="text-left text-[#F7FCFE] cursor-pointer font-semibold text-[22px] tracking-[2px]">
              LinkedIn
            </label>
            <input
              placeholder="https://..."
              id="linkedIn"
              type="text"
              value={initialData.linkedIn}
              onChange={(e) => updateData({ linkedIn: e.target.value })}
              className="font-normal text-[#7B8B76] text-[16px] input-radial p-[10px] rounded-[10px] outline-none h-[55px] border-[#464646] border-[1px]"
            />
          </div>

          <div className="w-full flex flex-col gap-[20px] justify-start items-stretch">
            <label htmlFor="twitter" className="text-left text-[#F7FCFE] cursor-pointer font-semibold text-[22px] tracking-[2px]">
              X (formerly Twitter)
            </label>
            <input
              placeholder="https://..."
              id="twitter"
              type="text"
              value={initialData.twitter}
              onChange={(e) => updateData({ twitter: e.target.value })}
              className="font-normal text-[#7B8B76] text-[16px] input-radial p-[10px] rounded-[10px] outline-none h-[55px] border-[#464646] border-[1px]"
            />
          </div>
        </div>

        <button type="submit" className="bg-buttonOrange text-[#fff] text-[16px] font-medium p-[10px] w-[50%] rounded-[10px]">
          Submit
        </button>
      </form>
      <motion.button
        type="button"
        onClick={onBack}
        className="bg-gray-500 absolute left-8 text-[#fff] text-[24px] font-medium p-[20px] rounded-[10px]"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        whileHover={{ scale: 1.1, backgroundColor: "#555" }}
      >
        <IoArrowBack />
      </motion.button>
    </section>
  );
};

export default PersonalInfo;
