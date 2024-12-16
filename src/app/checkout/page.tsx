import React from 'react'
import Image from 'next/image'
import { LiaCircleSolid } from "react-icons/lia";
const CheckOut = () => {
  return (
    <div>
         {/* Header Section */}
                  <div className="relative w-full h-[316px] bg-[url('/images/s-1.png')] bg-cover bg-center flex justify-center items-center flex-col">
                  <span> <Image src="/images/Logo-1.png" alt="Logo-1" width={77} height={77} className="" /></span>
                    <h2 className="font-Poppins font-medium text-4xl md:text-5xl text-[#000000]">Checkout</h2>
                    <div className="flex items-center mt-2">
                      <p className="font-Poppins font-medium text-base leading-6">Home</p>
                      <Image src="/images/sign.png" alt="sign" width={20} height={20} className="mx-2" />
                      <p className="font-Poppins font-light">Checkout</p>
                    </div>
                  </div>
                  {/* Billing Detail Section */}
<div className="min-h-screen flex">
  {/* Left Section */}
  <div className="w-1/2 ml-20">
    <h1 className="font-Poppins font-semibold text-4xl leading-[54px] m-20">Billing details</h1>

    {/* Form */}
    <form className="ml-20 ">
      <div className="flex gap-8 my-6">
        {/* First Name Section */}
        <div className="flex flex-col items-start">
          <h1 className="font-Poppins font-medium text-base leading-6 text-left">First Name</h1>
          <input
            type="text"
            placeholder=""
            className="w-[211px] h-[75px] mt-2 border border-gray-400 rounded-md"
          />
        </div>

        {/* Last Name Section */}
        <div className="flex flex-col items-start">
          <h1 className="font-Poppins font-medium text-base leading-6 text-left">Last Name</h1>
          <input
            type="text"
            placeholder=""
            className="w-[211px] h-[75px] mt-2 border border-gray-400 rounded-md"
          />
        </div>
      </div>
      <h1 className="font-Poppins font-medium text-base leading-6 text-left">Company Name (Optional)</h1>
          <input
            type="text"
            placeholder=""
            className="w-[453px] h-[75px] my-4 border border-gray-400 rounded-md"
          />
      <h1 className="font-Poppins font-medium text-base leading-6 text-left">Country / Region</h1>
          <input
            type="text"
            placeholder="Sri Lanka"
            className="w-[453px] h-[75px] my-4 border border-gray-400 rounded-md"
          />
      <h1 className="font-Poppins font-medium text-base leading-6 text-left">Street address</h1>
          <input
            type="text"
            placeholder=""
            className="w-[453px] h-[75px] my-4 border border-gray-400 rounded-md"
          />
      <h1 className="font-Poppins font-medium text-base leading-6 text-left">Town / City</h1>
          <input
            type="text"
            placeholder=""
            className="w-[453px] h-[75px] my-4 border border-gray-400 rounded-md"
          />
      <h1 className="font-Poppins font-medium text-base leading-6 text-left">Province</h1>
          <input
            type="text"
            placeholder="Western Province"
            className="w-[453px] h-[75px] my-4 border border-gray-400 rounded-md"
          />
              <h1 className="font-Poppins font-medium text-base leading-6 text-left">ZIP code</h1>
          <input
            type="text"
            placeholder=""
            className="w-[453px] h-[75px] my-4 border border-gray-400 rounded-md"
          />
              <h1 className="font-Poppins font-medium text-base leading-6 text-left">Phone</h1>
          <input
            type="text"
            placeholder=""
            className="w-[453px] h-[75px] my-4 border border-gray-400 rounded-md"
          />
              <h1 className="font-Poppins font-medium text-base leading-6 text-left">Email address</h1>
          <input
            type="text"
            placeholder=""
            className="w-[453px] h-[75px] my-4 border border-gray-400 rounded-md"
          />
          <input
            type="text"
            placeholder="Additional information"
            className="w-[453px] h-[75px] my-4 border border-gray-400 rounded-md"
          />
    </form>
  </div>

  {/* Right Section */}
  <section className="w-1/2">
  <div className='flex justify-evenly my-20 '>
    <span className=''>
      <h1 className='font-Poppins font-medium text-2xl leading-9 p-2'>Product</h1>
      <p className='font-Poppins font-normal text-base leading-6 p-2 text-[#9F9F9F]'>Asgaard sofa</p>
      <p className='font-Poppins font-normal text-base leading-6 p-2'>Subtotal</p>
      <p className='font-Poppins font-normal text-base leading-6 p-2'>Total</p>
      </span>
    <span>
      <h1 className='font-Poppins font-medium text-2xl leading-9 p-2'>Subtotal</h1>
      <p className='font-Poppins font-normal text-base leading-6 p-2 text-[#9F9F9F]'>Rs. 250,000.00</p>
      <p className='font-Poppins font-normal text-base leading-6 p-2 text-[#9F9F9F]'>Rs. 250,000.00</p>
      <p className='font-Poppins font-bold text-2xl leading-9 p-2 text-[#B88E2F]'>Rs. 250,000.00</p>
      </span>
  </div>
    {/* Horizontal Line */}
    <div className="flex justify-center ">
    <div className="w-1/2 h-[1px] bg-[#D9D9D9]"></div>
  </div>
  {/* Bank transfer */}
  <div className=' ml-20'>
  <div className='flex gap-1 items-center pt-4 ml-20'>
  <LiaCircleSolid /><span >Direct Bank Transfer</span>
  </div>
  <p className='font-Poppins font-light text-base leading-6 p-2 text-[#9F9F9F] ml-20'>Make your payment directly into our bank account. Please use <br /> your Order ID as the payment reference. Your order will not be <br /> shipped until the funds have cleared in our account.</p>
  <span className='flex items-center gap-1 text-[#9F9F9F] pt-4 ml-20'> <LiaCircleSolid />Direct Bank Transfer</span>
  <span className='flex items-center gap-1 text-[#9F9F9F] pt-4 ml-20'> <LiaCircleSolid />Cash On Delivery</span>
  <p className='ml-20 p-2'>Your personal data will be used to support your experience <br /> throughout this website, to manage access to your account, and <br /> for other purposes described in our privacy policy.</p>
  </div>
  {/* button */}
  <div className='flex justify-center m-8'>
  <button className="w-[318px] h-[64px]  rounded-[15px]  border-2  border-black text-[#000000]">
  Place order
    </button>
    </div>
  </section>
</div>

         {/* Bottom-bar */}
             <div className="w-[1440] h-[270px] py-[100px]  bg-[#FAF3EA] p-6">
               <div className="w-full max-w-[1334px] mx-auto flex flex-wrap gap-4 justify-between items-center">
                 <Image src={"/images/Frame-1.png"} alt="Frame-1" width={200} height={50} />
                 <Image src={"/images/Frame-2.png"} alt="Frame-2" width={200} height={50} />
                 <Image src={"/images/Frame-3.png"} alt="Frame-3" width={200} height={50} />
                 <Image src={"/images/Frame-4.png"} alt="Frame-4" width={200} height={50} />
               </div>
             </div>           

    </div>
  )
}

export default CheckOut
