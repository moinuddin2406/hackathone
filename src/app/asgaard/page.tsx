import React from 'react'
import { FiChevronRight } from "react-icons/fi";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";

import Image from 'next/image';

const Asgaard = () => {
  return (
    <div>
      {/* Topbar */}
      <div className="w-full max-w-[1440px] h-[100px] bg-[#F9F1E7] flex items-center px-4 sm:px-8 lg:px-20 gap-2 sm:gap-4">
  <p className="font-Poppins font-normal text-base leading-6 text-[#9F9F9F]">Home</p>
  <span className="w-[20px] h-[20px] flex items-center justify-center">
    <FiChevronRight />
  </span>
  <p className="font-Poppins font-normal text-base leading-6 text-[#9F9F9F]">Shop</p>
  <span className="w-[20px] h-[20px] flex items-center justify-center">
    <FiChevronRight />
  </span>
  <span className="w-[1px] h-[20px] bg-[#9F9F9F]"></span>
  <p className="font-Poppins font-normal text-base leading-6 text-[#000000]">Asgaard sofa</p>
</div>
{/* Asgaard Sofa section */}
<div className="flex w-full">
  {/* LHS - Images */}
  <section className="flex w-full sm:w-1/2 gap-4 sm:gap-8">
    {/* Thumbnail Images */}
    <div className="w-[76px] h-[416px] flex flex-col pt-10 pl-10 gap-8">
      <Image src="/images/sofa-1.png" alt="sofa-1" width={76} height={80} />
      <Image src="/images/sofa-2.png" alt="sofa-2" width={76} height={80} />
      <Image src="/images/sofa-3.png" alt="sofa-3" width={76} height={80} />
      <Image src="/images/sofa-4.png" alt="sofa-4" width={76} height={80} />
    </div>
    {/* Main Image */}
    <div className="pt-10">
      <Image src="/images/sofa-5.png" alt="sofa-5" width={481} height={500} />
    </div>
  </section>

  {/* RHS - Text Content */}
  <section className="w-1/2 flex flex-col justify-start pt-10 pl-10">
  <h1 className="font-Poppins font-normal text-2xl sm:text-[36px] lg:text-[42px] leading-[36px] sm:leading-[54px]">Asgaard sofa
    </h1>
    <p className="text-[#9F9F9F] font-medium text-2xl leading-9">Rs. 250,000.00</p>
    <div className="flex items-center gap-2 mt-4">
      <Image src="/images/stars.png" alt="stars" width={124} height={20} />
      <span className="w-[1px] h-[20px] bg-[#9F9F9F]"></span>
      <p className="font-Poppins font-normal text-[13px] leading-[19.5px] text-[#9F9F9F]">
        5 Customer Review
      </p>
    </div>
    <p className="font-Poppins font-normal text-[13px] leading-[19.5px] text-[#000000] mt-4">
      Setting the bar as one of the loudest speakers in its class, the
      <br />
      Kilburn is a compact, stout-hearted hero with a well-balanced
      <br />
      audio which boasts a clear midrange and extended highs for
      <br />
      a sound.
    </p>
    <span className='font-Poppins font-normal text-sm leading-[21px] text-[#9F9F9F] py-4'>Size</span>
    <div className=' flex gap-3'>
      <button className='w-[30px] h-[30px] roundded-[5px] bg-[#B88E2F] text-[#FFFFFF]'>L</button>
      <button className='w-[30px] h-[30px] roundded-[5px]  text-[#000000] bg-[#F9F1E7]'>XL</button>
      <button className='w-[30px] h-[30px] roundded-[5px]  text-[#000000] bg-[#F9F1E7]'>XS</button>
    </div>
    <span className='font-Poppins font-normal text-sm leading-[21px] text-[#9F9F9F] py-4'>Color</span>
    {/* color circle */}
    <div className='flex gap-3'>
    <Image src="/images/cir-1.png" alt="circle" width={30} height={30} />
    <Image src="/images/cir-2.png" alt="circle" width={30} height={30} />
    <Image src="/images/cir-3.png" alt="circle" width={30} height={30} />
    </div>
    {/* button */}
    <div className='flex gap-3 py-6'>
    <button className='w-[123px] h-[64px] rounded-[15px] bg-[#FFFFFF] border-2  text-[#000000]'>-  1  +</button>
    <button className='w-[215px] h-[64px] rounded-[10px] bg-[#FFFFFF] border-2 border-black text-[#000000]'>Add To Cart</button>
    <button className='w-[215px] h-[64px] rounded-[10px] bg-[#FFFFFF] border-2 border-black  text-[#000000]'>Compare</button>
    </div>

{/* Line Below Buttons */}
    <div className="w-full border-t-2 border-[#D9D9D9]"></div>
    {/* text behind line */}
    <div className="mt-6 space-y-2 mb-10">
  <div className="flex items-center text-[#9F9F9F] pl-4 font-Poppins font-normal text-base leading-6">
    <span className="w-[100px]">SKU</span>
    <span className="mr-2">:</span>
    <span className="text-[#9F9F9F]">SS001</span>
  </div>
  <div className="flex items-center text-[#9F9F9F] pl-4 font-Poppins font-normal text-base leading-6">
    <span className="w-[100px]">Category</span>
    <span className="mr-2">:</span>
    <span className="text-[#9F9F9F]">Sofas</span>
  </div>
  <div className="flex items-center text-[#9F9F9F] pl-4 font-Poppins font-normal text-base leading-6">
    <span className="w-[100px]">Tags</span>
    <span className="mr-2">:</span>
    <span className="text-[#9F9F9F]">Sofa, Chair, Home, Shop</span>
  </div>
  <div className="flex items-center text-[#9F9F9F] pl-4 font-Poppins font-normal text-base leading-6 ">
    <span className="w-[100px]">Share</span>
    <span className="mr-2">:</span>
    <span className="text-[#000000] bg-white ">
      <div className='flex justify-center items-center  gap-4 '> <RiFacebookCircleFill /> <FaLinkedin /> <AiFillTwitterCircle /></div>
    </span>
  </div>
</div>
  </section>
 </div>

 {/* Description section */}
 <section className='border '>
    <div className='flex justify-center items-center gap-8 m-10'>
      <h1 className='font-Poppins font-medium text-2xl text-[#000000]'>Description</h1>
      <h1 className='font-Poppins font-normal text-2xl text-[#9F9F9F]'>Additional Information</h1>
      <h1 className='font-Poppins font-normal text-2xl text-[#9F9F9F]'>Reviews [5]</h1>
    </div>
    <div className= 'text-[#9F9F9F] font-Poppins font-normal text-base flex flex-col justify-center text-center '>
    <p className=''>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable <br /> look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
    <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the <br />loudest  speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear <br />midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine <br />tune  the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
    </div>
    {/* SOFA images */}
    <div className='flex justify-center gap-5 py-10'>
    <Image src="/images/sofas.png" alt="sofas" width={605} height={348} />
    <Image src="/images/sofas.png" alt="sofas" width={605} height={348} />
    </div>
  </section>
  {/* Related product */}
  <section>
    <div className="text-center my-10">
            <h2 className="font-Poppins font-bold text-3xl sm:text-4xl text-[#3A3A3A]">
            Related Products
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 px-4">
      <div className="flex justify-center">
        <Image
          src="/images/h-6.png"
          alt="product-1"
          width={300}
          height={200}
          className="rounded-md"
        />
      </div>
      <div className="flex justify-center">
        <Image
          src="/images/h-7.png"
          alt="product-2"
          width={300}
          height={200}
          className="rounded-md"
        />
      </div>
      <div className="flex justify-center">
        <Image
          src="/images/h-8.png"
          alt="product-3"
          width={300}
          height={200}
          className="rounded-md"
        />
      </div>
      <div className="flex justify-center">
        <Image
          src="/images/h-9.png"
          alt="product-4"
          width={300}
          height={200}
          className="rounded-md"
        />
      </div>
      </div>
      <div className="text-center my-6">
        <button className="w-[180px] sm:w-[245px] h-[40px] sm:h-[48px] font-Poppins font-semibold text-sm sm:text-base text-[#B88E2F] border border-[#B88E2F] rounded-md hover:bg-[#B88E2F] hover:text-white">
          Show More
        </button>
      </div>
  </section>
    </div>
  )
}

export default Asgaard
