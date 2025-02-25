import Image from "next/image";
import spinning from "../../../public/spinnigbg.png"

const page = () => {
  return (
    <main className="font-poppins justify-center h-[100vh] flex items-center relative pt-[50px]">
      <div className="absolute inset-0 -z-10">
        <div className="fixed right-[-20%] bottom-[-40%] w-[1000px] h-[1200px] custom-radial opacity-40 blur-3xl rounded-[50%]"></div>
      </div>

      <div className="absolute w-[1500.21px] h-[1500.21px] flex items-center justify-center">
    <Image
      src={spinning}
      fill
      className="animate-spin object-contain [animation-duration:10s]"
      alt="Spinning Background"
    />
  </div>

      <h1 className=" font-poppins text-[48px] font-semibold w-[680px] text-center">You have successfully submitted your project details! </h1>

      
    </main>
  );
};

export default page;
