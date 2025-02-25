


import dltImage from "../../../public/dltfooter.png";
import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="h-[582px] w-full border-t-[#3BF500] border-t-[1px] px-[78px] py-[84px] bg-[#000000] bg-footer-bg background font-poppins">


      <div className="flex items-start gap-[187px]">
        <div className="flex flex-col items-center gap-[20px] w-[223.03px]">
          <div className="flex flex-col gap-[10px] items-center">
            <Image src={dltImage} />
            <p className="text-[#FEA650] text-[16px] font-medium ">
              innovating through Web 3...
            </p>
          </div>
          <div className="flex items-center text-[#000000] text-center text-[24px] gap-[10px] w-[170px]">
            <a
              href="https://github.com/DLT-Africa"
              target="_blank"
              className="bg-white p-[13px] rounded-full"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/company/dlt-africa"
              target="_blank"
              className="bg-white p-[13px] rounded-full"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://x.com/dlt_africa"
              target="_blank"
              className="bg-white p-[13px] rounded-full"
            >
              <BsTwitterX />
            </a>
          </div>
        </div>

        <div className="w-[310px] flex flex-col gap-3">
          <h1 className="text-[#FEA650] font-openSans text-[24px] font-bold ">Contact Us</h1>
          <p className=" font-sourceSans text-[16px]  font-normal ">
          66 Central Road, Dartford DA1 5, UN
          </p>
          <div>
            <h3 className=" font-openSans text-[16px] font-bold ">For more info about our Classes</h3>
            <p className=" font-sourceSans text-[16px]  font-normal "> (44) 7957 120395</p>
          </div>
        </div>

        <div className="flex flex-col  justify-start items-start gap-[32px]">
        <h1 className="text-[#FEA650] font-poppins text-[16px] font-medium ">Subscribe to our newsletter</h1>

        <form >
          
            <input type="text" className="w-[255px] p-[10px] bg-transparent text-[#FEA650] placeholder:text-[#FEA650] outline-none placeholder:opacity-70" placeholder="enter your email" />
            <button className="text-[#FEA650] font-poppins text-[16px] w-[196px] p-[10px] border-buttonOrange border rounded-[10px]">Subscribe</button>
        
        </form>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
