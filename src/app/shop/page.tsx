import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="relative w-full h-[316px] bg-[url('/images/s-1.png')] bg-cover bg-center flex justify-center items-center flex-col">
        <h2 className="font-Poppins font-medium text-4xl md:text-5xl text-[#000000]">Shop</h2>
        <div className="flex items-center mt-2">
          <p className="font-Poppins font-medium text-base leading-6">Home</p>
          <Image src="/images/sign.png" alt="sign" width={20} height={20} className="mx-2" />
          <p className="font-Poppins font-light">Shop</p>
        </div>
      </div>

      {/* Top-bar */}
      <div className="w-full h-auto bg-[#F9F1E7] flex flex-col md:flex-row justify-around items-center p-4">
        {/* LHS */}
        <div className="flex gap-4 items-center flex-wrap">
          <Image src={"/images/ic-5.png"} alt="icon" width={85} height={30} />
          <Image src={"/images/ic-6.png"} alt="icon" width={28} height={28} />
          <Image src={"/images/ic-7.png"} alt="icon" width={24} height={24} />
          <p className="font-Poppins font-medium text-sm md:text-base">Showing 1–16 of 32 results</p>
        </div>

        {/* RHS */}
        <div className="flex gap-4 items-center flex-wrap mt-4 md:mt-0">
          <p className="font-Poppins text-sm md:text-base">Show</p>
          <button className="w-[55px] h-[40px] text-sm md:text-base bg-[#FFFFFF] text-[#9F9F9F]">16</button>
          <p className="font-Poppins text-sm md:text-base text-[#000000]">Sort by</p>
          <button className="w-[120px] h-[40px] text-sm md:text-base bg-[#FFFFFF] text-[#9F9F9F]">Default</button>
        </div>
      </div>

      {/* Image Grid Section */}
      <div className="p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array(16).fill(0).map((_, i) => (
          <Image
            key={i}
            src={`/images/h-${(i % 4) + 6}.png`}
            alt={`img-${i}`}
            width={285}
            height={446}
            className="w-full h-auto object-cover"
          />
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-center items-center mt-8">
        <div className="flex gap-4">
          <button className="w-[50px] h-[50px] rounded-md bg-[#B88E2F] text-[#FFFFFF]">1</button>
          <button className="w-[50px] h-[50px] rounded-md bg-[#F9F1E7] text-[#000000]">2</button>
          <button className="w-[50px] h-[50px] rounded-md bg-[#F9F1E7] text-[#000000]">3</button>
          <button className="w-[80px] h-[50px] rounded-md bg-[#F9F1E7] text-[#000000]">Next</button>
        </div>
      </div>

      {/* Bottom-bar */}
      <div className="w-full h-auto bg-[#FAF3EA] p-6">
        <div className="w-full max-w-[1334px] mx-auto flex flex-wrap gap-4 justify-between items-center">
          <Image src={"/images/Frame-1.png"} alt="Frame-1" width={200} height={50} />
          <Image src={"/images/Frame-2.png"} alt="Frame-2" width={200} height={50} />
          <Image src={"/images/Frame-3.png"} alt="Frame-3" width={200} height={50} />
          <Image src={"/images/Frame-4.png"} alt="Frame-4" width={200} height={50} />
        </div>
      </div>
    </div>
  );
};

export default Page;
