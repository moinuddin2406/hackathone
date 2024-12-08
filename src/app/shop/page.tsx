import React from 'react';
import Image from 'next/image';

const page = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="relative w-full h-[316px] bg-[url('/images/s-1.png')] bg-cover bg-center flex justify-center items-center">
        <h2 className="font-Poppins font-medium text-4xl md:text-5xl text-[#000000]">Shop</h2>
      </div>

      {/* Image Grid Section */}
      <div className="p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <Image src={"/images/h-6.png"} alt="" width={285} height={446} className="w-full h-auto object-cover" />
        <Image src={"/images/h-7.png"} alt="" width={285} height={446} className="w-full h-auto object-cover" />
        <Image src={"/images/h-6.png"} alt="" width={285} height={446} className="w-full h-auto object-cover" />
        <Image src={"/images/h-7.png"} alt="" width={285} height={446} className="w-full h-auto object-cover" />
        <Image src={"/images/h-7.png"} alt="" width={285} height={446} className="w-full h-auto object-cover" />
        <Image src={"/images/h-6.png"} alt="" width={285} height={446} className="w-full h-auto object-cover" />
        <Image src={"/images/h-7.png"} alt="" width={285} height={446} className="w-full h-auto object-cover" />
        <Image src={"/images/h-6.png"} alt="" width={285} height={446} className="w-full h-auto object-cover" />
        <Image src={"/images/h-6.png"} alt="" width={285} height={446} className="w-full h-auto object-cover" />
        <Image src={"/images/h-6.png"} alt="" width={285} height={446} className="w-full h-auto object-cover" />
        <Image src={"/images/h-7.png"} alt="" width={285} height={446} className="w-full h-auto object-cover" />
        <Image src={"/images/h-7.png"} alt="" width={285} height={446} className="w-full h-auto object-cover" />
        <Image src={"/images/h-7.png"} alt="" width={285} height={446} className="w-full h-auto object-cover" />
        <Image src={"/images/h-6.png"} alt="" width={285} height={446} className="w-full h-auto object-cover" />
        <Image src={"/images/h-7.png"} alt="" width={285} height={446} className="w-full h-auto object-cover" />
        <Image src={"/images/h-6.png"} alt="" width={285} height={446} className="w-full h-auto object-cover" />
      </div>
    </div>
  );
};

export default page;
