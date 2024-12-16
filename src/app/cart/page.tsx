import React from 'react'
import Image from 'next/image'

const Cart = () => {
  return (
    <div>
       {/* Header Section */}
            <div className="relative w-full h-[316px] bg-[url('/images/s-1.png')] bg-cover bg-center flex justify-center items-center flex-col">
            <span> <Image src="/images/Logo-1.png" alt="Logo-1" width={77} height={77} className="" /></span>
              <h2 className="font-Poppins font-medium text-4xl md:text-5xl text-[#000000]">Cart</h2>
              <div className="flex items-center mt-2">
                <p className="font-Poppins font-medium text-base leading-6">Home</p>
                <Image src="/images/sign.png" alt="sign" width={20} height={20} className="mx-2" />
                <p className="font-Poppins font-light">Cart</p>
              </div>
            </div>
            {/* Cart total section */}
            <section className="m-4 sm:m-8 lg:m-16 flex flex-col lg:flex-row gap-8">
  {/* Cart Items Section */}
  <div className="flex-grow">
    {/* Cart Header */}
    <div className="w-full lg:w-[817px] h-[55px] bg-[#F9F1E7] py-4">
      <ul className="flex justify-around items-center font-Poppins font-medium text-base leading-6 text-[#000000]">
        <li>Product</li>
        <li>Price</li>
        <li>Quantity</li>
        <li>Subtotal</li>
      </ul>
    </div>

    {/* Cart Item */}
    <div className="flex flex-row gap-24 items-center m-4">
      <span>
        <Image src="/images/sofa-6.png" alt="sofa" width={105} height={105} className='bg-[#F9F1E7]'/>
      </span>
      <p className="font-Poppins font-normal text-base leading-6 text-[#9F9F9F]">
        Asgaard sofa
      </p>
      <button className="w-[32px] h-[32px] border border-solid">1</button>
      <p className="font-Poppins font-normal text-base leading-6 text-[#000000]">
        Rs. 250,000.00
      </p>
      <span>
        <Image src="/images/basket.png" alt="basket" width={21} height={21.88} />
      </span>
    </div>
  </div>

  {/* Cart Totals Section */}
  <div className="w-full lg:w-[393px] h-auto bg-[#F9F1E7] p-6 pb-6 text-center">
    <h1 className="font-Poppins font-semibold text-[24px] sm:text-[32px] text-[#000000] mb-10">
      Cart Totals
    </h1>
    <p className="font-Poppins font-medium text-base leading-6 text-[#000000] mb-4">
      Subtotal
      <span className="font-Poppins font-normal text-base leading-6 text-[#9F9F9F] px-6">
        Rs. 250,000.00
      </span>
    </p>
    <p className="font-Poppins font-medium text-base leading-6 text-[#000000]">
      Total
      <span className="font-Poppins font-medium text-xl leading-[30px] text-[#B88E2F] px-6">
        Rs. 250,000.00
      </span>
    </p>
    {/* button */}
    <button className="w-[222px] h-[58.95px]  rounded-[15px] bg-[#F9F1E7] border-2 m-10 border-black text-[#000000]">
    Check Out
    </button>
  </div>
</section>
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

export default Cart
