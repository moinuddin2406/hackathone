import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-screen bg-[url('/images/h-1.png')] bg-cover bg-center">
        {/* Card on the Right Side */}
        <div className="w-full max-w-[90%] sm:max-w-[643px] h-auto sm:h-[443px] p-6 sm:p-10 absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#FFF3E3] shadow-lg rounded-lg">
          <p className="font-Poppins font-semibold text-base sm:text-lg text-[#333333]">
            New Arrival
          </p>
          <h2 className="text-[#B88E2F] font-Poppins font-bold text-3xl sm:text-4xl lg:text-[52px] leading-tight">
            Discover Our New Collection
          </h2>
          <p className="font-Poppins font-medium text-sm sm:text-base text-[#333333] mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="w-[160px] sm:w-[222px] h-[50px] sm:h-[74px] mt-6 font-Poppins font-bold text-sm text-white bg-[#B88E2F] rounded-md hover:bg-[#9e7b26]">
            BUY Now
          </button>
        </div>
      </div>

      {/* Browse Section */}
      <div className="text-center my-10">
        <h2 className="font-Poppins font-bold text-2xl sm:text-4xl text-[#333333]">
          Browse The Range
        </h2>
        <p className="font-Poppins text-sm sm:text-lg text-[#666666] mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-4">
        {['Dining', 'Living', 'Bedroom'].map((text, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={`/images/h-${index + 2}.png`}
              alt={text.toLowerCase()}
              width={300}
              height={200}
              className="rounded-md"
            />
            <p className="font-Poppins font-semibold text-lg sm:text-2xl text-center mt-4">
              {text}
            </p>
          </div>
        ))}
      </div>

      {/* Our Products */}
      <div className="text-center my-10">
        <h2 className="font-Poppins font-bold text-3xl sm:text-4xl text-[#3A3A3A]">
          Our Products
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
  <div className="flex justify-center">
    <Image
      src="/images/h-10.png"
      alt="product-5"
      width={300}
      height={200}
      className="rounded-md"
    />
  </div>
  <div className="flex justify-center">
    <Image
      src="/images/h-11.png"
      alt="product-6"
      width={300}
      height={200}
      className="rounded-md"
    />
  </div>
  <div className="flex justify-center">
    <Image
      src="/images/h-12.png"
      alt="product-7"
      width={300}
      height={200}
      className="rounded-md"
    />
  </div>
  <div className="flex justify-center">
    <Image
      src="/images/h-13.png"
      alt="product-8"
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

      {/* Room Inspiration */}
      <div className="w-full bg-[#FCF8F3] py-12 flex justify-center">
        <div className="flex flex-wrap max-w-[1440px] w-full p-6 rounded-lg shadow-lg gap-8">
          {/* Left Section */}
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="font-Poppins font-bold text-2xl sm:text-4xl text-[#3A3A3A] leading-tight mb-4">
              50+ Beautiful rooms inspiration
            </h1>
            <p className="font-Poppins font-medium text-sm sm:text-base text-[#616161] mb-6">
              Our designer already made a lot of beautiful prototypes of rooms
              that inspire you.
            </p>
            <button className="w-[140px] h-[40px] font-Poppins font-semibold text-sm text-white bg-[#B88E2F] rounded-md hover:bg-[#9e7b26]">
              Explore More
            </button>
          </div>

          {/* Right Images */}
          <div className="flex-1 grid grid-cols-2 gap-4">
            {['r-1', 'r-2'].map((img, index) => (
              <div key={index} className="w-full h-auto">
                <Image
                  src={`/images/${img}.png`}
                  alt={img}
                  width={404}
                  height={580}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Furniture Section */}
      <div className="text-center my-10">
        <p className="font-Poppins font-semibold text-sm sm:text-lg text-[#616161]">
          Share your setup with
        </p>
        <h2 className="font-Poppins font-bold text-2xl sm:text-4xl text-[#3A3A3A]">
          #FuniroFurniture
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
  {/* Row 1 */}
  <div className="row-start-1 col-start-1 self-end">
    <Image
      src="/images/funiro-1.png"
      alt="funiro"
      width={274}
      height={382}
      className="rounded-md w-full"
    />
  </div>
  <div className="row-end-2 col-start-1 md:col-start-2 self-start">
    <Image
      src="/images/funiro-2.png"
      alt="funiro-2"
      width={451}
      height={312}
      className="rounded-md w-full"
    />
  </div>
  <div className="row-start-1 col-start-1 md:col-start-3">
    <Image
      src="/images/funiro-3.png"
      alt="funiro-3"
      width={295}
      height={392}
      className="rounded-md w-full"
    />
  </div>
  <div className="row-start-1 col-start-1 md:col-start-4">
    <Image
      src="/images/funiro-4.png"
      alt="funiro-4"
      width={290}
      height={348}
      className="rounded-md w-full"
    />
  </div>
  <div className="row-start-1 col-start-1 md:col-start-5">
    <Image
      src="/images/funiro-5.png"
      alt="funiro-5"
      width={425}
      height={433}
      className="rounded-md w-full"
    />
  </div>

  {/* Row 2 */}
  <div className="row-start-2 col-start-1 md:col-end-2">
    <Image
      src="/images/funiro-6.png"
      alt="funiro-6"
      width={381}
      height={323}
      className="rounded-md w-full"
    />
  </div>
  <div className="row-start-2 col-start-1 md:col-span-1">
    <Image
      src="/images/funiro-7.png"
      alt="funiro-7"
      width={344}
      height={242}
      className="rounded-md w-full"
    />
  </div>
  <div className="row-start-2 col-start-1 md:col-span-1">
    <Image
      src="/images/funiro-8.png"
      alt="funiro-8"
      width={178}
      height={242}
      className="rounded-md w-full"
    />
  </div>
  <div className="row-start-2 col-start-1 md:col-span-1">
    <Image
      src="/images/funiro-9.png"
      alt="funiro-9"
      width={258}
      height={196}
      className="rounded-md w-full"
    />
  </div>
</div>

 

    </div>
  )
}

export default Hero
